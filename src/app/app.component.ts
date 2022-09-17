import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'login-concept';

  public email: string = '';
  public password: string = '';

  public login() {
    console.log(this.email, this.password);
  }
}
