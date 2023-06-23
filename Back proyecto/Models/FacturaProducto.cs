using System;
using System.Collections.Generic;

namespace blue_bell.Models;

public partial class FacturaProducto
{
    public int FacturaFk { get; set; }

    public int? ProductoFk { get; set; }

    public int? Cantidad { get; set; }

    public decimal? PrecioTotal { get; set; }

    public int Idfacprod { get; set; }

    public virtual Factura FacturaFkNavigation { get; set; } = null!;

    public virtual Producto? ProductoFkNavigation { get; set; }
}
