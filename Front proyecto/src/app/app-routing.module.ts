import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaComponent } from './Components/factura/factura.component';
import { GastosComponent } from './Components/gastos/gastos.component';
import { PersonasComponent } from './Components/personas/personas.component';
import { ProductosComponent } from './Components/productos/productos.component';
import { ProveedorComponent } from './Components/proveedor/proveedor.component';
import { PublicidadComponent } from './Components/publicidad/publicidad.component';


const routes: Routes = [

  {path: "Factura", component:FacturaComponent},
  {path: "Personas", component:PersonasComponent},
  {path: "Productos", component:ProductosComponent},
  {path: "Proveedor", component:ProveedorComponent},
  {path: "Publicidad", component:PublicidadComponent},
  {path: "Gastos", component:GastosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
