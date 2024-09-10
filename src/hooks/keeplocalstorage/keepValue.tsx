export default function clearLocalStorageButKeep(keysToKeep: string[]): void {
    const valuesToKeep: { [key: string]: string } = {};

    keysToKeep.forEach(key => {
        const value: string | null = localStorage.getItem(key);
        if (value !== null) {
            valuesToKeep[key] = value;
        }
    });

    localStorage.clear();

    Object.keys(valuesToKeep).forEach(key => {
        localStorage.setItem(key, valuesToKeep[key]);
    });
}