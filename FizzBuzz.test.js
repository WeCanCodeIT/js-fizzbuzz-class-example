const FizzBuzz = require("./FizzBuzz");

describe("FizzBuzz", () => {
  describe("parse", () => {
    let underTest;

    beforeEach(() => {
      underTest = new FizzBuzz();
    });

    test("should return 1 when given 1", () => {
      testParse(underTest, 1, 1);
    });

    test("should return 2 when given 2", () => {
      testParse(underTest, 2, 2);
    });

    test('should return "Fizz" when given 3', () => {
      testParse(underTest, 3, "Fizz");
    });

    test('should return "Buzz" when given 5', () => {
      testParse(underTest, 5, "Buzz");
    });

    test('should return "Fizz" for 6', () => {
      testParse(underTest, 6, "Fizz");
    });
  });
});

function testParse(underTest, inputNumber, expected) {
  const result = underTest.parse(inputNumber);
  // Assert
  expect(result).toEqual(expected);
}
