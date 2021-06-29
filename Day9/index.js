const student1 = {
    name: "Aman Gupta",
    rollno: 123456,
    college: "KIET",
    getTotal: function(a,b,c,d){
        console.log(this.name);
        console.log(a+b+c+d);
    }
};

const student2 = {
    name: "Ankit",
    rollno: 96346,
    college: "KIET"
}

console.log("use of call()");
student1.getTotal.call(student1);
student1.getTotal.call(student2);
student1.getTotal.call(student1, 90,66,34,80);


console.log("use of apply()");
student1.getTotal.apply(student1);
student1.getTotal.apply(student2, [90,80,60,50]);


console.log("use of bind()");
var x = student1.getTotal.bind(student1);
var y = student1.getTotal.bind(student2);
var z = student1.getTotal.bind(student1, 90,66,34,80);

x()
y()
z()