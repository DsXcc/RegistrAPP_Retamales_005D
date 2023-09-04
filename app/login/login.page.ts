import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  constructor(private alertController: AlertController) {

  }
  

  ngOnInit() {
  }




  usuario={
    nombre:'',
    password:''
  }

  async MostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Exito!',
      message: 'A ingresado con exito!',
      buttons: ['OK'],
    });
    await alert.present();
  }


  ingresar(){
    console.log('Ingreso permitido');
    this.MostrarMensaje();
    this.usuario.nombre='';
    this.usuario.password='';
  }
 

}
