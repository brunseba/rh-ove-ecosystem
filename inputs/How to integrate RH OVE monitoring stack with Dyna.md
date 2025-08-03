<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# How to integrate RH OVE monitoring stack with Dynatrace

Integrating the Red Hat OpenShift Virtualization Engine (RH OVE) monitoring stack with Dynatrace is both feasible and supported, giving you comprehensive visibility for VMs and Kubernetes workloads running on OpenShift. Here’s how to achieve this integration:

## 1. **Deploy the Dynatrace Operator via OperatorHub**

- In OpenShift, go to **Operators → OperatorHub**.
- Search for **Dynatrace Operator** and install it into your desired namespace.
    - This operator automates the deployment and lifecycle management of Dynatrace agents (OneAgent) and other Dynatrace components in OpenShift and RH OVE clusters.
- You will need a Dynatrace account and an API access token. Obtain this in your Dynatrace portal under **Settings → Access Tokens**—enable scopes for metrics, logs, traces, and ingest[^1][^2][^3].


## 2. **Configure the Dynakube Custom Resource**

- Once the operator is installed, create a `DynaKube` custom resource. This defines how OneAgent and supporting components (like ActiveGate for Kubernetes monitoring) are rolled out.
- Typical configurations for full-stack monitoring:
    - **Full-stack:** Monitors both pods/containers and hosts (nodes), including KubeVirt-based VMs running inside pods.
    - **App-only** or **Cloud Native Full-stack:** Useful for app tracing without host-level monitoring.
- Example snippet:

```yaml
apiVersion: dynatrace.com/v1beta1
kind: DynaKube
metadata:
  name: dynakube-mycluster
spec:
  apiUrl: https://<your-environment-id>.live.dynatrace.com/api
  ...
  oneAgent:
    classicFullStack: {}
  activeGate:
    capabilities:
      - kubernetes-monitoring
```

- Reference the Dynatrace UI or documentation for environment-specific details[^3].


## 3. **Enable Kubernetes and Prometheus Monitoring in Dynatrace**

- In the Dynatrace dashboard, go to **Kubernetes** settings for your cluster.
- Enable:
    - Kubernetes cluster monitoring.
    - Monitoring for namespaces, services, workloads, and pods.
    - Prometheus exporter support: This allows collecting custom metrics (such as application-specific or KubeVirt VM metrics) exposed by Prometheus endpoints or RH OVE components[^4][^5][^6].


## 4. **VM Observability and Workload Correlation**

- Dynatrace OneAgent, once deployed at the node level, automatically monitors pods running KubeVirt VM workloads.
- You get real-time metrics on VM CPU, memory, disk, and network usage, plus dependency mapping and root cause analysis via Dynatrace’s AI capabilities.
- Through integration with the built-in OpenShift Prometheus stack, you can ingest additional RH OVE metrics into Dynatrace using Prometheus annotation or scraping[^7][^5].
    - Annotate Prometheus exporters as needed so Dynatrace ingests those metrics.


## 5. **(Optional) Advanced App and Infrastructure Monitoring**

- Enable **ActiveGate** for API access and enriched data, including:
    - Cluster health (control plane, etcd, API server)
    - Custom metrics and logs from RH OVE components.
- Combine with OpenTelemetry if you need advanced distributed tracing or to ingest additional logs/metrics from VMs/apps (for apps running inside VMs as well as on the platform)[^8].


## 6. **Visualization and Alerts**

- Use **Dynatrace Dashboards** and the **Data Explorer** to create multi-layered dashboards (VM, pod, node, cluster, application).
- Set up anomaly detection and alerting policies—Dynatrace AI automatically highlights issues and impacts[^1][^9].


### **Best Practices**

- Install the QEMU Guest Agent within VMs for deeper VM guest insights.
- Annotate any custom Prometheus exporters relevant to your virtualization stack so Dynatrace can ingest extended observability metrics[^7].
- Regularly review and update agent and operator versions for compatibility with your OpenShift/RH OVE cluster[^10].

**In summary:**
Deploy the Dynatrace Operator via OperatorHub, configure DynaKube for full-stack cluster and VM monitoring, enable Kubernetes/Prometheus integration, and leverage Dynatrace’s observability and AI analytics to monitor VM and Kubernetes workloads together—bringing unified, enterprise-grade visibility to your RH OVE cluster[^11][^1][^2][^3][^4][^5][^6].

<div style="text-align: center">⁂</div>

[^1]: https://www.redhat.com/en/blog/partner-showcase-openshift-app-observability-with-dynatrace-operator

[^2]: https://docs.dynatrace.com/docs/ingest-from/setup-on-k8s/deployment/other/ocp-operator-hub

[^3]: https://github.com/Dynatrace/dynatrace-operator

[^4]: https://docs.dynatrace.com/docs/observe/infrastructure-monitoring/container-platform-monitoring/kubernetes-monitoring/monitor-services-kubernetes

[^5]: https://docs.dynatrace.com/docs/observe/infrastructure-monitoring/container-platform-monitoring/kubernetes-monitoring/monitor-metrics-kubernetes

[^6]: https://docs.dynatrace.com/docs/observe/infrastructure-monitoring/container-platform-monitoring/kubernetes-monitoring/monitor-workloads-kubernetes

[^7]: https://github.com/dynatrace-extensions/kubernetes-control-plane

[^8]: https://developers.redhat.com/articles/2025/05/21/implement-llm-observability-dynatrace-openshift-ai

[^9]: https://shadow-soft.com/content/intelligent-observability-with-dynatrace-and-red-hat-openshift

[^10]: https://docs.dynatrace.com/docs/ingest-from/technology-support/support-model-for-kubernetes

[^11]: https://www.dynatrace.com/hub/detail/red-hat-openshift/

[^12]: https://shadow-soft.com/solutions/dynatrace-openshift-monitoring

[^13]: https://video.dynatrace.com/watch/UDw5uqrt1xSigePvtceqAf

[^14]: https://cloudnativenow.com/social-facebook/simplifying-vm-storage-and-management-with-openshift-and-kubevirt/

[^15]: https://www.dynatrace.com/news/blog/what-is-openshift-2/

[^16]: https://www.linkedin.com/pulse/dynatrace-oneagent-install-using-daemonset-red-hat-ibm-filipe-miranda-vkitc

[^17]: https://www.youtube.com/watch?v=CbQ-3QIchR0

[^18]: https://cloudnativenow.com/contributed-content/is-open-source-kubevirt-ready-for-your-vms-at-scale/

[^19]: https://www.dynatrace.com/hub/detail/red-hat-fuse/

[^20]: https://www.dynatrace.com/technologies/kubernetes-monitoring/

