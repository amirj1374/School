import {Component, OnInit} from '@angular/core';
import {Student} from '../../models/student';
import {StudentService} from '../services/student.service';
import {MessagesService} from '../services/messages.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[];
  selectedStudent: Student;
  message = '';

  constructor(private studentService: StudentService, private messageService: MessagesService) {

  }


  // tslint:disable-next-line:typedef
  onSelect(students) {
    this.selectedStudent = students;
    this.message = this.messageService.showMessage('VIEW');
  }

  ngOnInit(): void {
    this.initStudens();
  }

  // tslint:disable-next-line:typedef
  initStudens() {
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
    });
  }

  // tslint:disable-next-line:typedef
  onClose() {
    this.selectedStudent = null;
    this.message = '';
  }
}
