# RH OVE Infrastructure Project

## Scope
Focus on the complete lifecycle of infrastructure setup and operations, including study, HLD, LLD, implementation, testing, and Day-2 operations.

### Documentation Areas
- **Architecture**: `global-overview.md`, `overview.md`, `design-principles.md`, `network.md`, `storage.md`, `iam.md`
- **ADRs (Architecture Decision Records)**: Multi-cluster patterns, GitOps, cluster topology, admission control, network CNI, backup, monitoring, IAM
- **Deployment**: `prerequisites.md`, `installation.md`, `configuration.md`
- **Management**: `admission-control.md`, `gitops.md`, `monitoring.md`, `backup.md`
- **Operations**: `day2-ops.md`, `troubleshooting.md`, `performance.md`

### Work Phases
- **Study**: Gather detailed understanding of the RH OVE architecture and components.
- **Design**: Create and validate HLD and LLD documents.
- **Implementation**: Deploy infrastructure components following established practices.
- **Testing**: Verify infrastructure robustness, security, and performance.
- **Day-2 Operations**: Establish ongoing monitoring, troubleshooting, and tuning.

### Required Personas
- **Architect**
- **DevOps Engineer**
- **System Administrator**

---

# Use-Cases Implementation Project

## Scope
Study, design, implement, test, and operate comprehensive use-cases demonstrating RH OVE capabilities for applications and services.

### Documentation Areas
- **Use Cases**: Overview, multi-env setup, hybrid applications, database services, legacy modernization, disaster recovery, observability, security, integration
- **References**: `best-practices.md`, `glossary.md`

### Work Phases
- **Study**: Analyze use case requirements and dependencies.
- **Design**: Develop HLD and LLD for each use case.
- **Implementation**: Build and deploy use case configurations, manifests, and scripts.
- **Testing**: Conduct functional and integration testing.
- **Day-2 Operations**: Develop runbooks for operational support.

### Required Personas
- **Solution Architect**
- **Application Developer**
- **Testing Specialist**

---

# Migration Workload from VMware Project

## Scope
Plan and execute the migration of workloads from VMware environments to RH OVE.

### Documentation Areas
- **VM Lifecycle**: `vm-importation.md`, `vm-template-management.md`, `vm-scaling-performance.md`, `vm-backup-recovery.md`
- **Related ADRs**: Migration strategies or compatibility considerations

### Work Phases
- **Study**: Inventory and analyze existing VMware workloads and requirements.
- **Design**: Create migration strategies, including HLD and LLD documents.
- **Implementation**: Execute migration workflows.
- **Testing**: Validate functionality and performance post-migration.
- **Day-2 Operations**: Develop monitoring, backup, and disaster recovery procedures.

### Required Personas
- **Migration Specialist**
- **VMware Administrator**
- **RH OVE Engineer**
