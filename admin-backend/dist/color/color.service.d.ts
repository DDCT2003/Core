import { Model } from 'mongoose';
import { Color } from './schemas/color.schema';
export declare class ColorService {
    private colorModel;
    constructor(colorModel: Model<Color>);
    create(color: any): Promise<import("mongoose").Document<unknown, {}, Color> & Color & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): Promise<Color[]>;
    update(id: string, updateColor: any): Promise<Color>;
    delete(id: string): Promise<Color>;
}
