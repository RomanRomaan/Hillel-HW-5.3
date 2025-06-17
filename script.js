const integerUserInput = prompt("Enter integer number")
if (integerUserInput === null) {
    alert(`You're canceled`);
} else if (integerUserInput.trim() === '') {
    alert('You entered empty numbers');
} else if (isNaN(Number(integerUserInput))) {
    alert(`It's must be a number`);
}
else {
    const integerNum = +integerUserInput
    if (integerNum < 0) {
        alert("You need to enter positive number")
    }
    else if (!Number.isInteger(integerNum)) {
        alert("You need to enter an integer")
    } else {
        for (let i = 1; i <= 100; i++) {
            if (i ** 2 <= integerNum) {
                console.log(i)
            }
        }
    }
}