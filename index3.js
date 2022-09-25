// JavaScript source code
class student {

    static count = 0;  //static variable to call



    constructor(name, age, ph_no, marks) {

        this.name = name;

        this.age = age;

        this.ph_no = ph_no;

        this.marks = marks;

        student.countStudent();

    }

    static countStudent() {



        return (student.count++);     //this is how u access static variable

    }

    eligible() {

        if (this.marks >= 40) {

            console.log(`${this.name} age ${this.age} is eligible`);

        }

        else if (this.marks < 40) {

            console.log(`${this.name} age ${this.age} is not eligible`);

        }

    }









}

const Sinchu = new student('Sinchu', 18, 1234, 34);

const vy = new student('vy', 15, 2345, 35);

const Laksh = new student('Laksh', 16, 4567, 60);

const san = new student('san', 17, 7891, 70);

const loku = new student('loku', 19, 3456, 80);

console.log(student.countStudent());

Sinchu.eligible();

vy.eligible();

Laksh.eligible();

san.eligible();

loku.eligible();