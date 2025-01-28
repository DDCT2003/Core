"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherCategorizationService = void 0;
const common_1 = require("@nestjs/common");
let WeatherCategorizationService = class WeatherCategorizationService {
    categorizeTemperature(temperature) {
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
    categorizeAge(age) {
        if (age < 18) {
            return 'Niño';
        }
        else if (age >= 18 && age <= 35) {
            return 'Joven';
        }
        else {
            return 'Adulto';
        }
    }
};
exports.WeatherCategorizationService = WeatherCategorizationService;
exports.WeatherCategorizationService = WeatherCategorizationService = __decorate([
    (0, common_1.Injectable)()
], WeatherCategorizationService);
//# sourceMappingURL=WeatherCategorizationService.js.map