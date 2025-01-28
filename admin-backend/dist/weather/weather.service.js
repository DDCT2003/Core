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
exports.WeatherService = void 0;
const common_1 = require("@nestjs/common");
const WeatherCategorizationService_1 = require("./WeatherCategorizationService");
const ApiWeatherService_1 = require("./ApiWeatherService");
const ClothesService_1 = require("../ropa/ClothesService");
let WeatherService = class WeatherService {
    constructor(apiWeatherService, weatherCategorizationService, clothesService) {
        this.apiWeatherService = apiWeatherService;
        this.weatherCategorizationService = weatherCategorizationService;
        this.clothesService = clothesService;
    }
    async getClothes(city) {
        const temperature = await this.apiWeatherService.getTemperature(city);
        const category = this.weatherCategorizationService.categorizeTemperature(temperature);
        return this.clothesService.getClothesByCriteria(category);
    }
    async getClothesByAgeAndFormality(city, age, formalidad) {
        const temperature = await this.apiWeatherService.getTemperature(city);
        const tempCategory = this.weatherCategorizationService.categorizeTemperature(temperature);
        const ageCategory = this.weatherCategorizationService.categorizeAge(age);
        return this.clothesService.getClothesByCriteria(tempCategory, formalidad, ageCategory);
    }
};
exports.WeatherService = WeatherService;
exports.WeatherService = WeatherService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [ApiWeatherService_1.ApiWeatherService,
        WeatherCategorizationService_1.WeatherCategorizationService,
        ClothesService_1.ClothesService])
], WeatherService);
//# sourceMappingURL=weather.service.js.map