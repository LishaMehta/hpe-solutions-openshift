(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{312:function(e,t,o){"use strict";o.r(t);var s=o(13),l=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("strong",[e._v("Adding RHEL 8.5 worker nodes to RH OCP cluster using Ansible playbooks")])]),e._v(" "),t("p",[e._v("The Lite Touch Installation (LTI) package includes Ansible playbooks with scripts to add the RHEL 8.5 worker nodes to the RH OCP cluster. You can use one of the following two methods to add the RHEL 8.5 worker nodes:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Run a consolidated playbook:")]),e._v(" This method includes a single playbook, site.yml, that contains a script to perform all the tasks for adding the RHEL 8.5 worker nodes to the existing RH OCP cluster. To run LTI using a consolidated playbook:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i inventory/hosts site.yaml")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Run individual playbooks:")]),e._v(" This method includes multiple playbooks with scripts that enable you to deploy specific tasks for adding the RHEL 8.5 worker nodes to the existing RH OCP cluster. The playbooks in this method must be executed in a specific sequence to add the worker nodes. The following table includes the purpose of each playbook required for the deployment:")])]),e._v(" "),t("p",[t("strong",[e._v("TABLE 8.")]),e._v(" Add RHEL 8.5 nodes using Ansible playbooks")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("Playbook")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("rhel8_os_deployment.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the scripts to deploy RHEL 8.5 OS on worker nodes.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("copy_ssh.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to copy the SSH public key to the RHEL 8.5 worker nodes.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("prepare_worker_nodes.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to prepare nodes for the RHEL 8.5 worker nodes.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("ntp.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to create NTP setup to enable time synchronization on the worker nodes.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("openshift-ansible/playbooks/scaleup.yml")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("This playbook contains the script to add worker nodes to the RH OCP cluster. This playbook queries the master, generates and distributes new certificates for the new hosts, and then runs the configuration playbooks on the new hosts.")])])])]),e._v(" "),t("p",[e._v("To run individual playbooks:")]),e._v(" "),t("ul",[t("li",[e._v("Do one of the following:")]),e._v(" "),t("li",[e._v("Edit site.yaml file and add a comment for all the playbooks except the ones that you want to execute.")])]),e._v(" "),t("p",[e._v("For example, add the following comments in the site.yaml file to deploy RHEL 8.5 OS on the worker nodes:")]),e._v(" "),t("p",[e._v("import_playbook: playbooks/rhel8_os_deployment.yml")]),e._v(" "),t("p",[e._v("# import_playbook: playbooks/copy_ssh.yml")]),e._v(" "),t("p",[e._v("# import_playbook: playbooks/prepare_worker_nodes.yml")]),e._v(" "),t("p",[e._v("# import_playbook: playbooks/ntp.yml")]),e._v(" "),t("p",[e._v("# import_playbook: openshift-ansible/playbooks/scaleup.yml")]),e._v(" "),t("ul",[t("li",[e._v("Run the individual YAML files using the following command:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/<yaml_filename>.yml")]),e._v(" "),t("p",[e._v("For example, run the following YAML file to deploy RHEL 8.5 OS on the worker nodes:")]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/rhel8_os_deployment.yml")]),e._v(" "),t("p",[e._v("For more information on executing individual playbooks, see the consecutive sections.")]),e._v(" "),t("p",[t("strong",[e._v("Adding RHEL 8.5 worker nodes")])]),e._v(" "),t("p",[e._v("This section describes how to add RHEL 8.5 worker nodes to an existing RH OCP cluster.")]),e._v(" "),t("p",[e._v("To add RHEL 8.5 worker nodes to the RH OCP cluster:")]),e._v(" "),t("ol",[t("li",[e._v("Login to the Installer VM.")])]),e._v(" "),t("p",[e._v("This installer VM was created as a KVM VM on one of the head nodes using the rhel7_installerVM.yml playbook. For more information, see the "),t("a",{attrs:{href:"bookmark://_Creating_RHEL_7"}},[e._v("Creating RHEL 7 installer machine")]),e._v(" section.")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Navigate to the /opt/NGS-OpenShift/worker_nodes/ directory, edit the input.yaml and inventory/hosts files, and enter the values as per your setup.")]),e._v(" "),t("li",[e._v("Copy RHEL 8.5 DVD ISO to the /usr/share/nginx/html/ directory.")]),e._v(" "),t("li",[e._v("Navigate to the /opt/ hpe-solutions-openshift/DL-LTI-Openshift/worker_nodes directory and run the following command:")])]),e._v(" "),t("p",[e._v("# sh setup.sh")]),e._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[e._v("Add the worker nodes to the cluster using one of the following methods:")])]),e._v(" "),t("ul",[t("li",[e._v("Run the following sequence of playbooks:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/rhel8_os_deployment.yml")]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/copy_ssh.yml")]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/prepare_worker_nodes.yml")]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/ntp.yml")]),e._v(" "),t("p",[e._v("# ansible-playbook -i hosts playbooks/scaleup.yml")]),e._v(" "),t("ul",[t("li",[e._v("If you want to deploy the entire solution to add the worker nodes to the cluster, execute the following playbook:")])]),e._v(" "),t("p",[e._v("# ansible-playbook -i inventory/hosts site.yaml")]),e._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[e._v("Once all the playbooks are executed successfully, check the status of the node using the following command:")])]),e._v(" "),t("p",[e._v("# oc get nodes")]),e._v(" "),t("p",[e._v("The following output is displayed:")]),e._v(" "),t("p",[e._v("NAME\t\t\tSTATUS\tROLES\t\tAGE\tVERSION")]),e._v(" "),t("p",[e._v("master0.ocp.ngs.local\tReady\tmaster,worker\t13d\tv1.23.3+e419edf")]),e._v(" "),t("p",[e._v("master1.ocp.ngs.local\tReady\tmaster,worker\t13d\tv1.23.3+e419edf")]),e._v(" "),t("p",[e._v("master2.ocp.ngs.local\tReady\tmaster,worker\t13d\tv1.23.3+e419edf")]),e._v(" "),t("p",[e._v("worker1.ocp.ngs.local\tReady\tworker\t\t23h\tv1.23.5+3afdacb")]),e._v(" "),t("p",[e._v("worker2.ocp.ngs.local\tReady\tworker\t\t23h\tv1.23.5+3afdacb")]),e._v(" "),t("p",[e._v("worker3.ocp.ngs.local\tReady\tworker\t\t23h\tv1.23.5+3afdacb")]),e._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[e._v("Once the worker nodes are added to the cluster, set the “mastersSchedulable” parameter as false to ensure that the master nodes are not used to schedule pods.")]),e._v(" "),t("li",[e._v("Edit the schedulers.config.openshift.io resource.")])]),e._v(" "),t("p",[e._v("# oc edit schedulers.config.openshift.io cluster")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Configure the mastersSchedulable field.")])]),e._v(" "),t("p",[e._v("apiVersion: config.openshift.io/v1")]),e._v(" "),t("p",[e._v("kind: Scheduler")]),e._v(" "),t("p",[e._v("metadata:")]),e._v(" "),t("p",[e._v('creationTimestamp: “2019-09-10T03:04:05Z"')]),e._v(" "),t("p",[e._v("generation: 1")]),e._v(" "),t("p",[e._v("name: cluster")]),e._v(" "),t("p",[e._v('resourceVersion: “433"')]),e._v(" "),t("p",[e._v("selfLink: /apis/config.openshift.io/v1/schedulers/cluster")]),e._v(" "),t("p",[e._v("uid: a636d30a-d377-11e9-88d4-0a60097bee62")]),e._v(" "),t("p",[e._v("spec:")]),e._v(" "),t("p",[e._v("mastersSchedulable: false")]),e._v(" "),t("p",[e._v("policy:")]),e._v(" "),t("p",[e._v('name: “"')]),e._v(" "),t("p",[e._v("status: { }")]),e._v(" "),t("p",[t("strong",[e._v("NOTE")])]),e._v(" "),t("p",[e._v("Set the mastersSchedulable to true to allow Control Plane nodes to be schedulable or false to disallow Control Plane nodes to be schedulable.")]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Save the file to apply the changes.")])]),e._v(" "),t("p",[e._v("# oc get nodes")]),e._v(" "),t("ul",[t("li",[e._v("The following output is displayed:")])]),e._v(" "),t("p",[e._v("NAME\t\t\tSTATUS\tROLES\tAGE\tVERSION")]),e._v(" "),t("p",[e._v("master0.ocp.ngs.local\tReady\tmaster\t13d\tv1.23.3+e419edf")]),e._v(" "),t("p",[e._v("master1.ocp.ngs.local\tReady\tmaster\t13d\tv1.23.3+e419edf")]),e._v(" "),t("p",[e._v("master2.ocp.ngs.local\tReady\tmaster\t13d\tv1.23.3+e419edf")]),e._v(" "),t("p",[e._v("worker1.ocp.ngs.local\tReady\tworker\t23h\tv1.23.5+3afdacb")]),e._v(" "),t("p",[e._v("worker2.ocp.ngs.local\tReady\tworker\t23h\tv1.23.5+3afdacb")]),e._v(" "),t("p",[e._v("worker3.ocp.ngs.local\tReady\tworker\t23h\tv1.23.5+3afdacb")]),e._v(" "),t("p",[t("strong",[e._v("NOTE")])]),e._v(" "),t("p",[e._v("To add more worker nodes, update worker details in haproxy and binddns on head nodes and then add RHEL 8.5 worker nodes to the RH OCP cluster. For more information on adding worker nodes, see the "),t("a",{attrs:{href:"bookmark://_Adding_RHEL_8.5"}},[e._v("Adding RHEL 8.5 worker nodes")]),e._v(" section.")])])}),[],!1,null,null,null);t.default=l.exports}}]);