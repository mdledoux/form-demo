import { Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { OverlayBaseController } from '@ionic/angular/util/overlay';
import { ProviderComponent, MMProvider } from '../provider/provider.component';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddProviderComponent),
      multi: true
    }
  ]
})
export class AddProviderComponent implements OnInit, ControlValueAccessor { 
  // @Input('value') _value = false;
  _value:MMProvider|null = null;

  onChange: any = () => {};
  onTouched: any = () => {};
  
  private loader;

  constructor(
    public modalController: ModalController,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {}

  public async openProviderModal(): Promise<any> {
    const modal = await this.presentModal(ProviderComponent, {
      componentProps: {
        // providers$: this.providers$,
        // closeModal: () => this.modalController.dismiss(),
        closeModal: (data: MMProvider) => {
          console.log('closeModal data:', data)
          return this.modalController.dismiss(data)
        },
      },
      cssClass: 'mm-provider-modal',
    });

    const { data } = await modal.onWillDismiss();
    console.log("modal.onWillDismiss() data:", data);
    if (data) {
      this.value = data;
    }
  }

  private async presentModal(modalComponent: any, opts: any): Promise<any> {
    const modal = await this.modalController.create({
      component: modalComponent,
      showBackdrop: true,
      backdropDismiss: true,
      swipeToClose: true,
      initialBreakpoint: 0.95,
      breakpoints: [0, 0.95],
      ...opts,
    });

    await modal.present();

    return modal;
  }

  private showLoader = async (): Promise<any> => {
    this.loader = await this.loadingController.create({
      cssClass: 'mm-loading-spinner',
    });

    return this.loader.present();
  };

  get value(): MMProvider {
    return this._value;
  }

  set value(val: MMProvider) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value:MMProvider) {
    if (value) {
      this.value = value;
    }
  }


  
}
