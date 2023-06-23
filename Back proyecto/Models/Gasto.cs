using System;
using System.Collections.Generic;

namespace blue_bell.Models;

public partial class Gasto
{
    public int Idcaja { get; set; }

    public decimal? CompraMercancia { get; set; }

    public decimal? CostoPublicidad { get; set; }

    public int? PublicidadFk { get; set; }

    public int? ProveedorFk { get; set; }

    public virtual Proveedor? ProveedorFkNavigation { get; set; }

    public virtual Publicidad? PublicidadFkNavigation { get; set; }
}
