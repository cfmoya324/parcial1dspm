import { Component } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { FuturamaService } from 'src/app/servicios/futurama.service';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  personajes: Array<any> = [];
  infiniteScrollActualPage: number = 1;
  totalPages: number = 1;
  progress: number = 0;

  async cargarPersonaje() {
    await this.bd.getAllCharacters(this.infiniteScrollActualPage.toString()).toPromise().then((resp: any) => {

      this.totalPages = resp.pages;

      for (const element of resp.items) {
        this.personajes.push(element);
      }
      console.log("Mis personajes en tab 1: ", this.personajes);
    });
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.progress = 1;

    // Si aún no nos encontramos en la última página...
    if (this.infiniteScrollActualPage < this.totalPages) {
      // Agrega +1 al número de páginas ya cargadas...
      this.infiniteScrollActualPage++;
      // y carga la página.
      this.cargarPersonaje();
    }
    setTimeout(() => {
      this.progress = 0;
      event.target.complete();
    }, 5000);
  }

  constructor(private bd: FuturamaService) {}

  ngOnInit() {
    this.cargarPersonaje();
  }

}
