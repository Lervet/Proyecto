using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace blue_bell.Models;

public partial class BlueBellContext : DbContext
{
    public BlueBellContext()
    {
    }

    public BlueBellContext(DbContextOptions<BlueBellContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Cliente> Clientes { get; set; }

    public virtual DbSet<DetallesProducto> DetallesProductos { get; set; }

    public virtual DbSet<Factura> Facturas { get; set; }

    public virtual DbSet<FacturaProducto> FacturaProductos { get; set; }

    public virtual DbSet<Gasto> Gastos { get; set; }

    public virtual DbSet<Login> Logins { get; set; }

    public virtual DbSet<ModuloPermiso> ModuloPermisos { get; set; }

    public virtual DbSet<Persona> Personas { get; set; }

    public virtual DbSet<Producto> Productos { get; set; }

    public virtual DbSet<Proveedor> Proveedors { get; set; }

    public virtual DbSet<Publicidad> Publicidads { get; set; }

    public virtual DbSet<Rol> Rols { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=PORTATIL-ERICK\\SQLEXPRESS; Database=Blue_Bell; Encrypt = False; \n  Trusted_Connection=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cliente>(entity =>
        {
            entity.HasKey(e => e.Idcliente);

            entity.ToTable("cliente");

            entity.Property(e => e.Idcliente).HasColumnName("idcliente");
            entity.Property(e => e.Estatus)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("estatus");
            entity.Property(e => e.PersonaFk).HasColumnName("persona_fk");

            entity.HasOne(d => d.PersonaFkNavigation).WithMany(p => p.Clientes)
                .HasForeignKey(d => d.PersonaFk)
                .HasConstraintName("FK_cliente_persona");
        });

        modelBuilder.Entity<DetallesProducto>(entity =>
        {
            entity.HasKey(e => e.Iddetallesprod);

            entity.ToTable("detalles_productos");

            entity.Property(e => e.Iddetallesprod).HasColumnName("iddetallesprod");
            entity.Property(e => e.Cantidad).HasColumnName("cantidad");
            entity.Property(e => e.FacturaFk).HasColumnName("factura_fk");
            entity.Property(e => e.PrecioTotal)
                .HasColumnType("decimal(18, 3)")
                .HasColumnName("precio_total");
            entity.Property(e => e.ProductoFk).HasColumnName("producto_fk");

            entity.HasOne(d => d.CantidadNavigation).WithMany(p => p.DetallesProductos)
                .HasForeignKey(d => d.Cantidad)
                .HasConstraintName("FK_detalles_productos_producto");

            entity.HasOne(d => d.FacturaFkNavigation).WithMany(p => p.DetallesProductos)
                .HasForeignKey(d => d.FacturaFk)
                .HasConstraintName("FK_detalles_productos_factura");
        });

        modelBuilder.Entity<Factura>(entity =>
        {
            entity.HasKey(e => e.Nofactura);

            entity.ToTable("factura");

            entity.Property(e => e.Nofactura).HasColumnName("nofactura");
            entity.Property(e => e.Articulo)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("articulo");
            entity.Property(e => e.Cantidad).HasColumnName("cantidad");
            entity.Property(e => e.FechaFactura)
                .HasColumnType("date")
                .HasColumnName("fecha_factura");
            entity.Property(e => e.FormaPago)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("forma_pago");
            entity.Property(e => e.PersonaFk).HasColumnName("persona_fk");

            entity.HasOne(d => d.PersonaFkNavigation).WithMany(p => p.Facturas)
                .HasForeignKey(d => d.PersonaFk)
                .HasConstraintName("FK_factura_persona");
        });

        modelBuilder.Entity<FacturaProducto>(entity =>
        {
            entity.HasKey(e => e.Idfacprod).HasName("PK_factura_producto_1");

            entity.ToTable("factura_producto");

            entity.Property(e => e.Idfacprod).HasColumnName("idfacprod");
            entity.Property(e => e.Cantidad).HasColumnName("cantidad");
            entity.Property(e => e.FacturaFk).HasColumnName("factura_fk");
            entity.Property(e => e.PrecioTotal)
                .HasColumnType("decimal(18, 3)")
                .HasColumnName("precio_total");
            entity.Property(e => e.ProductoFk).HasColumnName("producto_fk");

            entity.HasOne(d => d.FacturaFkNavigation).WithMany(p => p.FacturaProductos)
                .HasForeignKey(d => d.FacturaFk)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_factura_producto_factura");

            entity.HasOne(d => d.ProductoFkNavigation).WithMany(p => p.FacturaProductos)
                .HasForeignKey(d => d.ProductoFk)
                .HasConstraintName("FK_factura_producto_producto");
        });

        modelBuilder.Entity<Gasto>(entity =>
        {
            entity.HasKey(e => e.Idcaja);

            entity.ToTable("gastos");

            entity.Property(e => e.Idcaja).HasColumnName("idcaja");
            entity.Property(e => e.CompraMercancia)
                .HasColumnType("decimal(18, 3)")
                .HasColumnName("compra_mercancia");
            entity.Property(e => e.CostoPublicidad)
                .HasColumnType("decimal(18, 3)")
                .HasColumnName("costo_publicidad");
            entity.Property(e => e.ProveedorFk).HasColumnName("proveedor_fk");
            entity.Property(e => e.PublicidadFk).HasColumnName("publicidad_fk");

            entity.HasOne(d => d.ProveedorFkNavigation).WithMany(p => p.Gastos)
                .HasForeignKey(d => d.ProveedorFk)
                .HasConstraintName("FK_gastos_proveedor");

            entity.HasOne(d => d.PublicidadFkNavigation).WithMany(p => p.Gastos)
                .HasForeignKey(d => d.PublicidadFk)
                .HasConstraintName("FK_gastos_publicidad");
        });

        modelBuilder.Entity<Login>(entity =>
        {
            entity.HasKey(e => e.Idlogin);

            entity.ToTable("login");

            entity.Property(e => e.Idlogin).HasColumnName("idlogin");
            entity.Property(e => e.FechaLogin)
                .HasColumnType("date")
                .HasColumnName("fecha_login");
            entity.Property(e => e.Reporte)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("reporte");
            entity.Property(e => e.UsuarioFk).HasColumnName("usuario_fk");

            entity.HasOne(d => d.UsuarioFkNavigation).WithMany(p => p.Logins)
                .HasForeignKey(d => d.UsuarioFk)
                .HasConstraintName("FK_login_usuario");
        });

        modelBuilder.Entity<ModuloPermiso>(entity =>
        {
            entity.HasKey(e => e.IdmoduloPermisos);

            entity.ToTable("modulo_permisos");

            entity.Property(e => e.IdmoduloPermisos).HasColumnName("idmodulo_permisos");
            entity.Property(e => e.Modulo)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("modulo");
            entity.Property(e => e.Permisos)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("permisos");
            entity.Property(e => e.RolFk).HasColumnName("rol_fk");

            entity.HasOne(d => d.RolFkNavigation).WithMany(p => p.ModuloPermisos)
                .HasForeignKey(d => d.RolFk)
                .HasConstraintName("FK_modulo_permisos_rol");
        });

        modelBuilder.Entity<Persona>(entity =>
        {
            entity.HasKey(e => e.Idpersona);

            entity.ToTable("persona");

            entity.Property(e => e.Idpersona).HasColumnName("idpersona");
            entity.Property(e => e.Apellidos)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("apellidos");
            entity.Property(e => e.Correo)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("correo");
            entity.Property(e => e.DocPersona)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("doc_persona");
            entity.Property(e => e.Estatus)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("estatus");
            entity.Property(e => e.Nombre)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Rol)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("rol");
            entity.Property(e => e.RolFk).HasColumnName("rol_fk");
            entity.Property(e => e.Telefono)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("telefono");
            entity.Property(e => e.TipoDocPersona)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("tipo_doc_persona");

            entity.HasOne(d => d.RolFkNavigation).WithMany(p => p.Personas)
                .HasForeignKey(d => d.RolFk)
                .HasConstraintName("FK_persona_rol");
        });

        modelBuilder.Entity<Producto>(entity =>
        {
            entity.HasKey(e => e.Idproducto);

            entity.ToTable("producto");

            entity.Property(e => e.Idproducto).HasColumnName("idproducto");
            entity.Property(e => e.CantMaxProd).HasColumnName("cant_max_prod");
            entity.Property(e => e.CantMinProd).HasColumnName("cant_min_prod");
            entity.Property(e => e.Categoria)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("categoria");
            entity.Property(e => e.DescripcionPro)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("descripcion_pro");
            entity.Property(e => e.Existencia)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("existencia");
            entity.Property(e => e.FechaPro)
                .HasColumnType("date")
                .HasColumnName("fecha_pro");
            entity.Property(e => e.Foto)
                .HasColumnType("text")
                .HasColumnName("foto");
            entity.Property(e => e.NomProveedor)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("nom_proveedor");
            entity.Property(e => e.PrecioProd)
                .HasColumnType("decimal(18, 3)")
                .HasColumnName("precio_prod");
            entity.Property(e => e.ProveedorFk).HasColumnName("proveedor_fk");

            entity.HasOne(d => d.ProveedorFkNavigation).WithMany(p => p.Productos)
                .HasForeignKey(d => d.ProveedorFk)
                .HasConstraintName("FK_producto_proveedor");
        });

        modelBuilder.Entity<Proveedor>(entity =>
        {
            entity.HasKey(e => e.Codproveedor);

            entity.ToTable("proveedor");

            entity.Property(e => e.Codproveedor).HasColumnName("codproveedor");
            entity.Property(e => e.Estatus)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("estatus");
            entity.Property(e => e.Nit)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("nit");
            entity.Property(e => e.NomEmpresa)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("nom_empresa");
            entity.Property(e => e.PersonaFk).HasColumnName("persona_fk");

            entity.HasOne(d => d.PersonaFkNavigation).WithMany(p => p.Proveedors)
                .HasForeignKey(d => d.PersonaFk)
                .HasConstraintName("FK_proveedor_persona");
        });

        modelBuilder.Entity<Publicidad>(entity =>
        {
            entity.HasKey(e => e.Idpublicidad);

            entity.ToTable("publicidad");

            entity.Property(e => e.Idpublicidad).HasColumnName("idpublicidad");
            entity.Property(e => e.CantidadPubli).HasColumnName("cantidad_publi");
            entity.Property(e => e.CostoPubli)
                .HasColumnType("decimal(18, 3)")
                .HasColumnName("costo_publi");
            entity.Property(e => e.NomPubli)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("nom_publi");
            entity.Property(e => e.TipoPubli)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("tipo_publi");
        });

        modelBuilder.Entity<Rol>(entity =>
        {
            entity.HasKey(e => e.Idrol);

            entity.ToTable("rol");

            entity.Property(e => e.Idrol).HasColumnName("idrol");
            entity.Property(e => e.NomRol)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("nom_rol");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.Idusuario);

            entity.ToTable("usuario");

            entity.Property(e => e.Idusuario).HasColumnName("idusuario");
            entity.Property(e => e.Password)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasColumnName("password");
            entity.Property(e => e.PersonaFk).HasColumnName("persona_fk");
            entity.Property(e => e.Rol)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("rol");
            entity.Property(e => e.Username)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("username");

            entity.HasOne(d => d.PersonaFkNavigation).WithMany(p => p.Usuarios)
                .HasForeignKey(d => d.PersonaFk)
                .HasConstraintName("FK_usuario_persona");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
