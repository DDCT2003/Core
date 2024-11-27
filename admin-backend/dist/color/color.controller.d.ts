import { ColorService } from './color.service';
import { Color } from './schemas/color.schema';
export declare class ColorController {
    private colorService;
    constructor(colorService: ColorService);
    create(createColor: any): Promise<import("mongoose").Document<unknown, {}, Color> & Color & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): Promise<Color[]>;
    update(id: string, updateColor: any): Promise<Color>;
    delete(id: string): Promise<Color>;
}
