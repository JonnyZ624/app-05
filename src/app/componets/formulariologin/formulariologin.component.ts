import { Component, inject, Inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AccesoService } from '../../services/acceso.service';

@Component({
  selector: 'app-formulariologin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulariologin.component.html',
  styleUrl: './formulariologin.component.css'
})
export class FormulariologinComponent {

  email:any=""
  password:any=""

servicio = inject(AccesoService)

usuario=[]


  login(form: NgForm){
console.log(form.value)
    this.servicio.loginUsuarios(form.value).subscribe(m=>{
      console.log(m)
      if(m.accesToken !=""){
        localStorage.setItem('login',"true")
      }
    })

  }



}
