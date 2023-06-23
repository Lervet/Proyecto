using System;
using System.Collections.Generic;

namespace blue_bell.Models;

public partial class DetallesProducto
{
    public int Iddetallesprod { get; set; }

    public int? Cantidad { get; set; }

    public decimal? PrecioTotal { get; set; }

    public int? FacturaFk { get; set; }

    public int? ProductoFk { get; set; }

    public virtual Producto? CantidadNavigation { get; set; }

    public virtual Factura? FacturaFkNavigation { get; set; }
}
