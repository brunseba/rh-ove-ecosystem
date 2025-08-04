# Software Bill of Materials (SBOM)

## Overview

This document provides a comprehensive Software Bill of Materials (SBOM) for the RH OVE Multi-Cluster Ecosystem, consolidating all required software components, versions, and dependencies needed for successful deployment and operation.

## Core Platform Components

### Red Hat OpenShift Container Platform

| Component | Version | License | Purpose | Source |
|-----------|---------|---------|---------|--------|
| OpenShift Container Platform | 4.12+ (recommended 4.14+) | Commercial | Kubernetes platform foundation | Red Hat |
| OpenShift CLI (oc) | Matches cluster version | Apache 2.0 | Command-line interface | Red Hat |
| OpenShift Web Console | Integrated with OCP | Commercial | Web-based management interface | Red Hat |

### Virtualization Stack

| Component | Version | License | Purpose | Source |
|-----------|---------|---------|---------|--------|
| OpenShift Virtualization Operator | 4.14+ | Commercial | VM management on OpenShift | Red Hat |
| KubeVirt | Latest (upstream) | Apache 2.0 | Kubernetes VM orchestration | KubeVirt Community |
| virtctl | Matches KubeVirt version | Apache 2.0 | VM command-line tool | KubeVirt Community |
| Containerized Data Importer (CDI) | Latest | Apache 2.0 | VM disk import/management | KubeVirt Community |
| libvirt | 7.0+ | LGPL 2.1+ | Virtualization API | Red Hat Enterprise Linux |
| QEMU/KVM | 6.0+ | GPL v2 | Hypervisor | Red Hat Enterprise Linux |

## Networking Components

### Container Network Interface (CNI)

| Component | Version | License | Purpose | Source |
|-----------|---------|---------|---------|--------|
| Cilium CNI | 1.12+ | Apache 2.0 | Primary network plugin with eBPF | Cilium |
| Cilium Operator | Matches Cilium version | Apache 2.0 | Cilium management operator | Cilium |
| Hubble | Integrated with Cilium | Apache 2.0 | Network observability | Cilium |
| Multus CNI | 3.8+ | Apache 2.0 | Multi-network support | Network Plumbing WG |
| SR-IOV Network Operator | 4.12+ | Apache 2.0 | High-performance networking | Red Hat |
| SR-IOV CNI | Latest | Apache 2.0 | SR-IOV network plugin | Network Plumbing WG |

### Network Tools

| Component | Version | License | Purpose | Source |
|-----------|---------|---------|---------|--------|
| iptables | 1.8+ | GPL v2 | Network filtering | Linux |
| eBPF | Kernel 4.14+ | GPL v2 | Network programming | Linux Kernel |
| OVS (Open vSwitch) | 2.15+ | Apache 2.0 | Virtual switching | Open vSwitch |

## Security and Policy Management

### Security Platforms

| Component | Version | License | Purpose | Source |
|-----------|---------|---------|---------|--------|
| Red Hat Advanced Cluster Security | Latest | Commercial | Security and compliance platform | Red Hat |
| Kyverno | 1.8+ | Apache 2.0 | Policy engine | Kyverno Community |
| Falco | 0.32+ | Apache 2.0 | Runtime security monitoring | CNCF |

### Certificate and Identity Management

| Component | Version | License | Purpose | Source |
|-----------|---------|---------|---------|--------|
| cert-manager | 1.10+ | Apache 2.0 | Certificate lifecycle management | CNCF |
| External Secrets Operator | 0.7+ | Apache 2.0 | Secret management | External Secrets |
| OpenShift OAuth | Integrated | Commercial | Authentication provider | Red Hat |

## GitOps and Continuous Deployment

### GitOps Platform

| Component | Version | License | Purpose | Source |
|-----------|---------|---------|---------|--------|
| Red Hat OpenShift GitOps | Latest | Commercial | GitOps platform based on Argo CD | Red Hat |
| Argo CD | 2.6+ | Apache 2.0 | GitOps continuous deployment | Argo Project |
| Argo Workflows | 3.4+ | Apache 2.0 | Workflow orchestration | Argo Project |
| Argo Rollouts | 1.4+ | Apache 2.0 | Progressive delivery | Argo Project |

### Source Control Integration

| Component | Version | License | Purpose | Source |
|-----------|---------|---------|---------|--------|
| Git | 2.30+ | GPL v2 | Version control system | Git Community |
| GitHub/GitLab Webhooks | API v4+ | Various | Repository integration | GitHub/GitLab |

## Monitoring and Observability

### Metrics and Monitoring

