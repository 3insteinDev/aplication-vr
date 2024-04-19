import { Component, Injectable, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-confirmation-dialog-store',
  template: `
    <h2 mat-dialog-title>Deletar loja</h2>
    <mat-dialog-content>
      Tem certeza que quer deletar essa loja?
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onNo()">Não</button>
      <button
        mat-raised-button
        color="accent"
        (click)="onYes()"
        cdkFocusInitial
      >
        Sim
      </button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class ConfirmationDialogStoreComponent {
  matDialogRef = inject(MatDialogRef);

  onNo() {
    this.matDialogRef.close(false);
  }

  onYes() {
    this.matDialogRef.close(true);
  }
}

@Injectable({
  providedIn: 'root',
})
export class ConfirmationDialogStoreService {
  matDialog = inject(MatDialog);

  constructor() {}

  openDialog(): Observable<boolean> {
    return this.matDialog.open(ConfirmationDialogStoreComponent).afterClosed();
  }
}
