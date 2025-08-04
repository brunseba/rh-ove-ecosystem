# Glossary

## Overview

This glossary provides definitions for key terms and concepts used throughout the RH OVE ecosystem documentation.

## A

**Admission Control**
: A Kubernetes mechanism that validates and mutates API requests before they are persisted to etcd. In RH OVE, this includes OpenShift built-in controllers, KubeVirt webhooks, and Kyverno policies.

**Ansible**
: An open-source, agentless IT automation tool used for configuration management, application deployment, orchestration, and task automation across multiple systems.

**Argo CD**
: A declarative GitOps continuous delivery tool for Kubernetes that automatically synchronizes applications with their desired state defined in Git repositories.

## B

**Backup Policy**
: A set of rules and schedules that define how, when, and what data should be backed up in the RH OVE environment, typically managed by Rubrik.

## C

**CDI (Containerized Data Importer)**
: A Kubernetes extension that provides facilities for enabling Persistent Volume Claims (PVCs) to be used as disks for KubeVirt VMs by importing, uploading, and cloning disk images.

**Cilium**
: An open-source software for providing and transparently securing network connectivity and load balancing between application workloads using eBPF technology.

**CMDB (Configuration Management Database)**
: A repository that acts as a data warehouse for IT installations, containing information about configuration items and their relationships, often integrated with ServiceNow.

**CNI (Container Network Interface)**
: A specification and libraries for writing plugins to configure network interfaces in Linux containers, with Cilium being the recommended CNI for RH OVE.

**CRD (Custom Resource Definition)**
: A Kubernetes extension mechanism that allows users to define custom resources that extend the Kubernetes API, extensively used in KubeVirt for VM management.

**CSI (Container Storage Interface)**
: A standard for exposing arbitrary block and file storage systems to containerized workloads on Kubernetes, enabling storage vendors to develop plugins that work across different container orchestration systems.

## D

**DataVolume**
: A KubeVirt CRD that provides a declarative way to import, upload, and clone data into PVCs, serving as the primary storage mechanism for VM disks.

**Day-2 Operations**
: Post-deployment operational activities including maintenance, monitoring, updates, scaling, and optimization of the RH OVE environment.

**Dynatrace**
: An application performance monitoring and observability platform that provides full-stack monitoring for RH OVE environments.

## E

**eBPF (extended Berkeley Packet Filter)**
: A kernel technology that allows programs to run in kernel space without changing kernel source code or loading kernel modules, used by Cilium for high-performance networking.

**etcd**
: A distributed, reliable key-value store used by Kubernetes to store all cluster data, providing a consistent and highly-available data store for cluster state.

## G

**GitOps**
: An operational framework that takes DevOps best practices used for application development and applies them to infrastructure automation, using Git as the single source of truth.

**Grafana**
: An open-source platform for monitoring and observability that enables visualization, alerting, and exploration of metrics from multiple data sources including Prometheus, Elasticsearch, and others.

## H

**Hugepages**
: Large memory pages that can improve performance for memory-intensive applications by reducing memory management overhead in virtual machines.

**Hubble**
: The network observability layer for Cilium that provides deep visibility into network flows, security policies, and performance metrics.

**Helm**
: A Kubernetes package manager that helps you manage Kubernetes applications through charts, which are packages of pre-configured Kubernetes resources.

**HyperConverged**
: A top-level CRD in OpenShift Virtualization that manages the deployment and configuration of all virtualization components.

## I

**Ingress**
: A Kubernetes API object that manages external access to services in a cluster, typically HTTP, providing load balancing, SSL termination, and name-based virtual hosting.

**Istio**
: An open-source service mesh that provides a uniform way to secure, connect, and monitor microservices, offering traffic management, security, and observability features.

## K

**KubeVirt**
: An open-source Kubernetes add-on that enables running virtual machines alongside containers in a Kubernetes cluster, forming the foundation of OpenShift Virtualization.

**Karmada**
: A Kubernetes management system that enables multi-cluster application management and provides centralized control plane for managing workloads across multiple Kubernetes clusters.

**Kyverno**
: A policy engine designed for Kubernetes that validates, mutates, and generates configurations using admission controller webhooks and background scans.

## M

**MacVLAN**
: A Linux networking driver that allows creating multiple virtual network interfaces with different MAC addresses on a single physical network interface, commonly used with Multus for VM networking.

**Multus CNI**
: A Container Network Interface (CNI) plugin that enables attachment of multiple network interfaces to pods and VMs in Kubernetes, allowing complex networking scenarios beyond single-network configurations.

## N

**NAD (Network Attachment Definition)**
: See NetworkAttachmentDefinition.

**NetworkAttachmentDefinition**
: A CRD used by Multus that defines additional network interfaces for pods and VMs, enabling multi-network configurations beyond the default cluster network.

