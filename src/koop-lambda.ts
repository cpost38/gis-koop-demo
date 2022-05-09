import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for KoopFunction
 */
export interface KoopFunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function for Koop js lambda.
 */
export class KoopFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: KoopFunctionProps) {
    super(scope, id, {
      description: 'Koop js lambda',
      ...props,
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, 'koop')),
    });
    this.addEnvironment('AWS_NODEJS_CONNECTION_REUSE_ENABLED', '1', { removeInEdge: true });
  }
}