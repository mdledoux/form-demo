import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderFormPageRoutingModule } from './order-form-routing.module';

import { OrderFormPage } from './order-form.page';
import { CounterInputComponent } from '../../components/counter-input/counter-input.component';
import { AddProviderComponent } from '../../components/add-provider/add-provider.component';
import { ProviderComponent } from '../../components/provider/provider.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    OrderFormPageRoutingModule
  ],
  declarations: [
    CounterInputComponent,
    AddProviderComponent,
    ProviderComponent,
    OrderFormPage
  ]
})
export class OrderFormPageModule {}
