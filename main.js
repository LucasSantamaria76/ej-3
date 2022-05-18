class Pizza {
  static lastID = 0;
  constructor(nombre, ingredientes, precio) {
    this.id = ++Pizza.lastID;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
  }
}

listaDePizzzas = [
  new Pizza('Mozzarella', ['Salsa de tomate', 'Mozzarella', 'Aceitunas'], 520),
  new Pizza('Napolitana', ['Salsa de tomate', 'Mozzarella', 'Tomate fresco', 'Aceitunas'], 550),
  new Pizza('Epecial', ['Salsa de tomate', 'Jamón', 'Mozzarella', 'Morrón', 'Aceitunas'], 590),
  new Pizza('4 Quesos', ['Mozzarella', 'Parmesano', 'Queso Azul', 'Fontina', 'Salsa de Tomate'], 690),
  new Pizza('De Rúcula', ['Rúcula', 'Jamón crudo', 'Mozzarella', 'Salsa de Tomate', 'Aceitunas Negras'], 790),
  new Pizza('De Ananá', ['Ananá', 'Mozzarella', 'Salsa de Tomate'], 890),
];

document.querySelector('button').addEventListener('click', () => {
  const idPizza = document.querySelector('input').value;
  const pizza = listaDePizzzas.find((p) => p.id == idPizza);
  if (pizza) {
    document.querySelector('h2').textContent = `El nombre de la pizza es: ${pizza.nombre}`;
    document.querySelector('h4').textContent = `El precio de la pizza es: ${pizza.precio}`;
  } else {
    document.querySelector('h2').textContent = `La pizza con el id ${idPizza} no existe`;
    document.querySelector('h4').textContent = '';
  }
});