| Component | Version | License | Purpose | Source |
|-----------|---------|---------|---------|--------|
| Dynatrace Operator | Latest | Commercial | Full-stack observability platform | Dynatrace |
| Prometheus | 2.40+ | Apache 2.0 | Metrics collection and storage | CNCF |
| Grafana | 9.0+ | AGPL v3 | Metrics visualization | Grafana Labs |
| AlertManager | 0.25+ | Apache 2.0 | Alert management | Prometheus |
| Node Exporter | 1.5+ | Apache 2.0 | Node metrics collection | Prometheus |
| kube-state-metrics | 2.7+ | Apache 2.0 | Kubernetes metrics | Kubernetes |

### Logging

| Component | Version | License | Purpose | Source |
|-----------|---------|---------|---------|--------|
| OpenShift Logging | 5.6+ | Commercial | Log aggregation platform | Red Hat |
| Elasticsearch | 7.17+ | Elastic License | Log storage and search | Elastic |
| Fluentd | 1.15+ | Apache 2.0 | Log collection and forwarding | CNCF |
| Kibana | 7.17+ | Elastic License | Log visualization | Elastic |

### Distributed Tracing

| Component | Version | License | Purpose | Source |
|-----------|---------|---------|---------|--------|
| Jaeger | 1.40+ | Apache 2.0 | Distributed tracing | CNCF |
| OpenTelemetry Operator | 0.70+ | Apache 2.0 | Telemetry collection | CNCF |

## Storage Solutions

### Container Storage Interface (CSI)

| Component | Version | License | Purpose | Source |
|-----------|---------|---------|---------|--------|
| AWS EBS CSI Driver | 1.15+ | Apache 2.0 | Block storage for AWS | Kubernetes |
| Azure Disk CSI Driver | 1.25+ | Apache 2.0 | Block storage for Azure | Kubernetes |
| GCE Persistent Disk CSI | 1.10+ | Apache 2.0 | Block storage for GCP | Kubernetes |
| Ceph CSI | 3.8+ | Apache 2.0 | Distributed storage | Ceph |
| NetApp Trident | 22.10+ | Apache 2.0 | Enterprise storage | NetApp |
| Dell CSI Driver | 2.8+ | Apache 2.0 | Dell enterprise storage | Dell Technologies |

### Storage Management

| Component | Version | License | Purpose | Source |
|-----------|---------|---------|---------|--------|
| OpenShift Data Foundation | 4.12+ | Commercial | Software-defined storage | Red Hat |
| Local Storage Operator | 4.12+ | Apache 2.0 | Local storage management | Red Hat |

## Backup and Disaster Recovery

### Backup Solutions

| Component | Version | License | Purpose | Source |
|-----------|---------|---------|---------|--------|
| Rubrik | Latest | Commercial | Enterprise backup platform | Rubrik |
| Velero | 1.10+ | Apache 2.0 | Kubernetes backup | VMware |
| OADP (OpenShift API for Data Protection) | 1.1+ | Apache 2.0 | Backup operator | Red Hat |

## Multi-Cluster Management

### Cluster Management

| Component | Version | License | Purpose | Source |
|-----------|---------|---------|---------|--------|
| Red Hat Advanced Cluster Management | Latest | Commercial | Multi-cluster management | Red Hat |
| Karmada | 1.6+ | Apache 2.0 | Multi-cluster orchestration | Karmada Community |
| Skupper | 1.2+ | Apache 2.0 | Application connectivity | Red Hat |

## Development and Tooling

### Command Line Tools

| Component | Version | License | Purpose | Source |
|-----------|---------|---------|---------|--------|
| kubectl | Matches cluster version | Apache 2.0 | Kubernetes CLI | Kubernetes |
| helm | 3.10+ | Apache 2.0 | Package manager | CNCF |
| kustomize | 4.5+ | Apache 2.0 | Configuration management | Kubernetes |
| jq | 1.6+ | MIT | JSON processing | jq |
| yq | 4.30+ | MIT | YAML processing | yq |

### Container Tools

| Component | Version | License | Purpose | Source |
|-----------|---------|---------|---------|--------|
| Podman | 4.3+ | Apache 2.0 | Container management | Red Hat |
| Buildah | 1.28+ | Apache 2.0 | Container image building | Red Hat |
| Skopeo | 1.10+ | Apache 2.0 | Container image operations | Red Hat |

## Operating System Requirements

### Base Operating System

| Component | Version | License | Purpose | Source |
|-----------|---------|---------|---------|--------|
| Red Hat Enterprise Linux CoreOS | 4.12+ | Commercial | Container-optimized OS | Red Hat |
| Red Hat Enterprise Linux | 8.6+ or 9.0+ | Commercial | General-purpose OS | Red Hat |

