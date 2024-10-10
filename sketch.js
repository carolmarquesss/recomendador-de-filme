let compoIdade;
let campoFantasia;
let campoAventura;

function setup(){
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gostra de aventura?")
}

function draw(){
 background("white") 
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomndaçao = geraRecomendaçao(idade,gostaDeFantasia,gostaDeAventura);
  
 fill(color(76, 0, 115)); 
 textAligin(CENTER, CENTER);
 textSize(38); 
  text(recomendaçao, width / 2, height / 2);
}

function geraRecomendaçao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10){
    if (idade >= 14){
      return "O menino que descobriu o vento";
      } else { 
      if (idade >= 12){ 
        if(GostaDeFantasia || gostaDeAventura){ 
          return "Homem aranha: no aranhaverso";
        } else{ 
          return "Ladrões de bicicleta";
        }
      } else { 
        if (gostaDeFantasia){ 
          return "As aventuras de pi";
        } else { 
          
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
