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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RopaService = void 0;
const common_1 = require("@nestjs/common");
const mongo_ropa_repository_1 = require("./repositories/mongo-ropa.repository");
const RopaValidator_1 = require("./Validators/RopaValidator");
let RopaService = class RopaService {
    constructor(ropaRepository) {
        this.ropaRepository = ropaRepository;
    }
    async create(ropa) {
        RopaValidator_1.RopaValidator.validateEdad(ropa.edad);
        return this.ropaRepository.create(ropa);
    }
    async findAll() {
        return this.ropaRepository.findAll();
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
    __metadata("design:paramtypes", [mongo_ropa_repository_1.MongoRopaRepository])
], RopaService);
//# sourceMappingURL=ropa.service.js.map