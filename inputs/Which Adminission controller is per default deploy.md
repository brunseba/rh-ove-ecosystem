<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# Which Adminission controller is per default deployed on RH OVE

By default, Red Hat OpenShift Virtualization Engine (RH OVE) deploys and enables the standard set of OpenShift admission controllers (called “admission plugins”) as part of the OpenShift Container Platform. These are required for the fundamental control plane operations and include:

- **Built-in admission controllers** such as:
    - LimitRanger
    - ServiceAccount
    - PodNodeSelector
    - Priority
    - PodTolerationRestriction
    - OwnerReferencesPermissionEnforcement
    - PersistentVolumeClaimResize
    - RuntimeClass
    - CertificateApproval, CertificateSigning, CertificateSubjectRestriction
    - SecurityContextConstraint (SCC)
    - ResourceQuota
    - MutatingAdmissionWebhook
    - ValidatingAdmissionWebhook
    - And others related to networking, image policy, authorization, and quota management[^1][^2][^3].

In addition to the OpenShift core plugins, **KubeVirt**, which powers virtualization in RH OVE, registers its own built-in admission webhooks to validate VirtualMachine and VirtualMachineInstance custom resources for correctness and security[^4].

**MutatingAdmissionWebhook** and **ValidatingAdmissionWebhook** controllers are always enabled by default, which allows OpenShift and KubeVirt Operators to install dynamic (custom) admission webhooks specific to virtualization resources.

**In summary:**
RH OVE (as part of OpenShift) enables a comprehensive default set of admission controllers and webhooks, ensuring strong validation, mutation, and governance for both container and VM workloads out of the box. KubeVirt adds its own admission webhooks automatically, so both Kubernetes standard and virtualization-specific admission controls are active by default[^1][^2][^4].

<div style="text-align: center">⁂</div>

[^1]: https://docs.redhat.com/en/documentation/openshift_container_platform/4.10/html/architecture/admission-plug-ins

[^2]: https://notes.kodekloud.com/docs/CKA-Certification-Course-Certified-Kubernetes-Administrator/Scheduling/Solution-Admission-Controllers-2025-Updates

[^3]: https://www.sysdig.com/learn-cloud-native/kubernetes-admission-controllers

[^4]: https://kubevirt.io/user-guide/cluster_admin/api_validation/

[^5]: https://www.redhat.com/en/blog/11-kubernetes-admission-controller-best-practices-for-security

[^6]: https://isovalent.com/blog/post/isovalent-rosa/

[^7]: https://blogs.vmware.com/wp-content/uploads/sites/105/2019/11/Best-Practices-for-Red-Hat-OpenShift-on-the-VMware-SDDC-Final01.pdf

[^8]: https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/

[^9]: https://docs.okd.io/3.11/architecture/additional_concepts/dynamic_admission_controllers.html

[^10]: https://miminar.fedorapeople.org/_preview/openshift-enterprise/registry-redeploy/architecture/additional_concepts/dynamic_admission_controllers.html

[^11]: https://docs.redhat.com/zh-cn/documentation/openshift_container_platform/4.5/html/architecture/admission-webhooks-about_admission-plug-ins

[^12]: https://www.youtube.com/watch?v=CIWrw1mWBLE

[^13]: https://kyverno.io/docs/introduction/admission-controllers/

[^14]: https://docs.redhat.com/en/documentation/openshift_container_platform/4.13/html/architecture/admission-plug-ins

[^15]: https://docs.okd.io/3.11/install_config/configuring_openstack.html

[^16]: https://github.com/saharsh-samples/openshift-admission-webhook

[^17]: https://www.redbooks.ibm.com/redpapers/pdfs/redp5690.pdf

[^18]: https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/

[^19]: https://xphyr.net/post/mutating_webhook/

[^20]: https://speakerdeck.com/redhatlivestreaming/whats-new-in-openshift-4-dot-17

