<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# how to monitor VM deployed on RH OVE

Monitoring virtual machines (VMs) deployed on Red Hat OpenShift Virtualization Engine (RH OVE) is straightforward thanks to an integrated observability stack and compatibility with enterprise monitoring tools. Here’s how you can achieve comprehensive VM monitoring in RH OVE:

## OpenShift Built-In Monitoring

- **OpenShift Web Console Dashboards**
From the OpenShift web console, navigate to the **Virtualization → VirtualMachines** view, select a VM, and access real-time dashboards. These provide:
    - Status (running, paused, stopped)
    - Resource details (CPU, memory, storage, network)
    - Utilization charts over selectable intervals (CPU, memory, storage I/O, network transfer)
    - Alerts by severity (critical, warning, info)
    - Snapshot states and network interface details
- **Cluster Health and Alerts**
The main overview page (Home → Overview → Status) displays overall RH OVE health, listing system and VM-specific alerts. Built-in Prometheus-based monitoring sends alerts for threshold violations or operational issues (like failed migrations or high resource usage)[^1][^2].


## Monitoring Internals and Metrics

- **Prometheus Integration**
OpenShift comes preinstalled with a monitoring stack (Prometheus, Alertmanager, Grafana) that collects metrics for VMs, guest OS, and infrastructure. Metrics available include:
    - vCPU, memory, network, and disk usage per VM
    - Live migration status
    - Guest OS statistics (if the QEMU Guest Agent is installed)
    - Custom VM metrics (exposed via node-exporter and additional agents)[^1][^2]
- **Health Probes for VMs**
You can configure readiness/liveness probes and a guest agent ping probe for VMs to automatically detect and report state or connectivity issues[^1].


## Log and Event Monitoring

- **Log Collection**
Use the web console or `oc` CLI to view VM and cluster component logs. Integrate with Fluentd or other logging stacks for advanced log aggregation and search[^2].


## Third-Party and Advanced Monitoring

- **NetApp Cloud Insights, Turbonomic, and Others**
Integrate external tools such as NetApp Cloud Insights (for infrastructure end-to-end visibility and backend storage mapping), Turbonomic (for workload optimization), or eG Innovations for unified monitoring dashboards across VM and container workloads. These tools offer enhanced analytics, resource mapping, and historical trends[^3][^4][^5].
- **Event and Alert Management**
Use event-based monitoring and alerting at the namespace or VM level, leveraging event queries and custom notifications for failure scenarios (e.g., failed volume mounts or backup errors)[^3].


## Best Practices

- **Install QEMU Guest Agent in Your VMs**
For richer guest-level data collection (e.g., inside-VM memory and process stats), install the QEMU Guest Agent in each VM.
- **Set Up Routine Monitoring and Alerting**
Use built-in Prometheus rules or external tools to trigger alerts for key events and to monitor for compliance, performance, and availability.
- **Combine With Application Monitoring**
If VMs host important applications, layer application APM or custom metrics exporters for deep-dive visibility alongside infrastructure stats.

**In summary:**
You can monitor VMs in RH OVE with built-in OpenShift dashboards, Prometheus-based metrics and alerting, logs, events, and integrations with tools like NetApp Cloud Insights or Turbonomic. This lets you track health, utilization, performance, and receive proactive notifications of issues—all from a unified, enterprise-ready interface[^1][^2][^3][^4][^5].

<div style="text-align: center">⁂</div>

[^1]: https://docs.redhat.com/en/documentation/openshift_container_platform/4.14/html/virtualization/monitoring

[^2]: https://docs.redhat.com/en/documentation/openshift_container_platform/4.12/html/virtualization/logging-events-and-monitoring

[^3]: https://docs.netapp.com/us-en/netapp-solutions/containers/rh-os-n_use_case_openshift_virtualization_ci_samples.html

[^4]: https://www.ibm.com/docs/en/tarm/8.16.x?topic=targets-red-hat-openshift-virtualization

[^5]: https://docs.netapp.com/us-en/netapp-solutions/containers/rh-os-n_use_case_openshift_virtualization_ci_overview.html

[^6]: https://www.tigera.io/learn/guides/kubernetes-networking/openshift-virtualization/

[^7]: https://www.linkedin.com/pulse/monitor-virtual-machines-azure-ankit-ranjan--chyif

[^8]: https://trilio.io/openshift-virtualization/

[^9]: https://docs.okd.io/latest/virt/monitoring/virt-monitoring-overview.html

[^10]: https://docs.redhat.com/fr/documentation/red_hat_enterprise_linux/9/html/monitoring_and_managing_system_status_and_performance/virtual-machine-performance-monitoring-tools_optimizing-virtual-machine-performance-in-rhel

[^11]: https://www.hpe.com/us/en/collaterals/collateral.a50012944enw.html

[^12]: https://www.eginnovations.com/supported-technologies/red-hat-monitoring

[^13]: https://docs.redhat.com/en/documentation/red_hat_virtualization/4.2/html-single/virtual_machine_management_guide/index

[^14]: https://learn.microsoft.com/en-us/azure/openshift/howto-create-openshift-virtualization

[^15]: https://www.juliosblog.com/considerations-to-evolve-traditional-virtualization-platforms-introducing-red-hat-openshift-virtualization/

[^16]: https://www.serverion.com/uncategorized/top-7-virtualization-monitoring-dashboards/

[^17]: https://www.globalknowledge.com/us-en/course/192426/managing-virtual-machines-with-red-hat-openshift-virtualization-do316/

[^18]: https://www.manageengine.com/products/applications_manager/openshift-monitoring.html

[^19]: https://www.reddit.com/r/virtualization/comments/lvogos/regarding_employeespying_monitoring_software_and/

[^20]: https://www.dti.dk/courses/managing-virtual-machines-with-red-hat-openshift-virtualization-with-exam-do317/k91573

