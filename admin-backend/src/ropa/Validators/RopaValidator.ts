export class RopaValidator {
    static validateEdad(edad: number): void {
      if (edad < 0) {
        throw new Error('La edad no puede ser negativa.');
      }
    }
  }
  