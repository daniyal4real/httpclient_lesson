import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {APIResponse} from "../../model/models";
import {DataService} from "../../service/data.service";

@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.scss"],
})
export class HomeComponent implements OnInit {

  users$: Observable<APIResponse> = new Observable()
  constructor(
    private dataService: DataService
  ) {
  }
  ngOnInit(): void {
    this.users$ = this.dataService.getUsers()
    console.log(this.users$)
  }

}
