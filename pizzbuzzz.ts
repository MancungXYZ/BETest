function fizzBuzz(limit: number): void {
    for (let i = 1; i <= limit; i++) {
        let output = '';

        if (i % 3 === 0) {
            output += 'Fizz';
        }

        if (i % 5 === 0) {
            output += 'Buzz';
        }

        console.log(output || i);
    }
}

// Contoh penggunaan dengan batas 15
fizzBuzz(15);
