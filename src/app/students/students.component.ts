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
  selectedStudent: Student;
  constructor() {
    this.students = [
      {
        id: 10,
        name: 'محمد',
        grade: 19 ,
        enName: 'mohammad'
      },
      {
        id: 11 ,
        name: 'امیر',
        grade: 15,
        enName: 'amir'
      },
      {
        id: 12,
        name: 'میثم',
        grade: 18,
        enName: 'meysam'
      },
      {
        id: 13,
        name: 'مجید',
        grade: 16,
        enName: 'majid'
      },
      {
        id: 14,
        name: 'محمود',
        grade: 18,
        enName: 'mahmud'
      }
    ];
  }

  ngOnInit(): void {
    const self = this;
}
  onSelect(students: Student){
    this.selectedStudent = this.student;
  }
}
