<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# based on gatekeeper or kyverno ?

Red Hat OpenShift Virtualization Engine (RH OVE) does **not** deploy Gatekeeper or Kyverno by default. Instead, it enables standard Kubernetes/OpenShift admission controllers out-of-the-box—including built-in mutating and validating admission webhooks—and leverages KubeVirt’s native admission hooks for virtualization-specific resources.

However, both **Gatekeeper (powered by Open Policy Agent, OPA)** and **Kyverno** are fully supported options for OpenShift and RH OVE clusters:

- **Gatekeeper**: Red Hat supports Gatekeeper through Advanced Cluster Management (ACM) and via OperatorHub. Gatekeeper brings OPA’s Rego-based policy engine to OpenShift, allowing you to enforce custom, complex governance using ConstraintTemplates and Constraints on both native and custom resources, including those from KubeVirt/RH OVE. Gatekeeper is particularly suited for organizations already invested in OPA or requiring very fine-grained, cross-platform authorization logic. Policies must be written in the Rego language[^1][^2][^3].
- **Kyverno**: Kyverno is also fully compatible with OpenShift and can be deployed via Helm or OperatorHub. It is widely seen as the more Kubernetes-native solution, with policies defined in simple YAML—familiar to most Kubernetes users—and supporting validation, mutation, generation, and cleanup actions. Kyverno is especially user-friendly for teams managing common security, compliance, and operational policies, and is well-adopted in OpenShift environments for automating governance across both container and VM workloads[^4][^5][^6].

**Summary Table: Gatekeeper vs. Kyverno for RH OVE**


| Aspect | Gatekeeper (OPA) | Kyverno |
| :-- | :-- | :-- |
| Default in RH OVE | Not default | Not default |
| Supported on OpenShift | Yes (OperatorHub, ACM integration) | Yes (Helm, OperatorHub) |
| Policy Language | Rego (custom DSL) | YAML (Kubernetes-native) |
| Validation | Yes | Yes |
| Mutation | Alpha features (limited) | Full support |
| CRD Coverage | All, including KubeVirt/RH OVE CRDs | All, including KubeVirt/RH OVE CRDs |
| Use Cases | Complex, organization-wide policies | Kubernetes-native, easy onboarding |

**In practice:**

- If you require a Kubernetes-native, easy-to-understand, and fast-to-onboard policy engine, **Kyverno** is a great fit and is commonly chosen for OpenShift/RH OVE clusters.
- For advanced use cases or if you already use OPA elsewhere, **Gatekeeper** offers deeper flexibility and integration possibilities.

You can safely deploy either Gatekeeper or Kyverno on your RH OVE cluster for custom policy enforcement and governance—**but neither is enabled by default; you must install and configure them as needed**[^1][^4][^2].

<div style="text-align: center">⁂</div>

[^1]: https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.10/html/governance/gatekeeper-operator-intro

[^2]: https://www.redhat.com/en/blog/integrating-gatekeeper-with-red-hat-advanced-cluster-management-for-kubernetes

[^3]: https://www.youtube.com/watch?v=zjX31QaYFRc

[^4]: https://nirmata.com/2022/02/28/getting-started-with-kubernetes-policy-management-kyverno-on-openshift-container-platform/

[^5]: https://www.redhat.com/en/blog/automate-your-security-practices-and-policies-on-openshift-with-kyverno

[^6]: https://nirmata.com/2024/07/10/secops-automation-in-openshift-clusters-using-kyverno/

[^7]: https://dev.to/hkhelil/admission-controllers-in-kubernetes-opa-gatekeeper-kyverno-and-azure-policy-add-on-for-aks-which-one-wins-237d

[^8]: https://nirmata.com/2025/04/14/10-reasons-why-kubernetes-users-choose-kyverno-over-opa-gatekeeper/

[^9]: https://nirmata.com/2025/02/07/kubernetes-policy-comparison-kyverno-vs-opa-gatekeeper/

[^10]: https://dev.to/aws-builders/simplify-kubernetes-security-with-kyverno-and-opa-gatekeeper-11o2

[^11]: https://policyascode.dev/blog/opa-gatekeeper-vs-kyverno/

[^12]: https://blog.bootlabstech.com/gatekeeper-vs-kyverno

[^13]: https://kyverno.io/blog/2023/07/28/simplifying-openshift-machineset-management-using-kyverno/

[^14]: https://www.reddit.com/r/kubernetes/comments/1gpvk95/so_are_validating_admission_policies_a/

[^15]: https://www.redhat.com/en/blog/software-supply-chain-security-on-openshift-with-kyverno-and-cosign

[^16]: https://blog.zwindler.fr/2022/08/01/vos-politiques-de-conformite-sur-kubernetes-avec-kyverno/

[^17]: https://support.hpe.com/hpesc/public/docDisplay?docId=sd00002066en_us\&page=GUID-BF42D2F7-1402-40AB-AD4D-0956670DDBFA.html

[^18]: https://blog.devgenius.io/k8s-policy-engines-gatekeeper-vs-kyverno-vs-kubewarden-9fbecf723353

[^19]: https://docs.nvidia.com/datacenter/cloud-native/openshift/latest/openshift-virtualization.html

[^20]: https://www.youtube.com/watch?v=vHAjvX8QfhE

