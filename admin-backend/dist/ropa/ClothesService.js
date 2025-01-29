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
exports.ClothesService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const ropa_model_1 = require("./ropa.model");
const mongoose_2 = require("mongoose");
let ClothesService = class ClothesService {
    constructor(httpService, clothesModel) {
        this.httpService = httpService;
        this.clothesModel = clothesModel;
    }
    async getClothesByCriteria(clima, formalidad, edad) {
        const query = { clima };
        if (formalidad)
            query.formalidad = formalidad;
        if (edad)
            query.edad = edad;
        console.log(await this.clothesModel.find({ clima: clima }).exec());
        return this.clothesModel.find({ clima: clima, formalidad: formalidad, edad: edad }).exec();
    }
};
exports.ClothesService = ClothesService;
exports.ClothesService = ClothesService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(ropa_model_1.Ropa.name)),
    __metadata("design:paramtypes", [axios_1.HttpService,
        mongoose_2.Model])
], ClothesService);
//# sourceMappingURL=ClothesService.js.map