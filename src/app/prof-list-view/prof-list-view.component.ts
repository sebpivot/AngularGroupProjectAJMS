import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-prof-list-view',
  templateUrl: './prof-list-view.component.html',
  styleUrls: ['./prof-list-view.component.css']
})
export class ProfListViewComponent implements OnInit {

  @Input() teacherFirstname;
  @Input() teacherLastname;
  @Input() index;
  @Input() teacherId;

  students: any[];

  constructor() { }

  ngOnInit() {
  }

}
