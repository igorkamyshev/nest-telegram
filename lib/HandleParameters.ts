import { Type } from '@nestjs/common';

import { ContextTransformer } from './ContextTransformer';

interface ArgumentTransformation {
  index: number;
  transform: Type<ContextTransformer>;
}

export interface HandleParameters {
  onStart?: boolean;
  command?: string;
  message?: string | RegExp;
  transformations?: ArgumentTransformation[];
}
