import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AppState, AskDate, DefEmp, SendColor, RemColor, AskColors } from 'src/store/app.state';
import { formData } from "src/app/model/formData";

@Component({
  selector: 'app-main',
  templateUrl: './main.container.html',
  styleUrls: ['./main.container.scss']
})

export class MainContainer implements OnInit {

  date$ = this.store.select(AppState.selectDate)
  result$ = this.store.select(AppState.selectResult)
  colors$ = this.store.select(AppState.selectColors)

  constructor(private store:Store) {}

  ngOnInit(): void {
  }

  onAskDate() {
    this.store.dispatch(AskDate)
  }

  onAskColors() {
    this.store.dispatch(AskColors)
  }

  onDefEmp(object:formData) {
    this.store.dispatch(new DefEmp(object) )
  }

  onSendColor(color:String) {
    this.store.dispatch(new SendColor(color) )
  }

  onRemColor(color:String) {
    this.store.dispatch(new RemColor(color) )
  }
}