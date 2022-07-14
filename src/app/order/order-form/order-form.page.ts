import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { distinctUntilChanged, map } from 'rxjs/operators';

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
      provider: [null, [Validators.required]],
      // saveAndClose: ['', []],
      // saveAddAnother: ['', []],
      destination:  ['', [Validators.required, Validators.minLength(3)]],
      

    });
    // arr.map( v => { return Object.keys(v).filter( key => key!=='destination').reduce( (obj, key) => {obj[key] = v[key]; return obj}, {} ) })

    this.orderForm.valueChanges
    .pipe(
      map( (v) => Object.keys(v).filter( key => key!=='destination').reduce( (obj, key) => {obj[key] = v[key]; return obj}, {} )),
      distinctUntilChanged( (a,b) => JSON.stringify(a) === JSON.stringify(b) )
    )
    .subscribe(
      (values) => {
        console.log('SUBSCRIBE orderForm:', values)
      }
    );
  }




  saveAndClose() {
    this.orderForm.patchValue({destination: 'close'})
    console.log(' ');
    console.log('saveAndClose patchValue');
  }
  
  
  saveAndAddAother() {
    this.orderForm.patchValue({destination: 'add'})
    console.log(' ');
    console.log('saveAndAddAotherpatchValue');
  }
  
  onSubmit(event) {
    // console.log('onSubmit event:', event);
    console.log('onSubmit destination:', this.orderForm.value.destination);
    // console.log('onSubmit destination:', this.orderForm.get('destination') );
    
    if(!this.orderForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log('onSUBMIT orderForm', this.orderForm.value);
    }
  }

}
