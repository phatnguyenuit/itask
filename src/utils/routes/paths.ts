import { AuthInfo } from 'types/common';
import { toKebabCase } from '../string';

export const createPaths = <TMap extends Record<string, PathRule<any>>>(
  basename: string,
  map: TMap,
) =>
  Object.fromEntries(
    Object.entries(map).map(([key, pathRule]) => {
      const { title, path, ...rest } = pathRule;
      return [
        key,
        Object.assign((...args: any[]) => {
          let pathname: string;
          switch (typeof path) {
            case 'function':
              pathname = path(...args);
              break;
            case 'string':
              pathname = path;
              break;
            default:
              pathname = toKebabCase(key);
          }
          return {
            ...rest,
            title,
            shortPath: pathname,
            path: `/${basename}/${pathname}`,
          };
        }, pathRule),
      ];
    }),
  ) as unknown as {
    [k in keyof TMap]: PathCreator<PathRuleArgs<TMap[k]>> &
      PathRule<PathRuleArgs<TMap[k]>>;
  };

export interface PathRule<TArgs extends any[]> extends AuthInfo {
  title: string;
  shortPath?: string;
  path?: string | ((...args: TArgs) => string);
  protectedRoute?: boolean;
}

export interface PathInfo extends AuthInfo {
  title: string;
  path: string;
  shortPath: string;
  protectedRoute?: boolean;
}

export type PathCreator<TArgs extends any[]> = (...args: TArgs) => PathInfo;

type PathRuleArgs<TPathRule extends PathRule<any>> = TPathRule['path'] extends (
  ...args: any[]
) => any
  ? Parameters<TPathRule['path']>
  : [];
