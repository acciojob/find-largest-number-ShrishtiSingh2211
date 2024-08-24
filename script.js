function findLargest(a, b, c) {
    // Assume 'a' is the largest to start
    let largest = a;

    // Compare 'largest' with 'b'
    if (b > largest) {
        largest = b;
    }

    // Compare 'largest' with 'c'
    if (c > largest) {
        largest = c;
    }

    // Return the largest number
    return largest;
}
const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
