import {Component, Input, OnInit} from '@angular/core';
import {Data} from "../../../model/models";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() user?: Data
  constructor() { }

  ngOnInit(): void {
  }

}
