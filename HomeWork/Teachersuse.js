const Teachers = require('./Teachers');
const Students = require('./Students');

const t1 = new Teachers('jOHn', 22, 'USA', 'Mobile', 1000);

t1.hiring();
t1.showMyDetails();
t1.changeTeachingCourse('QA');

const s1 = new Students('jOHn', 20, 'USA', 'mobile', 0);
const s2 = new Students('Nathan', 17, 'USA', 'mobile', 2000);

t1.addStudent(s1);
t1.addStudent(s2);
t1.listStudents();


t1.addGrade(2, 'b');
t1.addGrade(2, 'a');
t1.addGrade(3, 'a');

s1.changeStudentCourse('QA');

s1.makePayment(333333333);
s2.showMyDetails();
s2.makePayment(2000)