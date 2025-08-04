# RH OVE Ecosystem Sizing Plan

## Executive Summary

This document outlines the sizing estimates for the RH OVE Ecosystem implementation. It addresses the expected capacity and complexity for each sub-project. The plan ensures that proper resource allocation and infrastructure setups are achieved to meet performance and scalability demands.

** TO BE REVIEW FOR NODE SIZING **
---

## Infrastructure Sizing

**Scope**: Support up to 200 hybrid applications (containerized, PaaS, and VMs) and 2,000 virtual machines.

### Key Metrics
- **Application Types**: Hybrid, combining containers, PaaS services, and virtual machines.
- **Maximum Applications**: 200
- **Maximum Virtual Machines**: 2,000
- **Expected Compute Resources**: 
  - CPUs: Approximately 10,000 vCPUs
  - Memory: Approximately 20 TB RAM
  - Storage: Approximately 1 PB (Petabyte)
- **Network Capacity**: High-throughput connectivity with redundant failover capabilities.
- **Security and Compliance**: Adherence to regulatory standards with IAM components and network policies.

### Resource Allocation

#### Node Size Options

To optimize resource allocation and cost efficiency, three node size configurations are proposed:

##### Option 1: Small Nodes (Recommended for Development/Testing)
- **Node Configuration**: 16 vCPUs, 64 GB RAM, 1 TB NVMe SSD
- **Number of Nodes**: 625 nodes
- **Use Case**: Development environments, testing workloads, small applications
- **Cost Efficiency**: Lower initial investment, flexible scaling
- **Pros**: 
  - Lower hardware costs per node
  - Better granular scaling
  - Reduced blast radius for failures
- **Cons**: 
  - Higher management overhead
  - More network complexity

##### Option 2: Medium Nodes (Recommended for Production)
- **Node Configuration**: 32 vCPUs, 128 GB RAM, 2 TB NVMe SSD
- **Number of Nodes**: 313 nodes
- **Use Case**: Production workloads, hybrid applications, medium-scale VMs
- **Cost Efficiency**: Balanced performance and cost
- **Pros**: 
  - Optimal resource density
  - Balanced management overhead
  - Good performance isolation
- **Cons**: 
  - Higher individual node cost
  - Less flexible for small workloads

##### Option 3: Large Nodes (Recommended for High-Performance Workloads)
- **Node Configuration**: 64 vCPUs, 256 GB RAM, 4 TB NVMe SSD
- **Number of Nodes**: 157 nodes
- **Use Case**: High-performance applications, large VMs, compute-intensive workloads
- **Cost Efficiency**: Best performance per dollar for large workloads
- **Pros**: 
  - Maximum resource density
  - Lower management overhead
  - Best for large workloads
- **Cons**: 
  - Higher blast radius
  - Less flexibility for smaller workloads
  - Higher individual node investment

#### Recommended Hybrid Approach

**Distribution across clusters**:
- **Management Cluster**: 6 Medium nodes (dedicated for cluster management)
- **Production Clusters**: 
  - 60% Medium nodes (188 nodes) - Primary production workloads
  - 30% Large nodes (47 nodes) - High-performance applications
  - 10% Small nodes (62 nodes) - Development and testing

**Total Node Count**: 303 nodes
**Total Resources**: ~10,000 vCPUs, ~20 TB RAM, ~600 TB Storage

#### Network and Storage Specifications
- **Network Bandwidth**: Up to 40 Gbps per cluster
- **Storage IOPS**: Minimum 200,000 IOPS aggregate
- **Network Architecture**: 
  - 25 Gbps per node connectivity
  - Redundant spine-leaf topology
  - Dedicated storage network (10 Gbps)


### Application Gabari Descriptions

To ensure compatibility and optimal performance, applications are categorized based on typical resource demands and architectural patterns:

#### 1. Microservices Applications
- **Configuration**: Typically small, scalable units with minimal resource needs per instance (1-2 vCPUs, 2-4 GB RAM)
- **Key Considerations**: Designed for high scalability, containerized deployments, and stateless architecture
- **Use Cases**: Web services, REST APIs, lightweight backend services

#### 2. Monolithic Applications
- **Configuration**: Larger resource footprint with robust processing needs (4-8 vCPUs, 16-32 GB RAM)
- **Key Considerations**: May not scale horizontally; benefits from vertical scaling
- **Use Cases**: Legacy applications, computational intensive tasks, single-platform systems

#### 3. Distributed Applications
- **Configuration**: Moderate resources per service, optimized for distributed workload (2-4 vCPUs, 8-16 GB RAM per node)
- **Key Considerations**: Requires synchronization across nodes, often benefits from microservices/design separation
- **Use Cases**: Databases, clustered applications, interconnected services

#### 4. Resource-Intensive Applications
- **Configuration**: High-performance requirements, large scale of resources (8-16 vCPUs, 32-64 GB RAM)
- **Key Considerations**: Compute-intensive, may need specific hardware accelerators (e.g., GPUs)
- **Use Cases**: Data analytics, machine learning workloads, scientific computing 

---

## Migration Sizing

**Scope**: Plan for the migration of 1,000 virtual machines and 100 applications.

### Key Metrics
- **Virtual Machines**: 1,000
  - VM Types: Includes various OS types and legacy configurations
  - Average VM size: 4 vCPUs, 16 GB RAM per VM
  - Storage per VM: 500 GB
- **Applications**: 100
  - Application Types: Legacy, modern monoliths, and distributed services
- **Data Migration Volume**: 500 TB

### Migration Planning
- **Migration Waves**: 5 waves, 200 VMs + 20 Applications per wave
- **Expected Downtime**: Max 2 hours per application
- **Risk Mitigation**:
  - Pilot migrations for high-risk workloads
  - Rollback strategies for failed migrations

---

## Strategic Considerations

### Infrastructure
1. **Scalability**: Design to accommodate future growth up to 300 applications and 3,000 VMs.
2. **Redundancy**: Implement failover and disaster recovery protocols.
3. **Monitoring and Logging**: Comprehensive observability with real-time analytics.

### Migration
1. **Compatibility**: Analyze application dependencies and compatibility early.
2. **Data Integrity**: Ensure lossless data transfer methods.
3. **Operational Support**: Equip teams with runbooks for migration phases.

---

## Appendices

### Sizing Assumptions
- Based on existing organizational usage patterns and vendor best practices.

### Dependencies
- Align sizing with strategic initiatives.
- Regular reviews to anticipate scaling needs and compliance demands.

### Risk Factors
- Sizing models subject to change with evolving requirements and emerging technologies.
