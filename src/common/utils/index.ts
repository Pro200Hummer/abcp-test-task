export function setToSessionStorage<T>(key: string, value: T){
    const stringifyValue = JSON.stringify(value)
    sessionStorage.setItem(key, stringifyValue)
}

export function getFromSessionStorage<T>(key: string, initialValue: T){
    const result = sessionStorage.getItem(key)
    return result ? JSON.parse(result) : initialValue
}
