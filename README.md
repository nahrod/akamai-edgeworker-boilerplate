# Akamai EdgeWorker Boilerplate

A few files to kickstart your EdgeWorker project. Largely based on the [Development environment tutorial]
(https://techdocs.akamai.com/edgeworkers/docs/dev-environment-tutorial) from the EdgeWorkers documentation.

## Requirements
- Node.js/npm
- Akamai CLI with EdgeWorker and Sandbox package.

## How to use

### Initialization
- Add files to a empty folder..

```
cd new-project-name
npm init
```

- Update package.json with EdgeWorker ID.

### Develop/Test
Note: Please create and select a sandbox before running the sandbox script.

1. `npm run validate` - Creates the tarball with js and bundle.json, validates code using Akamai CLI.
2. `npm run sandbox` - Adds tarball to Sandbox and starts Sandbox.

### Deploy
1. `npm run validate` - Creates the tarball with js and bundle.json, validates code using Akamai CLI.
2. `npm run deploy` - Deploys to Akamai and activates new version in staging network.
3. `npm run production` - Activates EdgeWorker in production.