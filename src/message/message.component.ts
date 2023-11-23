import { Component, Input, OnInit } from '@angular/core';

export enum MessageTypes {
  Standard,
  Success,
  Error,
  Warning
}

@Component({
  standalone: true,
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: [ './message.component.css' ]
})
export class MessageComponent implements OnInit {
  @Input() type = MessageTypes.Standard;
  
  messageTypes = MessageTypes;

  constructor() { }

  ngOnInit() { }
}
