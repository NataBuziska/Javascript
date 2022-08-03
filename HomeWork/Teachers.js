const Members = require('./Members');
const Students = require('./Students');
const MyStringFunctions = require('./MyStringFunctions');

const courseDetails = [
        {
            courseName : 'Automation'
           
        },
        {
            courseName : 'QA'
            
            
        },
        {
            courseName : 'Mobile'
           
        }
    ]

class Teachers extends Members {

    static idValue = 0;
  
    teacher = {
        tId : 0,
        tCourseName : '',
        tSalary : 0,
        tStudents : []
    }

    constructor(teacherName, teacherAge, teacherCountry, teacherCourseName, teahcerSalary){
        super();
        this.member.name = MyStringFunctions.toTitleCase(teacherName);
        this.member.age = teacherAge;
        this.member.location = teacherCountry.toUpperCase();
        this.teacher.tCourseName = teacherCourseName;
        this.teacher.tSalary = teahcerSalary;

        console.log("\n Teacher: " + this.member.name);
    }

    addStudent (student)  
    {
        this.teacher.tStudents.push (student)
    }

    listStudents ()  
    {
        for (let i = 0; i < this.teacher.tStudents.length; i++) {
            //this.teacher.students[i].showMyDetails();
            console.log (`StudentId: ${this.teacher.tStudents[i].myId()}`)
        }
    }

    /**
     * 
     * age >= 21
     * 
     * teacherCourseName should be Automation, QA or Mobile
     * 
     */
    hiring() {
        if (
            this.member.age >= 21 && this.#isCourseNameValid(this.teacher.tCourseName))
        {
            this.teacher.tId = ++Teachers.idValue;
            console.log(`\n You are hired :  ${this.teacher.tCourseName}`) 
        }
        else 
        {
            console.log('\n You are not hired') 
        }
}


    #isCourseNameValid(checkForCourse) {
        return courseDetails.find(course => course.courseName.toLowerCase().localeCompare(checkForCourse.toLowerCase()) === 0);
    }

    showMyDetails() {
        console.log (`Teacher details: Id : ${this.teacher.tId}\nCourse name: ${this.teacher.tCourseName}\nTeacher salary: ${this.teacher.tSalary} `)
        
    }

    changeTeachingCourse(newTeacherCourse) {
        if (this.#isCourseNameValid(newTeacherCourse) && newTeacherCourse !== this.teacher.tCourseName)
        {
          this.teacher.tCourseName = newTeacherCourse;
          console.log (`You change your course: ${newTeacherCourse}`);
        
        }
        else
        {
            console.log (`${newTeacherCourse} course is INVALID`)
        }
    }

    /**
     * addGrade
     * 
     * input: studentId, grade
     * 
     * if studentId is valid and studentGrade is ''
     *      update student.sGrade = grade (always store grade in Uppercase)
     *      print -> grade is successfully added to student id -> id
     * if studentGrade is NOT ''
     *      then print -> remove grade from the student
     * if studentId is invalid
     *      then print -> Invalid student id  
     * 
     */
    addGrade(sId, sGrade) {
    
        for (let i = 0; i < this.teacher.tStudents.length; i++) {
            if (sId == this.teacher.tStudents[i].myId())
            {
                if (this.teacher.tStudents[i].myGrade() == '')
                {
                    this.teacher.tStudents[i].updateGrade(sGrade);
                    console.log (`grade is successfully added to student id -> ${this.teacher.tStudents[i].myId()}`)
                    return;
                }
                else 
                {
                    console.log (`remove grade from the student`)
                    return;
                }
            }

            
        }
        console.log (`Invalid student id ${sId}`)
    }
    /**
     * removeGrade
     * 
     * input: studentId
     * 
     * if studentId is valid and studentGrade is NOT ''
     *      update student.sGrade = ''
     *      print -> grade is successfully removed from student id -> id
     * if studentGrade is ''
     *      then print -> Student has no grade
     * if studentId is invalid
     *      then print -> Invalid student id
     * 
     */
    /**removeGrade(sGrade) {
    
                for (let i = 0; i < this.teacher.tStudents.length; i++) {
                if (sId == this.teacher.tStudents[i].myId())
                {
                    if (this.teacher.tStudents[i].myGrade() == sGrade.toUpperCase)
                    {
                        this.teacher.tStudents[i].removeGrade(sGrade);
                        console.log (`grade is successfully removed to student id -> ${this.teacher.tStudents[i].myId()}`)
                        return;
                    }
                    else 
                    {
                        console.log (`Student has no grade`)
                        return;
                    }
                }
    
                
            }
            console.log (`Invalid student id ${sId}`)
        }
    
*/
}
module.exports = Teachers;