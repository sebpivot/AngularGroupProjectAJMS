import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  @Input() appareilName;
  @Input() appareilStatus;
  @Input() index;
  @Input() id;

  isAuth = false;

  appareils: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm('Etes vous sur ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }
/*
  onSave() {
    this.appareilService.saveAppareilsToServer();
  }*/

}
