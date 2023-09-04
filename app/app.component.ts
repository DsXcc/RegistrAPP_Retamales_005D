import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { 
      title: 'Inicio', 
      url: '/inicio', 
      icon: 'home' 
    },


    { 
      title: 'Login', 
      url: '/login', 
      icon: 'key' 
    },


    { 
      title: 'Registro', 
      url: '/registro', 
      icon: 'person' 
    },


    { 
      title: 'Informacion', 
      url: '/informacion', 
      icon: 'reader' 
    },


    { 
      title: 'Noticias', 
      url: '/noticias', 
      icon: 'earth' 
    },


    { 
      title: 'Soporte', 
      url: '/soporte', 
      icon: 'people' 
    },

    
  ];

  constructor() {}
}
