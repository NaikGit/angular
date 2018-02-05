import { Component, OnInit,Inject } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Feedback, ContactType} from '../shared/feedback';
import {FeedbackserviceService} from '../services/feedbackservice.service';
import { Params, ActivatedRoute } from '@angular/router';
import { visibility,flyInOut,expand } from '../animations/app.animation';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host :{
    '[@flyInOut]':'true',
    'style':'display:block;'
  },
  animations:[
    flyInOut(),
    visibility(),
    expand()
  ]
})
export class ContactComponent implements OnInit {
  messageSuccess = true;
  feedbackForm: FormGroup;
  feedback: Feedback;
  feedbackCopy =null;
  contactType = ContactType;
  formErrors = {
    'firstname':'',
    'lastname':'',
    'email':'',
    'telnum':''
  };

  validationMesasges = {
    'firstname':{
      'required':'First Name is required',
      'minlength':'First Name must be  at least 2  characters long',
      'maxlength':'First Name cannot be more than 25 characters long'
    },
    'lastname':{
      'required':'Last Name is required',
      'minlength':'Last Name must be  at least 2  characters long',
      'maxlength':'Last Name cannot be more than 25 characters long'
    },
    'email':{
      'required':'Email  is required',
      'patten' :'Email not in valid format'

    },
    'telnum':{
      'required':'Tel. Number  is required',
      'pattern':'Tel. Number must contain only numbers'
    }
  };
  visibility ='shown';
  feedbackVisibility = 'shown';

  constructor(private feedbackservice: FeedbackserviceService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    @Inject ('BaseURL') private BaseURL ) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      lastname: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      telnum: ['',[Validators.required , Validators.pattern]],
      email: ['',[Validators.required, Validators.email]],
      agree: false,
      contacttype: 'None',
      message: ''
    });

    this.feedbackForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set form validation messages
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    this.messageSuccess = false;
    this.feedbackservice.submitFeedback(this.feedback).subscribe( feedback =>{this.feedback = feedback;
    this.messageSuccess = true;
    this.visibility = 'hidden';
    this.feedbackVisibility ='shown';
    });
    setTimeout(() => {
      this.visibility = 'shown';
      this.feedbackVisibility ='hidden';
      this.feedbackForm.reset({
        firstname:'',
        lastname:'',
        telnum:'',
        email:'',
        agree:false,
        contacttype:'None',
        message:''
      });
    }, 5000);
    
  }

  onValueChanged(data?:any){
    if(!this.feedbackForm){return ;}
    const form = this.feedbackForm;
    
    for (const field in this.formErrors){
      this.formErrors[field]='';
      const control = form.get(field);
      if(control && control.dirty && !control.valid){
        const messages = this.validationMesasges[field];
        for(const key in control.errors){
          this.formErrors[field]+= messages[key] + '';
        }
      }
    }
  }
}