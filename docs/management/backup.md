# Backup & Recovery

## Overview

This document outlines the backup and recovery strategies for the RH OVE ecosystem. It highlights the integration with Rubrik, detailing how to efficiently back up and restore both VM and container data.

## Backup Strategy

### Rubrik Integration

Utilize Rubrik's capabilities to ensure robust data protection:

- **Certified Integration**: Rubrik is certified for RH OVE, providing seamless data protection.
- **Immutable Backups**: Ensure data safety with air-gapped, tamper-proof backups.
- **Policy-Driven**: Simplify backup management with declarative policies for VM workloads.

### Backup Configuration

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: rubrik-backup-config
  namespace: rubrik-system
data:
  backupPolicy.yaml: |
    policies:
      - name: daily-VM-backup
        frequency: daily
        retention: 30d
        exclude: 'temp-volumes'

    schedules:
      - name: nightly-backup
        time: '02:00'
        days:
          - Monday
          - Wednesday
          - Friday
```

### Data Volume Backup

Backup specific DataVolumes using Rubrik advanced features:

```yaml
apiVersion: rubrik.com/v1
kind: DataProtectionPolicy
metadata:
  name: data-volume-backup
spec:
  dataprotection:
    enable: true
  rubrikCluster:
    name: rubrik-cluster1
  snapshot:
    schedule: nightly
    retention: 31
datavolume:
  selector:
    matchLabels:
      app: production
```

## Recovery Strategy

### Rubrik Recovery

Rubrik’s high-speed recovery ensures minimal downtime for critical workloads:

1. **Instant Restore**: Quickly recover VMs from snapshots directly on RH OVE.
2. **File-Level Restore**: Execute rapid recovery at the file level for broad access needs.
3. **Automated Recovery Paths**: Simplify recovery workflows through automation.

### Recovery Plan

Define a detailed recovery plan to access Rubrik’s capability.

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: recovery-plan
  namespace: recovery
spec:
  paths:
    critical-apps:
    - name: app1
      vm: app1-vm
      backup: latest
      action: restore
    - name: app2
      vm: app2-vm
      backup: nightly
      action: restore
  hooks:
    preRestore:
      - /scripts/pre-restore.sh
    postRestore:
      - /scripts/post-restore.sh
```

## Testing and Validation

### Backup Verification

Regularly test backups to ensure integrity and reliability:

- **Backup Verification Schedules**: Conduct routine checks on backup snapshots for quality assurance.
- **Periodic Restore Drills**: Simulate restore scenarios to assess recovery time objectives.

### Recovery Assurance

Ensure recovery processes are validated and documented:

- **Recovery Testing**: Periodically execute recovery processes within a non-production environment.
- **Documentation**: Maintain up-to-date recovery documentation with steps, tools, and responsible parties.

## Monitoring and Alerts

Utilize monitoring tools to track backup and restore activities:

- **Alerting Policies**: Implement alerts for failed backups, missed schedules, or data integrity issues.
- **Monitoring Dashboards**: Use dashboards to visualize backup/recovery activities and efficiency metrics.

## Conclusion

By following these backup and recovery strategies, organizations can ensure the safety, integrity, and availability of their critical data within the RH OVE ecosystem. Taking advantage of Rubrik’s robust integration further enhances data resilience, minimizing risks associated with data loss.

