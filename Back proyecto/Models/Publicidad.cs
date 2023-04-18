using System;
using System.Collections.Generic;

namespace Blue_Bell.Models;

public partial class Publicidad
{
    public int Idpublicidad { get; set; }

    public string? NomPubli { get; set; }

    public string? TipoPubli { get; set; }

    public decimal? CostoPubli { get; set; }

    public int? CantidadPubli { get; set; }

    public virtual ICollection<Gasto> Gastos { get; } = new List<Gasto>();
}
