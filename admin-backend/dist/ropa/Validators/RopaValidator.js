"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RopaValidator = void 0;
class RopaValidator {
    static validateEdad(edad) {
        if (edad < 0) {
            throw new Error('La edad no puede ser negativa.');
        }
    }
}
exports.RopaValidator = RopaValidator;
//# sourceMappingURL=RopaValidator.js.map