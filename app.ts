import { Rational } from "./class/Rational";

const main = (): void => {
  const R1: Rational = new Rational(6, 4);
  const R2: Rational = R1.normalize();
  const R3: Rational = new Rational(12, 4);
  const R4: Rational = Rational.parseRational(["1", "3"], ["4", "1"]);
  const R5: Rational = Rational.parseRational("43/23");

  console.log(`R1 : ${R1.toString()}`);
  console.log(`R2 : ${R2.toString()}`);
  console.log(`R3 : ${R3.toString()}`);
  console.log();

  // Check equality
  console.log(`R1.equals(R2) : ${R1.equals(R2)}`);
  console.log(`R1.equals(R2) : ${R1.equals(R2)}`);
};

main();
