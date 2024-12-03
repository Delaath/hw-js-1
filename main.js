let age = 16;
console.log(age);


const name = "Danil";
console.log(name);


let isStudent = true;
console.log(isStudent);


const myString = "не май 100 друзів, а май 100 долларів";
console.log(myString);


let myNumber = 18;
myNumber = myNumber + 10;
console.log(myNumber);


const myNull = null;
console.log(myNull);


let name_2 = prompt("як вас звати?");
alert("Привіт, " + name_2);


let accept = confirm("Ви підтверджуєте дію?");
if (accept) {
    alert("Дякуємо за підтвердження!");
} else {
    alert("Дію відмінено");
}


alert("Увага! Ви збираєтесь виконати небезпечну дію.");

const userConfirmed = confirm("Ви впевнені, що хочете продовжити?");
if (userConfirmed) {
    alert("Дякуємо за підтвердження!");
} else {
    alert("Дію відміенно!");
}