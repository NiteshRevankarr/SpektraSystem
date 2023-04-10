import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {
  students = [
    {id: 1, name: 'murgesh', gender: 'Male', dob: '01-01-2000', coursefee: 500},
    {id: 2, name: 'sathish', gender: 'Female', dob: '02-02-2001', coursefee: 600},
    {id: 3, name: 'naveen', gender: 'Male', dob: '03-03-2002', coursefee: 700},
    {id: 4, name: 'sudarshan', gender: 'Female', dob: '04-04-2003', coursefee: 800},
    {id: 5, name: 'muruli', gender: 'Male', dob: '05-05-2004', coursefee: 900}
  ];
  onSubmit(form: NgForm) {
    const newStudent = {
      id: this.students.length + 1,
      name: form.value.studentName,
      gender: form.value.gender,
      dob: form.value.dob,
      coursefee: form.value.coursefee
    };
    this.students.push(newStudent);
    form.reset();
  }
  getTotalStudents() {
    return this.students.length;
  }
  
  getTotalMales() {
    return this.students.filter(student => student.gender === 'Male').length;
  }
  
  getTotalFemales() {
    return this.students.filter(student => student.gender === 'Female').length;
  }
  onDelete(student: any) {
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
}

}
