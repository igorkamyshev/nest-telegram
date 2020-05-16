import { Type } from '@nestjs/common';

export interface ServiceProvider {
  get<T>(
    typeOrToken: string | symbol | Type<T>,
    options?: {
      strict: boolean;
    },
  ): any;
}
