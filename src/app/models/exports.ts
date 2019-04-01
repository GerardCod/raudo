import { MatSnackBar, ErrorStateMatcher } from '@angular/material';

export interface CentralUpdated {
    name: any;
    rate: any;
    attendant: {
        name: any;
        telephone: any;
    };
    town: any;
}

export interface Central {
    name: any;
    rate: any;
    attendant: {
        name: any;
        telephone: any;
    };
    town: any;
    password: any;
    email: any;
}

export function showMessage (message: string, snackBar: MatSnackBar) {
    snackBar.open(message, 'Aceptar', {duration: 10000});
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
// tslint:disable-next-line: max-line-length
    isErrorState(control: import('@angular/forms').FormControl, form: import('@angular/forms').FormGroupDirective | import('@angular/forms').NgForm): boolean {
        return control && control.invalid && control.touched;
    }
}

export interface Message {
    text: any;
    to: any;
}
