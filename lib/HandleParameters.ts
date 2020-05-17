import { Type } from '@nestjs/common';
import { UpdateType, MessageSubTypes } from 'telegraf/typings/telegram-types';

import { ContextTransformer } from './ContextTransformer';

interface ArgumentTransformation {
  index: number;
  transform: Type<ContextTransformer>;
}

export interface HandleParameters {
  onStart?: boolean;
  command?: string;
  message?: string | RegExp;
  on?: UpdateType[] | MessageSubTypes[];
  transformations?: ArgumentTransformation[];
}
