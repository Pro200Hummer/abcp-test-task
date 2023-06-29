/**
 * Company interface used to define the company structure
 * @property {string} bs - Business strategy of the company
 * @property {string} catchPhrase - Catch phrase associated with the company
 * @property {string} name - Name of the company
 */
export type Company = {
    bs: string;
    catchPhrase: string;
    name: string;
};
/**
 * Representation of an address.
 * @typedef {Object} Address
 * @property {string} street - The street of the address
 * @property {string} suite - The suite in the address
 * @property {string} city - The city of the address
 * @property {string} zipcode - The zipcode of the address
 * @property {Object} geo - An object containing the geo coordinates
 * @property {string} geo.lat - The latitude of the address
 * @property {string} geo.lng - The longitude of the address
 */
export type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
};
/**
 * Represents the type of an User
 * @name User
 * @property {number} id - A ID number representing the user
 * @property {string} email - Email address of the user
 * @property {string} name - The full name of the user
 * @property {string} phone - Phone number of the user
 * @property {string} username - Username for the user
 * @property {string} website - Website URL of the user
 * @property {Company} company - Company associated with the user
 * @property {Address} address - Address of the user
 */
export type User = {
    id: number;
    email: string;
    name: string;
    phone: string;
    username: string;
    website: string;
    company: Company;
    address: Address;
};

/**
 * Get the nested keys of a given object.
 * @template T The type of the given object.
 * @param {T} obj The object to get the nested keys from.
 * @returns {NestedKeys<T>} The nested keys of the given object.
 */
export type NestedKeys<T> = T extends object ? {
    [K in keyof T]: K extends string | number
        ? `${K}` | `${K}.${NestedKeys<T[K]>}`
        : never
}[keyof T] : '';
