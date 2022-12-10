export type ServerResponse<T> = {
    count: number;
    next: any;
    prev: any;
    results: Array<T>;
};
