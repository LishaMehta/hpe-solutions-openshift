(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{281:function(e,t,o){e.exports=o.p+"assets/img/f19.5801fa54.png"},282:function(e,t,o){e.exports=o.p+"assets/img/f20.e493babb.png"},283:function(e,t,o){e.exports=o.p+"assets/img/f21.c1460ff0.png"},284:function(e,t,o){e.exports=o.p+"assets/img/f22.59c155c9.png"},304:function(e,t,o){"use strict";o.r(t);var r=o(13),a=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("strong",[e._v("DEPLOYING WORDPRESS AND MYSQL WITH PERSISTENT VOLUMES USING HPE ALLETRA STORAGE")])]),e._v(" "),t("p",[e._v("A WordPress and MySQL application is deployed on the existing RH OCP to utilize the volume from HPE Alletra array through HPE CSI Driver. A two-tier application such as WordPress and MySQL are deployed and scheduled on the worker nodes. This chapter describes how to deploy a sample two-tier application on RH OCP 4.10 using HPE Alletra storage.")]),e._v(" "),t("p",[t("strong",[e._v("Deploying WordPress and MySQL application using HPE Alletra storage")])]),e._v(" "),t("p",[e._v("To deploy WordPress and MySQL application using HPE Alletra storage:")]),e._v(" "),t("ol",[t("li",[e._v("Download the MySQL deployment configuration file.")])]),e._v(" "),t("p",[e._v("# curl -LO "),t("a",{attrs:{href:"https://k8s.io/examples/application/wordpress/mysql-deployment.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://k8s.io/examples/application/wordpress/mysql-deployment.yaml"),t("OutboundLink")],1)]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Download the WordPress configuration file.")])]),e._v(" "),t("p",[e._v("# curl -LO "),t("a",{attrs:{href:"https://k8s.io/examples/application/wordpress/wordpress-deployment.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://k8s.io/examples/application/wordpress/wordpress-deployment.yaml"),t("OutboundLink")],1)]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Edit kustomization.yaml file to add secret and both the deployment configuration.")])]),e._v(" "),t("p",[e._v("[root@rhel7_installer wordpress]# cat kustomization.yaml")]),e._v(" "),t("p",[e._v("secretGenerator:")]),e._v(" "),t("p",[e._v("- name: mysql-pass")]),e._v(" "),t("p",[t("code"),e._v("literals:")]),e._v(" "),t("p",[t("code"),e._v("- password=mysql")]),e._v(" "),t("p",[e._v("resources:")]),e._v(" "),t("p",[t("code"),e._v("- mysql.yaml")]),e._v(" "),t("p",[t("code"),e._v("- wordpress.yaml")]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[e._v("Run the following command to apply the changes to the kustomization.yaml file.")])]),e._v(" "),t("p",[e._v("# oc apply -k./")]),e._v(" "),t("p",[e._v("The following output is displayed:")]),e._v(" "),t("p",[t("img",{attrs:{src:o(281),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("FIGURE 19.")]),e._v(" Output of WordPress and MySQL two-tier sample application deployment")]),e._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[e._v("Check the status of PVC, PV, and mariadb pod.")])]),e._v(" "),t("p",[t("img",{attrs:{src:o(282),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("FIGURE 20.")]),e._v(" PV and PVC status for WordPress and MySQL")]),e._v(" "),t("p",[e._v("The following figure shows a list of pods created on the cluster along with the one for the deployed sample application.")]),e._v(" "),t("p",[t("img",{attrs:{src:o(283),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("FIGURE 21.")]),e._v(" Wordpress and MySQL pods for two-tier sample app deployed")]),e._v(" "),t("p",[t("strong",[e._v("Verifying PVC on HPE Alletra array")])]),e._v(" "),t("p",[e._v("The Persistent Volume Claim (PVC) created for the two-tier sample application deployed for WordPress and MySQL can be verified on the HPE Alletra array by searching for the PVC ID displayed on the console or on the CLI.")]),e._v(" "),t("p",[e._v("To verify the PVC on HPE Alletra array:")]),e._v(" "),t("ol",[t("li",[e._v("Log in to the HPE Alletra Console at https://alletramgmtip#.")]),e._v(" "),t("li",[e._v("Verify WordPress and MySQL PVC ID in the data storage. The details of PVC ID are displayed on the dashboard.")])]),e._v(" "),t("p",[t("img",{attrs:{src:o(284),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("FIGURE 22.")]),e._v(" Volume created for the PVC created in HPE Alletra")])])}),[],!1,null,null,null);t.default=a.exports}}]);