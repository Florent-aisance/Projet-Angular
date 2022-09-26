import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { formData } from "src/app/model/formData";

@Component({
  selector: 'app-main-ui',
  templateUrl: './main.ui.html',
  styleUrls: ['./main.ui.scss']
})
export class MainUi implements OnInit {

  suite:Number = 0
  number:Number = 0

  amountForm = new FormControl('');
  hallForm = new FormControl('');
  empForm = new FormControl('');

  @Input() date:Date|null = null
  @Input() nCookie:Number|null = null

  @Input() result:formData[]|any = null
  
  @Output() askDate:EventEmitter<void> = new EventEmitter()
 
  @Output() getResult:EventEmitter<void> = new EventEmitter()

  @Output() changeCookie:EventEmitter<number> = new EventEmitter()
  
  @Output() defEmp:EventEmitter<formData> = new EventEmitter()

  onNumberChange() {
    const value = this.amountForm.value;
    if (value == null) {
      return
    }
    this.changeCookie.emit(+value)
  }

  onSend() {
    const hall:number|any = this.hallForm.value;
    const emp:number|any = this.empForm.value;

    if (this.result.hall == hall) {
      console.log('test')
    }

    if (emp == null) {
      return
    }
    if (hall == null) {
      return
    }
    console.log(this.result)
    this.defEmp.emit({hall,emp})
  }

  resultEmp: number[] = []
  resultHall: any[] = []
  next:boolean = false
  
  ngOnInit(): void {
    
  }

  /* Configuration des graphiques */

  data:any

  constructor() {
    
  this.data = {
    
    labels: ["test1", "test2", "test3"],
    datasets: [
        {
          data: [7,4,1],
          backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
          ],
          hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
          ]
        }
      ]    
    }
  }

  onPushData(result:any) {
    for (let a of result) {
      this.resultEmp.push(a.emp)
      this.resultHall.push(a.hall)
      
      this.data.labels.push(a.hall)
      var labels = this.data.labels.toString().lenght
      const lenght = labels
      if (lenght > 1) {
        this.data.labels.shift()
        
      }
      console.log(lenght)
      
    }
    
      console.log(this.data);
      console.log(result);
    
  }
  
}