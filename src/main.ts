import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { MessageComponent, MessageTypes } from './message/message.component';

@Component({
  selector: 'app-root',
  imports: [MessageComponent],
  template: `
    <h1>Angular Tips: Template Binding with Static Types</h1>

    <a href="https://coryrylan.com/blog/angular-tips-template-binding-with-static-types">Tutorial at coryrylan.com</a>

    <br><br>

    <app-message [type]="messageTypes.Success">Success: Hello World</app-message>

    <app-message [type]="messageTypes.Warning">Warning: Hello World</app-message>

    <app-message [type]="messageTypes.Error">Error: Hello World</app-message>

    <app-message>Hello World</app-message>
  `,
})
export class App {
  messageTypes = MessageTypes;
}

bootstrapApplication(App);
