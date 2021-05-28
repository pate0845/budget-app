<<<<<<< HEAD
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
=======
import { Component, Input, OnInit } from '@angular/core';
>>>>>>> e70e72945aa86049f7dc01e52b50b4c8cbfe7231

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

<<<<<<< HEAD
  @Input() item: BudgetItem;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

  onXButtonClick() {
    // here we want emit an event
    this.xButtonClick.emit();
  }

  onCardClick() {
    this.cardClick.emit();
  }

}
=======
  
  @Input() isIncome: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
>>>>>>> e70e72945aa86049f7dc01e52b50b4c8cbfe7231
