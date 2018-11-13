import { Component, OnInit } from '@angular/core';
//import { InfoEntryComponent } from '../info-entry/info-entry.component';
import { Info } from '../info'
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
 
 
  info: Info = {
  id: 1,
  name: 'Naujiena pirmoji',
  description: 'Naujienu naujiena max naujiena'
  };


  constructor() { }

  ngOnInit() {
  }

}
