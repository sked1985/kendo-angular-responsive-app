import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
    selectedOption = 'profile';
    kendokaAvatar = 'https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png';
    public phoneNumberValue: string = '';
    public phoneNumberMask: string = '(999) 000-00-00-00';

    public form: FormGroup;

    public data: any = {
        fullName: '',
        email: '',
        phoneNumber: this.phoneNumberValue,
        arrivalDate: null,
        numberOfNights: null,
        numberOfGuests: null,
        terms: false,
        comments: ''
    };

    constructor() {
        this.form = new FormGroup({
            fullName: new FormControl(this.data.fullName, [Validators.required]),
            email: new FormControl(this.data.email, [Validators.required, Validators.email]),
            phoneNumber: new FormControl(this.data.phoneNumber, [Validators.required]),
            arrivalDate: new FormControl(this.data.arrivalDate, [Validators.required]),
            numberOfNights: new FormControl(this.data.numberOfNights, [Validators.required]),
            numberOfGuests: new FormControl(this.data.numberOfGuests, [Validators.required, Validators.max(5)]),
            terms: new FormControl(this.data.terms, [Validators.requiredTrue]),
            comments: new FormControl(this.data.comments)
        });
    }

    public submitForm(): void {
        this.form.markAllAsTouched();
    }

    public clearForm(): void {
        this.form.reset();
    }

    optionChanged(option) {
        this.selectedOption = option;
    }
}
