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
exports.RopaService = void 0;
const common_1 = require("@nestjs/common");
const RopaValidator_1 = require("./Validators/RopaValidator");
const mongoose_1 = require("@nestjs/mongoose");
const ropa_model_1 = require("./ropa.model");
const mongoose_2 = require("mongoose");
let RopaService = class RopaService {
    constructor(ropaModel) {
        this.ropaModel = ropaModel;
    }
    async findAll() {
        return this.ropaModel.find().exec();
    }
    async create(ropa) {
        RopaValidator_1.RopaValidator.validateEdad(ropa.edad);
        return this.ropaRepository.create(ropa);
    }
    async searchOne(id) {
        return this.ropaRepository.findOneById(id);
    }
    async update(id, updateRopa) {
        RopaValidator_1.RopaValidator.validateEdad(updateRopa.edad);
        return this.ropaRepository.update(id, updateRopa);
    }
    async delete(id) {
        return this.ropaRepository.delete(id);
    }
};
exports.RopaService = RopaService;
exports.RopaService = RopaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(ropa_model_1.Ropa.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RopaService);
//# sourceMappingURL=ropa.service.js.map