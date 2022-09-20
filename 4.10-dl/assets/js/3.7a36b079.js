(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{275:function(e,t,a){e.exports=a.p+"assets/img/f9.f0b50a3a.png"},276:function(e,t,a){e.exports=a.p+"assets/img/f10.382041d4.png"},277:function(e,t,a){e.exports=a.p+"assets/img/f11.f3c07a59.png"},278:function(e,t,a){e.exports=a.p+"assets/img/f12.3815236b.png"},279:function(e,t,a){e.exports=a.p+"assets/img/f13.97a4f304.png"},280:function(e,t,a){e.exports=a.p+"assets/img/f14.ece7c8a4.png"},281:function(e,t,a){e.exports=a.p+"assets/img/f15.032fabde.png"},282:function(e,t,a){e.exports=a.p+"assets/img/f16.a370b322.png"},283:function(e,t,a){e.exports=a.p+"assets/img/f17.6f0fc1cd.png"},284:function(e,t,a){e.exports=a.p+"assets/img/f18.83144001.png"},304:function(e,t,a){"use strict";a.r(t);var s=a(13),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("strong",[e._v("Deploying HPE CSI Driver for HPE Alletra storage on RH OCP 4.10")])]),e._v(" "),t("p",[e._v("This section describes how to deploy HPE CSI Driver for HPE Alletra storage on an existing RH OCP 4.10.")]),e._v(" "),t("p",[e._v("Prerequisites:")]),e._v(" "),t("p",[e._v("Before configuring the HPE CSI Driver, the following prerequisites must be met:")]),e._v(" "),t("ol",[t("li",[e._v("RH OCP 4.10 must be successfully deployed, and console should be accessible.")]),e._v(" "),t("li",[e._v("iSCSI interface must be configured on the HPE Alletra Storage array. For more information, see the "),t("a",{attrs:{href:"https://hpe.sharepoint.com/:b:/s/msteams_40dd8a/ERiwCoHIVKtArjql9ECPvtcBL2elYoXKiCZfEUKbbkxLHg?e=aoDytU",target:"_blank",rel:"noopener noreferrer"}},[e._v("Infrastructure Master Reference Architecture based on HPE Alletra 6000"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("Additional iSCSI network interfaces must be configured on physical worker nodes.")]),e._v(" "),t("li",[e._v("Deploy scc.yaml file to enable Security Context Constraints (SCC).")])]),e._v(" "),t("p",[t("strong",[e._v("Configuring iSCSI interface on worker nodes")])]),e._v(" "),t("p",[e._v("The RH OCP 4.10 cluster comprises the master and physical worker nodes with RHEL 8.5 deployed as the operating system. The iSCSI interface is configured on the host nodes to establish the connection with the HPE Alletra array to the cluster. Apart from the host nodes, additional iSCSI interface needs to be configured on all the worker (physical and virtual) nodes for establishing the connection between the RH OCP cluster and HPE Alletra arrays.")]),e._v(" "),t("p",[e._v("To configure iSCSI interface on physical RHEL worker nodes:")]),e._v(" "),t("ul",[t("li",[e._v("Configure iSCSI A connection as a storage interface and iSCSI B connection as an additional storage for redundancy.")])]),e._v(" "),t("p",[e._v("For example, the iSCSI_A and iSCSI_B interface connection is configured on worker1 node, as shown in Figure 9.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(275),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("FIGURE 9.")]),e._v(" iSCSI_A and iSCSI_B interface connection")]),e._v(" "),t("p",[t("strong",[e._v("Creating namespace")])]),e._v(" "),t("p",[e._v("To create a namespace, in this case, hpe-csi:")]),e._v(" "),t("ol",[t("li",[e._v("Open Red Hat OpenShift Container Platform Console on a supported web browser.")]),e._v(" "),t("li",[e._v("Click Administration → Namespaces on the left pane.")]),e._v(" "),t("li",[e._v("Click Create Namespaces.")]),e._v(" "),t("li",[e._v("On the Create Namespace dialog box, enter hpe-csi.")]),e._v(" "),t("li",[e._v("Click Create.")])]),e._v(" "),t("p",[t("strong",[e._v("Deploying Security Context Constraints (SCC)")])]),e._v(" "),t("p",[e._v("The HPE CSI Driver needs to run in the privileged mode to get access to the host ports, host network, and to mount the host path volume. Before deploying HPE CSI Driver operator on RH OCP cluster, deploy SCC to allow HPE CSI Driver to run with these privileges.")]),e._v(" "),t("p",[e._v("Prerequisites:")]),e._v(" "),t("ul",[t("li",[e._v("Ensure that you can access the scc.yaml file from the following GitHub link:")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://raw.githubusercontent.com/hpe-storage/co-deployments/master/operators/hpe-csi-operator/deploy/scc.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://raw.githubusercontent.com/hpe-storage/co-deployments/master/operators/hpe-csi-operator/deploy/scc.yaml"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("To deploy SCC:")]),e._v(" "),t("ol",[t("li",[e._v("On the installer VM, download scc.yaml file from the "),t("a",{attrs:{href:"https://raw.githubusercontent.com/hpe-storage/co-deployments/master/operators/hpe-csi-operator/deploy/scc.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),t("OutboundLink")],1),e._v(" link using the following command:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-sL")]),e._v(" https://raw.githubusercontent.com/hpe-storage/co-deployments/master/operators/hpe-csi-operator/deploy/scc.yaml "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" hpe-csi-scc.yaml \n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Edit relevant parameters such as project name or namespace in the hpe-csi-scc.yaml file.")]),e._v(" "),t("li",[e._v("Change my-hpe-csi-operator to the name of the project (in this case, hpe-csi) where the CSI Operator is being deployed using the following command:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# oc new-project hpe-csi --display-name=”HPE CSI Driver for Kubernetes" ')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# sed -i'' -e 's/my-hpe-csi-driver-operator/hpe-csi/g' hpe-csi-scc.yaml ")]),e._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Save the file.")])]),e._v(" "),t("p",[e._v("The following figure illustrates the parameter that needs to be edited (project name) where the HPE CSI Driver operator is deployed:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(276),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("FIGURE 10.")]),e._v(" Editing hpe-cs-scc.yaml file")]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Deploy SCC using the following command and check the output:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# oc create -f hpe-csi-scc.yaml ")]),e._v("\n")])])]),t("p",[e._v("The following output is displayed:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("securitycontextconstraints.security.openshift.io/hpe-csi-scc created \n")])])]),t("p",[t("strong",[e._v("Installing and configuring HPE CSI Driver")])]),e._v(" "),t("p",[t("strong",[e._v("NOTE")])]),e._v(" "),t("p",[e._v("HPE CSI Driver version 2.2 is used for deploying HPE Alletra Storage on the RH OCP 4.10.")]),e._v(" "),t("p",[e._v("Prerequisites:")]),e._v(" "),t("p",[e._v("Before installing the HPE CSI Driver from the Red Hat OpenShift Container Platform Console:")]),e._v(" "),t("ul",[t("li",[e._v("Create a namespace for HPE CSI Driver.")]),e._v(" "),t("li",[e._v("Deploy SCC for the created namespace.")])]),e._v(" "),t("p",[e._v("Installing HPE CSI Driver Operator using Red Hat OperatorHub")]),e._v(" "),t("p",[e._v("To install HPE CSI Driver Operator from the Red Hat OperatorHub:")]),e._v(" "),t("ol",[t("li",[e._v("Log in to the Red Hat OpenShift Container Platform Console.")]),e._v(" "),t("li",[e._v("Navigate to Operators → OperatorHub.")]),e._v(" "),t("li",[e._v("Search for HPE CSI Driver Operator from the list of operators and click HPE CSI Driver Operator.")]),e._v(" "),t("li",[e._v("On the HPE CSI Operator for Kubernetes page, click Install.")])]),e._v(" "),t("p",[t("img",{attrs:{src:a(277),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("FIGURE 11.")]),e._v(" HPE CSI Driver Operator search")]),e._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[e._v("On the Create Operator Subscription page, select the appropriate options:")]),e._v(" "),t("li",[t("code"),e._v("Select “A specific namespace on the cluster” in the Installation Mode option.")]),e._v(" "),t("li",[e._v("Select the appropriate namespace (in this case, hpe-csi) in the Installed Namespace option.")]),e._v(" "),t("li",[e._v("Select “stable” in the Update Channel option.")]),e._v(" "),t("li",[e._v("Select “Automatic” in the Approval Strategy option.")])]),e._v(" "),t("p",[t("img",{attrs:{src:a(278),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("FIGURE 12.")]),e._v(" Create Operator Subscription")]),e._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[e._v("Click** Subscribe.")]),e._v(" "),t("li",[e._v("The Installed Operators page is displayed with the status of the operator.")])]),e._v(" "),t("p",[t("img",{attrs:{src:a(279),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("FIGURE 13.")]),e._v(" Installed Operators")]),e._v(" "),t("p",[e._v("Creating HPE CSI Driver")]),e._v(" "),t("p",[e._v("The HPE CSI Driver is a multi-vendor and multi-backend driver where each implementation has a Container Storage Provider (CSP). The HPE CSI Driver for Kubernetes uses CSP to perform data management operations on storage resources such as searching for a logical unit number (lun) and so on. The HPE CSI Driver allows any vendor or project to develop its own CSP using the "),t("a",{attrs:{href:"https://developer.hpe.com/api/hpe-nimble-csp/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSP specification"),t("OutboundLink")],1),e._v(". It enables the third parties to integrate their storage solution into Kubernetes and takes care of all the intricacies.")]),e._v(" "),t("p",[e._v("To create the HPE CSI Driver:")]),e._v(" "),t("ol",[t("li",[e._v("Log in to the Red Hat OpenShift Container Platform Console.")]),e._v(" "),t("li",[e._v("Navigate to Operators → Installed Operators on the left pane to view the installed operators.")]),e._v(" "),t("li",[e._v("On the Installed Operators page, select HPECSIDriver from the Project drop-down list to switch to the hpe-csi project.")]),e._v(" "),t("li",[e._v("On the hpe-csi project, select HPECSIDriver tab.")]),e._v(" "),t("li",[e._v("Click Create HPECSIDriver.")]),e._v(" "),t("li",[e._v("Click Create.")])]),e._v(" "),t("p",[t("img",{attrs:{src:a(280),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("FIGURE 14.")]),e._v(" HPE CSI Driver creation")]),e._v(" "),t("p",[e._v("Verifying HPECSIDriver configuration")]),e._v(" "),t("p",[e._v("After the HPECSIDriver is deployed, the deployment pods such as hpe-csi-controller, hpe-csi-driver, primera3par-csp, and Nimble-csp are displayed on the Pods page.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(281),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("FIGURE 15.")]),e._v(" Deployment pods for HPECSIDriver")]),e._v(" "),t("p",[t("strong",[e._v("NOTE")])]),e._v(" "),t("p",[e._v("The Nimble Storage CSP also supports HPE Alletra 6000.")]),e._v(" "),t("p",[e._v("To verify the HPE CSI node information:")]),e._v(" "),t("ol",[t("li",[e._v("On the installer VM, check HPENodeInfo and network status of worker nodes with the following commands.")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# oc get HPENodeInfo ")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# oc get HPENodeInfo/<workernode fqdn> -o yaml ")]),e._v("\n")])])]),t("p",[e._v("The following output is displayed:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(282),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("FIGURE 16.")]),e._v(" HPENodeInfo on the cluster")]),e._v(" "),t("p",[t("strong",[e._v("Creating HPE Alletra StorageClass")])]),e._v(" "),t("p",[e._v("After HPE CSI Driver is deployed, two additional objects, Secret and StorageClass, must be created to initiate the provisioning of persistent storage.")]),e._v(" "),t("p",[e._v("Creating Alletra Secret")]),e._v(" "),t("p",[e._v("To create a new Alletra Secret via CLI:")]),e._v(" "),t("ol",[t("li",[e._v("Add the name, Namespace, backend username, backend password and the backend IP address in the Alletra-secret.yaml file and save it to be used by the CSP.")])]),e._v(" "),t("p",[e._v("The following details are provided in the Alletra-secret.yaml file:")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" v1 \n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Secret \n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" \n\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" alletra"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("secret \n\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" hpe"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("csi \n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("stringData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" \n\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("serviceName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" alletra"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("csp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("svc \n\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("servicePort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(' “8080" \n\n  '),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("backend")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" alletramgmtip      "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# update alletramgmt ip ")]),e._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("username")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" admin \n\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" admin \n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Create the Alletra-secret.yaml file with the following command:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# oc create -f Alletra-secret.yaml ")]),e._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("The following output displays the status of the alletra-secret with the “hpe-csi” namespace.")])]),e._v(" "),t("p",[t("img",{attrs:{src:a(283),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("FIGURE 17.")]),e._v(" HPE Alletra Secret status")]),e._v(" "),t("p",[e._v("Creating StorageClass with HPE Alletra Secret")]),e._v(" "),t("p",[e._v("This section describes how to create a new StorageClass using the existing Alletra-secret and the necessary StorageClass parameters.")]),e._v(" "),t("p",[e._v("To create a new StorageClass using the Alletra-secret:")]),e._v(" "),t("ol",[t("li",[e._v("Edit the following parameters in the Alletra-storageclass.yaml file:")])]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" storage.k8s.io/v1 \n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" StorageClass \n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" \n\n`  `annotations"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" \n\n`    `storageclass.kubernetes.io/is"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("default-class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" “true” \n\n`  `name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Alletra"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("storageclass \n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("provisioner")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" csi.hpe.com \n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("parameters")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" \n\n`  `csi.storage.k8s.io/fstype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" xfs \n\n`  `csi.storage.k8s.io/controller"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("expand-secret-name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" alletra"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("secret \n\n`  `csi.storage.k8s.io/controller"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("expand-secret-namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" hpe"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("csi \n\n`  `csi.storage.k8s.io/controller"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("publish-secret-name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" alletra"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("secret \n\n`  `csi.storage.k8s.io/controller"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("publish-secret-namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" hpe"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("csi \n\n`  `csi.storage.k8s.io/node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("publish-secret-name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" alletra"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("secret \n\n`  `csi.storage.k8s.io/node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("publish-secret-namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" hpe"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("csi \n\n`  `csi.storage.k8s.io/node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("stage-secret-name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" alletra"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("secret \n\n`  `csi.storage.k8s.io/node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("stage-secret-namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" hpe"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("csi \n\n`  `csi.storage.k8s.io/provisioner"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("secret-name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" alletra"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("secret \n\n`  `csi.storage.k8s.io/provisioner"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("secret-namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" hpe"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("csi \n\n`  `description"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" “Volume created by the HPE CSI Driver for Kubernetes” \n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("reclaimPolicy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Delete \n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("allowVolumeExpansion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" true \n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Create the Alletra-storageclass.yml file with the following command:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("# oc create "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-f")]),e._v(" Alletra-storageclass.yml \n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Verify the name of the storage class (in this case, Alletra-storageclass).")])]),e._v(" "),t("p",[t("img",{attrs:{src:a(284),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("FIGURE 18.")]),e._v(" HPE Alletra StorageClass status")])])}),[],!1,null,null,null);t.default=r.exports}}]);