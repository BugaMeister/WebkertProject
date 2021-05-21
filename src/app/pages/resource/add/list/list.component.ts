import { Component, Input, OnInit } from '@angular/core';
import { Resources } from 'src/app/shared/models/resources.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  resource?: Resources;

  constructor() { }

  ngOnInit(): void {
  }

}
