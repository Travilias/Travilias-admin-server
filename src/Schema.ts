

export default interface Schema<T> {
    toSchema: () => T;
}