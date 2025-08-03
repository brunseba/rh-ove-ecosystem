<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# how to run node-exporter on linux and windows VM boxes

To run node-exporter on both Linux and Windows VM boxes, use the official Prometheus exporters: **node_exporter** for Linux and **windows_exporter** (previously called wmi_exporter) for Windows. Below are concise step-by-step guides for installing and running each.

## Running Node Exporter on Linux VMs

1. **Download Node Exporter:**

```bash
wget https://github.com/prometheus/node_exporter/releases/latest/download/node_exporter-*.linux-amd64.tar.gz
tar xvfz node_exporter-*.linux-amd64.tar.gz
cd node_exporter-*.linux-amd64
```

2. **Move the Binary (optional but recommended):**

```bash
sudo mv node_exporter /usr/local/bin/
```

3. **Create a Node Exporter User:**

```bash
sudo useradd -rs /bin/false node_exporter
```

4. **Set Up as a Systemd Service:**
Create the file `/etc/systemd/system/node_exporter.service` and add:

```
[Unit]
Description=Node Exporter
Wants=network-online.target
After=network-online.target

[Service]
User=node_exporter
Group=node_exporter
Type=simple
ExecStart=/usr/local/bin/node_exporter

[Install]
WantedBy=multi-user.target
```

5. **Start and Enable the Service:**

```bash
sudo systemctl daemon-reload
sudo systemctl start node_exporter
sudo systemctl enable node_exporter
sudo systemctl status node_exporter
```

6. **Verify Operation:**
Open a browser and navigate to `http://<linux-vm-ip>:9100/metrics` to see the metrics endpoint[^1][^2][^3][^4][^5].

## Running Windows Exporter on Windows VMs

1. **Download the MSI installer:**
Get the latest Windows exporter MSI from the [official releases page](https://github.com/prometheus-community/windows_exporter/releases).
2. **Install the Exporter:**
    - Via GUI: Double-click the `.msi` installer and follow the prompts.
    - Via Command Line (as Administrator):

```
msiexec /i windows_exporter-<VERSION>-amd64.msi ENABLED_COLLECTORS="cpu,cs,logical_disk,net,os,service,system,textfile,container,memory" LISTEN_PORT="9182"
```

3. **Service Start:**
The installer will register and start `windows_exporter` as a Windows Service automatically.
4. **Verify Operation:**
From the VM, open a browser to
`http://localhost:9182/metrics`
or from the network to
`http://<windows-vm-ip>:9182/metrics`
to view metrics[^6][^7][^8][^9].

## Notes

- **Prometheus Configuration:**
Add your VM’s IP address and the relevant port to the Prometheus `scrape_configs` for automatic metric collection.
- **Security:**
If VMs are firewalled, ensure that port 9100 (Linux) or 9182 (Windows) is open to your Prometheus server.
- **Collectors:**
You can customize enabled collectors for Windows via the installer command line (see MSI option above).

**Summary:**

- **Linux:** Use `node_exporter` as a systemd service.
- **Windows:** Use `windows_exporter` installed as a Windows Service (MSI).
- Both expose metrics over HTTP for scraping by Prometheus.
This approach delivers consistent, cross-platform infrastructure metrics from all VM workloads.

<div style="text-align: center">⁂</div>

[^1]: https://prometheus.io/docs/guides/node-exporter/

[^2]: https://www.liquidweb.com/blog/install-prometheus-node-exporter-on-linux-almalinux/

[^3]: https://techdocs.broadcom.com/us/en/vmware-cis/aria/aria-operations-for-integrations/1-9/vrealize--operations-management-pack--for-pack-for-kubernetes-1-9/monitoring-kubernetes/monitoring-using-prometheus/sample-deployment-setups/node-exporter-setup-on-linux-nodes.html

[^4]: https://blog.devops.dev/cloud-monitoring-made-easy-setting-up-prometheus-grafana-and-node-exporter-on-an-azure-virtual-4c3c98ee408d

[^5]: https://www.virtualizationhowto.com/2023/01/prometheus-node-exporter-cadvisor-grafana-install-and-configure/

[^6]: https://grafana.com/grafana/dashboards/15620-windows-node-exporter/

[^7]: https://techdocs.broadcom.com/us/en/vmware-cis/aria/aria-operations-for-integrations/1-9/vrealize--operations-management-pack--for-pack-for-kubernetes-1-9/monitoring-kubernetes/monitoring-using-prometheus/sample-deployment-setups/windows-exporter-setup-on-windows-node.html

[^8]: https://www.alibabacloud.com/help/en/arms/prometheus-monitoring/how-do-i-install-and-configure-windows-exporter

[^9]: https://grafana.com/grafana/dashboards/14499-windows-node/

[^10]: https://developer.couchbase.com/tutorial-node-exporter-setup/

[^11]: https://shape.host/resources/comment-installer-prometheus-et-node-exporter-sur-debian-12

[^12]: https://github.com/prometheus/node_exporter

[^13]: https://blog.stephane-robert.info/post/homelab-prometheus-linux-node/

[^14]: https://grafana.com/docs/grafana-cloud/send-data/metrics/metrics-prometheus/prometheus-config-examples/docker-compose-linux/

[^15]: https://www.microfocus.com/documentation/filr/filr-23.4/monitor_health_graf_prom/t4m6qvaz71de.html

[^16]: https://nsrc.org/workshops/2021/sanog37/nmm/netmgmt/en/prometheus/ex-node-exporter.htm

[^17]: https://www.civo.com/learn/monitoring-linux-vm-with-prometheus-and-grafana

[^18]: https://betterstack.com/community/guides/monitoring/monitor-linux-prometheus-node-exporter/

[^19]: https://blog.alphorm.com/surveillance-node-exporter-prometheus-linux

[^20]: https://docs.centreon.com/pp/integrations/plugin-packs/procedures/applications-monitoring-node-exporter-windows/

