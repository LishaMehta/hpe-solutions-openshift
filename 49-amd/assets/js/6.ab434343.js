(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{415:function(e,t,a){e.exports=a.p+"assets/img/figure77.9214ef8d.png"},416:function(e,t,a){e.exports=a.p+"assets/img/figure78.e00c9a65.png"},417:function(e,t,a){e.exports=a.p+"assets/img/figure79.ce811a49.png"},418:function(e,t,a){e.exports=a.p+"assets/img/figure80.8a010b48.png"},419:function(e,t,a){e.exports=a.p+"assets/img/figure81.b5495aba.png"},420:function(e,t,a){e.exports=a.p+"assets/img/figure82.a7b9c854.png"},421:function(e,t,a){e.exports=a.p+"assets/img/figure83.ef7bcaf6.png"},422:function(e,t,a){e.exports=a.p+"assets/img/figure84.210161f4.png"},423:function(e,t,a){e.exports=a.p+"assets/img/figure85.6b32404e.png"},424:function(e,t,a){e.exports=a.p+"assets/img/figure86.8a9c81c5.png"},520:function(e,t,a){"use strict";a.r(t);var n=a(54),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"red-hat-advanced-cluster-management-for-kubernetes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#red-hat-advanced-cluster-management-for-kubernetes"}},[e._v("#")]),e._v(" Red Hat Advanced Cluster Management for Kubernetes")]),e._v(" "),n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),n("p",[e._v("Red Hat Advanced Cluster Management for Kubernetes provides end-to-end management visibility and control to manage your Kubernetes environment. Take control of your application modernization program with management capabilities for cluster creation, application lifecycle, and provide security and compliance for all of them across data centers and hybrid cloud environments. Clusters and applications are all visible and managed from a single console, with built-in security policies Run your operations from anywhere that Red Hat OpenShift Container Platform runs, and manage your Kubernetes clusters.")]),e._v(" "),n("p",[e._v("With Red Hat Advanced Cluster Management for Kubernetes:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Work across a range of environments, including multiple data centers, private clouds and public clouds that run Kubernetes clusters.")])]),e._v(" "),n("li",[n("p",[e._v("Easily create OpenShift Container Platform Kubernetes clusters and manage cluster lifecycle in a single console.")])]),e._v(" "),n("li",[n("p",[e._v("Enforce policies at the target clusters using Kubernetes-supported custom resource definitions.")])]),e._v(" "),n("li",[n("p",[e._v("Deploy and maintain day two operations of business applications distributed across your cluster landscape.")])])]),e._v(" "),n("p",[e._v("Figure 23 shows Architecture of Advanced Cluster Management for Kubernetes")]),e._v(" "),n("p",[n("img",{attrs:{src:a(415),alt:""}})]),e._v(" "),n("h2",{attrs:{id:"installing-red-hat-advanced-cluster-management-from-the-console"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-red-hat-advanced-cluster-management-from-the-console"}},[e._v("#")]),e._v(" Installing Red Hat Advanced Cluster Management from the console")]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("Prerequisites")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Hub Cluster")]),e._v(" "),n("p",[e._v("OpenShift Container Platform 4.x successfully deployed.")]),e._v(" "),n("p",[e._v("Operator Hub availability.")])]),e._v(" "),n("li",[n("p",[e._v("Managed Clusters")]),e._v(" "),n("p",[e._v("OpenShift 4.x on from public cloud providers (Amazon Web Services, Google Cloud, IBM and Microsoft Azure) or Private clouds (Openstack, OpenShift).")])])])]),e._v(" "),n("h3",{attrs:{id:"flow-diagram"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flow-diagram"}},[e._v("#")]),e._v(" Flow Diagram")]),e._v(" "),n("p",[n("img",{attrs:{src:a(416),alt:""}})]),e._v(" "),n("p",[n("strong",[e._v("Figure 24.")]),e._v(" RedHat Advanced Cluster Management Solution Flow Diagram")]),e._v(" "),n("h2",{attrs:{id:"installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),n("p",[e._v("Following steps needs to perform prior to installing Advanced Cluster Management from the OpenShift Console.")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Create Namespace")])]),e._v(" "),n("li",[n("p",[e._v("Create Pull Secrets")])])]),e._v(" "),n("p",[e._v("Follow below steps to creating namespace.")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Create a hub cluster namespace for the operator requirements:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("In the OpenShift Container Platform console navigation, select Administration -> Namespaces.")])]),e._v(" "),n("li",[n("p",[e._v("Select create Namespace.")])])])]),e._v(" "),n("li",[n("p",[e._v("Provide a name for your namespace. This is the namespace that you use throughout the installation process.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),n("p",[e._v("The value for namespace might be referred to as Project in the OpenShift Container Platform environment.")])])])]),e._v(" "),n("p",[e._v("Follow below steps to create secrets.")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Switch your project namespace to the one that you created in step 1. This ensures that the steps are completed in the correct namespace. Some resources are namespace specific.")]),e._v(" "),n("p",[e._v("I.  In the OpenShift Container Platform console navigation, select Administration -> Namespaces.")]),e._v(" "),n("p",[e._v("II. Select the namespace that you created in step 1 from the list.")])]),e._v(" "),n("li",[n("p",[e._v("Create a pull secret that provides the entitlement to the downloads.")]),e._v(" "),n("p",[e._v("I.  Copy your OpenShift Container Platform pull secret from cloud.redhat.com")]),e._v(" "),n("p",[e._v("II. In the OpenShift Container Platform console navigation, select Workloads -> Secrets.")]),e._v(" "),n("p",[e._v("III. Select Create -> Image Pull Secret.")]),e._v(" "),n("p",[e._v("IV. Enter a name for your secret.")]),e._v(" "),n("p",[e._v("V.  Select Upload Configuration File as the authentication type.")]),e._v(" "),n("p",[e._v("VI. In the Configuration file field, paste the pull secret that you copied from cloud.redhat.com.")]),e._v(" "),n("p",[e._v("VII. Select Create to create the pull secret.")])])]),e._v(" "),n("h2",{attrs:{id:"installing-advanced-cluster-management-operator"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-advanced-cluster-management-operator"}},[e._v("#")]),e._v(" Installing Advanced Cluster Management Operator")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("In the OpenShift Container Platform console navigation, select Operators -> OperatorHub.")])]),e._v(" "),n("li",[n("p",[e._v("Select Red Hat Advanced Cluster Management.")])]),e._v(" "),n("li",[n("p",[e._v("Select Install.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(417),alt:""}})])]),e._v(" "),n("li",[n("p",[e._v("Update the values, if necessary.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(418),alt:""}})])]),e._v(" "),n("li",[n("p",[e._v("Select specific namespace on the cluster for the Installation Mode\noption.")]),e._v(" "),n("p",[e._v("I.  Select open-cluster-management namespace from the drop down menu.")])]),e._v(" "),n("li",[n("p",[e._v("selected by default for the Update Channel option.")])]),e._v(" "),n("li",[n("p",[e._v("Select an Approval Strategy:")]),e._v(" "),n("p",[e._v("I.  Automatic specifies that you want OpenShift Container Platform to upgrade Advanced Cluster Management for kubernetes Operator.")]),e._v(" "),n("p",[e._v("II. Manual specifies that you want to have control to upgrade Advanced Cluster Management for kubernetes Operator manually")])]),e._v(" "),n("li",[n("p",[e._v("Select Install.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(419),alt:""}})])]),e._v(" "),n("li",[n("p",[e._v("The Installed Operators page is displayed with the status of the operator.")])])]),e._v(" "),n("h2",{attrs:{id:"create-the-multiclusterhub-custom-resource"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-the-multiclusterhub-custom-resource"}},[e._v("#")]),e._v(" Create the MultiClusterHub custom resource")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("In the OpenShift Container Platform console navigation, select Installed Operators -> Advanced Cluster Management for Kubernetes.")])]),e._v(" "),n("li",[n("p",[e._v("Select the MultiClusterHub tab.")])]),e._v(" "),n("li",[n("p",[e._v("Select Create MultiClusterHub.")])]),e._v(" "),n("li",[n("p",[e._v("Update the values, according to your needs.")])]),e._v(" "),n("li",[n("p",[e._v("Tip: You can edit the values in the YAML file by selecting YAML View. Some of the values are only available in the YAML view. The following example shows some sample data in the YAML view:")]),e._v(" "),n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" operator.open"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("cluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("management.io/v1\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" MultiClusterHub\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("namespace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" << newly created namespace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" multiclusterhub\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("imagePullSecret")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" <secret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n")])])]),n("p",[e._v("Add the pull secret that you created to the imagePullSecret field on the console. In t he YAML View, confirm that the namespace is your project namespace.")])]),e._v(" "),n("li",[n("p",[e._v("Select Create to initialize the custom resource. It can take up to 10 minutes for the hub to build and start.")]),e._v(" "),n("p",[e._v("After the hub is created, the status for the operator is Running on the Installed Operators page.")])])]),e._v(" "),n("h2",{attrs:{id:"access-the-advanced-cluster-management-console-for-the-hub"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#access-the-advanced-cluster-management-console-for-the-hub"}},[e._v("#")]),e._v(" Access the Advanced Cluster Management console for the hub")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("In the OpenShift Container Platform console navigation, select Networking -> Routes.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(420),alt:""}})])]),e._v(" "),n("li",[n("p",[e._v("Click the URL for Advanced Cluster Management console hub in the list and navigate it to access the console for Advanced Cluster Management console hub using your Hub openshift console username and password.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(421),alt:""}})])]),e._v(" "),n("li",[n("p",[e._v("To create/ import an existing cluster from Advanced Cluster Management console, click on Go to Cluster.")])])]),e._v(" "),n("h2",{attrs:{id:"import-an-existing-cluster-using-advanced-cluster-management-console"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#import-an-existing-cluster-using-advanced-cluster-management-console"}},[e._v("#")]),e._v(" Import an existing Cluster using Advanced Cluster Management console")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Navigate to Add cluster, Click Import an existing cluster.")])]),e._v(" "),n("li",[n("p",[e._v("It displays a window as below, there you can provide Cluster name, Cloud (public or on-premise), Environment and labels are optional.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(422),alt:""}})])]),e._v(" "),n("li",[n("p",[e._v("Once you provide all the details, Click on Generate Command.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(423),alt:""}})])]),e._v(" "),n("li",[n("p",[e._v("Copy the command generated, Run it on imported cluster.")])]),e._v(" "),n("li",[n("p",[e._v("After running the command, we should navigate to "),n("strong",[e._v("Advanced Cluster Management console")]),e._v(" there we can find the status of imported cluster details in "),n("strong",[e._v("cluster")]),e._v(" option as per below snap.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(424),alt:""}})])])])])}),[],!1,null,null,null);t.default=s.exports}}]);