document.getElementById('fibonacciForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const numberOfElements = parseInt(document.getElementById('number').value);

    if (isNaN(numberOfElements) || numberOfElements <= 0) {
        console.log("Please enter a valid number greater than 0.");
        return;
    }

    const fibonacciSequence = generateFibonacci(numberOfElements);
    console.log(fibonacciSequence);

    document.getElementById('result').textContent = `Fibonacci Sequence: [${fibonacciSequence.join(', ')}]`;
});

function generateFibonacci(n) {
    const sequence = [0, 1];

    if (n === 1) return [0];
    if (n === 2) return sequence;

    for (let i = 2; i < n; i++) {
        const nextElement = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextElement);
    }

    return sequence;
}
