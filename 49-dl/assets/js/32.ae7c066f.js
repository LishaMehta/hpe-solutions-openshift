(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{534:function(e,t,a){"use strict";a.r(t);var n=a(54),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"load-balancer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-balancer"}},[e._v("#")]),e._v(" Load Balancer")]),e._v(" "),a("p",[e._v("Red Hat OpenShift Container Platform 4.9 uses an external load balancer to communicate from outside the cluster with services running inside the cluster. This section assumes that there is a load balancer available within the deployment environment and is available for use. This solution was developed using "),a("strong",[e._v("HA Proxy")]),e._v(", an open source solution with one (1) virtual machine for load balancing functionality.")]),e._v(" "),a("p",[e._v("This section covers its configuration. In a production environment, Hewlett Packard Enterprise recommends the use of enterprise load balancing such as F5 Networks Big-IP and its associated products.")]),e._v(" "),a("h2",{attrs:{id:"install-and-configure-haproxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-and-configure-haproxy"}},[e._v("#")]),e._v(" Install and Configure HAProxy")]),e._v(" "),a("p",[e._v("This section covers configuring HAProxy using ansible playbook.")]),e._v(" "),a("h3",{attrs:{id:"procedure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#procedure"}},[e._v("#")]),e._v(" Procedure")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Copy the ssh keys from installer machine to HAProxy machine by running following command")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ssh-copy-id root@haproxy_machine_ip\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Navigate to "),a("code",[e._v("$BASE_DIR/haproxy")])])]),e._v(" "),a("li",[a("p",[e._v("Update hosts file with bootstrap, master and worker details.")])])]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[e._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#change your fqdn names as per your environment")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("lb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n   lb01 ansible_host=20.x.x.x ansible_user=<installermachine_username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n   \n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("boot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n   ocpboot ansible_host=<fqdn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#ex:- ocpboot.tennet.com")]),e._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n   ocpmaster1 ansible_host=<fqdn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n   ocpmaster2 ansible_host=<fqdn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n   ocpmaster3 ansible_host=<fqdn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n   \n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#ex:- ocpmaster.tennet.com")]),e._v("\n   \n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("worker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n   ocpworker1 ansible_host=<fqdn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n   ocpworker2 ansible_host=<fqdn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n   ocpworker3 ansible_host=<fqdn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n  \n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#ex:- ocpworker.tennet.com")]),e._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("cluster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n   lb\n   boot\n   master\n   worker\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Execute the ansible playbook to configure HAProxy")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> ansible-playbook -i hosts haproxy.yaml\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[a("p",[e._v("The following entries are made in the haproxy.cfg file.")]),e._v(" "),a("p",[e._v("Sample haproxy.cfg file")])])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#---------------------------------------------------------------------")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# static backend for serving up images, stylesheets and such")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#---------------------------------------------------------------------")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#backend static")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# balance roundrobin")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# server static 127.0.0.1:4331 check")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#---------------------------------------------------------------------")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# round robin balancing between the various backends")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#---------------------------------------------------------------------")]),e._v("\n    frontend ocp4-kubernetes-api-server\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("bind")]),e._v(" *:6443\n        default_backend ocp4-kubernetes-api-server\n        mode tcp\n        option tcplog\n\n    backend ocp4-kubernetes-api-server\n        mode tcp\n        balance "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v("\n        server bootstrap bootstrap.ocp.pxelocal.local:6443 check\n        server master01 master01.ocp.pxelocal.local:6443 check\n        server master02 master02.ocp.pxelocal.local:6443 check\n        server master03 master03.ocp.pxelocal.local:6443 check\n    frontend ocp4-machine-config-server68\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("bind")]),e._v(" *:22623\n        default_backend ocp4-machine-config-server\n        mode tcp\n        option tcplog\n\n    backend ocp4-machine-config-server\n        balance "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v("\n        mode tcp\n        server bootstrap bootstrap.ocp.pxelocal.local:22623 check\n        server master01 master01.ocp.pxelocal.local:22623 check\n        server master02 master02.ocp.pxelocal.local:22623 check\n        server master03 master03.ocp.pxelocal.local:22623 check\n    frontend ocp4-router-http\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("bind")]),e._v(" *:80\n        default_backend ocp4-router-http\n        mode tcp\n        option tcplog\n\n    backend ocp4-router-http\n        balance "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v("\n        mode tcp\n        server worker03 worker03.ocp.pxelocal.local:80 check\n        server worker04 worker04.ocp.pxelocal.local:80 check\n        server worker01 worker01.ocp.pxelocal.local:80 check\n        server worker02 worker02.ocp.pxelocal.local:80 check\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# if creating a cluster with only master nodes to begin with and later adding the worker nodes, master nodes should be added in this section instead of worker nodes. Once all the worker nodes are added into the cluster, this configuration needs to be updated with the worker nodes.")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# server master01 master01.ocp.pxelocal.local:80 check")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# server master02 master02.ocp.pxelocal.local:80 check")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# server master03 master03.ocp.pxelocal.local:80 check")]),e._v("\n    frontend ocp4-router-https\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("bind")]),e._v(" *:443\n        default_backend ocp4-router-https\n        mode tcp\n        option tcplog\n\n        backend ocp4-router-https\n            balance "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v("\n            mode tcp\n            server worker03 worker03.ocp.pxelocal.local:443 check\n            server worker04 worker04.ocp.pxelocal.local:443 check\n            server worker01 worker01.ocp.pxelocal.local:443 check\n            server worker01 worker02.ocp.pxelocal.local:443 check\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# if creating a cluster with only master nodes to begin with and later adding the worker nodes, master nodes should be added in this section instead of worker nodes. Once all the worker nodes are added into the cluster, this configuration needs to be updated with the worker nodes.")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# server master01 master01.ocp.pxelocal.local:443 check")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# server master02 master02.ocp.pxelocal.local:443 check")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# server master03 master03.ocp.pxelocal.local:443 check")]),e._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("The load balancer configuration should contain values that are aligned to the installation environment.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);