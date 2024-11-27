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
exports.WeatherService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const ropa_schema_1 = require("../ropa/schemas/ropa.schema");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let WeatherService = class WeatherService {
    constructor(httpService, clothesModel) {
        this.httpService = httpService;
        this.clothesModel = clothesModel;
    }
    async getTemperature(city) {
        const apiKey = '83df0b802247f2004794ce2ed9e74b3c';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        return response.data.main.temp;
    }
    async categorizeTemperature(city) {
        const temperature = await this.getTemperature(city);
        if (temperature < 10) {
            return 'frio';
        }
        else if (temperature >= 10 && temperature <= 25) {
            return 'templado';
        }
        else {
            return 'caliente';
        }
    }
    async categorizeAge(edad) {
        if (edad < 18) {
            return 'Niño';
        }
        else if (edad >= 18 && edad <= 35) {
            return 'Joven';
        }
        else {
            return 'Adulto';
        }
    }
    async getClothes(city) {
        const category = await this.categorizeTemperature('Quito');
        return this.clothesModel.find({ clima: category }).exec();
    }
    async getClothesbyWFA(edad, formalidad) {
        const category = await this.categorizeTemperature('Quito');
        const Agecategory = await this.categorizeAge(edad);
        return this.clothesModel.find({ clima: category, formalidad: formalidad, edad: Agecategory }).exec();
    }
};
exports.WeatherService = WeatherService;
exports.WeatherService = WeatherService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(ropa_schema_1.Ropa.name)),
    __metadata("design:paramtypes", [axios_1.HttpService,
        mongoose_2.Model])
], WeatherService);
//# sourceMappingURL=weather.service.js.map