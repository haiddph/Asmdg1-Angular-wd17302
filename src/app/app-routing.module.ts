import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ProductUpdateComponent } from './pages/admin/product-update/product-update.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { HomeProductListComponent } from './pages/home/home-product-list/home-product-list.component';
import { HomeProductDetailComponent } from './pages/home/home-product-detail/home-product-detail.component';
import { ProductAdminComponent } from './pages/admin/product-list/product-list.component';


const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'product', component: HomeProductListComponent },
            { path: 'product/:id', component: HomeProductDetailComponent }
        ]
    },
    {
        path: 'admin', component: DashboardComponent, children: [
            { path: 'product', component: ProductAdminComponent },
            { path: 'product/add', component: ProductAddComponent },
            { path: 'product/:id/edit', component: ProductUpdateComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
