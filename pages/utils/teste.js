/*const item = {
      Keycard: "Keycard",
      Lockpick: "Lockpick",
      Capuz: "Capuz",
      Algemas:"Algemas",
    }
    

Object.keys(item).forEach((i) => {
  console.log(item[i]);
});
*/




const obj = {
  "column01": "Coluna 01",
  "column02": "Coluna 02"
};

/*Object.keys(obj).forEach((item) => {
  console.log(item + " = " + obj[item]);
});*/

/*for (const property in obj) {
  console.log(property + " = " + obj[property]);
}*/




function calcular(un, preco) {
  const valores = []

  for (let item in preco) {

    valores[item] = un * preco[item]
    console.log(valores[item])
  }

}
//******************************************************************************************************* */
c.innerHTML = "";
  d.innerHTML = "";
  Object.keys(total).forEach(i => {
    if (total[i] == 0) {
      c.innerHTML += "";
      d.innerHTML += "";
    } else {
      c.innerHTML += `${item[i]}   x${uni[i]} un<br/>`;
      d.innerHTML += `${total[i].toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}<br/>`;
    }
  });


