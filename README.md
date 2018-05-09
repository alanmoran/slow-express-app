## Node.js sample app on OpenShift!
-----------------

This example will serve a two routes:
 - /slow
 - /

/slow uses `WAIT_MIN` env var to wait before responding to a request. Defaults to 5 minutes. This is useful if you want to test Openshift router timeouts.

### Setup

Below are some commands to get the app up and running:

  - `oc new-project slow-app`
  - `oc new-app https://github.com/alanmoran/slow-express-app -l name=slowapp -e WAIT_MIN=10` # Setting response time to 10 minutes
  - `oc expose svc/slow-express-app` 