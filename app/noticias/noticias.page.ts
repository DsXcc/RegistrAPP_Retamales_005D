import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }



  mostrarMenu(){
    this.menuController.open('first');

  }


}
