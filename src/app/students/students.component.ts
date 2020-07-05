import {Component, OnInit} from '@angular/core';
import {Student} from '../../models/student';
import {StudentService} from '../services/student.service';
import {subscribeTo} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[];
  selectedStudent: Student;

  constructor(private studentService: StudentService) {

  }


  // tslint:disable-next-line:typedef
  onSelect(students) {
    this.selectedStudent = students;

  }

  ngOnInit(): void {
    this.initStudens();
  }

  // tslint:disable-next-line:typedef
  initStudens() {
    this.studentService.getStudents().subscribe(students => {this.students = students});
  }

  // tslint:disable-next-line:typedef
  onClose() {
    this.selectedStudent = null;
  }
}
