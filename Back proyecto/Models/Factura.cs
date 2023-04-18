using System;
using System.Collections.Generic;

namespace Blue_Bell.Models;

public partial class Factura
{
    public int Nofactura { get; set; }

    public DateTime? FechaFactura { get; set; }

    public int? Cantidad { get; set; }

    public string? FormaPago { get; set; }

    public string? Articulo { get; set; }

    public int? PersonaFk { get; set; }

    public virtual ICollection<DetallesProducto> DetallesProductos { get; } = new List<DetallesProducto>();

    public virtual ICollection<FacturaProducto> FacturaProductos { get; } = new List<FacturaProducto>();

    public virtual Persona? PersonaFkNavigation { get; set; }
}
