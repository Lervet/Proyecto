using System;
using System.Collections.Generic;

namespace blue_bell.Models;

public partial class Cliente
{
    public int Idcliente { get; set; }

    public string? Estatus { get; set; }

    public int? PersonaFk { get; set; }

    public virtual Persona? PersonaFkNavigation { get; set; }
}
