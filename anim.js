// Definir el objeto de animales
const Animales = {
  vertebrados: {
    reptiles: [
      "Dragón de Komodo",
      "Anaconda común",
      "Monstruo de Gila",
      "Iguana rinoceronte",
      "Caimán yacaré",
    ],
    mamiferos: ["Murciélagos", "Ballenas", "Vatones", "Mapache", "Ciervo"],
    amfibios: [
      "La salamandra común",
      "El sapo europeo",
      "Rana venenosa",
      "Tritón",
      "Rana arborícola",
    ],
    aves: ["Tucan", "Gaviota", "Pelicano", "Águila"],
    peces: ["Pez Espada", "Merluza", "Salmon", "Sardina"],
  },
  invertebrados: {
    insectos: [
      "Abeja",
      "Hormiga",
      "Cucaracha",
      "Mantis religiosa",
      "Pulga",
      "Mosca",
    ],
    crustaceos: ["Camarón", "Cangrejo", "Jaiba", "Langostino"],
  },

  // Método para obtener todos los nombres de animales
  obtenerNombresDeAnimales() {
    const nombres = [];

    for (const grupo in this) {
      if (this[grupo] && typeof this[grupo] === "object") {
        for (const subgrupo in this[grupo]) {
          nombres.push(...this[grupo][subgrupo]);
        }
      }
    }

    return nombres;
  },

  // Método para obtener animales por tipo
  obtenerAnimalesPorTipo(tipo) {
    const animalesTipo = [];

    for (const grupo in this) {
      if (
        this[grupo] &&
        typeof this[grupo] === "object" &&
        tipo in this[grupo]
      ) {
        animalesTipo.push(...this[grupo][tipo]);
      }
    }

    return animalesTipo;
  },

  // Método para obtener animales por letra inicial
  obtenerAnimalesPorLetraInicial(letra) {
    const animalesLetra = [];

    for (const grupo in this) {
      if (this[grupo] && typeof this[grupo] === "object") {
        for (const subgrupo in this[grupo]) {
          const animalesSubgrupo = this[grupo][subgrupo].filter((animal) =>
            animal.startsWith(letra)
          );
          animalesLetra.push(...animalesSubgrupo);
        }
      }
    }

    return animalesLetra;
  },
};

// Mostrar resultados
console.log("==== Animales ====");
console.log("Los reptiles son:", Animales.vertebrados.reptiles);

console.log("\nTodos los nombres de animales:");
console.log(Animales.obtenerNombresDeAnimales());

console.log("\nMamíferos:");
console.log(Animales.obtenerAnimalesPorTipo("mamiferos"));

console.log("\nAnimales que empiezan con 'A':");
console.log(Animales.obtenerAnimalesPorLetraInicial("A"));

console.log("Fin de trabajo");
