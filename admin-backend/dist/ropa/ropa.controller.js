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
exports.RopaController = void 0;
const common_1 = require("@nestjs/common");
const ropa_service_1 = require("./ropa.service");
let RopaController = class RopaController {
    constructor(ropaService) {
        this.ropaService = ropaService;
    }
    async create(createRopa) {
        return await this.ropaService.create(createRopa);
    }
    async findAll() {
        return this.ropaService.findAll();
    }
    async update(id, updateRopa) {
        return this.ropaService.update(id, updateRopa);
    }
    async searchOne(id) {
        return this.ropaService.searchOne(id);
    }
    async delete(id) {
        return this.ropaService.delete(id);
    }
};
exports.RopaController = RopaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RopaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RopaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RopaController.prototype, "update", null);
__decorate([
    (0, common_1.Put)('getOne/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RopaController.prototype, "searchOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RopaController.prototype, "delete", null);
exports.RopaController = RopaController = __decorate([
    (0, common_1.Controller)('ropa'),
    __metadata("design:paramtypes", [ropa_service_1.RopaService])
], RopaController);
//# sourceMappingURL=ropa.controller.js.map