import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
})
export class BtnComponent implements OnInit {
  @Input() text: String = '';
  @Input() color: String = '';
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.btnClick.emit();
  }
}
