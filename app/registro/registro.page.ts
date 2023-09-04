import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  
   
  constructor(private alertController: AlertController) {}

  ngOnInit() {
  }


  usuario={
    nombre:'',
    email:'',
    edad:'',
    password:''
  }




  async MostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Gracias!',
      message: 'Se han creados sus datos!',
      buttons: ['OK'],
    });
    await alert.present();
  }


  Registrar(){
    console.log('Datos creados');
    this.MostrarMensaje();
    this.usuario.nombre='';
    this.usuario.email='';
    this.usuario.edad='';
    this.usuario.password='';
  }

}
