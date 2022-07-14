import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.page.html',
  styleUrls: ['./order-form.page.scss'],
})
export class OrderFormPage implements OnInit {
  orderForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      toggle: [true, [Validators.required, Validators.minLength(4)]],
      counter: ['', [Validators.required]],
      // saveAndClose: ['', []],
      // saveAddAnother: ['', []],
      destination:  ['', [Validators.required, Validators.minLength(4)]],
      

    });

    this.orderForm.valueChanges.subscribe(
      (values) => {
        console.log('orderForm:', values)
      }
    );
  }

  saveAndClose() {
    this.orderForm.patchValue({destination: 'close'})
    console.log('patchValue');
  }

  

  saveAndAddAother() {
    this.orderForm.patchValue({destination: 'add'})
    console.log('patchValue');
  }

  onSubmit(event) {
    console.log(' ');
    console.log('onSubmit event:', event);
    console.log('onSubmit:', this.orderForm.value);
    console.log('onSubmit destination:', this.orderForm.value.destination);
    // console.log('onSubmit destination:', this.orderForm.get('destination') );
  }

}
