# Downloads and Exports

This page provides access to downloadable files and exports generated from the RH OVE Multi-Cluster Ecosystem documentation.

## Documentation Exports

### Complete Documentation
- **[RH OVE Complete Documentation (DOCX)](../export/RH_OVE_Complete_Documentation.docx)** - Comprehensive documentation in Microsoft Word format including all sections, diagrams, and technical specifications
- **[RH OVE Complete Documentation with Rendered Diagrams (DOCX)](../export/RH_OVE_Complete_Documentation_Filtered.docx)** - Enhanced version with natively rendered Mermaid diagrams using pandoc-mermaid-filter

### Project Management Files
- **[Weekly Workload Breakdown (XLSX)](../export/RH_OVE_Weekly_Workload_Breakdown.xlsx)** - Detailed project timeline and resource allocation spreadsheet
- **[Project Charges (CSV)](../export/project-charges.csv)** - Budget breakdown and cost analysis in CSV format

## Architecture Diagrams (Draw.io Format)

### Core Architecture
- **[Global Overview](../export/global-overview_advanced.drawio)** - Multi-cluster architecture overview
- **[Single Cluster Overview](../export/overview_advanced.drawio)** - Individual cluster architecture
- **[Design Principles](../export/design-principles_advanced.drawio)** - Architecture design principles and patterns
- **[Network Architecture](../export/network_advanced.drawio)** - Network topology and connectivity
- **[Storage Architecture](../export/storage_advanced.drawio)** - Storage solutions and data management
- **[IAM Strategy](../export/iam_advanced.drawio)** - Identity and access management

### ADR Diagrams
- **[ADR Table](../export/adr-table_advanced.drawio)** - Architecture decision records overview
- **[ADR-008 IAM Strategy](../export/adr-008-iam-strategy_advanced.drawio)** - IAM implementation decisions

### Deployment & Management
- **[Prerequisites](../export/prerequisites_advanced.drawio)** - Deployment prerequisites flowchart
- **[Installation Guide](../export/installation_advanced.drawio)** - Installation process workflow
- **[Admission Control](../export/admission-control_advanced.drawio)** - Security and admission control
- **[GitOps Operations](../export/gitops_advanced.drawio)** - GitOps workflow and processes
- **[Monitoring](../export/monitoring_advanced.drawio)** - Monitoring and observability architecture

### Operations
- **[Performance Tuning](../export/performance_advanced.drawio)** - Performance optimization strategies
- **[Troubleshooting](../export/troubleshooting_advanced.drawio)** - Troubleshooting workflows and decision trees

### Use Cases
- **[Use Cases Table](../export/use-cases-table_advanced.drawio)** - Use cases overview and mapping
- **[VM Import & Migration](../export/vm-importation_advanced.drawio)** - Virtual machine migration processes
- **[VM Template Management](../export/vm-template-management_advanced.drawio)** - VM template lifecycle
- **[VM Scaling & Performance](../export/vm-scaling-performance_advanced.drawio)** - VM performance optimization
- **[VM Backup & Recovery](../export/vm-backup-recovery_advanced.drawio)** - Backup and disaster recovery
- **[Hybrid Applications](../export/hybrid-applications_advanced.drawio)** - Hybrid application deployment
- **[Multi-Environment Setup](../export/setup-multi-env-application_advanced.drawio)** - Multi-environment application deployment
- **[Database Services](../export/database-services-paas_advanced.drawio)** - PaaS database services
- **[Legacy Modernization](../export/legacy-modernization_advanced.drawio)** - Legacy system modernization
- **[Disaster Recovery](../export/disaster-recovery_advanced.drawio)** - Enterprise disaster recovery
- **[End-to-End Observability](../export/end-to-end-observability_advanced.drawio)** - Comprehensive monitoring solution
- **[WAF & Firewalling](../export/waf-firewalling_advanced.drawio)** - Web application firewall and security
- **[Events to CMDB/SIEM](../export/publishing-events-to-cmdb-siem_advanced.drawio)** - Event integration workflows

### Project Planning
- **[Detailed Timeline](../export/detailed-project-timeline_advanced.drawio)** - Project timeline and milestones
- **[Home Page Diagram](../export/index_advanced.drawio)** - Main documentation overview

## File Formats and Usage

### DOCX Files
- **Purpose**: Complete documentation for offline reading, sharing, and printing
- **Software**: Microsoft Word, LibreOffice Writer, Google Docs
- **Best For**: Executive summaries, client presentations, offline documentation
- **Conversion Methods**:
  - Standard version: Docker-based mermaid-cli for diagram rendering
  - Filtered version: Native pandoc-mermaid-filter for enhanced diagram quality

### XLSX Files
- **Purpose**: Project management data, timelines, and resource planning
- **Software**: Microsoft Excel, LibreOffice Calc, Google Sheets
- **Best For**: Project tracking, budget analysis, resource allocation

### CSV Files  
- **Purpose**: Data interchange and analysis
- **Software**: Any spreadsheet application, data analysis tools
- **Best For**: Data import, cost analysis, reporting

### Draw.io Files (.drawio)
- **Purpose**: Editable architecture diagrams and flowcharts
- **Software**: [Draw.io](https://app.diagrams.net/), [Draw.io Desktop](https://github.com/jgraph/drawio-desktop)
- **Best For**: Diagram customization, architecture updates, visual documentation

## How to Use These Files

### Opening Draw.io Files
1. Visit [app.diagrams.net](https://app.diagrams.net/)
2. Click "Open Existing Diagram"
3. Upload the `.drawio` file from your downloads
4. Edit, customize, and export as needed

### Viewing Documentation
- DOCX files can be opened directly in most word processors
- Use the table of contents for easy navigation
- All diagrams are embedded as high-resolution images

### Project Management
- XLSX files contain detailed project timelines and resource allocations
- CSV files can be imported into project management tools
- Use filters and pivot tables for custom analysis

## Version Information

- **Generated**: 2025-08-04
- **Documentation Version**: 1.1.0
- **Last Updated**: Based on latest documentation changes
- **Export Methods**: 
  - Standard DOCX: `task docs:export-docx`
  - Enhanced DOCX: `task docs:export-docx-filter`

## Support

For questions about these exports or to request additional formats, please:
- Create an issue in the project repository
- Contact the documentation team
- Refer to the main documentation for detailed technical information

---

**Note**: All files are generated automatically from the source documentation. For the most up-to-date information, always refer to the online documentation.
