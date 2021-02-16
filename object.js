//How to create an object
// How to print the value of an object
// adding a constructor
//adding function inside a constructor


//student details

function Student(name,age,cgpa,lang) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function(){
        
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.lang);
    }
}

const student1 = new Student("Anisul Islam",27,3.92,["Bengali", "Hindi","English"]);
const student2 = new Student("Sufia",22,3.22,["Bengali", "Hindi","English"]);
const student3 = new Student("Lima",25,3.52,["Bengali", "Hindi","English"]);
const student4 = new Student("tinku",29,3.02,["Bengali", "Hindi","English"]);


student1.display();
student2.display();
student3.display();
student4.display();