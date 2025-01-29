"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoRopaRepository = void 0;
const common_1 = require("@nestjs/common");
const ropa_model_1 = require("../ropa.model");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let MongoRopaRepository = class MongoRopaRepository {
    constructor(ropaModel) {
        this.ropaModel = ropaModel;
    }
    async create(ropa) {
        const newRopa = new this.ropaModel(ropa);
        return newRopa.save();
    }
    async findAll() {
        return this.ropaModel.find().exec();
    }
    async findOneById(id) {
        return this.ropaModel.findById(id).exec();
    }
    async update(id, updateRopa) {
        return this.ropaModel
            .findByIdAndUpdate(id, updateRopa, { new: true })
            .exec();
    }
    async delete(id) {
        return this.ropaModel.findByIdAndDelete(id).exec();
    }
};
exports.MongoRopaRepository = MongoRopaRepository;
exports.MongoRopaRepository = MongoRopaRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(ropa_model_1.Ropa.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MongoRopaRepository);
//# sourceMappingURL=mongo-ropa.repository.js.map