# Day-2 Operations

## Overview

This document covers day-2 operational activities essential for maintaining the RH OVE ecosystem. It includes guidelines for ongoing maintenance, upgrades, performance tuning, and operational tasks that ensure smooth running of the environment.

## Maintenance Tasks

### Regular Cluster Health Checks

- **Node Status Monitoring**: Regularly check node health and availability.
  ```bash
  oc get nodes -o wide
  ```

- **Resource Usage Monitoring**: Monitor CPU, memory, and storage utilization.
  ```bash
  oc adm top nodes
  oc adm top pods --all-namespaces
  ```

### Backup Management

- **Review Backup Logs**: Ensure completion and verify logs for any anomalies.
  ```bash
  oc logs -n rubrik rubrik-agent-
  ```

- **Data Integrity Checks**: Periodically verify backup integrity and accessibility.

## Upgrades

### OpenShift Cluster Upgrades

- **Plan Your Upgrade**: Evaluate impact, and schedule during maintenance windows.
  - Review [OpenShift Upgrade Guide](https://docs.openshift.com/upgrade/)

- **In-place Upgrades**: Use OpenShift's upgrade capabilities to update cluster components.
  ```bash
  oc adm upgrade
  ```

### Component Upgrades

- **Operator Lifecycle Management (OLM)**: Upgrade operators using OLM.
  ```oc
  oc get clusterserviceversions -n openshift-operators
  ```

- **KubeVirt Upgrades**: Follow the KubeVirt upgrade process for virtualization components.
  - Refer to [KubeVirt Upgrade Guide](https://kubevirt.io/upgrade-guide/)

## Performance Tuning

### Resource Balancing

- **Node Selector and Affinity Rules**: Ensure workloads are distributed evenly.
  ```yaml
  apiVersion: v1
  kind: Pod
  metadata:
    name: example-pod
  spec:
    affinity:
      nodeAffinity:
        requiredDuringSchedulingIgnoredDuringExecution:
          nodeSelectorTerms:
          - matchExpressions:
            - key: disktype
              operator: In
              values:
              - ssd
  ```

- **Vertical and Horizontal Scaling**: Utilize HPA and VPA for scaling applications.

### Network Optimization

- **Cilium Policy Management**: Optimize and tune Cilium network policies for performance.
  ```yaml
  apiVersion: cilium.io/v2
  kind: CiliumNetworkPolicy
  metadata:
    name: optimized-policy
  spec:
    endpointSelector:
      matchLabels:
        app: myapp
    ingress:
    - fromEndpoints:
      - matchLabels:
          app: trusted
  ```

## Security and Compliance

### Regular Security Audits

- **Policy Compliance**: Ensure adherence to Kyverno policies and security standards.
  ```bash
  kubectl get cpol -o yaml
  ```

- **Vulnerability Scans**: Run regular vulnerability assessments on container images and hosts.

## Documentation and Reporting

### Keeping Documentation Up-to-Date

- **Change Logs**: Maintain a changelog for all configurations and updates.
  
- **Operational Runbooks**: Create and update runbooks for standard operations.

### Performance and Utilization Reports

- **Utilize Metrics Dashboards**: Use Grafana and Prometheus to generate reports.
  
## Conclusion

Following these day-2 operation guidelines helps maintain a stable, secure, and efficient RH OVE environment. Regular monitoring, updates, optimizations, and documentation ensure long-term success and reliability of the platform.