**Network Plumbing Working Group**
: A Kubernetes community working group focused on developing networking enhancements, including Multus CNI and related multi-networking technologies.

**NUMA (Non-Uniform Memory Access)**
: A computer memory design used in multiprocessing where memory access time depends on the memory location relative to the processor, important for VM performance tuning.

## O

**OLM (Operator Lifecycle Manager)**
: A component of the Operator Framework that helps users install, update, and manage the lifecycle of Kubernetes operators and their associated services.

**OpenShift Virtualization**
: Red Hat's enterprise virtualization solution that allows running virtual machines alongside containers on the same OpenShift platform.

## P

**Prometheus**
: An open-source systems monitoring and alerting toolkit with a dimensional data model, flexible query language (PromQL), efficient time series database, and modern alerting approach.

**PVC (Persistent Volume Claim)**
: A request for storage by a user or application in Kubernetes, used extensively in RH OVE for VM disk storage.

## Q

**QEMU Guest Agent**
: A daemon that runs inside virtual machines to provide enhanced integration between the VM and the hypervisor, enabling better monitoring and management.

## R

**RBAC (Role-Based Access Control)**
: A method of restricting system access to authorized users based on their roles within an organization, fundamental to multi-tenant security in RH OVE.

**RH OVE (Red Hat OpenShift Virtualization Engine)**
: Red Hat's solution for running virtual machines on OpenShift, based on the upstream KubeVirt project.

**Rubrik**
: An enterprise data management platform that provides backup, recovery, and data protection services, certified for integration with RH OVE.

## S

**ServiceNow**
: An IT service management platform that provides CMDB functionality and can be integrated with RH OVE for automated configuration tracking.

**SR-IOV (Single Root I/O Virtualization)**
: A specification that allows efficient sharing of PCIe devices between virtual machines, enabling high-performance networking for VMs.

## T

**Tekton**
: A Kubernetes-native open-source framework for creating continuous integration and delivery (CI/CD) systems, allowing developers to build, test, and deploy applications.

**Terraform**
: An open-source infrastructure as code tool that allows users to define and provision data center infrastructure using a declarative configuration language.

## V

**VirtualMachine (VM)**
: A KubeVirt CRD that represents a virtual machine definition, including CPU, memory, storage, and network configurations.

**VirtualMachineInstance (VMI)**
: A KubeVirt CRD that represents a running virtual machine instance, showing the actual runtime state of a VM.

**VirtualMachineInstanceReplicaSet**
: A KubeVirt CRD that ensures a specified number of VMI replicas are running, similar to Kubernetes ReplicaSets for pods.

**virtctl**
: A command-line tool for managing KubeVirt virtual machines, providing functionality to start, stop, console access, and manage VMs.

**VLAN (Virtual Local Area Network)**
: A network configuration that enables the logical partitioning of a physical network into multiple broadcast domains, improving security and network management.

**VPC (Virtual Private Cloud)**
: A logically isolated section of a cloud provider's infrastructure where users can launch resources in a virtual network that they define.

## W

**WebAssembly (WASM)**
: A binary instruction format for a stack-based virtual machine that enables high-performance applications on web browsers and server environments, increasingly used for cloud-native applications.

## Common Acronyms

- **ADR**: Architecture Decision Record
- **API**: Application Programming Interface
- **CDI**: Containerized Data Importer
- **CI/CD**: Continuous Integration/Continuous Deployment
- **CMDB**: Configuration Management Database
- **CNI**: Container Network Interface
- **CPU**: Central Processing Unit
- **CRD**: Custom Resource Definition
- **CSI**: Container Storage Interface
- **DNS**: Domain Name System
- **HA**: High Availability
- **IAM**: Identity and Access Management
- **I/O**: Input/Output
- **IOPS**: Input/Output Operations Per Second
- **ITSM**: IT Service Management
- **JSON**: JavaScript Object Notation
- **LDAP**: Lightweight Directory Access Protocol
- **NFS**: Network File System
- **OAuth**: Open Authorization
- **OIDC**: OpenID Connect
- **OLM**: Operator Lifecycle Manager
- **RBAC**: Role-Based Access Control
- **REST**: Representational State Transfer
- **SAML**: Security Assertion Markup Language
- **SIEM**: Security Information and Event Management
- **SLA**: Service Level Agreement
- **SSD**: Solid State Drive
- **TLS**: Transport Layer Security
- **VLAN**: Virtual Local Area Network
- **VM**: Virtual Machine
- **VMI**: Virtual Machine Instance
- **VPC**: Virtual Private Cloud
- **WAF**: Web Application Firewall
- **WASM**: WebAssembly
- **YAML**: YAML Ain't Markup Language

This glossary provides essential terminology for understanding and working with the RH OVE ecosystem. Terms are regularly updated as the technology and documentation evolve.
