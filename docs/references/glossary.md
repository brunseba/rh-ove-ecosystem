# Glossary

## Overview

This glossary provides definitions for key terms and concepts used throughout the RH OVE ecosystem documentation.

## A

**Admission Control**
: A Kubernetes mechanism that validates and mutates API requests before they are persisted to etcd. In RH OVE, this includes OpenShift built-in controllers, KubeVirt webhooks, and Kyverno policies.

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

## G

**GitOps**
: An operational framework that takes DevOps best practices used for application development and applies them to infrastructure automation, using Git as the single source of truth.

## H

**Hugepages**
: Large memory pages that can improve performance for memory-intensive applications by reducing memory management overhead in virtual machines.

**Hubble**
: The network observability layer for Cilium that provides deep visibility into network flows, security policies, and performance metrics.

**HyperConverged**
: A top-level CRD in OpenShift Virtualization that manages the deployment and configuration of all virtualization components.

## K

**KubeVirt**
: An open-source Kubernetes add-on that enables running virtual machines alongside containers in a Kubernetes cluster, forming the foundation of OpenShift Virtualization.

**Kyverno**
: A policy engine designed for Kubernetes that validates, mutates, and generates configurations using admission controller webhooks and background scans.

## N

**NetworkAttachmentDefinition**
: A CRD that defines additional network interfaces for pods and VMs, enabling multi-network configurations beyond the default cluster network.

**NUMA (Non-Uniform Memory Access)**
: A computer memory design used in multiprocessing where memory access time depends on the memory location relative to the processor, important for VM performance tuning.

## O

**OpenShift Virtualization**
: Red Hat's enterprise virtualization solution that allows running virtual machines alongside containers on the same OpenShift platform.

## P

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

## V

**VirtualMachine (VM)**
: A KubeVirt CRD that represents a virtual machine definition, including CPU, memory, storage, and network configurations.

**VirtualMachineInstance (VMI)**
: A KubeVirt CRD that represents a running virtual machine instance, showing the actual runtime state of a VM.

**VirtualMachineInstanceReplicaSet**
: A KubeVirt CRD that ensures a specified number of VMI replicas are running, similar to Kubernetes ReplicaSets for pods.

**virtctl**
: A command-line tool for managing KubeVirt virtual machines, providing functionality to start, stop, console access, and manage VMs.

## Common Acronyms

- **API**: Application Programming Interface
- **CDI**: Containerized Data Importer
- **CMDB**: Configuration Management Database
- **CNI**: Container Network Interface
- **CPU**: Central Processing Unit
- **CRD**: Custom Resource Definition
- **DNS**: Domain Name System
- **HA**: High Availability
- **I/O**: Input/Output
- **IOPS**: Input/Output Operations Per Second
- **ITSM**: IT Service Management
- **JSON**: JavaScript Object Notation
- **LDAP**: Lightweight Directory Access Protocol
- **NFS**: Network File System
- **OIDC**: OpenID Connect
- **RBAC**: Role-Based Access Control
- **REST**: Representational State Transfer
- **SLA**: Service Level Agreement
- **SSD**: Solid State Drive
- **TLS**: Transport Layer Security
- **VM**: Virtual Machine
- **VMI**: Virtual Machine Instance
- **YAML**: YAML Ain't Markup Language

This glossary provides essential terminology for understanding and working with the RH OVE ecosystem. Terms are regularly updated as the technology and documentation evolve.
