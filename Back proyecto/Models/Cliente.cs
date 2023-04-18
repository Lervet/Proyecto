using System;
using System.Collections.Generic;

namespace Blue_Bell.Models;

public partial class Cliente
{
    public int Idcliente { get; set; }

    public string? Estatus { get; set; }

    public int? PersonaFk { get; set; }

   
}
