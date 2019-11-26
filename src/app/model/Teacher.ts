import {Course} from './Course';

export class Teacher {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  coursesDto: Course[];
}
