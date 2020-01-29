import { ScopeOptions } from '../interfaces/options.interface';
import { SCOPE_OPTIONS_METADATA } from '../constants';
export type InjcetableOptions = ScopeOptions;

export const Injectable = (options?: InjcetableOptions): ClassDecorator => {
  return (target: object) => {
    Reflect.defineMetadata(SCOPE_OPTIONS_METADATA, options, target);
  };
};
