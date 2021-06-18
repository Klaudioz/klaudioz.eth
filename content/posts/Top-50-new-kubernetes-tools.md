---
id: 4
title: Top 50 new lightweight kubernetes tools
createdAt: "2020-09-21 18:45:00"
tags:
  - Kubernetes
  - Tools
category: List
author:
  name: Klaudioz
  twitter: klaudioz
  image: /images/bigheadkarngyan.png
---

In this post I filtered out a big collection about new useful tools to work with Kubernetes. I used the following criteria to select them:

- Open source projects hosted in Github.
- More than 50 stars but less than 10000 to exclude very popular tools like: [helm](https://github.com/helm/helm), [kustomize](https://github.com/kubernetes-sigs/kustomize), [loki](https://github.com/grafana/loki), [lens](https://github.com/lensapp/lens), [kind](https://github.com/kubernetes-sigs/kind), etc.
- Last commit not old than 3 months.
<!--more-->
The motivation to create this list was feeling overwhelmed with the amount of new Kubernetes tools you can see every day so making a sorted list managing this knowledge can be done easily.
So, this is the final list without any particular sorting except the name of the categories:

## Alerting

- [k8s-image-availability-exporter](https://github.com/flant/k8s-image-availability-exporter): Alert if an image used in Kubernetes cannot be pulled from container registry.

## Backup

- [k8s-snapshots](https://github.com/miracle2k/k8s-snapshots): Automatic Volume Snapshots on Kubernetes.
- [stash](https://github.com/stashed/stash): Backup Kubernetes Stateful Applications.

## Best practices

- [polaris](https://github.com/FairwindsOps/polaris): Validation of best practices in your Kubernetes clusters.

## Chaos engineering

- [litmus](https://github.com/litmuschaos/litmus): It helps Kubernetes SREs and developers practice chaos engineering in a Kubernetes native way.

## CLI tools

- [kubectx](https://github.com/ahmetb/kubectx): Faster way to switch between clusters and namespaces in kubectl
- [kube-ps1](https://github.com/jonmosco/kube-ps1): Kubernetes prompt info for bash and zsh
- [yh](https://github.com/andreazorzetto/yh): YAML syntax highlighter to bring colours where only jq could.
- [chart-testing](https://github.com/helm/chart-testing): CLI tool for linting and testing Helm charts.
- [pluto](https://github.com/FairwindsOps/pluto): A cli tool to help discover deprecated apiVersions in Kubernetes.
- [kubeletctl](https://github.com/cyberark/kubeletctl): It's a CLI tool that implement kubelet's API.
- [podtnl](https://github.com/narendranathreddythota/podtnl): CLI tool that makes your pod available online without exposing a Kubernetes service.
- [kubie](https://github.com/sbstp/kubie): A more powerful alternative to kubectx and kubens.
- [kubectl-fuzzy](https://github.com/d-kuro/kubectl-fuzzy): This tool uses fzf(1)-like fuzzy-finder to do partial or fuzzy search of Kubernetes Resources.

## Cluster management

- [arktos](https://github.com/futurewei-cloud/arktos): It's an open source cluster management system designed for large scale clouds addressing key challenges of large scale clouds, including system scalability, resource efficiency, multitenancy, etc.
- [cluster-turndown](https://github.com/kubecost/cluster-turndown): Automated turndown of Kubernetes clusters on specific schedules.
- [kubermatic](https://github.com/kubermatic/kubermatic): Kubermatic Kubernetes Platform - the Central Kubernetes Management Platform for any infrastructure.
- [KubeCarrier](https://github.com/kubermatic/kubecarrier): It's a system for managing applications and services across multiple Kubernetes Clusters; providing a framework to centralize the management of services and provide these services with external users in a self service catalog.
- [wksctl](https://github.com/weaveworks/wksctl): Allows simple creation of a Kubernetes cluster given a set of IP addresses and an SSH key. It can be run in a standalone environment but is best used via a GitOps approach in which cluster and machine descriptions are stored in Git.

## Container registry

- [sinker](https://github.com/plexsystems/sinker): A tool to sync images from one container registry to another.

## Costs

- [cost-model](https://github.com/kubecost/cost-model): Cross-cloud cost allocation models for workloads running on Kubernetes.

## Deployment

- [k8s-worker-pod-autoscaler](https://github.com/practo/k8s-worker-pod-autoscaler): It scales the replicas in a deployment based on observed queue length.
- [pangolin](https://github.com/dpeckett/pangolin): It's an enhanced Horizontal Pod Autoscaler for Kubernetes. Pangolin scales deployments based on their Prometheus metrics, using a variety of highly configurable control strategies.
- [beetle](https://github.com/Clivern/Beetle): Kubernetes multi-cluster deployment automation service.

## Documentation

- [helm-docs](https://github.com/norwoodj/helm-docs): A tool for automatically generating markdown documentation for helm charts.
- [chart-doc-gen](https://github.com/kubepack/chart-doc-gen): Helm Chart documentation generator.

## GitOps

- [flux](https://github.com/fluxcd/flux): The GitOps Kubernetes operator.

## Kubernetes as a service

- [oneinfra](https://github.com/oneinfra/oneinfra): Tool designed to orchestrate fleet of Kubernetes clusters. You can control cloud as well as on-prem clusters.

## Kubernetes API

- [Deprek8ion](https://github.com/swade1987/deprek8ion): Rego policies to monitor Kubernetes APIs deprecations.

## Logging

- [kube-fluentd-operator](https://github.com/vmware/kube-fluentd-operator): Auto-configuration of Fluentd daemon-set based on Kubernetes metadata.

## Monitoring

- [botkube](https://github.com/infracloudio/botkube): It helps you monitor your Kubernetes cluster, debug critical deployments & gives recommendations for standard practices.
- [kube-prometheus](https://github.com/prometheus-operator/kube-prometheus): Use Prometheus to monitor Kubernetes and applications running on Kubernetes

## Networking

- [ktunnel](https://github.com/omrikiei/ktunnel): A cli that exposes your local resources to kubernetes. It's convenient replacement for ngrok.
- [kubetap](https://github.com/soluble-ai/kubetap): Kubectl plugin to interactively proxy Kubernetes Services with ease.

## Operator

- [capsule](https://github.com/clastix/capsule): It's a Kubernetes multi-tenant Operator. It can workaround the flat structure of namespaces in Kubernetes by introducing an abstraction called Tenant. Within each tenant, users are free to create their namespaces and share all the assigned resources.
- [operator-lifecycle-manager](https://github.com/operator-framework/operator-lifecycle-manager): A management framework for extending Kubernetes with Operators.
- [registry-creds](https://github.com/alexellis/registry-creds): Automate Kubernetes registry credentials, to extend Docker Hub limits.

## Secrets

- [Secrets Store CSI](https://github.com/kubernetes-sigs/secrets-store-csi-driver): Secrets Store CSI driver for Kubernetes secrets - Integrates secrets stores with Kubernetes via a CSI volume.

## Security

- [krane](https://github.com/appvia/krane): It's a Kubernetes RBAC static analysis tool. It identifies potential security risks in K8s RBAC design and makes suggestions on how to mitigate them. Krane dashboard presents current RBAC security posture and lets you navigate through its definition.
- [kubiscan](https://github.com/cyberark/KubiScan): A tool to scan Kubernetes cluster for risky permissions (RBAC).
- [ThreatMapper](https://github.com/deepfence/ThreatMapper): It identifies vulnerabilities in running containers, images, hosts and repositories.
- [dast-operator](https://github.com/banzaicloud/dast-operator): Dynamic Application and API Security Testing.
- [mkit](https://github.com/darkbitio/mkit): MKIT is a Managed Kubernetes Inspection Tool that validates several common security-related configuration settings of managed Kubernetes cluster objects and the workloads/resources running inside the cluster.
- [k-rail](https://github.com/cruise-automation/k-rail): Kubernetes security tool for policy enforcement.

## Sign-on

- [authelia](https://github.com/authelia/authelia): The Single Sign-On Multi-Factor portal for web apps.

## Storage

- [kubefs](https://github.com/configurator/kubefs): Mount kubernetes metadata storage as a filesystem.
- [dynamic-pv-scaler](https://github.com/opstree/dynamic-pv-scaler): It's a golang based Kubernetes application which has been created to overcome the scaling issue of Persistent Volume in Kubernetes. This can scale the Persistent Volume on the basis of threshold which you have set.

## Testing

- [kconmon](https://github.com/Stono/kconmon): It's a Kubernetes node connectivity tool that performs frequent tests (tcp, udp and dns), and exposes Prometheus metrics.

## Visualization

- [k1s](https://github.com/weibeld/k1s): It's the world's simplest Kubernetes dashboard with only 30 lines of bash code.
- [allok8](https://github.com/oslabs-beta/Allok8): It's a dynamic, conventional, and uncomplicated web-based UI Kubernetes visualization tool.


I hope you can find something new and interesting in this list to help you to manage in a more efficient way anything related with Kubernetes. If you have any comments or suggestions please leave a comment.
