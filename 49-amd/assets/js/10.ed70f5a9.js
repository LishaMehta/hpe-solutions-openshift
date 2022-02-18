(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{335:function(t,e,a){t.exports=a.p+"assets/img/figure136.e5a54161.png"},338:function(t,e,a){t.exports=a.p+"assets/img/figure133.b994be0a.png"},339:function(t,e,a){t.exports=a.p+"assets/img/figure134.828779b1.png"},340:function(t,e,a){t.exports=a.p+"assets/img/figure135.89f8b69b.png"},341:function(t,e,a){t.exports=a.p+"assets/img/figure137.8fcfaf0e.png"},342:function(t,e,a){t.exports=a.p+"assets/img/figure138.2be4b181.png"},527:function(t,e,a){"use strict";a.r(e);var s=a(54),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"hpe-ezmeral-data-fabric-csi-operator-integration-with-openshift-4-9"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hpe-ezmeral-data-fabric-csi-operator-integration-with-openshift-4-9"}},[t._v("#")]),t._v(" HPE Ezmeral Data Fabric CSI Operator Integration with OpenShift 4.9")]),t._v(" "),s("h3",{attrs:{id:"installing-the-hpe-ezmeral-csi-operator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-hpe-ezmeral-csi-operator"}},[t._v("#")]),t._v(" Installing the HPE Ezmeral CSI Operator")]),t._v(" "),s("h3",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("p",[t._v("The HPE Ezmeral CSI Operator for Kubernetes packages, deploys, and manages HPE Ezmeral CSI Drivers on OpenShift. After installing the operator and creating a CSI Driver object, you can enable static and dynamic provisioning of persistent volumes on the HPE Ezmeral Data Fabric platform.\nFlow Diagram")]),t._v(" "),s("p",[s("img",{attrs:{src:a(338),alt:""}})]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Pre-requisites")]),t._v(" "),s("ul",[s("li",[t._v("Red Hat OpenShift Container Platform 4.9 cluster console is required with the login credentials.")]),t._v(" "),s("li",[t._v("HPE Ezmeral Data Fabric CSI Version 6.2.0 cluster required a minimum of 5 nodes each node required minimum of 16 GB, more in production, For additional disk Raw, unformatted drives and no partitions. Please review the Installer Prerequisites and Guidelines,")])])]),t._v(" "),s("h3",{attrs:{id:"installing-the-operator-using-the-openshift-web-console"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-operator-using-the-openshift-web-console"}},[t._v("#")]),t._v(" Installing the Operator Using the OpenShift Web Console")]),t._v(" "),s("h3",{attrs:{id:"creating-namespace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-namespace"}},[t._v("#")]),t._v(" Creating Namespace")]),t._v(" "),s("p",[t._v("Before installing the CSI Driver from the OpenShift console, create a namespace called HPE-CSI Driver. Perform the following steps to create a Namespace.")]),t._v(" "),s("ol",[s("li",[t._v("Click Administration → Namespaces in the left pane of the Console.")]),t._v(" "),s("li",[t._v("Click Create Namespaces.")]),t._v(" "),s("li",[t._v("In the Create Namespace dialogbox -> enter hpe-ezmeral-csi")]),t._v(" "),s("li",[t._v("Click Create")])]),t._v(" "),s("h3",{attrs:{id:"installing-hpe-ezmeral-data-fabric-csi-operator-using-the-operator-hub"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-hpe-ezmeral-data-fabric-csi-operator-using-the-operator-hub"}},[t._v("#")]),t._v(" Installing Hpe Ezmeral Data Fabric CSI Operator using the Operator Hub")]),t._v(" "),s("ol",[s("li",[t._v("Once the SCC has been applied to the project, log in to the OpenShift web console as kube:admin, and navigate to Operators > OperatorHub.")]),t._v(" "),s("li",[t._v("In the search field, type HPE Ezmeral, and press enter:")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(339),alt:""}})]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Select the HPE Ezmeral Data Fabric CSI Operator for Kubernetes and click Install:")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(340),alt:""}})]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("In the next pane, click Install")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(335),alt:""}})]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("The HPE Ezmeral CSI Operator is now installed:")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(341),alt:""}})]),t._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[t._v("Click the HPE Ezmeral Data Fabric CSI Operator for Kubernetes to view the Operator Details:")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(342),alt:""}})]),t._v(" "),s("ol",{attrs:{start:"7"}},[s("li",[t._v("To create the HPE Ezmeral CSI Driver (NFS), click Create Instance under HPEEzmeralNFSCSIDriver.")]),t._v(" "),s("li",[t._v("In the Create HPEEzmeralNFSCSIDriver pane, click Create")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(335),alt:""}})]),t._v(" "),s("ol",{attrs:{start:"9"}},[s("li",[t._v("Verify that HPE Ezmeral CSI Operator and CSI Driver pods are running in the namespace")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" oc get pods -n hpe-ezmeral-csi\nNAME                                                                              READY   STATUS    RESTARTS   AGE\nhpe-ezmeral-csi-controller-0                                         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("/7     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          62s\nhpe-ezmeral-csi-driver-operator-9dd887bf7-hdxc9  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          4m6s\nhpe-ezmeral-csi-node-79xw5                                         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("/3     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          61s\nhpe-ezmeral-csi-node-m2gpv                                         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("/3     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          61s\nhpe-ezmeral-csi-node-x25dr                                           "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("/3     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          61s\nhpe-ezmeral-nfscsi-controller-0                                     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("/7     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          29s\nhpe-ezmeral-nfscsi-node-hhrhv                                     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("/3     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          28s\nhpe-ezmeral-nfscsi-node-jz5cx                                       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("/3     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          28s\nhpe-ezmeral-nfscsi-node-tvtgm                                     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("/3     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          28s\n\n")])])]),s("p",[t._v("The CSI Driver is now ready for use. To use the CSI Driver to statically and dynamically provision and mount a data-fabric volume.")]),t._v(" "),s("h3",{attrs:{id:"configuring-dynamic-provisioning-using-container-storage-interface-csi-storage-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-dynamic-provisioning-using-container-storage-interface-csi-storage-plugin"}},[t._v("#")]),t._v(" Configuring Dynamic Provisioning Using Container Storage Interface (CSI) Storage Plugin")]),t._v(" "),s("h3",{attrs:{id:"configuring-a-secret"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-a-secret"}},[t._v("#")]),t._v(" Configuring a Secret")]),t._v(" "),s("h3",{attrs:{id:"rest-secrets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest-secrets"}},[t._v("#")]),t._v(" REST Secrets")]),t._v(" "),s("p",[t._v("For dynamic provisioning, you must use a Secret to pass the user name and password of a data-fabric user to the provisioner. This user must have privileges to create and delete a data-fabric volume. The credentials allow the provisioner to make REST calls to the data-fabric webserver. Secrets are protected by the Kubernetes RBAC.\nThe following example shows a REST secret in the Secret file:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Secret\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mapr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("provisioner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secrets\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("driver\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Opaque\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MAPR_CLUSTER_USER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cm9vdA==\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MAPR_CLUSTER_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bWFwcg==             \n")])])]),s("p",[t._v("The following table describes the REST secret fields in the REST Secret example.\nParameter\tNotes\nMAPR_CLUSTER_USER\tThe base64 representation of a data-fabric user that has the ability to create and delete data-fabric volumes. See Converting a String to Base64.")]),t._v(" "),s("p",[t._v("MAPR_CLUSTER_PASSWORD\tThe base64 representation of the password for the user defined by the MAPR_CLUSTER_USER parameter. See .Converting a String to Base64")]),t._v(" "),s("h3",{attrs:{id:"ticket-secrets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ticket-secrets"}},[t._v("#")]),t._v(" Ticket Secrets")]),t._v(" "),s("p",[t._v("For static and dynamic provisioning, you must specify a Secret, which is the base64 representation of the ticket, to enable the POSIX client to communicate with a secure MapR cluster. The ticket for the POSIX client can be generated on the data-fabric cluster using the maprlogin utility.")]),t._v(" "),s("h3",{attrs:{id:"maprlogin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maprlogin"}},[t._v("#")]),t._v(" Maprlogin")]),t._v(" "),s("p",[t._v("Authenticates logins to secure HPE Ezmeral Data Fabric clusters.\nThe /opt/mapr/bin/maprlogin command line tool enables users to log into secure MapR clusters. Users authenticate themselves to the cluster with a maprticket that can be generated in the following ways:\n•\tRun maprlogin password to authenticate with username and password.\nThis command prompts for the user's password, then generates a HPE Ezmeral Data Fabric user ticket associated with the UNIX user ID. By default, tickets on Linux systems are generated in the /tmp directory and are named in the form maprticket_"),s("UID",[t._v(" .\nExample:")])],1),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" edf@qa-node113:~/SecurityInstall"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# maprlogin password")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Password "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" user "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'edf'")]),t._v(" at cluster "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cluster1'")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nMapR credentials of user "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'edf'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" cluster "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cluster1'")]),t._v(" are written to "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/tmp/maprticket_0'")]),t._v("\nedf@qa-node113:~/SecurityInstall"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n\n")])])]),s("p",[t._v("Converting a String to Base64\nThe following command shows how to convert a MapR ticket to base64 representation:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cluster-name <base64-encoded ticket-value>"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64 \n")])])]),s("p",[t._v("The following example shows a ticket Secret:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Secret\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mapr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ticket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secret\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mapr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("examples\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Opaque\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("CONTAINER_TICKET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CHANGETHIS"),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v("!")]),t._v("\n")])])]),s("ol",[s("li",[t._v("To Deploy the secret on the pod Run the following command to create the Secret file:")])]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example:")]),t._v(" "),s("p",[t._v("Mounting a PersistentVolume for Dynamic Provisioning Using Container Storage Interface (CSI) Storage Plugin")]),t._v(" "),s("h3",{attrs:{id:"about-this-task"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#about-this-task"}},[t._v("#")]),t._v(" About this task")]),t._v(" "),s("p",[t._v("This example also uses a PersistentVolume. when you use the dynamic provisioner, you do not need to create a PersistentVolume manually. The PersistentVolume is created automatically based on the parameters specified in the referenced StorageClass.\nThe following example uses a PersistentVolumeClaim that references a Storage Class. In this example, a Kubernetes administrator has created a storage class called test-secure-sc for pod creators to use when they want to create persistent storage for their pods. In this example, it is important for the created pod storage to survive the deletion of a pod.\nThe information on this page is valid for both FUSE POSIX and Loopback NFS plugins. Examples or tables that mention the FUSE POSIX provisioner (com.mapr.csi-kdf) are equally valid for the Loopback NFS provisioner (com.mapr.csi-nfskdf).\n2.\tCreate a StorageClass similar to the following:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" storage.k8s.io/v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" StorageClass\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sc\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("csi\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provisioner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.mapr.csi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("kdf\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allowVolumeExpansion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("reclaimPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Delete\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("parameters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("csiProvisionerSecretName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mapr-provisioner-secrets"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("csiProvisionerSecretNamespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test-csi"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("csiNodePublishSecretName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mapr-ticket-secret"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("csiNodePublishSecretNamespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test-csi"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restServers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.10.10.210:8443"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cldbHosts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.10.10.210:7222"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clusterA"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("securityType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"secure"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namePrefix")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"csi-pv"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPrefix")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/csi"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("advisoryquota")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100M"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trackMemory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logLevel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("retainLogs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Deploy the .yaml file on the pod by running the following command:")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" oc apply -f "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".yaml\n")])])]),s("h3",{attrs:{id:"validating-edf-with-deploying-wordpress-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validating-edf-with-deploying-wordpress-application"}},[t._v("#")]),t._v(" Validating EDF with deploying WordPress application")]),t._v(" "),s("p",[t._v("This section covers the steps to validate the Ezmeral Data Fabric deployment (EDF) by deploying 2-tier application along with MySQL database.\nDeploying WordPress application")]),t._v(" "),s("p",[t._v("Refer the below link for deploying WordPress application.\nhttps://hewlettpackard.github.io/hpe-solutions-openshift/49-dl/Additional-Features-and-Functionality/Storage.html#validating-odf-with-deploying-wordpress-application")])])}),[],!1,null,null,null);e.default=r.exports}}]);