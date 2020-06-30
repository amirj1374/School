import {Component, OnInit} from '@angular/core';
import {Student} from '../../models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  student: Student;
  students: Student[];

  constructor() {
    this.student = {
      id: 12,
      name: 'علی',
      grade: 20,
      enName: 'ali'
    };
    this.students = [
      {
        id: 12,
        name: 'علی',
        grade: 20,
        enName: 'ali'
      },
      {
        id: 12,
        name: 'علی',
        grade: 20,
        enName: 'ali'
      },
      {
        id: 12,
        name: 'علی',
        grade: 20,
        enName: 'ali'
      },
      {
        id: 12,
        name: 'علی',
        grade: 20,
        enName: 'ali'
      }
    ];
  }

  ngOnInit(): void {
    const self = this;
    setTimeout(() => {
      self.student.name = 'رضا';
    }, 1000);
  }
}
