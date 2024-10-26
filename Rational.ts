// Rational.ts
export class Rational {
    private numerator: number;
    private denominator: number;
  
    constructor(numerator: number, denominator: number) {
      if (denominator === 0) {
        throw new Error('Denominator cannot be zero');
      }
      this.numerator = numerator;
      this.denominator = denominator;
      this.normalize();
    }
  
    // Getter methods
    getNumerator(): number {
      return this.numerator;
    }
  
    getDenominator(): number {
      return this.denominator;
    }
  
    // Normalize the rational number
    normalize(): Rational {
      const gcd = this.greatestCommonDivisor(this.numerator, this.denominator);
      this.numerator = this.numerator / gcd;
      this.denominator = this.denominator / gcd;
      return this;
    }
  
    // Helper method to calculate the greatest common divisor
    private greatestCommonDivisor(a: number, b: number): number {
      if (b === 0) {
        return a;
      }
      return this.greatestCommonDivisor(b, a % b);
    }
  
    // Check if the rational number is a whole number
    isWhole(): boolean {
      return this.numerator % this.denominator === 0;
    }
  
    // Check if the rational number has decimals
    isDecimal(): boolean {
      return !this.isWhole();
    }
  
    // Compare two rational numbers
    equals(numerator: number, denominator: number): boolean;
    equals(r: Rational): boolean;
    equals(param: any, denominator?: number): boolean {
      if (param instanceof Rational) {
        return (
          this.numerator * param.getDenominator() ===
          this.denominator * param.getNumerator()
        );
      } else if (typeof param === 'number' && typeof denominator === 'number') {
        return this.numerator * denominator === this.denominator * param;
      }
      return false;
    }
  
    // Static method to parse rational numbers from string
    static parseRational(str: string): Rational {
      const parts = str.split('/');
      const numerator = parseInt(parts[0]);
      const denominator = parseInt(parts[1]);
      return new Rational(numerator, denominator);
    }
  
    // Static method to parse rational numbers from arrays of characters
    static parseRationalFromArray(numeratorChars: string[], denominatorChars: string[]): Rational {
      const numerator = parseInt(numeratorChars.join(''));
      const denominator = parseInt(denominatorChars.join(''));
      return new Rational(numerator, denominator);
    }
  
    // Return a string representation of the rational number
    toString(): string {
      if (this.isWhole()) {
        return `${this.numerator}`;
      }
      return `${this.numerator}/${this.denominator}`;
    }
  }
  