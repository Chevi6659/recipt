import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function dateValidation({ error='the date need to be before today'} = {}): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let date=new Date()
        if (control.value === null) {
            return null;
        }
        const myDate = new Date(control.value)
        if (myDate > date)
            return { 'date': { error } }

        return null
    }
}