import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export enum MessageTypes {
  Standard,
  Success,
  Error,
  Warning
}

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrls: [ './message.component.css' ]
})
export class MessageComponent implements OnInit {
  @Input() type = MessageTypes.Standard;
  
  messageTypes = MessageTypes;

  constructor() { }

  ngOnInit() { }
}
