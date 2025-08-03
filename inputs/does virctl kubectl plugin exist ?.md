<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# does virctl kubectl plugin exist ?

Yes, a **virtctl kubectl plugin exists!**

This plugin is officially called the **kubectl-virt** plugin and is provided by the KubeVirt project. It wraps the `virtctl` tool so you can use VM-specific operations (like start, stop, console, migrate, etc.) with familiar `kubectl` commands.

### Key points:

- **Installation:**
The plugin can be installed using the [`krew`](https://krew.sigs.k8s.io/) plugin manager for kubectl:

```
kubectl krew install virt
```

Once installed, you can use it as:

```
kubectl virt start <vm-name>
kubectl virt stop <vm-name>
kubectl virt console <vm-name>
# ...and many more
```

Run `kubectl virt help` to list all available commands.
- **How it works:**
The plugin is a wrapper for the `virtctl` binary. It brings all `virtctl` features (start, stop, migrate, console, expose, image upload, etc.) directly into the `kubectl` command-line experience[^1][^2][^3][^4].
- **Requirements:**
    - You must have `krew` installed.
    - Your cluster must have KubeVirt (or RH OVE/OpenShift Virtualization) deployed.
- **Documentation:**
The KubeVirt user guide and official GitHub repo provide full documentation and usage examples[^1][^2][^5].

**In summary:**
The `kubectl virt` plugin (powered by virtctl) is the easiest and most integrated way to manage KubeVirt/RH OVE VMs right from your kubectl CLI. It is widely used and fully supported for modern Kubernetes virtualization management[^1][^2][^5][^4].

<div style="text-align: center">⁂</div>

[^1]: https://github.com/kubevirt/kubectl-virt-plugin

[^2]: https://kubevirt.io/user-guide/user_workloads/virtctl_client_tool/

[^3]: https://kubevirt.io/quickstart_kind/

[^4]: https://pkg.go.dev/kubevirt.io/kubevirt/pkg/virtctl

[^5]: https://github.com/kubevirt/kubectl-virt-plugin/releases

[^6]: https://blog.stephane-robert.info/docs/virtualiser/hyperconverge/kubevirt/

[^7]: https://www.vcluster.com/docs/vcluster/integrations/kubevirt

[^8]: https://cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/quickstart

[^9]: https://www.flamingbytes.com/blog/using-virtctl-to-access-virtual-machine-in-kubernetes/

[^10]: https://docs.storageos.com/docs/usecases/kubevirt/

[^11]: https://kubevirt.io/user-guide/user_workloads/creating_vms/

[^12]: https://artifacthub.io/packages/krew/krew-index/virt

[^13]: https://github.com/kubevirt/kubevirt.github.io/blob/main/_includes/quickstarts/virtctl.md

[^14]: https://blog.wescale.fr/découverte-de-kubevirt-des-machines-virtuelles-sur-kubernetes

[^15]: https://www.kubermatic.com/blog/bringing-your-vms-to-kubernetes-with-kubevirt/

