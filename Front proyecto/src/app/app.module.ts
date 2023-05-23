import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './Components/personas/personas.component';
import { ProveedorComponent } from './Components/proveedor/proveedor.component';
import { GastosComponent } from './Components/gastos/gastos.component';
import { PublicidadComponent } from './Components/publicidad/publicidad.component';
import { ProductosComponent } from './Components/productos/productos.component';
import { FacturaComponent } from './Components/factura/factura.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormLoginComponent } from './Components/form-login/form-login.component';
import { TablaComponent } from './Components/tabla/tabla.component';

import { FormGastosComponent } from './Components/formularios/form-gastos/form-gastos.component';
import { FormPersonasComponent } from './Components/formularios/form-personas/form-personas.component';
import { FormProductosComponent } from './Components/formularios/form-productos/form-productos.component';
import { FormProveedorComponent } from './Components/formularios/form-proveedor/form-proveedor.component';
import { FormPublicidadComponent } from './Components/formularios/form-publicidad/form-publicidad.component';
import { FormFacturaComponent } from './Components/formularios/form-factura/form-factura.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    ProveedorComponent,
    GastosComponent,
    PublicidadComponent,
    ProductosComponent,
    FacturaComponent,
    MenuComponent,
    FormLoginComponent,
    TablaComponent,
    FormFacturaComponent,
    FormGastosComponent,
    FormPersonasComponent,
    FormProductosComponent,
    FormProveedorComponent,
    FormPublicidadComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
