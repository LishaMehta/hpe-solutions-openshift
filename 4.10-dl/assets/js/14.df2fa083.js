(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{292:function(e,t,o){e.exports=o.p+"assets/img/f7.623d4e37.png"},316:function(e,t,o){"use strict";o.r(t);var l=o(13),s=Object(l.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("strong",[e._v("Deploying RH OCP cluster using Ansible playbooks")])]),e._v(" "),t("p",[e._v("The Lite Touch Installation (LTI) package includes Ansible playbooks with scripts to deploy RH OCP cluster. You can use one of the following two methods to deploy RH OCP cluster:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Run a consolidated playbook:")]),e._v(" This method includes a single playbook for deploying the entire solution. This site.yml playbook contains a script that performs all the tasks starting from the OS deployment until the RH OCP cluster is successfully installed and running. To run LTI using a consolidated playbook:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts site.yml")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Run individual playbooks:")]),e._v(" This method includes multiple playbooks with scripts that enable you to deploy specific parts of the solution depending on your requirements. The playbooks in this method must be executed in a specific sequence to deploy the solution. The following table includes the purpose of each playbook required for the deployment:")])]),e._v(" "),t("p",[t("strong",[e._v("TABLE 7.")]),e._v(" RH OCP cluster deployment using Ansible playbooks")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("Playbook")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("rhel8_os_depl.oyment.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the scripts to deploy RHEL 8.5 OS on BareMetal servers.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("copy_ssh_headnode.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to copy the SSH public key from the installer machine to the head nodes.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("prepare_rhel_hosts.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to prepare nodes for the RH OCP head nodes.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("ntp.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to create NTP setup to enable time synchronization on head nodes.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("binddns.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to deploy Bind DNS on three head nodes and acts as active-passive cluster configuration.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("haproxy.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to deploy haproxy on the head nodes and acts as active-active cluster configuration.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("squid_proxy.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to deploy the Squid proxy on the head nodes to get web access.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("download_ocp_packages.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to download the required RH OCP packages.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("generate_manifest.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to generate the manifest files.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("storage_pool.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to create the storage pools on the head nodes.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("rhel7_installerVM.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to create a RHEL 7 installer machine, which will also be used as an installer at a later stage.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("copy_ssh_installerVM.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to copy the SSH public key to the RHEL 7 installer machine.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("prepare_rhel7_installer.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to prepare the RHEL 7 installer.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("copy_ocp_tool.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to copy the RH OCP tools from the current installer to the head nodes and RHEL 7 installer.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("deploy_ipxe_ocp.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to deploy the iPXE server on the head nodes.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("ocp_vm.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to create bootstrap and master nodes.")])])])]),e._v(" "),t("p",[e._v("To run individual playbooks:")]),e._v(" "),t("ul",[t("li",[e._v("Do one of the following:")]),e._v(" "),t("li",[e._v("Edit site.yml file and add a comment for all the playbooks except the ones that you want to execute.")])]),e._v(" "),t("p",[e._v("For example, add the following comments in the site.yml file to deploy RHEL 8.5 OS:")]),e._v(" "),t("p",[e._v("import_playbook: playbooks/rhel8_os_deployment.yml")]),e._v(" "),t("p",[e._v("# import_playbook: playbooks/copy_ssh_headnode.yml")]),e._v(" "),t("p",[e._v("# import_playbook: playbooks/prepare_rhel_hosts.yml")]),e._v(" "),t("p",[e._v("# import_playbook: playbooks/ntp.yml")]),e._v(" "),t("p",[e._v("# import_playbook: playbooks/binddns.yml")]),e._v(" "),t("p",[e._v("# import_playbook: playbooks/haproxy.yml")]),e._v(" "),t("p",[e._v("# import_playbook: playbooks/squid_proxy.yml")]),e._v(" "),t("p",[e._v("# import_playbook: playbooks/download_ocp_packages.yml")]),e._v(" "),t("p",[e._v("# import_playbook: playbooks/generate_manifest.yml")]),e._v(" "),t("p",[e._v("# import_playbook: playbooks/storage_pool.yml")]),e._v(" "),t("p",[e._v("# import_playbook: playbooks/rhel7_installerVM.yml")]),e._v(" "),t("p",[e._v("# import_playbook: playbooks/copy_ssh_installerVM.yml")]),e._v(" "),t("p",[e._v("# import_playbook: playbooks/prepare_rhel7_installer.yml")]),e._v(" "),t("p",[e._v("# import_playbook: playbooks/copy_ocp_tool.yml")]),e._v(" "),t("p",[e._v("# import_playbook: playbooks/deploy_ipxe_ocp.yml")]),e._v(" "),t("p",[e._v("# import_playbook: playbooks/ocp_vm.yml")]),e._v(" "),t("ul",[t("li",[e._v("Run the individual YAML files using the following command:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/<yaml_filename>.yml")]),e._v(" "),t("p",[e._v("For example, run the following YAML file to deploy RHEL 8.5 OS:")]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/rhel8_os_deployment.yml")]),e._v(" "),t("p",[e._v("For more information on executing individual playbooks, see the consecutive sections.")]),e._v(" "),t("p",[t("strong",[e._v("Deploying RHEL 8.5 OS on baremetal servers")])]),e._v(" "),t("p",[e._v("This section describes how to run the playbook that contains the script for deploying RHEL 8.5 OS on BareMetal servers.")]),e._v(" "),t("p",[e._v("To deploy RHEL 8.5 OS on the head nodes:")]),e._v(" "),t("ol",[t("li",[e._v("Navigate to the /opt/NGS-OpenShift/ directory on the head node.")]),e._v(" "),t("li",[e._v("Run the following playbook:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/rhel8_os_deployment.yml")]),e._v(" "),t("p",[e._v("Copying SSH key to head nodes")]),e._v(" "),t("p",[e._v("Once the OS is installed on the head nodes, copy the ssh key from the installer machine to the head nodes. It uses playbook that contains the script to copy the SSH public key from the installer machine to the head nodes.")]),e._v(" "),t("p",[e._v("To copy the SSH key to the head node:")]),e._v(" "),t("ul",[t("li",[e._v("Run the following playbook:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/copy_ssh_headnode.yml")]),e._v(" "),t("p",[e._v("Setting up head nodes")]),e._v(" "),t("p",[e._v("This section describes how to run the playbook that contains the script to prepare nodes for the RH OCP head nodes.")]),e._v(" "),t("p",[e._v("To register the head nodes to Red Hat subscription and download and install KVM Virtualization packages:")]),e._v(" "),t("ul",[t("li",[e._v("Run the following playbook:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/prepare_rhel_hosts.yml")]),e._v(" "),t("p",[t("strong",[e._v("Setting up NTP server on head nodes")])]),e._v(" "),t("p",[e._v("This section describes how to run the playbook that contains the script to set up NTP server and enable time synchronization on all head nodes.")]),e._v(" "),t("p",[e._v("To set up NTP server on head nodes:")]),e._v(" "),t("ul",[t("li",[e._v("Run the following playbook:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/ntp.yml")]),e._v(" "),t("p",[t("strong",[e._v("Deploying Bind DNS on head nodes")])]),e._v(" "),t("p",[e._v("This section describes how to deploy Bind DNS service on all three head nodes for active-passive cluster configuration.")]),e._v(" "),t("p",[e._v("To deploy Bind DNS service on head nodes:")]),e._v(" "),t("ul",[t("li",[e._v("Run the following playbook:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/binddns.yml")]),e._v(" "),t("p",[t("strong",[e._v("Deploying HAProxy on head nodes")])]),e._v(" "),t("p",[e._v("The RH OCP 4.10 uses an external load balancer to communicate from outside the cluster with services running inside the cluster. This section describes how to deploy HAProxy on all three head nodes for active-active cluster configuration.")]),e._v(" "),t("p",[e._v("To deploy HAProxy server configuration on head nodes:")]),e._v(" "),t("ul",[t("li",[e._v("Run the following playbook:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/haproxy.yml")]),e._v(" "),t("p",[t("strong",[e._v("Deploying Squid proxy on head nodes")])]),e._v(" "),t("p",[e._v("Squid is a proxy server that caches content to reduce bandwidth and load web pages more quickly. This section describes how to set up Squid as a proxy for HTTP, HTTPS, and FTP protocol, as well as authentication and restricting access. It uses a playbook that contains the script to deploy the Squid proxy on the head nodes to get web access.")]),e._v(" "),t("p",[e._v("To deploy Squid proxy server on head nodes:")]),e._v(" "),t("ul",[t("li",[e._v("Run the following playbook:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/squid_proxy.yml")]),e._v(" "),t("p",[t("strong",[e._v("Downloading RH OCP packages")])]),e._v(" "),t("p",[e._v("This section provides details about downloading the required RH OCP 4.10 packages using a playbook.")]),e._v(" "),t("p",[e._v("To download RH OCP 4.10 packages:")]),e._v(" "),t("ul",[t("li",[e._v("Download the required packages on the installer VM with the following playbook:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/download_ocp_packages.yml")]),e._v(" "),t("p",[t("strong",[e._v("Generating Kubernetes manifest files")])]),e._v(" "),t("p",[e._v("The manifests and ignition files define the master node and worker node configuration and are key components of the RH OCP 4.10 installation. This section describes how to use the generate_manifest.yml playbook that contains the script to generate the manifest files.")]),e._v(" "),t("p",[e._v("To generate Kubernetes manifest files:")]),e._v(" "),t("ul",[t("li",[e._v("Run the following playbook:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/generate_manifest.yml")]),e._v(" "),t("p",[t("strong",[e._v("Creating storage pools on head nodes")])]),e._v(" "),t("p",[e._v("This section describes how to use the storage_pool.yml playbook that contains the script to create the storage pools on the head nodes.")]),e._v(" "),t("p",[e._v("To create the storage pools:")]),e._v(" "),t("ul",[t("li",[e._v("Run the following playbook:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/storage_pool.yml")]),e._v(" "),t("p",[t("strong",[e._v("Creating RHEL 7 installer machine")])]),e._v(" "),t("p",[e._v("This section describes how to create a RHEL 7 installer machine using the rhel7_installerVM.yml playbook. This installer machine is also used as an installer for deploying the RH OCP cluster and adding RHEL 8.5 worker nodes.")]),e._v(" "),t("p",[e._v("To create a RHEL 7 installer machine:")]),e._v(" "),t("ul",[t("li",[e._v("Run the following playbook:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/rhel7_installerVM.yml")]),e._v(" "),t("p",[e._v("Copying SSH key to RHEL 7 installer machine")]),e._v(" "),t("p",[e._v("This section describes how to copy the SSH public key to the RHEL 7 installer machine using the copy_ssh_installerVM.yml playbook.")]),e._v(" "),t("p",[e._v("To copy the SSH public key to the RHEL 7 installer machine:")]),e._v(" "),t("ul",[t("li",[e._v("Run the following playbook:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/copy_ssh_installerVM.yml")]),e._v(" "),t("p",[e._v("Setting up RHEL 7 installer")]),e._v(" "),t("p",[e._v("This section describes how to set up the RHEL 7 installer using the prepare_rhel7_installer.yml playbook.")]),e._v(" "),t("p",[e._v("To set up the RHEL 7 installer:")]),e._v(" "),t("ul",[t("li",[e._v("Run the following playbook:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/prepare_rhel7_installer.yml")]),e._v(" "),t("p",[e._v("Copying RH OCP tools")]),e._v(" "),t("p",[e._v("This section describes how to copy the RH OCP tools from the present installer to head nodes and RHEL 7 installer using the copy_ocp_tool.yml playbook.")]),e._v(" "),t("p",[e._v("To copy the RH OCP tools to the head nodes and RHEL 7 installer:")]),e._v(" "),t("ul",[t("li",[e._v("Run the following playbook:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/copy_ocp_tool.yml")]),e._v(" "),t("p",[e._v("Deploying iPXE server on head nodes")]),e._v(" "),t("p",[e._v("This section describes how to deploy the iPXE server on the head nodes using the deploy_ipxe_ocp.yml playbook.")]),e._v(" "),t("p",[e._v("To deploy the iPXE server:")]),e._v(" "),t("ul",[t("li",[e._v("Run the following playbook:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/deploy_ipxe_ocp.yml")]),e._v(" "),t("p",[e._v("Creating bootstrap and master nodes")]),e._v(" "),t("p",[e._v("This section describes how to create bootstrap and master nodes using the scripts in the ocp_vm.yml playbook.")]),e._v(" "),t("p",[e._v("To create bootstrap and master VMs on Kernel-based Virtual Machine (KVM):")]),e._v(" "),t("ul",[t("li",[e._v("Run the following playbook:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/ocp_vm.yml")]),e._v(" "),t("p",[t("strong",[e._v("Deploying RH OCP cluster")])]),e._v(" "),t("p",[e._v("Once the playbooks are executed successfully and the Bootstrap and master nodes are deployed with the RHCOS, deploy the RH OCP cluster.")]),e._v(" "),t("p",[e._v("To deploy the RH OCP cluster:")]),e._v(" "),t("ol",[t("li",[e._v("Login to the installer VM.")])]),e._v(" "),t("p",[e._v("This installer VM was created as a KVM VM on one of the head nodes using the rhel7_installerVM.yml playbook. For more information, see the "),t("a",{attrs:{href:"bookmark://_Creating_RHEL_7"}},[e._v("Creating RHEL 7 installer machine")]),e._v(" section.")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Add the kubeconfig path in the environment variables using the following command:")])]),e._v(" "),t("p",[e._v("# export KUBECONFIG=/opt/NGS-OpenShift/playbooks/roles/generate_ignition_files/ignitions/auth/kubeconfig")]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Run the following command:")])]),e._v(" "),t("p",[e._v("# openshift-install wait-for install-complete --dir=/opt/NGS-OpenShift /playbooks/roles/generate_ignition_files/ignitions --log-level debug")]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[e._v("Complete the RH OCP 4.10 cluster installation with the following command:")])]),e._v(" "),t("p",[e._v("# openshift-install wait-for install-complete --dir=/opt/NGS-OpenShift /playbooks/roles/generate_ignition_files/ignitions --log-level=debug")]),e._v(" "),t("p",[e._v("The following output is displayed:")]),e._v(" "),t("p",[e._v("DEBUG OpenShift Installer v4.10")]),e._v(" "),t("p",[e._v("DEBUG Built from commit 6ed04f65b0f6a1e11f10afe658465ba8195ac459")]),e._v(" "),t("p",[e._v("INFO Waiting up to 30m0s for the cluster at https://api.rrocp.pxelocal.local:6443 to initialize...")]),e._v(" "),t("p",[e._v("DEBUG Still waiting for the cluster to initialize: Working towards 4.10: 99% complete")]),e._v(" "),t("p",[e._v("DEBUG Still waiting for the cluster to initialize: Working towards 4.10: 99% complete, waiting on authentication, console,image-registry")]),e._v(" "),t("p",[e._v("DEBUG Still waiting for the cluster to initialize: Working towards 4.10: 99% complete")]),e._v(" "),t("p",[e._v("DEBUG Still waiting for the cluster to initialize: Working towards 4.10: 100% complete, waiting on image-registry")]),e._v(" "),t("p",[e._v("DEBUG Still waiting for the cluster to initialize: Cluster operator image-registry is still updating")]),e._v(" "),t("p",[e._v("DEBUG Still waiting for the cluster to initialize: Cluster operator image-registry is still updating")]),e._v(" "),t("p",[e._v("DEBUG Cluster is initialized")]),e._v(" "),t("p",[e._v("INFO Waiting up to 10m0s for the openshift-console route to be created...")]),e._v(" "),t("p",[e._v("DEBUG Route found in openshift-console namespace: console")]),e._v(" "),t("p",[e._v("DEBUG Route found in openshift-console namespace: downloads")]),e._v(" "),t("p",[e._v("DEBUG OpenShift console route is created")]),e._v(" "),t("p",[e._v("INFO Install complete!")]),e._v(" "),t("p",[e._v("INFO Access the OpenShift web-console here: https://console-openshift-console.apps.ocp.ngs.local")]),e._v(" "),t("p",[e._v("INFO Login to the console with user: kubeadmin, password: a6hKv-okLUA-Q9p3q-UXLc3")]),e._v(" "),t("p",[e._v("The RH OCP cluster is successfully installed.")]),e._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[e._v("After the installation is complete, check the status of the created cluster:")])]),e._v(" "),t("p",[e._v("# oc get nodes")]),e._v(" "),t("p",[t("strong",[e._v("Running Red Hat OpenShift Container Platform Console")])]),e._v(" "),t("p",[e._v("Prerequisites:")]),e._v(" "),t("ul",[t("li",[e._v("The RH OCP cluster installation must be complete.")])]),e._v(" "),t("p",[t("strong",[e._v("NOTE")])]),e._v(" "),t("p",[e._v("The installer machine provides the Red Hat OpenShift Container Platform Console link and login details when the RH OCP cluster installation is complete.")]),e._v(" "),t("p",[e._v("To access the Red Hat OpenShift Container Platform Console:")]),e._v(" "),t("ol",[t("li",[e._v("Open a web browser and enter the following link:")])]),e._v(" "),t("p",[e._v("https://console-openshift-console.apps.ocp.ngs.local")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Log in to the Red Hat OpenShift Container Platform Console with the following credentials:")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Username:")]),e._v(" kubeadmin")]),e._v(" "),t("li",[t("strong",[e._v("Password:")]),e._v(" a6hKv-okLUA-Q9p3q-UXLc3")])]),e._v(" "),t("p",[t("strong",[e._v("NOTE")])]),e._v(" "),t("p",[e._v("If the password is lost or forgotten, search for the kubeadmin-password file located in the /opt/NGS-OpenShift/playbooks/roles/generate_ignition_files/ignitions/auth/kubeadmin-password directory on the installer machine.")]),e._v(" "),t("p",[e._v("The following figure shows the Red Hat OpenShift Container Platform Console after successful deployment:")]),e._v(" "),t("p",[t("img",{attrs:{src:o(292),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("FIGURE 7.")]),e._v(" Red Hat OpenShift Container Platform Console login screen")])])}),[],!1,null,null,null);t.default=s.exports}}]);