export enum RouteParamtypes {
  REQUEST,
  RESPONSE,
  NEXT,
  BODY,
  QUERY,
  PARAM,
  HEADERS,
  SESSION,
  FILE,
  FILES,
  HOST,
  IP,
}
export type ParamData = object | string | number;
export interface RouteParamMetadata {
  index: number;
  data?: ParamData;
}
export function assignMetadata<TParamtype = any, TArgs = any>(
  args: TArgs,
  paramtype: TParamtype,
  index: number,
  data?: ParamData,
) {
  return {
    ...args,
    [`${paramtype}:${index}`]: {
      index,
      data,
    },
  };
}
const createRouteParamDecorator = (paramtype: RouteParamtypes) => {
  return (data?: ParamData): ParameterDecorator => (target, key, index) => {
    console.log('data ', data);
    const args =
      Reflect.getMetadata('__routeArguments__', target.constructor, key) || {};
    Reflect.defineMetadata(
      '__routeArguments__',
      assignMetadata<RouteParamtypes, Record<number, RouteParamMetadata>>(
        args,
        paramtype,
        index,
        data,
      ),
      target.constructor,
      key,
    );
  };
};
export const Request: () => ParameterDecorator = createRouteParamDecorator(
  RouteParamtypes.REQUEST,
);

export function Body(options?: Request): Function {
    return function (target: Object, key: string, index: number) {
      const args =
      Reflect.getMetadata('__routeArguments__', target.constructor, key) || {};
     
    };
}

// export function Body(): Function {
//   return createRouteParamDecorator();
// }
