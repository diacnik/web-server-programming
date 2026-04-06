// Review these patterns for type safety

export type DataEnvelope<T> = {
    data: T;
    isSuccess: boolean;
    message?: string; // optional message field for additional information, such as error messages
};

export type DataListEnvelope<T> = DataEnvelope<T[]> & { // & is used to combine two types, in this case we are combining DataEnvelope with an object that has a total field
    total: number;
};

export type PagingRequest = {
    page?: number;
    pageSize?: number;
    search?: string;
    sortBy?: string;
    descending?: boolean;
}