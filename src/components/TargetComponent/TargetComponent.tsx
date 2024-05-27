import React, { memo } from 'react';
import cn from 'clsx';
import s from './TargetComponent.sass';

export type TargetComponentProps = {
  className?: string;
  count?: number;
  options?: object;
  array?: unknown[];
  callback?: () => void;
};

// const ref = {
//   current: '',
// };

// let outSideCallback = (() => {}) as () => unknown;
// let _deps: unknown[];

// const _useCallback = (callback: () => unknown, deps: unknown[]) => {
//   if (JSON.stringify(deps) === JSON.stringify(_deps)) return outSideCallback;
//   _deps = deps;
//   outSideCallback = callback;
//   return outSideCallback;
// };

// const Component = (a: string) => {
//   ref.current = a;
//   const func1 = () => {
//     console.log(ref.current);
//   };
//   const func = _useCallback(func1, []);

//   console.log(func === func1);

//   func();
// };

// Component('1');
// Component('s');
// Component('232');

// const ref = {
//     current: '',
//   };

//   let outSideCallback = (() => {}) as () => unknown;
//   let _deps: unknown[];

//   const _useCallback = (callback: () => unknown, deps: unknown[]) => {
//     if (JSON.stringify(deps) === JSON.stringify(_deps)) return outSideCallback;
//     _deps = deps;
//     outSideCallback = callback;
//     return outSideCallback;
//   };

//   const Component = (a: string) => {
//     ref.current = a;
//     const func1 = () => {
//       console.log(a);
//     };
//     const func = _useCallback(func1, []);

//     console.log(func === func1);

//     func();
//   };

//   Component('1');
//   Component('s');
//   Component('232');

export const TargetComponent = memo<TargetComponentProps>(({ className }) => {
  console.log('rerender TargetComponent');
  return <div className={cn(s.root, className)}>TargetComponent</div>;
});
