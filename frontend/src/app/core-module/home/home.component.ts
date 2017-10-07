import { Component, OnInit } from '@angular/core';
import {moveIn} from "../../router.animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class HomeComponent implements OnInit {

  user: any;
    constructor() {
  }

  ngOnInit() {
  }

}
