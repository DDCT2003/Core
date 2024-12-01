"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecomendacionesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const recomendaciones_service_1 = require("./recomendaciones.service");
const recomendaciones_controller_1 = require("./recomendaciones.controller");
const recomendaciones_schema_1 = require("./schemas/recomendaciones.schema");
let RecomendacionesModule = class RecomendacionesModule {
};
exports.RecomendacionesModule = RecomendacionesModule;
exports.RecomendacionesModule = RecomendacionesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: recomendaciones_schema_1.Recomendacion.name, schema: recomendaciones_schema_1.RecomendacionSchema }]),
        ],
        providers: [recomendaciones_service_1.RecomendacionesService],
        controllers: [recomendaciones_controller_1.RecomendacionesController]
    })
], RecomendacionesModule);
//# sourceMappingURL=recomendaciones.module.js.map