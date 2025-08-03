<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# List all RHOVE CRDS including template

Here is a list of the main Custom Resource Definitions (CRDs) used in Red Hat OpenShift Virtualization Engine (RHOVE), which is built on the KubeVirt project and OpenShift operators. This list includes the CRD used for VM templates:

### Core RHOVE (KubeVirt \& OpenShift Virtualization) CRDs

- **VirtualMachine**
Declares the desired state and configuration of a Virtual Machine (VM) (CPU, RAM, disks, networks, etc.).
- **VirtualMachineInstance**
Represents the running/active state of a VM in the cluster.
- **DataVolume**
Manages provisioning, importing, cloning, and attaching storage volumes for VMs.
- **VirtualMachineInstanceReplicaSet**
Ensures a specific number of VMIs are running, mainly used for advanced scenarios.
- **VirtualMachineMigration**
Orchestrates live or offline migration of running VMs between nodes in the cluster.
- **VirtualMachinePreset**
Defines reusable sets of configuration (hardware, network) for groups of VMs.
- **KubeVirt**
Cluster-level resource controlling KubeVirt’s configuration and lifecycle.


### Network \& Storage-Related CRDs

- **NetworkAttachmentDefinition**
Defines additional network interfaces (e.g., multus, VLAN configuration) for VMs.
- **PersistentVolumeClaim**
Not a custom RHOVE CRD but essential for VM disk storage assignments.


### Data Import \& Protection

- **CDI (Containerized Data Importer) CRDs**
Specifically, the **DataVolume** resource for storage import, snapshot, and cloning operations.


### Template-Related CRDs

- **Template**
OpenShift-specific resource (`kind: Template`). Stores reusable blueprints for VM creation (hardware, disks, networks, metadata, and parameters). The template is not unique to KubeVirt but is used in combination with CRDs for rapid VM instantiation in OpenShift. Templates are often stored in the `openshift` namespace by default.


### Platform/Cluster Management

- **HyperConverged**
Top-level configuration resource for OpenShift Virtualization, used to configure and orchestrate all operators and related resources.
- **SSP (Scheduling, Scale, and Performance)**
- **CDI**
Operator-level CRDs for data import/export and hyperconverged infrastructure control.


### Summary Table

| CRD Name | Purpose |
| :-- | :-- |
| VirtualMachine | Declarative VM configuration |
| VirtualMachineInstance | Live/running VM state |
| DataVolume | VM disk (import, clone, attach) management |
| VirtualMachineMigration | Migration of VMs |
| VirtualMachinePreset | Set/hardware config reuse |
| VirtualMachineInstanceReplicaSet | Maintain sets of VMIs |
| Template | Blueprint/model for VM deployments (OpenShift-specific) |
| NetworkAttachmentDefinition | Additional network settings for VMs |
| HyperConverged | Central config for OpenShift Virtualization |
| CDI (Containerized Data Importer) | Storage import/export operations |
| SSP | Scheduling/Performance config |

This covers the principal RHOVE/Red Hat OpenShift Virtualization CRDs, including templates and supporting resources for networking, migration, and storage. These CRDs let you declaratively manage VMs, templates, and infrastructure extensions within OpenShift, making hybrid virtualization and container management seamless[^1][^2][^3][^4].

<div style="text-align: center">⁂</div>

[^1]: https://docs.redhat.com/en/documentation/openshift_container_platform/4.14/html-single/virtualization/index

[^2]: https://trilio.io/openshift-virtualization/kubevirt/

[^3]: https://cloudnativenow.com/social-facebook/simplifying-vm-storage-and-management-with-openshift-and-kubevirt/

[^4]: https://www.redhat.com/en/blog/introducing-kubevirts-crd-support-for-kube-burner-to-benchmark-kubernetes-and-openshift-creation-of-vms

[^5]: https://www.redhat.com/en/blog/red-hat-openshift-virtualization-faqs

[^6]: https://trilio.io/openshift-virtualization/

[^7]: https://docs.citrix.com/en-us/citrix-virtual-apps-desktops/install-configure/install-prepare/red-hat-open-shift.html

[^8]: https://www.youtube.com/watch?v=oUm7yftZI20

[^9]: https://fr.scribd.com/document/640045109/ROVE-reference-card

[^10]: https://docs.openshift.com/fr/documentation/red_hat_openshift_virtualization_engine/4/html/overview

[^11]: https://www.reddit.com/r/Dashcam/comments/13j4uk9/rove_r24k_microsd_card_recommendations/

[^12]: https://www.lemondeinformatique.fr/actualites/lire-avec-openshift-virtualization-engine-red-hat-courtise-les-decus-de-vmware-95772.html

[^13]: https://carsisere.auvergnerhonealpes.fr/en/fares-amp-payments/75/the-oura-card/12

[^14]: https://www.redhat.com/en/topics/virtualization/what-is-kubevirt

[^15]: https://www.reddit.com/r/openshift/

[^16]: https://crds-auvergnerhonealpes.fr/fiche-action-n15/

[^17]: https://www.youtube.com/watch?v=agJHJDaIEUc

[^18]: https://myvmworld.fr/openshift-virtualization-lalternative-a-vmware-pour-unifier-conteneurs-et-machines-virtuelles-dans-kubernetes/

[^19]: https://www.tigera.io/learn/guides/kubernetes-networking/openshift-kubevirt/

[^20]: https://kubevirt.io/user-guide/cluster_admin/installation/

