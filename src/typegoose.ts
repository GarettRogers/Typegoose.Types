/* imports */
import 'reflect-metadata';

import { getName } from './internal/utils';

import type {
  DocumentType,
  Ref,
  ReturnModelType
} from './types';

/* exports */
// export the internally used "mongoose", to not need to always import it
export { setLogLevel, LogLevels } from './logSettings';
export * from './prop';
export * from './hooks';
export * from './plugin';
export * from './index';
export * from './modelOptions';
export * from './queryMethod';
export * from './typeguards';
export * as defaultClasses from './defaultClasses';
export * as errors from './internal/errors';
export * as types from './types';
export * from './types'
export { DocumentType, Ref, ReturnModelType };
export { getClassForDocument, getClass, getName } from './internal/utils';
export { Severity } from './internal/constants';



