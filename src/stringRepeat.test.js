import stringRepeat from "./stringRepeat"

describe('stringRepeat', ()=> {

    test('given 1 and "X", return "X"', ()=> {
        // Prepare
        const inputNum = 1;
        const inputString = "X";
        const expectedOutputString = "X";
        // Run
        const actualOutput = stringRepeat(inputNum, inputString);

        // Expect
        expect(actualOutput).toBe(expectedOutputString);
    })

    test('given 6 and "I", return "IIIIII"', ()=> {
        // Prepare
        const inputNum = 6;
        const inputString = "I";
        const expectedOutputString = "IIIIII";
        // Run
        const actualOutput = stringRepeat(inputNum, inputString); 

        // Expect
        expect(actualOutput).toBe(expectedOutputString);
    })

    test('given 3 and "Hello", return "HelloHelloHello"', ()=> {
        // Prepare
        const inputNum = 3;
        const inputString = "Hello";
        const expectedOutputString = "HelloHelloHello";
        // Run
        const actualOutput = stringRepeat(inputNum, inputString);

        // Expect
        expect(actualOutput).toBe(expectedOutputString);
    })
});