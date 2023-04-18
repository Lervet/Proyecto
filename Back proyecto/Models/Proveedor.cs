using System;
using System.Collections.Generic;

namespace Blue_Bell.Models;

public partial class Proveedor
{
    public int Codproveedor { get; set; }

    public string? Estatus { get; set; }

    public int? PersonaFk { get; set; }

    public string? Nit { get; set; }

    public string? NomEmpresa { get; set; }

    public virtual ICollection<Gasto> Gastos { get; } = new List<Gasto>();

    public virtual Persona? PersonaFkNavigation { get; set; }

    public virtual ICollection<Producto> Productos { get; } = new List<Producto>();
}
