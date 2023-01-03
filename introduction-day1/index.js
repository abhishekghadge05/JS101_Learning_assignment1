let name ="ABHISHEK GHADGE";
let school ="MUMBAI HIGH SCHOOL";
let grade =10;
let section ="B";
let rollNo =3002;
let marks = {"Marathi":80,"Science":70,"English":65};
console.log("Name: " + name);
console.log("School: " + school);
console.log("Grade: " + grade);
console.log("Section: " + section);
console.log("Roll No: " + rollNo);
console.log("SUBJECT     MARKS");
for (let subject in marks) {console.log(subject + "      " + marks[subject]);}