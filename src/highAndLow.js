const highAndLow = (input) => {

    if (input.length === 1) {
        return input
    }

    let max = -Infinity;
    let min = Infinity;


    if (input.length == 3) {
        return input.split('').reverse().join('');

        // "1 2" => [2, ,1] => "2 1"
    }

    const inputArray = input.split(' ');

    for (let i = 0; i < inputArray.length; i++) {
        const num = Number(inputArray[i]);

        if (num > max) {
            max = num
        }

        if (num < min) {
            min = num
        }
    }

    return `${max} ${min}`

    


}

export default highAndLow