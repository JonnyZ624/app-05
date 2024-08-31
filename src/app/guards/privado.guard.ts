import { CanActivateFn } from '@angular/router';

export const privadoGuard: CanActivateFn = (route, state) => {
  
  var acceso =localStorage.getItem('login')
  if(acceso =='true' ){
    return true;
  }else{
    return false
  }
};
