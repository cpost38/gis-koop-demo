import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { KoopFunction } from './koop-lambda';

export class KoopStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    new KoopFunction(this, 'koop-lambda', {

    });

  }
}
