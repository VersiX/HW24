function Out(str) {
    document.getElementById("consol").innerHTML += str + "<br>";
}

function ClearOut() {
    document.getElementById("consol").innerHTML = "";
}


//Подсчитать сумму всех чисел в заданном пользователем диапазоне.

function func1() {
    Out("Task 1:");

    let left = Number(prompt("Enter first number"));
    let right = Number(prompt("Enter second number"));
    let sum = 0;

    if (right < left) {
        let temp = left;
        left = right;
        right = temp;
    }

    for (let i = left; i <= right; i++) {
        sum += i;
        Out(`sum + ${i} = ${sum}`);
    }

    Out(`Finall sum of numbers = ${sum}`);


}

// Запросить 2 числа и найти только наибольший общий делитель.

function func2() {
    Out("Task 2:");
    let first = Number(prompt("Enter first number"));
    let second = Number(prompt("Enter second number"));

    let result = Math.min(Math.abs(first), Math.abs(second));

    while (((first % result)) || ((second % result))) {
        result--;
    }

    Out(`Result = ${result}`);

}

// Запросить у пользователя число и вывести все делители этого числа.

function func3() {
    Out("Task 3:");

    let num = prompt("Enter number");
    let result = Math.abs(num);

    for (let result = Math.abs(num); result > 0; result--) {
        if (!(num % result)) {
            Out(result)
        }
    }

}

// Определить количество цифр в введенном числе.

function func4() {
    Out("Task 4:");

    let num = Number(prompt("Enter number"));
    let i, num2;
    for (i = 1, num2 = 10; num2 < num; i++) {
        num2 *= 10;
    }
    Out(`Result = ${i}`);
}

// Запросить у пользователя 10 чисел и подсчитать, 
// сколько он ввел положительных, отрицательных и нулей. 
// При этом также посчитать, сколько четных и нечетных. 
// Вывести статистику на экран. 
// Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

function func5() {
    Out("Task 5:");

    let num;
    let plusCount = 0, minusCount = 0, zeroCount = 0, oddCount = 0, evenCount = 0;

    for (let i = 0; i < 10; i++) {
        num = Number(prompt(`Enter number ${i}:`));
        if (num == 0) {
            zeroCount++;
        }
        else if (num > 0) {
            plusCount++;
        }
        else {
            minusCount++;
        }

        if (num % 2) {
            oddCount++;
        }
        else {
            evenCount++;
        }
    }

    Out(`Statistics:<br>
    Number of zero values: ${zeroCount}<br>
    Number of positive values: ${plusCount}<br>
    Number of negative values: ${minusCount}<br>
    Number of odd values: ${oddCount}<br>
    Number of even values: ${evenCount}`);


}

// Зациклить калькулятор.
// Запросить у пользователя 2 числа и знак, решить пример,
// вывести результат и спросить, хочет ли он решить еще один пример.
// И так до тех пор, пока пользователь не откажется.

function func6() {
    Out("Task 6:");

    let repeat = true, num1, num2, action;

    while (repeat) {
        num1 = Number(prompt("Please enter first number"));
        num2 = Number(prompt("Please enter second number"));
        action = prompt("Please choose action\n + Add\n - Substract\n * Multiply\n / Divide");

        switch (action) {
            case "+":
                Out(`${num1} + ${num2} = ${num1 + num2}`);
                break;

            case "-":
                Out(`${num1} - ${num2} = ${num1 - num2}`);
                break;

            case "*":
                Out(`${num1} * ${num2} = ${num1 * num2}`);
                break;

            case "/":
                Out(`${num1} / ${num2} = ${num1 / num2}`);
                break;



            default:
                Out("Wrong action")
                break;
        }

        repeat = Number(prompt("Repeat?\n 1 - Yes\n 0 - No"));
    }




}

// Запросить у пользователя число и на сколько цифр его сдвинуть. 
// Сдвинуть цифры числа и вывести результат 
// (если число 123456 сдвинуть на 2 цифры, то получится 345612).

function func7() {
    Out("Task 7:");
    let numIn = String(prompt("Please enter number"));
    let shift = Number(prompt("Please enter shift"));
    let numOut = "";

    for (let i = shift; i < (numIn.length); i++) {
        numOut += numIn[i];
    }

    for (let i = 0; i < shift; i++) {
        numOut += numIn[i];
    }
    Out(`Initial number = ${numIn}`);
    Out(`Shift = ${shift}`);
    Out(`Result = ${numOut}`);

}

// Зациклить вывод дней недели таким образом: «День недели. 
// Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

function func8() {
    Out("Task 8:");

    let repeat = true;
    let today = new Date;
    let daynum = today.getDay();
    let daystr;

    while (repeat) {

        switch (daynum) {
            case 0:
                daystr = "Sunday";
                break;

            case 1:
                daystr = "Monday";
                break;

            case 2:
                daystr = "Tuesday";
                break;

            case 3:
                daystr = "Wednesday";
                break;

            case 4:
                daystr = "Thursday";
                break;

            case 5:
                daystr = "Friday";
                break;

            case 6:
                daystr = "Saturday";
                break;

            case 7:
                daystr = "Sunday";
                daynum = 0;
                break;

            default:
                break;
        }

        repeat = (Number(prompt(`Week day is ${daystr}. See next?\n 1 - Yes    0 - No`)));

        daynum++;
    }


}

// Вывести таблицу умножения для всех чисел от 2 до 9. 
// Каждое число необходимо умножить на числа от 1 до 10.

function func9() {
    Out("Task 9:");

    for (let i = 2; i <= 9; i++) {
        Out(`Multiplication table for ${i}`);

        for (let j = 1; j <= 10; j++) {
            Out(`${i} x ${j} = ${i * j}`);

        }
        Out("");
    }


}

// Игра «Угадай число».
// Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом:
// каждую итерацию цикла делите диапазон чисел пополам,
// записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N ?».
// В зависимости от того, что указал пользователь, уменьшаете диапазон.
// Начальный диапазон от 0 до 100, поделили пополам и получили 50.
// Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. 
// И так до тех пор, пока пользователь не выберет == N.


function func10() {
    Out("Task 10:");
    Out("Please choose a number between 0 and 100");
    let guess = true;
    let left = 0, right = 100;
    let num;

    while (guess) {
        num = Math.trunc((left + right) / 2);

        guess = Number(prompt(`Is your number ${num}\n 1 - It's bigger than ${num}\n 2 - It's smaller than ${num}\n 0 -It's ${num}`));

        switch (guess) {
            case 1:
                left = num;
                break;
            case 2:
                right = num;
                break;

            default:
                break;
        }

    }

    Out(`The answer is ${num}`);


}