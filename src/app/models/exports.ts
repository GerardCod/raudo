import { MatSnackBar } from '@angular/material';

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
    }
    town: any;
    password: any;
    email: any;
}

export function showMessage (message: string, snackBar: MatSnackBar) {
    snackBar.open(message, 'Aceptar', {duration: 10000});
}