import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AppState, AskDate, DefEmp } from 'src/store/app.state';
import { formData } from "src/app/model/formData";

@Component({
  selector: 'app-main',
  templateUrl: './main.container.html',
  styleUrls: ['./main.container.scss']
})

export class MainContainer implements OnInit {

  
  date$ = this.store.select(AppState.selectDate)
  result$ = this.store.select(AppState.selectResult)

  constructor(private store:Store) {}

  ngOnInit(): void {
  }

  onAskDate() {
    this.store.dispatch(AskDate)
  }

  onDefEmp(object:formData) {
    this.store.dispatch(new DefEmp(object) )
  }
}