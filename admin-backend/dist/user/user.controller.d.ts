import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(createUser: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    login(body: {
        name: string;
        password: string;
    }): Promise<{
        name: string;
        role: import("./schemas/user.schema").AdminRole;
        edad: string;
        formalidad: import("./schemas/user.schema").Formalidad;
    }>;
}
