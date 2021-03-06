/* Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 
Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2 e mostrare alla fine il contenuto dell'array. */

//1st task


$(document).ready(function(){ 


var student = {
    firstname: "Jenna",
    lastName: "Smith",
    age: 22,
}

for (var key in student) {
  //  console.log(key);   //console.log = firstName,secondName, age
    console.log(student[key]); //console.log = Jenna, Smith, 22
}



// 2nd task

var students =   // Array of objects
[
 { 
    firstName: "John",
    lastName: "Jackson",
    age: 22,
    class: "3b",
 },

 { 
     firstName: "Andrea",
     lastName: "Rossi",
     age: 21,
     class: "3a",
 },
 {
    firstName: "Jenny",
    lastName: "Hermanns",
    age: 22,
    class: "3b",
 },
];

// Iteration

for(var i = 0; i < students.length; i++) {
    var studentLoop = students[i];
    console.log(studentLoop);

    console.log( studentLoop.firstName );
    console.log( studentLoop.lastName );
};


// 3rd task

var newStudent = {}; // New object I do need

// Username
var userName = prompt("Please insert your name here.");
if(isNaN(userName)){
    newStudent.userName = userName;
    console.log(userName);
} else {
    userName = prompt("Not valid, please insert your name here.");
}

// Last name
var userLastName = prompt("Please insert your last name here.");
if(isNaN(userLastName)){
    newStudent.userLastName = userLastName;
    console.log(userLastName);
} else {
    userLastName = prompt("Not valid, please insert your surname here.");
}

// Age
var userAge = prompt("Please insert your age here.");
if(!isNaN(userAge)){ // Is age field a number or not?
    newStudent.userAge = userAge;
    console.log(userAge);
} else {
    userAge = prompt("Not valid, please insert your age here.");
}

students.push(newStudent);
console.log(students);

    // end doc ready
});