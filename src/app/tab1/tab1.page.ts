import { IFilme } from '../models/IFilmes.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  titulo = 'App Filmes';
  listaFilmes: IFilme [] = [
    {
      nome: 'Homem-Aranha: Longe de Casa',
      lancamento: '04/07/2019 (BR)',
      duracao: '2h 10m',
      classificacao: '75',
      cartaz: '../assets/SMFarFromHome.jpg',
      generos: ['Ação', 'Aventura', 'Fantasia'],
      pagina: '/filmeshomem-aranha'
    },
    {
      nome: 'Demon Slayer - Mugen Train: O Filme',
      lancamento: '23/04/2020(US)',
      duracao: '1h57m',
      classificacao: '84',
      cartaz: '../assets/KNYMugenTrain.jpg',
      generos: ['Animação', 'Ação', 'Aventura', 'Fantasia'],
      pagina: '/filmesdemon-slayer'
    },
    {
      nome: 'Corações de Ferro',
      lancamento: '05/02/2015 (BR)',
      duracao: '2h15m',
      classificacao: '75',
      cartaz: '../assets/IronHearts.jpg',
      generos: ['Guerra', 'Drama', 'Ação'],
      pagina: '/filmesiron-hearts'
    }
  ];

  constructor(public alertController: AlertController, public toastController: ToastController) {}
  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
    header: 'Alerta!',
    message: 'Deseja realmente adicionar este filme aos <strong>favoritos</strong>?',
    buttons: [
    {
    text: 'Cancelar',
    role: 'cancel',
    handler: (blah) => {
    console.log('Confirm Cancel: blah');
    }
    }, {
    text: 'SIM, adicionar!',
    handler: () => {
      this.apresentarToast();
    }
    }
    ]
    });
    await alert.present();
    }
    async apresentarToast() {
      const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
      });
      toast.present();
     }
}
