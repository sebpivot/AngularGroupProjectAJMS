import {Course} from './Course';

export class Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  isAccepted: boolean;
  coursesDto: Course[];
  accepted: boolean;
  validation: boolean;
  validations: boolean[];
}
