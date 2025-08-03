<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# how adminission controller can be used with RHOVE

Admission controllers are a powerful mechanism in Kubernetes and OpenShift—including Red Hat OpenShift Virtualization Engine (RHOVE)—to control, validate, or even mutate VM-related (and other) resources as they are created or updated in the cluster. Here’s how admission controllers can be used with RHOVE:

## How Admission Controllers Work with RHOVE

- **Point of Enforcement**: When an API request (such as creating or updating a VirtualMachine, Template, or DataVolume CRD) is submitted, the admission controller intercepts it before it is persisted. This allows administrators to enforce compliance, validate configurations, or set defaults.
- **Types of Admission Controllers**:
    - **Validating Admission Webhooks**: These review and approve or deny requests based on whether the resource complies with security, compliance, or organizational policy.
    - **Mutating Admission Webhooks**: These can modify (mutate) resource requests, e.g., injecting standard labels, adding default annotations, or adjusting configuration before storage[^1][^2][^3].
- **KubeVirt and OpenShift Integration**: KubeVirt (underlying RHOVE) installs its own admission webhooks to validate the correctness of VirtualMachine and VirtualMachineInstance CRDs[^4]. OpenShift’s Admin can further extend or override these behaviors with their own webhooks.
- **Red Hat Advanced Cluster Security for Kubernetes (RHACS)**: RHACS can enforce security policies on RHOVE CRDs at the point of creation by using admission controllers. For instance, it can block the deployment of non-compliant VMs, templates, or datavolumes based on configured policies. This is accomplished via ValidatingAdmissionWebhook and a ValidatingWebhookConfiguration resource, which interface with the RHACS policy engine[^5][^6].


## Example Use Cases

- **Security Policy Enforcement**: Prevent deployment of VMs that don’t align with established baseline configurations, block users from specifying certain images, or enforce anti-affinity for workloads.
- **Labeling and Tagging**: Automatically inject environment, team, or compliance labels into VirtualMachine resources when they are created.
- **API Validation Enhancement**: Catch configuration errors sooner—beyond just schema validation—such as making sure all referenced disks or networks exist in a VirtualMachine spec[^4].
- **Compliance Auditing**: Ensure only signed VM templates/images are launched or prevent scheduling of workloads in forbidden namespaces.


## How to Enable/Use Admission Controllers with RHOVE

1. **Ensure Webhooks Are Enabled**: OpenShift and KubeVirt must have MutatingAdmissionWebhook and ValidatingAdmissionWebhook admission plugins enabled (default for most installs).
2. **Deploy/Configure Webhooks**: Create custom webhook deployments (for example, to enforce organization-specific policies) and register them via ValidatingWebhookConfiguration and/or MutatingWebhookConfiguration.
3. **Integrate RHACS for Security Policies**: Configure RHACS admission controller enforcement, which will integrate at the webhook level and enforce policies on KubeVirt/RHOVE objects at creation and update[^5][^6].
4. **Test Enforcement**: Attempt to create or update a resource that violates policy to verify the admission controller acts as expected (rejects or mutates the request).

## Key Points

- Admission controllers can be used to **enforce compliance and governance** beyond what’s possible with basic CRD schema validation.
- Both **native KubeVirt admission hooks** and **custom/third-party (like RHACS) webhooks** are available for advanced enforcement.
- Use admission controllers to strengthen the safety, traceability, and consistency of VM operations in RHOVE.

This is a best practice for enterprises seeking robust VM management, security, and compliance in hybrid Kubernetes/VM environments[^5][^6][^1][^2][^3][^4].

<div style="text-align: center">⁂</div>

[^1]: https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/

[^2]: https://kyverno.io/docs/introduction/admission-controllers/

[^3]: https://github.com/kubescape/admission-controller

[^4]: https://kubevirt.io/user-guide/cluster_admin/api_validation/

[^5]: https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_security_for_kubernetes/3.72/html/operating/use-admission-controller-enforcement

[^6]: https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_security_for_kubernetes/4.5/html/operating/use-admission-controller-enforcement

[^7]: https://docs.okd.io/3.11/architecture/additional_concepts/dynamic_admission_controllers.html

[^8]: https://trilio.io/openshift-virtualization/

[^9]: https://www.flane.fr/course/redhat-do316

[^10]: https://github.com/openshift/generic-admission-server

[^11]: https://www.youtube.com/watch?v=OlfvR_k6TYk

[^12]: https://www.baeldung.com/java-kubernetes-admission-controller

[^13]: https://kubernetes.io/blog/2018/07/27/kubevirt-extending-kubernetes-with-crds-for-virtualized-workloads/

[^14]: https://docs.okd.io/3.11/install_config/configuring_for_rhv.html

[^15]: https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/

[^16]: https://github.com/kubevirt/kubevirt/issues/12732

[^17]: https://docs.openshift.com/fr/documentation/openshift_container_platform/4.19/html/release_notes

[^18]: https://www.armosec.io/blog/kubernetes-admission-controller/

[^19]: https://www.sysdig.com/learn-cloud-native/kubernetes-admission-controllers

[^20]: https://itsocial.fr/transformation-digitale/transformation-digitale-actualites/red-hat-devoile-red-hat-openshift-virtualization-engine-une-solution-de-virtualisation-allegee/

