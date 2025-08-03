# RH OVE Multi-Cluster Ecosystem Documentation

This repository contains comprehensive documentation for designing, deploying, and managing Red Hat OpenShift Virtualization Engine (RH OVE) in a multi-cluster architecture.

## Documentation Structure

The documentation is organized around a hub-and-spoke multi-cluster architecture:

- **1 Management Cluster**: Centralized control plane for governance, policy, monitoring, and GitOps
- **N Application Clusters**: Dedicated workload execution environments for virtual machines and containers

## Quick Start

### Prerequisites

- Python 3.8+
- pip package manager

### Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd rh-ove-ecosystem
   ```

2. Install MkDocs and dependencies:
   ```bash
   pip install mkdocs-material
   pip install mkdocs-mermaid2-plugin
   pip install mkdocs-git-revision-date-localized-plugin
   pip install mkdocs-pdf-export-plugin
   ```

3. Serve the documentation locally:
   ```bash
   mkdocs serve
   ```

4. Access the documentation at `http://localhost:8000`

### Building for Production

```bash
mkdocs build
```

## Documentation Sections

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

## Contributing

1. Make changes to the Markdown files in the `docs/` directory
2. Test locally with `mkdocs serve`
3. Submit pull requests for review

## Architecture Highlights

- **Management Cluster**: ArgoCD Hub, RHACM, RHACS Central, Observability Stack
- **Application Clusters**: OpenShift Virtualization, Cilium CNI, Multus Multi-Network
- **GitOps Workflow**: Centralized configuration management
- **Security**: Zero-trust networking with policy enforcement
- **Observability**: Comprehensive monitoring and logging

## Support

For questions and support, refer to the documentation sections or consult the product URLs in the References section.
