import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajeComponent } from './personaje/personaje.component';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element';
import Swiper from 'swiper';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    PersonajeComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PersonajeComponent
  ]
})

export class Tab1ElementosModule { }