### System Dependencies

| Component | Version | License | Purpose | Source |
|-----------|---------|---------|---------|--------|
| systemd | 239+ | LGPL 2.1+ | System and service manager | systemd |
| Docker/Podman | 4.0+ | Apache 2.0 | Container runtime | Various |
| CRI-O | 1.25+ | Apache 2.0 | Container runtime | CRI-O |
| runc | 1.1+ | Apache 2.0 | Container runtime | OCI |

## Integration and ITSM

### ITSM Integration

| Component | Version | License | Purpose | Source |
|-----------|---------|---------|---------|--------|
| ServiceNow | Latest | Commercial | ITSM platform | ServiceNow |
| ServiceNow MID Server | Latest | Commercial | Integration middleware | ServiceNow |

### Event Management

| Component | Version | License | Purpose | Source |
|-----------|---------|---------|---------|--------|
| Splunk | 8.2+ | Commercial | SIEM platform | Splunk |
| Elastic Security | 7.17+ | Elastic License | Security analytics | Elastic |

## Hardware Requirements

### Minimum Hardware Specifications

| Component | Requirement | Purpose |
|-----------|-------------|---------|
| CPU (Master Nodes) | 4+ cores per node | Control plane operations |
| Memory (Master Nodes) | 16GB+ per node | Control plane operations |
| Storage (Master Nodes) | 120GB+ per node | etcd and system data |
| CPU (Worker Nodes) | 8+ cores per node | Workload execution |
| Memory (Worker Nodes) | 32GB+ per node | VM and container workloads |
| Storage (Worker Nodes) | 500GB+ per node | Application data |
| Network | 10Gbps+ | High-performance networking |
| Virtualization | Intel VT-x/AMD-V | Hardware virtualization support |

## Network Requirements

### Port Requirements

| Port Range | Protocol | Purpose |
|------------|----------|---------|
| 6443 | TCP | Kubernetes API server |
| 22623 | TCP | Machine config server |
| 80/443 | TCP | HTTP/HTTPS ingress |
| 9000-9999 | TCP | Host level services |
| 10250-10259 | TCP | Kubernetes node ports |
| 30000-32767 | TCP | NodePort services |

## License Summary

### Commercial Licenses Required

- Red Hat OpenShift Container Platform
- OpenShift Virtualization
- Red Hat Advanced Cluster Security
- Red Hat Advanced Cluster Management
- Red Hat Enterprise Linux / CoreOS
- Dynatrace (monitoring platform)
- Rubrik (backup platform)
- ServiceNow (ITSM platform)

### Open Source Components

- KubeVirt and related components (Apache 2.0)
- Cilium networking (Apache 2.0)
- Argo CD and GitOps tools (Apache 2.0)
- Kyverno policy engine (Apache 2.0)
- Prometheus monitoring stack (Apache 2.0)
- Various Kubernetes ecosystem tools (Apache 2.0)

## Version Compatibility Matrix

### Supported OpenShift Versions

| OpenShift Version | KubeVirt | Cilium | RHACM | RHACS |
|-------------------|----------|---------|-------|-------|
| 4.12.x | 4.12+ | 1.12+ | 2.7+ | 4.2+ |
| 4.13.x | 4.13+ | 1.13+ | 2.8+ | 4.3+ |
| 4.14.x | 4.14+ | 1.14+ | 2.9+ | 4.4+ |
| 4.15.x | 4.15+ | 1.15+ | 2.10+ | 4.5+ |

## Security Considerations

### CVE Monitoring

All components should be regularly updated to address security vulnerabilities. Subscribe to security advisories from:

- Red Hat Security Advisories
- CNCF Security SIG
- Individual project security lists
- National Vulnerability Database (NVD)

### Supply Chain Security

- Verify image signatures for all container images
- Use Red Hat certified operators when available
- Implement image scanning in CI/CD pipelines
- Maintain software inventory and track dependencies

## Maintenance and Updates

### Update Frequency

- **Security patches**: As soon as available
- **Minor versions**: Monthly evaluation
- **Major versions**: Quarterly evaluation
- **OpenShift**: Follow Red Hat support lifecycle

### End-of-Life Planning

Track EOL dates for all components and plan migrations:

- OpenShift: 18-month support lifecycle per version
- Kubernetes: 12-month support window
- Third-party components: Vendor-specific lifecycles

---

**Document Version**: 1.0  
**Last Updated**: 2025-08-04  
**Next Review**: 2025-11-04

This SBOM should be reviewed and updated quarterly or whenever significant changes are made to the RH OVE ecosystem architecture.
