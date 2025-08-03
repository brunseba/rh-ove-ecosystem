# Use Case: Hybrid Application Deployment (VMs, Containers, and PaaS)

## Business Context

Organizations increasingly adopt hybrid application models involving VMs, containers, and Platform-as-a-Service (PaaS) solutions to streamline operations and leverage the cloud. This use case demonstrates how to integrate these diverse technologies within the RH OVE multi-cluster ecosystem, maximizing flexibility and efficiency.

## Technical Requirements

### Infrastructure Requirements
- OpenShift 4.12+ with OpenShift Virtualization enabled
- KubeVirt for VM support
- Cilium CNI with service mesh capabilities
- Persistent storage solution (e.g., OpenShift Data Foundation)
- Multus for multi-network support

### Resource Requirements
- **CPU**: 2+ cores per microservice or VM
- **Memory**: 4GB+ RAM per microservice or VM
- **Storage**: 20GB+ per microservice, scalable as needed
- **Network**: High throughput, low latency network configuration

## Architecture Overview

```mermaid
graph TD
    subgraph "OpenShift Cluster"
        VM["Virtual Machines"]
        POD["Containers"]
        PAS["PaaS Services"]
    end

    subgraph "Service Mesh"
        CILIUM_GATEWAY["Cilium Gateway"]
        CILIUM_PROXY["Cilium L7 Proxy"]
    end

    subgraph "Persistent Storage"
        PVS["PersistentVolume"]
        PVCs["PersistentVolumeClaim"]
        ODF["OpenShift Data Foundation"]
    end

    VM -->|run| POD
    POD --- PAS
    POD -- L7 Policy --|Monitor| CILIUM_PROXY
    CILIUM_GATEWAY --|Ingress| POD
    VM -->|Storage| ODF
    POD -->|Storage| PVCs
    PVCs --> PVS

    style ODF fill:#f9f,stroke:#333
    style CILIUM_GATEWAY fill:#ff9,stroke:#333
```

## Implementation Steps

### Step 1: VM Integration

#### Provision Virtual Machines
```yaml
apiVersion: kubevirt.io/v1
kind: VirtualMachine
metadata:
  name: app-vm
  namespace: hybrid-app
spec:
  running: true
  template:
    spec:
      domain:
        devices:
          disks:
          - disk:
              bus: virtio
            name: rootdisk
      networks:
      - networkName: default
        pod: {}
      volumes:
      - dataVolume:
          name: app-vm-dv
        name: rootdisk
---
apiVersion: cdi.kubevirt.io/v1beta1
kind: DataVolume
metadata:
  name: app-vm-dv
  namespace: hybrid-app
spec:
  source:
    http:
      url: "https://vm-images.example.com/app-vm.img"
  pvc:
    accessModes:
    - ReadWriteOnce
    resources:
      requests:
        storage: 50Gi
```

### Step 2: Container Integration

#### Deploy Containerized Services
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-container
  namespace: hybrid-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: app-container
  template:
    metadata:
      labels:
        app: app-container
    spec:
      containers:
      - name: app
        image: quay.io/example/app-image:latest
        ports:
        - containerPort: 8080
      volumes:
      - name: app-storage
        persistentVolumeClaim:
          claimName: app-pvc
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: app-pvc
  namespace: hybrid-app
spec:
  accessModes:
  - ReadWriteMany
  resources:
    requests:
      storage: 100Gi
```

### Step 3: Service Mesh Enablement

#### Configure Cilium Gateway API and L7 Policies
```yaml
apiVersion: gateway.networking.k8s.io/v1beta1
kind: Gateway
metadata:
  name: app-gateway
  namespace: hybrid-app
spec:
  gatewayClassName: cilium
  listeners:
  - name: http
    port: 80
    protocol: HTTP
    hostname: "app.example.com"
---
apiVersion: gateway.networking.k8s.io/v1beta1
kind: HTTPRoute
metadata:
  name: app-routing
  namespace: hybrid-app
spec:
  parentRefs:
  - name: app-gateway
  hostnames:
  - "app.example.com"
  rules:
  - matches:
    - path:
        type: PathPrefix
        value: "/"
    backendRefs:
    - name: app-container
      port: 8080
---
apiVersion: "cilium.io/v2"
kind: CiliumNetworkPolicy
metadata:
  name: app-l7-policy
  namespace: hybrid-app
spec:
  endpointSelector:
    matchLabels:
      app: app-container
  ingress:
  - fromEndpoints:
    - matchLabels:
        "k8s:io.cilium.k8s.policy.cluster": "default"
    toPorts:
    - ports:
      - port: "8080"
        protocol: TCP
      rules:
        http:
        - method: "GET"
        - method: "POST"
        - method: "PUT"
        - method: "DELETE"

### Step 4: PaaS Integration

#### Deploy Middleware and Database Services
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: middleware
  namespace: hybrid-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: middleware
  template:
    metadata:
      labels:
        app: middleware
    spec:
      containers:
      - name: middleware
        image: quay.io/example/middleware-image:latest
        env:
        - name: DB_HOST
          value: db.example.com
        - name: DB_USER
          valueFrom:
            secretKeyRef:
              name: db-secrets
              key: username
---
apiVersion: v1
kind: Service
metadata:
  name: middleware-service
  namespace: hybrid-app
spec:
  selector:
    app: middleware
  ports:
  - protocol: TCP
    port: 8080
    targetPort: 8080
  type: ClusterIP
```

### Step 5: Continuous Integration/Continuous Deployment (CI/CD)

#### Integrate with ArgoCD
```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: hybrid-app
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://git.example.com/hybrid-app-config
    targetRevision: HEAD
    path: hybrid
  destination:
    server: https://kubernetes.default.svc
    namespace: hybrid-app
  syncPolicy:
    automated:
      prune: false
      selfHeal: true
```

## Troubleshooting Guide

### Common Issues and Solutions

#### VM Performance Degradation
- Check resource allocation and adjust CPU/RAM as needed.
- Ensure the underlying storage is not a bottleneck.

#### Service Mesh Connectivity Issues
- Validate Cilium Gateway API configurations and ensure L7 policies are applied.
- Check Cilium network policies and ensure proper endpoint selection.

#### Storage Access Issues
- Verify PVC binding and ensure correct storage class is applied.
- Check application logs for connectivity and permission errors.

## Best Practices

- **Resource Management**: Dynamic scaling policies for both VMs and containers.
- **Network Policies**: Zero-trust approach with Cilium network policies for clear segmentation.
- **Security Hardening**: Apply security best practices for VM and container images with Cilium L7 policies.
- **Monitoring and Logging**: Unified logging solutions using Fluentd or Logstash with direct integration to Prometheus and Cilium Hubble for network observability.

## Integration with RH OVE Ecosystem

### Monitoring Integration
```yaml
# Monitoring and alerting configuration
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: hybrid-app-monitor
  namespace: hybrid-app
spec:
  selector:
    matchLabels:
      app: app-container
  endpoints:
  - port: metrics
    interval: 30s
    path: /metrics
```

This comprehensive guide provides everything needed to deploy and manage hybrid applications within the RH OVE multi-cluster ecosystem while adhering to enterprise-grade security, monitoring, and operational standards.
