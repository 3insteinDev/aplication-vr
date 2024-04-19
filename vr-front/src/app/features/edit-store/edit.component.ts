import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/interfaces/product.interface';
import { FormComponent } from '../../shared/components/form/form.component';
import { BackToListComponent } from '../../shared/components/back-to-list/back-to-list.component';
import { FormStoreComponent } from '../../shared/components/form-store/form-store.component';
import { BackToListStoreComponent } from '../../shared/components/back-to-list-store/back-to-list-store.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormStoreComponent, BackToListStoreComponent],
  templateUrl: './edit-store.component.html',
  styleUrl: './edit-store.component.scss',
})
export class EditStoreComponent {
  productsService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  store: Store = inject(ActivatedRoute).snapshot.data['store'];

  onSubmit(store: Store) {
    this.productsService.put(this.store.id, store).subscribe(() => {
      this.matSnackBar.open('Loja editada com sucesso!', 'Ok');

      this.router.navigateByUrl('/');
    });
  }
}
