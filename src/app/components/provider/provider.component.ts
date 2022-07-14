import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss'],
})
export class ProviderComponent implements OnInit {
  filtered: MMProvider[] = [
    {providerName: 'Dr. John Smith', providerAddress: '123 Office Park'},
    {providerName: 'Dr. Jane Doe', providerAddress: '456 Office Park'},
  ]
  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {}

}



export interface MMProvider {
  providerName: string;
  providerAddress: string;
  id?: string;
  providerRole?: string;
  source?: string;
}