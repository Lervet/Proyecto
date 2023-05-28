import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaComponent } from './Components/factura/factura.component';
import { GastosComponent } from './Components/gastos/gastos.component';
import { PersonasComponent } from './Components/personas/personas.component';
import { ProductosComponent } from './Components/productos/productos.component';
import { ProveedorComponent } from './Components/proveedor/proveedor.component';
import { PublicidadComponent } from './Components/publicidad/publicidad.component';
import { FormFacturaComponent } from './Components/formularios/form-factura/form-factura.component'
import { FormGastosComponent } from './Components/formularios/form-gastos/form-gastos.component';
import { FormPersonasComponent } from './Components/formularios/form-personas/form-personas.component';
import { FormProductosComponent } from './Components/formularios/form-productos/form-productos.component';
import { FormProveedorComponent } from './Components/formularios/form-proveedor/form-proveedor.component';
import { FormPublicidadComponent } from './Components/formularios/form-publicidad/form-publicidad.component';


const routes: Routes = [

  {path: "Factura", component:FacturaComponent},
  {path: "Personas", component:PersonasComponent},
  {path: "Productos", component:ProductosComponent},
  {path: "Proveedor", component:ProveedorComponent},
  {path: "Publicidad", component:PublicidadComponent},
  {path: "Gastos", component:GastosComponent},


  {path: "formFactura", component:FormFacturaComponent},
  {path: "formGastos", component:FormGastosComponent},
  {path: "formPersonas", component:FormPersonasComponent},
  {path: "formProductos", component:FormProductosComponent},
  {path: "formProveedor", component:FormProveedorComponent},
  {path: "formPublicidad", component:FormPublicidadComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
