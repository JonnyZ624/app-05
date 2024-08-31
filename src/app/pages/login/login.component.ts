import { Component } from '@angular/core';
import { FormulariologinComponent } from "../../componets/formulariologin/formulariologin.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormulariologinComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
