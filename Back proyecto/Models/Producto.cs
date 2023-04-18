using System;
using System.Collections.Generic;

namespace Blue_Bell.Models;

public partial class Producto
{
    public int Idproducto { get; set; }

    public string? DescripcionPro { get; set; }

    public string? NomProveedor { get; set; }

    public decimal? PrecioProd { get; set; }

    public string? Existencia { get; set; }

    public DateTime? FechaPro { get; set; }

    public int? CantMaxProd { get; set; }

    public int? CantMinProd { get; set; }

    public string? Foto { get; set; }

    public int? ProveedorFk { get; set; }

    public string? Categoria { get; set; }

    public virtual ICollection<DetallesProducto> DetallesProductos { get; } = new List<DetallesProducto>();

    public virtual ICollection<FacturaProducto> FacturaProductos { get; } = new List<FacturaProducto>();

    public virtual Proveedor? ProveedorFkNavigation { get; set; }
}
