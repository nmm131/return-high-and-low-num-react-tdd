import highAndLow from "./highAndLow"
describe('highToLow', ()=> {
  test('given string of "1", return "1"', () => {
    // Prepare
    const input = "1";
    const output = "1";

    // Run
    const actualOutput = highAndLow(input);

    // Expect
    expect(actualOutput).toBe(input);
  });

  test('given string of "1 2", return "2 1"', () => {
    // Prepare
    const input = "1 2";
    const output = "2 1";

    // Run
    const actualOutput = highAndLow(input);

    // Expect
    expect(actualOutput).toBe(output);

  });

  test("1 2 3 4 5", () => {
    // Prepare
    const input = "1 2 3 4 5";
    const output = "5 1";

    // Run
    const actualOutput = highAndLow("1 2 3 4 5");

    // Expect
    expect(actualOutput).toBe(output);
  });
}) 

