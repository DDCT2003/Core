export declare class MongoRopaRepository {
    private data;
    create(ropa: any): Promise<any>;
    findAll(): Promise<any[]>;
    findOneById(id: string): Promise<any>;
    update(id: string, updateRopa: any): Promise<any>;
    delete(id: string): Promise<any>;
}
