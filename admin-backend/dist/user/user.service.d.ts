import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
export declare class UserService {
    private usuarioModel;
    constructor(usuarioModel: Model<User>);
    create(user: any): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    login(name: string, password: string): Promise<{
        name: string;
        role: import("./schemas/user.schema").AdminRole;
    }>;
}
