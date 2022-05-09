import { App } from 'aws-cdk-lib';
import { KoopStack } from './koop-stack';

const sandboxEnvironment = {
  account: '122467643252',
  region: 'eu-west-1',
};

const app = new App();

new KoopStack(app, 'koop-stack', {
  env: sandboxEnvironment,
});

app.synth();