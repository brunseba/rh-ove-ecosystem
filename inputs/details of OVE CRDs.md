<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# details of OVE CRDs

Red Hat OpenShift Virtualization Engine (OVE) relies heavily on Kubernetes Custom Resource Definitions (CRDs) to manage and orchestrate virtual machine (VM) resources within OpenShift clusters. Here are details about how OVE CRDs work, what they define, and how they fit into the OVE architecture:

## What Are OVE CRDs?

Custom Resource Definitions (CRDs) in OVE extend Kubernetes APIs to support resources and operations required for virtualization, beyond Kubernetes' built-in objects. Each CRD acts as a blueprint for a particular resource type and allows users to manage VMs and supporting components declaratively using standard Kubernetes tools.

## Key OVE CRDs and Their Purposes

1. **VirtualMachine**
    - Represents a VM definition (CPU, memory, disks, networks, etc.).
    - Example custom resources (CRs) created: Linux VM, Windows VM.
2. **VirtualMachineInstance**
    - Tied to live state and runtime of a VM (current state, node assignment).
3. **DataVolume**
    - Manages disk images, importing or cloning persistent volumes for VM disks.
    - Integrates with storage features like snapshots and cloning.
4. **VirtualMachineMigration**
    - Orchestrates live or cold migration processes for VMs.
5. **NetworkAttachmentDefinition**
    - Describes VM network attachments, VLANs, or multus networking.
6. **Other supporting CRDs**
    - Disks, volumes, cluster policies, and more.

These OVE CRDs are usually installed by Operators—components that manage the lifecycles of these resources and enforce cluster state[^1][^2].

## Anatomy of an OVE CRD

OVE CRDs, like all Kubernetes CRDs, are defined in YAML. Key fields include:

- `apiVersion`, `kind`, and `metadata`—standard Kubernetes fields.
- `spec`: The schema describing resource attributes (e.g., CPU, memory for a VirtualMachine).
- Validation and versioning: OVE CRDs use OpenAPI v3 JSON schemas, supporting validation and backward compatibility.
- Namespaced vs. Cluster-scoped: Most OVE CRDs are namespaced, ensuring clean role-based access control.

For example, a simplified OVE VirtualMachine CRD definition would include fields for CPU, RAM, disks, NICs, and more, all under the `spec` section—validated by the schema[^3][^4].

## Lifecycle and Management

- **Operators**: OVE Operators (running as pods in OpenShift) manage these CRDs—creating, updating, reconciling, and deleting resources.
- **kubectl / oc**: Administrators and developers can use tools like `kubectl` or `oc` to create, edit, or delete resources based on these CRDs.
- **Declarative management**: You can define the desired state for VMs, storage, and networking in YAML files; the system automatically converges to this state.


## Example: Creating a Virtual Machine via CRD

A VM can be described in YAML (based on the VirtualMachine CRD) and applied to the cluster:

```yaml
apiVersion: kubevirt.io/v1
kind: VirtualMachine
metadata:
  name: my-linux-vm
spec:
  running: true
  template:
    spec:
      domain:
        cpu:
          cores: 2
        memory:
          guest: 4Gi
      volumes:
      - name: rootdisk
        persistentVolumeClaim:
          claimName: my-linux-pvc
```


## In Summary

- **OVE CRDs** allow you to manage virtualization-specific resources (VMs, disks, migrations) natively in OpenShift.
- They are defined and validated using Kubernetes schema mechanisms.
- Operators orchestrate their lifecycles, so everything is **declarative** and API-driven.
- This approach provides robust scalability, consistency, and integration with enterprise access controls and automation pipelines[^1][^2][^3][^4].

<div style="text-align: center">⁂</div>

[^1]: https://www.redhat.com/en/technologies/cloud-computing/openshift/virtualization-engine

[^2]: https://www.redhat.com/en/resources/red-hat-openshift-virtualization-engine-datasheet

[^3]: https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/

[^4]: https://www.civo.com/learn/kubernetes-api-custom-resources-definitions

[^5]: https://www.lemondeinformatique.fr/actualites/lire-avec-openshift-virtualization-engine-red-hat-courtise-les-decus-de-vmware-95772.html

[^6]: https://trilio.io/openshift-virtualization/

[^7]: https://www.ibm.com/docs/en/tarm/8.16.x?topic=targets-red-hat-openshift-virtualization

[^8]: https://traefik.io/glossary/kubernetes-crds-expanding-k8s-potential-beyond-standard-objects

[^9]: https://www.reddit.com/r/openshift/comments/1i25vis/they_just_announce_ga_of_openshift_virtualization/

[^10]: https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/

[^11]: https://kubernetes.io/blog/2019/06/20/crd-structural-schema/

[^12]: https://itsocial.fr/transformation-digitale/transformation-digitale-actualites/red-hat-devoile-red-hat-openshift-virtualization-engine-une-solution-de-virtualisation-allegee/

[^13]: https://github.com/datreeio/CRDs-catalog/blob/main/README.md

[^14]: https://www.youtube.com/watch?v=VI2lUBBmKJA

[^15]: https://dev.to/574n13y/custom-resource-definitions-crd-1f78

[^16]: https://github.com/fluxcd/flux2/discussions/408

[^17]: https://www.youtube.com/watch?v=oEPdJ2KiyLk

[^18]: https://open-docs.neuvector.com/5.3/policy/usingcrd/

[^19]: https://blog.upbound.io/scaling-kubernetes-to-thousands-of-crds

[^20]: https://www.youtube.com/watch?v=3huz7lRzUQo

