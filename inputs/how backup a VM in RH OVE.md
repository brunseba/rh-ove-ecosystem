<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# how backup a VM in RH OVE

To back up a virtual machine (VM) in Red Hat OpenShift Virtualization Engine (RH OVE), you have several robust, enterprise-grade options. The most common and fully supported method is using the OpenShift API for Data Protection (OADP) Operator, which leverages Velero and integrates with cloud-native storage for consistent, reliable VM backups. Third-party solutions such as Trilio and Storware are also widely used in production for advanced backup workflows.

## **1. Native Backup with OADP (Velero)**

**OADP** is the recommended Red Hat way to perform VM backups in OpenShift Virtualization. It works by creating backups of your VM resources and their associated persistent volumes. The process involves:

- **Installing the OADP Operator:** Ensure the OADP Operator is installed and configured. You’ll need an object storage backend (like S3, NooBaa, or MinIO) for storing backup data.
- **Creating Backup Custom Resources:** You initiate the backup process by applying a `Backup` custom resource (CR) that defines what namespaces, resources, and disks to include.

**Backup procedure summary:**

1. Set up and configure OADP and the required S3-compatible object storage.
2. Create a `Backup` CR specifying:
    - The namespaces and VMs to back up.
    - The backup storage location and any backup hooks if filesystem quiescing is required.
3. The backup CR triggers OADP/Velero, which will:
    - Back up the VM’s Kubernetes objects and configuration.
    - Use CSI or Restic to back up associated VM disks and persistent volumes.
    - Use hooks (and the QEMU guest agent if present) to freeze and unfreeze the filesystem for consistent backups.
4. Monitor backup progress using the OpenShift console or `oc get backup` commands.

**Example Backup CR:**

```yaml
apiVersion: velero.io/v1
kind: Backup
metadata:
  name: testvm-backup
  namespace: openshift-adp
spec:
  includedNamespaces:
    - my-vm-namespace
  storageLocation: my-s3-location
```

You can automate and schedule backups using the `Schedule` CR for routine protection[^1][^2][^3].

## **2. Snapshot-Based Backups**

If you are using CSI-enabled storage (like Red Hat OpenShift Data Foundation, Ceph, or another CSI provider), you can use VM snapshots:

- **Online or Offline Snapshots:** You can take consistent snapshots of running (online) or stopped (offline) VMs. It is highly recommended to install the QEMU guest agent in the VM for maximum data integrity.
- **API Integration:** Snapshots are managed via Kubernetes `VolumeSnapshot` CRs, and these can be orchestrated as part of your backup routine[^2].


## **3. Third-Party/Partner Solutions**

Enterprise deployments might use certified solutions like **Trilio** or **Storware**, which provide:

- Policy-driven, incremental VM backups.
- Granular restore options (entire VM, or file-level restore in some cases).
- Audit trails, compliance support, and integration with S3 and network filesystems[^4][^5][^6][^7].


## **Best Practices**

- Always back up both VM resources (definitions, metadata) and associated disk storage.
- Store copies on external object storage outside the OpenShift cluster for disaster recovery.
- Use pre/post-backup hooks to safely freeze and unfreeze filesystem data.
- Monitor for backup completion and regularly test your restore procedures[^8].

**In summary:**
To back up a VM in RH OVE, use the OADP Operator with object storage for fully supported, consistent backup and restore workflows, or certified enterprise tools like Trilio and Storware for advanced automation and flexibility. Always combine resource and disk backup, use storage-integrated snapshots if possible, and store your backups externally for maximum resilience and recoverability[^1][^2][^3][^8].

<div style="text-align: center">⁂</div>

[^1]: https://docs.redhat.com/en/documentation/openshift_container_platform/4.11/html/virtualization/backup-and-restore

[^2]: https://docs.redhat.com/en/documentation/openshift_container_platform/4.16/html/virtualization/backup-and-restore

[^3]: https://developers.redhat.com/articles/2024/08/21/how-back-and-restore-virtual-machines-openshift

[^4]: https://trilio.io/products/openshift-virtualization-backup/

[^5]: https://storware.eu/blog/backup-and-recovery-for-red-hat-openshift-virtualization/

[^6]: https://www.linkedin.com/pulse/backup-recovery-red-hat-openshift-virtualization-vms-using-reddy-puxgc

[^7]: https://docs.trilio.io/kubernetes/appendix/backup-and-restore-virtual-machine-running-on-openshift-virtualization

[^8]: https://cloud.redhat.com/learning/learn:welcome-red-hat-openshift-virtualization-roadshow/resource/resources:backup-and-recovery-virtual-machines

[^9]: https://www.youtube.com/watch?v=Oaw4y5ERs1I

[^10]: https://www.ibm.com/docs/en/fusion-software/2.8.x?topic=virtualization-backup-restore-virtual-machines

[^11]: https://storware.eu/solutions/virtual-machine-backup-and-recovery/rhv-backup-and-recovery/

[^12]: https://www.youtube.com/watch?v=E7HBATxVRp4

[^13]: https://community.netapp.com/t5/Tech-ONTAP-Blogs/A-Backup-and-Restore-option-for-VM-data-protection-in-OpenShift-Virtualization/ba-p/452279

[^14]: https://storware.eu/wp-content/uploads/2023/04/RHV-Backup-and-Recovery-solution-brief.pdf

[^15]: https://trilio.io/openshift-virtualization/

[^16]: https://www.redhat.com/en/blog/disaster-recovery-of-virtual-machines-within-openshift

[^17]: https://version-2.com/zh/2024/10/backup-and-recovery-for-red-hat-openshift-virtualization/

[^18]: https://docs.netapp.com/us-en/netapp-solutions/containers/rh-os-n_use_case_openshift_virtualization_bpg.html

[^19]: https://www.redhat.com/en/technologies/cloud-computing/openshift/virtualization

[^20]: https://docs.storware.eu/protecting-virtual-machines/virtual-machines/openshift-virtualization

