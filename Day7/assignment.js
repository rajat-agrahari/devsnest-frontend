// 1. Write a JavaScript program to list the properties of a JavaScript object. 
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
for (let key in student) {
    console.log(key);
}
/* output:
 name
 sclass
 rollno */

//2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
for (let key in student) {
    console.log(student[key]);
}
delete student.rollno;
// After delete print object
for (let key in student) {
    console.log(student[key]);
}

// 3. Write a JavaScript program to get the length of a JavaScript object.  
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
var count = 0
for (const key in student) {
    count = count + 1;
    console.log(student[key]);
}
console.log("Length of object " + count);
// Output : 3

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
var library = [{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]

for (const key in library) {
    console.log(library[key].title, library[key].author, library[key].readingStatus);
}
// output
/*
The Road Ahead Bill Gates true
Walter Isaacson Steve Jobs true
Mockingjay: The Final Book of The Hunger Games Suzanne Collins false
*/

// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased

var cylinder = {
    radius: "r",
    height: "h",
    volumne: function () {
        var valumn
        valumn = 3.1415 * r * r * h;
        // console.log(valumn);
        return valumn;
    }
}
console.log(cylinder.volumne);

// 6. Write a JavaScript program to sort an array of JavaScript objects. ]

var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates', 
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];
library.sort((a,b)=>{
    return b.libraryID - a.libraryID;
});
library.forEach((e)=>{
    console.log(`${e.title} ${e.libraryID} ${e.author}`);
});

// Output
/*
Walter Isaacson 4264 Steve Jobs
Mockingjay: The Final Book of The Hunger Games 3245 Suzanne Collins
The Road Ahead 1254 Bill Gates

*/
