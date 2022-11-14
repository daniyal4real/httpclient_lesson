import {Component, Input, OnInit} from '@angular/core';
import {Data} from "../../../model/models";
import {DataService} from "../../../service/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  @Input() user!: Data
  id: any
  data: any
  prop: any

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getUserById(this.id)
  }

  getUserById(id: number): void {
    this.id = id
    this.dataService.getUserById(this.id)
      .subscribe(res => {
        this.data = res
        this.user = this.data
        this.prop = this.user
        console.log(this.user)
      })
  }

}
