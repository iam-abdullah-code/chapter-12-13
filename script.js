//chapter 12-13

//question 1

// 1. Ek variable banaya jismein hum wo character ya number rakhte hain jise check karna hai

let input = 'A';

// 2. .charCodeAt(0) method ki madad se us character ka ASCII code nikal kar variable mein store kiya

let asciiCode = input.charCodeAt(0);

// 3. Pehli condition: Check karte hain ke kya ASCII code numbers ki range (48 se 57) mein hai?

// (Jahan 48 code '0' ka hota hai aur 57 '9' ka)

if (asciiCode >= 48 && asciiCode <= 57) {
    console.log("Yeh aik Number hai!");
}

// 4. Doosri condition: Agar number nahi hai, toh check karo ke kya yeh Capital letters ki range (65 se 90) mein hai?

// (Jahan 65 code 'A' ka hota hai aur 90 'Z' ka)

else if (asciiCode >= 65 && asciiCode <= 90) {
    console.log("Yeh ek Uppercase Letter hai (Bari ABC)!");
}

// 5. Teesri condition: Check karo ke kya yeh Small letters ki range (97 se 122) mein hai?

// (Jahan 97 code 'a' ka hota hai aur 122 'z' ka)

else if (asciiCode >= 97 && asciiCode <= 122) {
    console.log("Yeh ek Lowercase Letter hai (Choti abc)!");
}

// 6. Aakhri fallback: Agar upar wali koi bhi condition match na ho (jaise koi special symbol @, #, $ waghera ho)

else {
    console.log("Yeh koi special character ya kuch aur hai.");
}

//question 2

let num1 = 40;
let num2 = 40;

if (num1 > num2) {
    console.log("Pehla number (" + num1 + ") bara hai.");
}
else if (num2 > num1) {
    console.log("Doosra number (" + num2 + ") bara hai.");
}
else {
    console.log("Dono numbers barabar hain!");
}

//question 3

let a =0;
if(a>0){
    alert("this is a positive number")
}else if(a<0){
    alert("this is a negative number")
}else{
    alert("this is zero")
}

//question 4

let char = 'e';

if (
    char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
    char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'
) {
    console.log(true);
} else {
    console.log(false);
}

//question 5

let password = "129";

if (password === "123") {
    console.log("Correct password");
} else {
    console.log("Incorrect password");
}

if (password !== "123") {
    console.log("Please enter your password");
}

if (password === "123") {
    console.log("Access granted");
}

//question 6

var greeting = "good day ";

var hour = 13;

if (hour < 18) {
   console.log(greeting);

} else {
    console.log("good evening");
}

//question 7

var time = 1900;

if (time >= 600 && time < 1200) {

    console.log("Good Morning");
}
else if (time >= 1200 && time < 1700) {

    console.log("Good Afternoon");
}

else if (time >= 1700 && time < 2100) {

    console.log("Good Evening");
}

else if (time >= 2100 && time <= 2359) {
    console.log("Good Night");

}

else {
    console.log("Time is out of range");

}
