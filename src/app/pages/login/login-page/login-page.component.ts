import { Component } from '@angular/core';
import { faUser, faLock, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  stylesIcon = {
    color: "#26323e",
    border: '2px solid #26323e',
    padding: '5px',
    'border-radius': '5px',
    width: '25px',
    height: '25px',
    'margin-top': '5px'
  };
  faUser = faUser;
  faLock = faLock;
  faQuestion = faQuestion;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
}
