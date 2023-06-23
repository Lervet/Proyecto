using System;
using System.Collections.Generic;

namespace blue_bell.Models;

public partial class Proveedor
{
    public int Codproveedor { get; set; }

    public string? Estatus { get; set; }

    public int? PersonaFk { get; set; }

    public string? Nit { get; set; }

    public string? NomEmpresa { get; set; }

    public virtual ICollection<Gasto> Gastos { get; set; } = new List<Gasto>();

    public virtual Persona? PersonaFkNavigation { get; set; }

    public virtual ICollection<Producto> Productos { get; set; } = new List<Producto>();
}
