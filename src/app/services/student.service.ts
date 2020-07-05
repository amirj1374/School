import {Injectable} from '@angular/core';
import {Student} from '../../models/student';
import {Observable,of} from 'rxjs';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students = [
    {
      id: 10,
      name: 'محمد',
      grade: 19,
      enName: 'mohammad'
    },
    {
      id: 11,
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

  constructor() {
  }

  getStudents(): Observable<Student[] >{
    return of(this.students);
  }
}
