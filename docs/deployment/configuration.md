# Deployment Configuration

## Overview

This document provides configuration guidelines for the RH OVE deployment, focusing on customization and parameters essential for adapting the solution to your specific environment.

## OpenShift Configuration

### Cluster Configuration

Customize your OpenShift cluster with the necessary configurations to optimize performance and security:

```yaml
apiVersion: config.openshift.io/v1
kind: ClusterVersion
metadata:
  name: version
spec:
  channel: stable
  upstream: https://api.openshift.com/api/upgrades_info/v1/graph

# Customization to networking
apiVersion: operator.openshift.io/v1
kind: Network
metadata:
  name: cluster
spec:
  clusterNetwork:
  - cidr: 10.128.0.0/14
    hostPrefix: 23
  serviceNetwork:
  - 172.30.0.0/16
```

### Node Configuration

Optimize your nodes for workload management:

```yaml
apiVersion: machineconfiguration.openshift.io/v1
kind: MachineConfigPool
metadata:
  name: worker
spec:
  machineConfigSelector:
    matchExpressions:
    - key: machineconfiguration.openshift.io/role
      operator: In
      values:
      - worker
  nodeSelector:
    matchLabels:
      node-role.kubernetes.io/worker: ""

# Taints to manage workloads effectively.
apiVersion: v1
kind: Node
metadata:
  name: node-1
spec:
  taints:
  - key: app
    value: high-performing
    effect: NoSchedule
```

## Network Configuration

Customize your Cilium CNI settings:

```yaml
apiVersion: cilium.io/v2
kind: CiliumNetworkConfig
metadata:
  name: cilium-config
spec:
  endpointRoutes: true
  devices:
  - eth0
  autoDirectNodeRoutes: true

# Policy for specific namespace isolation requirements
apiVersion: cilium.io/v2
kind: CiliumNetworkPolicy
metadata:
  name: namespace-isolation-policy
  namespace: critical-apps
spec:
  endpointSelector:
    matchLabels:
      app: critical-environment
  ingress:
    fromEndpoints:
    - matchLabels:
        access: dedicated
```

## Storage Configuration

Manage your storage setups efficiently:

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: performance-storage
provisioner: ebs.csi.aws.com
parameters:
  type: io1
  iopsPerGB: "50"
  encrypted: "true"
reclaimPolicy: Retain
volumeBindingMode: WaitForFirstConsumer

# PVC for critical workloads needing high IOPS
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: critical-workload-pvc
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 100Gi
  storageClassName: performance-storage
```

## Security Configuration

Strengthen the security of your deployment:

```yaml
# Role-based access control
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: secure-namespace
  name: critical-role
rules:
- apiGroups:
  - ""
  resources:
  - pods
  - services
  verbs:
  - get
  - list
  - watch

# Pod Security Policies
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: restricted-psp
spec:
  privileged: false
  allowPrivilegeEscalation: false
  requiredDropCapabilities:
  - ALL
  volumes:
  - 'configMap'
  - 'emptyDir'
  - 'persistentVolumeClaim'
```

## Conclusion

By properly configuring these parameters, you can ensure that your RH OVE deployment is optimized for performance, security, and operational effectiveness. Adjust configurations based on specific organizational policies and workload demands.
