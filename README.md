# RH OVE Multi-Cluster Ecosystem

[![Deploy MkDocs to GitHub Pages](https://github.com/brunseba/rh-ove-ecosystem/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/brunseba/rh-ove-ecosystem/actions/workflows/deploy-docs.yml)
[![Documentation](https://img.shields.io/badge/docs-mkdocs-blue.svg)](https://brunseba.github.io/rh-ove-ecosystem/)

> **Red Hat OpenShift Virtualization Engine Multi-Cluster Architecture and Management Documentation**

This repository contains comprehensive documentation for designing, implementing, and managing a multi-cluster Red Hat OpenShift Virtualization Engine (RH OVE) ecosystem.

## 📖 Documentation

The complete documentation is available at: **https://brunseba.github.io/rh-ove-ecosystem/**

## Documentation Structure

The documentation is organized around a hub-and-spoke multi-cluster architecture:

- **1 Management Cluster**: Centralized control plane for governance, policy, monitoring, and GitOps
- **N Application Clusters**: Dedicated workload execution environments for virtual machines and containers

## Quick Start

### Prerequisites

- Python 3.8+
- pip package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/brunseba/rh-ove-ecosystem.git
   cd rh-ove-ecosystem
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Serve locally**
   ```bash
   mkdocs serve
   ```

4. **Access the documentation**
   Open http://localhost:8000 in your browser

### Building for Production

```bash
mkdocs build
```

## 🏗️ Architecture Overview

The RH OVE ecosystem is designed around a multi-cluster architecture pattern supporting:

- **VM Lifecycle Management**: Import, templates, scaling, backup, and recovery
- **Hybrid Applications**: Seamless integration between VMs and containers
- **Multi-Environment Deployments**: Development, LAT, and production environments
- **Enterprise Integration**: Legacy modernization, disaster recovery, and CMDB/SIEM integration
- **Advanced Security**: WAF, firewalling, and policy enforcement
- **Comprehensive Observability**: End-to-end monitoring and alerting

## 🎯 Key Features

### 🔄 Multi-Cluster Management
- Red Hat Advanced Cluster Management (RHACM) for centralized governance
- Cross-cluster GitOps with ArgoCD
- Cluster lifecycle and policy management

### 🏷️ Label-Based Management
- Comprehensive Kubernetes labeling strategies
- Application lifecycle management through labels
- Automated operations and resource organization

### 🚀 Use Cases
- **12 Comprehensive Use Cases** covering the entire RH OVE ecosystem
- **Color-coded Dependencies Graph** showing implementation relationships
- **Practical Examples** with real-world configurations

### 📊 Enterprise Ready
- Architecture Decision Records (ADRs)
- Functional and Non-Functional Requirements
- Best practices and operational guidelines

## 📋 Use Cases Overview

| Category | Use Cases | Complexity |
|----------|-----------|------------|
| **VM Lifecycle** | Import & Migration, Templates, Scaling, Backup | Low - High |
| **Application Deployment** | Hybrid Apps, Multi-Environment Setup | Medium - High |
| **Enterprise Integration** | Legacy Modernization, Disaster Recovery | High - Very High |
| **Platform Services** | Database PaaS, Observability, Security | Medium - High |

### 🎨 Dependencies Graph

The documentation includes a comprehensive dependencies graph showing the relationships between use cases, color-coded by category:

- 🔵 **VM Lifecycle** (Light Blue)
- 🟣 **Observability** (Purple)  
- 🟢 **Application Deployment** (Green)
- 🟠 **Security** (Orange)
- 🔴 **Enterprise Integration** (Pink)
- 🟡 **PaaS Services** (Light Green)

## 📚 Documentation Sections

### 🌐 Architecture
- **Global Overview**: Multi-cluster topology and design principles
- **Single Cluster Overview**: Individual cluster architecture
- **Design Principles**: Foundational design concepts
- **Network Architecture**: Cilium CNI, Multus, and networking strategies
- **Storage Architecture**: Storage solutions and configurations

### 🚀 Deployment
- **Prerequisites**: Infrastructure and software requirements
- **Installation Guide**: Step-by-step deployment instructions
- **Configuration**: Post-installation configuration

### ⚙️ Management
- **Admission Control**: Kyverno policies and OpenShift controls
- **GitOps Operations**: ArgoCD-based management workflows
- **Monitoring**: Observability and monitoring strategies
- **Backup & Recovery**: Data protection and disaster recovery

### 🔧 Operations
- **Day-2 Operations**: Ongoing operational procedures
- **Troubleshooting**: Common issues and solutions
- **Performance Tuning**: Optimization strategies

### 📋 Use Cases
- **Overview**: Use cases introduction and summary
- **Summary Table**: Dependencies graph and comprehensive matrix
- **VM Lifecycle**: Import, templates, scaling, backup & recovery
- **Application Deployment**: Hybrid applications and multi-environment setup
- **Enterprise Integration**: Legacy modernization and disaster recovery
- **Platform Services**: Database PaaS, observability, and security

### 📚 References
- **Product URLs**: Links to official documentation and resources
- **Best Practices**: Recommended practices and guidelines
- **Glossary**: Terms and definitions

## Key Features

- **Multi-cluster Architecture**: Separation of management and application concerns
- **Comprehensive Coverage**: From design to operations
- **Interactive Diagrams**: Mermaid-based architecture diagrams
- **Code Examples**: Real-world YAML configurations
- **Search Functionality**: Full-text search across all documentation
- **Mobile Responsive**: Optimized for all devices
- **PDF Export**: Generate PDF versions of documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Documentation Guidelines

- Follow the existing structure and naming conventions
- Use Mermaid diagrams for architecture illustrations
- Include practical examples and YAML configurations
- Test documentation locally before submitting

## Architecture Highlights

- **Management Cluster**: ArgoCD Hub, RHACM, RHACS Central, Observability Stack
- **Application Clusters**: OpenShift Virtualization, Cilium CNI, Multus Multi-Network
- **GitOps Workflow**: Centralized configuration management
- **Security**: Zero-trust networking with policy enforcement
- **Observability**: Comprehensive monitoring and logging

## 🔧 Technologies Used

- **Documentation**: MkDocs with Material theme
- **Diagrams**: Mermaid
- **Deployment**: GitHub Actions + GitHub Pages
- **Version Control**: Git with conventional commits

## 🔗 Related Resources

- [Red Hat OpenShift Virtualization](https://www.redhat.com/en/technologies/cloud-computing/openshift/virtualization)
- [Red Hat Advanced Cluster Management](https://www.redhat.com/en/technologies/management/advanced-cluster-management)
- [ArgoCD](https://argo-cd.readthedocs.io/)
- [KubeVirt](https://kubevirt.io/)

---

**Made with ❤️ for the Red Hat OpenShift Virtualization community**
