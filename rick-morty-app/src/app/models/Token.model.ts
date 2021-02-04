export interface TokenModel{
    type: string;
    token: string;
    expiresIn?: Date;
    createdAt?: Date;
}