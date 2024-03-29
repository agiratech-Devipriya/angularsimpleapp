import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
// import { Observable, startWith, map } from 'rxjs';
// import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  myControl = new FormControl('');
  options: string[] = ['India', 'America', 'Japan'];
  filteredOptions!: Observable<string[]>;

  DashboardForm: FormGroup;
  constructor(public route: Router) {
 
    this.DashboardForm = new FormGroup({
      name: new FormControl('', Validators.required),
      dob:new FormControl('',Validators.required),
      emailId:new FormControl('', Validators.required) ,
      password:new FormControl('',Validators.required),
      phoneno:new FormControl('',Validators.required),
      confirmpassword:new FormControl('',Validators.required),
      country:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),
      state:new FormControl('',Validators.required),


    });
    
  }
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  gotodetails(){
    this.route.navigate(['/dashboard/details']);
  }
  gotoregister(){
    this.route.navigate(['/dashboard/register']);
  }
  formSubmit(){
    this.DashboardForm.markAllAsTouched()
  }
  // gender = [
  //   { value: 'option1', label: 'female' },
  //   { value: 'option2', label: 'male' },
   
  // ];


  // city = [
  //   { value: 'option1', viewValue: 'chennai' },
  //   { value: 'option2', viewValue: 'bangalore' },
  //   { value: 'option3', viewValue: 'Tirunelveli' }
  // ];
  // state = [
  //   { value: 'option1', viewValue: 'Tamil Nadu' },
  //   { value: 'option2', viewValue: 'Andhra Pradesh' },
  //   { value: 'option3', viewValue: 'Bihar' }
  // ];
  // country = [
  //   { value: 'option1', viewValue: 'India' },
  //   { value: 'option2', viewValue: 'America' },
  //   { value: 'option3', viewValue: 'China' }
  // ];

}