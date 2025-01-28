"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoRopaRepository = void 0;
const common_1 = require("@nestjs/common");
let MongoRopaRepository = class MongoRopaRepository {
    constructor() {
        this.data = [];
    }
    async create(ropa) {
        const newItem = { id: Date.now(), ...ropa };
        this.data.push(newItem);
        return newItem;
    }
    async findAll() {
        return this.data;
    }
    async findOneById(id) {
        return this.data.find((item) => item.id === id);
    }
    async update(id, updateRopa) {
        const index = this.data.findIndex((item) => item.id === id);
        if (index === -1)
            throw new Error('Item not found');
        this.data[index] = { ...this.data[index], ...updateRopa };
        return this.data[index];
    }
    async delete(id) {
        const index = this.data.findIndex((item) => item.id === id);
        if (index === -1)
            throw new Error('Item not found');
        return this.data.splice(index, 1)[0];
    }
};
exports.MongoRopaRepository = MongoRopaRepository;
exports.MongoRopaRepository = MongoRopaRepository = __decorate([
    (0, common_1.Injectable)()
], MongoRopaRepository);
//# sourceMappingURL=mongo-ropa.repository.js.map