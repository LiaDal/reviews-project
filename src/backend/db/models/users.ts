export interface IUser {
    name: string;
    email: string;
}

export interface DbUser extends IUser {
    id: number;
}