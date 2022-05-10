const { awscdk } = require('projen');
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'koop-js-demo',
  deps: [
    'koop',
    'serverless',
    'serverless-http',
    'serverless-offline',
    'request',
  ],
  scripts: {
    'install:koop': 'cd src/koop && yarn install',
    'postbuild': 'npx projen install:koop',
  },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();