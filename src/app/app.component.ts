import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'harsh-app';

  longText: string = "That electrician is strong mathematical knowledge, physical dexterity, safety first minded, and usage of hand and power tools"
  visibility: boolean = false;

  toggle(){
    this.visibility = !this.visibility;
  }
  
}
