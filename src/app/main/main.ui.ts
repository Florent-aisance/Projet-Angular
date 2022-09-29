import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { formData } from "src/app/model/formData";

@Component({
  selector: 'app-main-ui',
  templateUrl: './main.ui.html',
  styleUrls: ['./main.ui.scss']
})
export class MainUi implements OnInit {

  suite:Number = 0
  number:Number = 0

  redB:Number = 0
  blueB:Number = 0
  greenB:Number = 0
  yellowB:Number = 0

  color:any = ""

  bgColors: []|any = []

  selectedValue: string = 'val1';

  amountForm = new FormControl('');
  hallForm = new FormControl('');
  empForm = new FormControl('');

  @Input() date: Date|null = null

  @Input() colors: [{}]|any = null

  @Input() result:formData[]|any = null
  
  @Output() askDate:EventEmitter<void> = new EventEmitter()

  @Output() askColors:EventEmitter<void> = new EventEmitter()
 
  @Output() getResult:EventEmitter<void> = new EventEmitter()

  @Output() changeCookie:EventEmitter<number> = new EventEmitter()
  
  @Output() defEmp:EventEmitter<formData> = new EventEmitter()

  @Output() sendColor:EventEmitter<String> = new EventEmitter()

  @Output() remColor:EventEmitter<String> = new EventEmitter()

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

    if (emp == null) {
      return
    }
    if (hall == null) {
      return
    }
    this.defEmp.emit({hall,emp})
  }

  askTotal() {
    this.result.reduce(function(prev:any, cur:any) {
      return prev + cur.msgCount;
    }, 0);
  }

  onSendColor(color:string) {
    this.sendColor.emit(color)
  }

  onRemColor(color:string) {
    this.remColor.emit(color)
  }

  next:boolean = false
  
  ngOnInit(): void {
    
  }

  data:any | null

  constructor() {
     
  }

  /* Configuration des graphiques */

  onColorGraph(colors: []) {
    this.bgColors.push(colors)
  }

  onPushData(chart: any) {
    console.log(this.bgColors)

    const red = "#F84033"
    const blue = "#2896F3"
    const green = "#4CAF4F"
    const yellow = "#FBC02D"
   
    this.data = { labels:[], datasets:[{ backgroundColor: [], hoverBackgroundColor:[], data:[] }]}
    
    for (let a of this.result) {
      this.data.datasets[0].data.push(a.emp)
      this.data.labels.push(a.hall) 
    }

    if (this.bgColors[0].includes('red')) {
      this.data.datasets[0].backgroundColor.push(red)
      this.data.datasets[0].hoverBackgroundColor.push(red)
    }

    if (this.bgColors[0].includes('blue')) {
      this.data.datasets[0].backgroundColor.push(blue)
      this.data.datasets[0].hoverBackgroundColor.push(blue)
      
    }

    if (this.bgColors[0].includes('green')) {
      this.data.datasets[0].backgroundColor.push(green)
      this.data.datasets[0].hoverBackgroundColor.push(green)
      
    }

    if (this.bgColors[0].includes('yellow')) {
      this.data.datasets[0].backgroundColor.push(yellow)
      this.data.datasets[0].hoverBackgroundColor.push(yellow)
    }

    console.log(this.data.datasets[0].backgroundColor)
    chart.update()
  }
}