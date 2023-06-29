import {NestedKeys, User} from "../../../common";

/**
 * Generates a nested key given an array of keys and a title.
 *
 * @template T The type of the object that the key is generated from.
 * @param {Array<[NestedKeys<T>, string]>} schema An array of [nested key, title] pairs.
 * @param {T} obj The object to generate the nested key from.
 * @returns {{values from object}, {titles}} An array with the generated titles and values.
 */
export function generateNestedKeys<T extends Record<string, any>>(
    schema: Array<[NestedKeys<T>, string]>,
    obj: T
): [(keyof T)[], string[]] {
    const values: any[] = [];
    const titles: (keyof T)[] = [];

    for (const [nestedKey, title] of schema) {
        const result = nestedKey.split('.').reduce((acc: T, key: string) => acc && acc[key], obj);
        values.push(result);
        titles.push(title as keyof T);
    }

    return [titles, values];
}
/**
 * Defines a schema of nested keys to strings for user info
 * @typedef {Array.<[NestedKeys<User>, string]>} userInfoSchema
 */
export const userInfoSchema: Array<[NestedKeys<User>, string]> = [
    ['username', 'Username'],
    ['phone', 'Phone number'],
];
