const peliculas = [
    "Turno de día",
    "30 noches con mi ex",
    "Bestia",
    "El monte",
    "Top gun maverick",
    "Elvis",
    "Thor: amor y trueno",
  ];
  
  let thorAmorYTrueno = peliculas.pop().toUpperCase();
  
  peliculas.unshift(thorAmorYTrueno);
  
  console.log(peliculas);
  
  let peliculasAEstrenar = "Counter-Strike, NOP, Vértigo, Nick, Avatar";
  
  peliculasAEstrenar = peliculasAEstrenar.replace("Counter-Strike,", "");
  
  console.log(peliculasAEstrenar);
  
  console.log(peliculas.join(", ").concat(", ", peliculasAEstrenar));