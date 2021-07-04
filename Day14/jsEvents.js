document.getElementById('heading').addEventListener('click', function (e) {
    console.log("You have click");
    let varible = e.target;
    varible = e.target.id;
    varible = e.offsetX;
    varible = e.clientX;

    // console.log(varible);
});

// let btn2=document.getElementById('btn2');
// btn2.addEventListener('click',fun1);
// btn2.addEventListener('mousedown', fun1);

// function fun1(e) {
//     console.log("clicked fun1");
//     e.preventDefault()
// }
document.querySelector('.container').addEventListener('mousemove', function (e) {
    // document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},170)`;
    // console.log('mouse move');
})

//Local storage and Sessional storage

let impArray = ['adrak', 'pyaz', 'bhindi'];

//To set data in local storage
localStorage.setItem('Name', 'Rajat');
localStorage.setItem('City', 'Khaga');
localStorage.setItem('Sabzi', JSON.stringify(impArray));

//to print data pair value in console
let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem('Sabzi'));
console.log(name);

//to remove item 
localStorage.removeItem('City');

// localStorage.clear();  //to clear

// sessionStorage.setItem('sessionName', 'sHarry');
// sessionStorage.setItem('sessionName2', 'sRohan');
// sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));


//Ouiz
let head = document.createElement('h2');
head.id = "Qhead";
head.className = "Qhead";
head.style.display = "inline-block";
let qnode = document.createTextNode('Quiz Go to Google');
head.appendChild(qnode);

let qtag = document.createElement('a');
qtag.id = 'qtag';
qtag.setAttribute('href', 'https://www.google.com/');
qtag.appendChild(head);

document.body.appendChild(qtag);


// You have to create a div and inject it into the page which contains a heading.
// whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

let eDiv = document.createElement('div');
eDiv.id = "eDiv";
eDiv.innerText = "Edit content";

let eInput = document.createElement('input');
eInput.id = "eInput";
eInput.name = "eInputx";
eInput.type = "text";
eInput.innerText = " ";
eDiv.appendChild(eInput);
document.body.appendChild(eDiv);

let eEl = document.getElementById('eInput');

eEl.addEventListener('input', eFunc2);
function eFunc2() {
    // console.log('Fired');
    let eContent = eInput.value;
    localStorage.setItem('data', eContent);
    // console.log(eContent);
};

// Time and Date

// let today = new Date();
// console.log(today);
// console.log(typeof today);

// let today1 = Date();
// console.log(today1);
// console.log(typeof today1);

let otherDate = new Date('July-24-2010 03:12:14');//(MM-DD-YYYY)
// otherDate=new Date('02/14/2019 09:12:14');//(MM-DD-YYYY)
// otherDate=new Date('July 22 20');//(MM-DD-YYYY)
console.log(otherDate);
let a;
a = otherDate.getDate();
a = otherDate.getDay();
/*
0 Sun
1 Mon
2 Tue
3 Wed
4 Thus
5 Fri
6 Sat
*/
a = otherDate.getMinutes();
a = otherDate.getMonth();
console.log(a);
otherDate.setDate(30);
otherDate.setMonth(0);
otherDate.setFullYear(1900);
otherDate.setMinutes(2);
otherDate.setHours(1);
otherDate.setSeconds(3);
console.log(otherDate);

// You have to create a div and inject it into the page which contains a heading.
// whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

// Create a new element
let divElem = document.createElement('div');

// Add text to that created element
let val = localStorage.getItem('text');
let text;
if (val==null){
//  text = document.createTextNode('This is my element. click to edit it');
divElem.innerHTML='This is my element. click to edit it';
}
else{
    // text = document.createTextNode(val);
    divElem.innerHTML=val;
}
// divElem.appendChild(text);

// Give element id, style and class
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');

// Grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');


// Insert the element before element with id first
container.insertBefore(divElem, first);

// console.log(divElem, container, first);

// add event listener to the divElem
divElem.addEventListener('click', function () {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas ==0){
    let html = divElem.innerHTML;
    divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
    }
    //listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
        divElem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })
});

 
