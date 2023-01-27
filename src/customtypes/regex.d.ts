import { DataType } from '../datatypes/base';

/**
 * Creates a regex type check.
 *
 * @param {RegExp} expression The regex
 * @param {string} typeName The type name
 * @returns {number} The resulting sum of the two numbers.
 */
export declare function regex<T extends object>(expression: RegExp, typeName: string): DataType<T>;
