/*
Carina Serra | 3220661

6 JUNHO

PORTFOLIO FINAL

Época de Avaliação - Continua (durante as aulas)

ESAD.CR
2024-2025
3ºAno DGM-Multimédia 
2º Semestre
Marco Heleno - Laboratório de Projeto II
*/

/*Declara variáveis para o email (container, link, botão) e para o sistema de "hello" (elementos HTML e índices aleatórios).*/
let email_container_element, email_a_element, email_button_element;
let temp_input;


let hellos_container_element, hellos_element;
let hellos, temp_hellos_random_index, hellos_random_index;

function setup(){
  noCanvas();
/*JAVA PARA O Copylink do email*/
  email_container_element = select ("#email_container"); // Seleciona o container do email
  
  email_a_element = select ("#email"); // Seleciona o link de email
  
  email_button_element = createButton ("Copy Email"); // Cria botão com o texto "Copy Email"
  email_button_element.parent (email_container_element); // Insere o botão dentro do container
  email_button_element.hide(); // Oculta o botão por padrão
  email_button_element.mousePressed (copyEmail); // Ao clicar no botão, executa copyEmail()

  /*JAVA PARA O HELLO-Random*/
  temp_hellos_random_index = 0;
  hellos_random_index = 0;
  
  hellos = [];
  hellos[0] = "olá"; // Portugues
  hellos[1] = "hello"; // Ingles
  hellos[2] = "ciao"; // Italiano
  hellos[3] = "여보!"; // Coreano
  hellos[4] = "你好"; // Chines

  hellos_container_element = select("#hellos_container"); // Seleciona onde as saudações vão aparecer
}

function draw(){
  // Limpa saudação anterior (se existir)
  if (select("#hellos") != null){ 
    hellos_element = select ("#hellos");
    hellos_element.remove(); // Remove a saudação atual
  }
  else{
    frameRate (0.5); // Reduz a taxa de atualização para evitar repetições muito rápidas
  }
  
  //Gera um novo índice aleatório diferente do anterior
  while (temp_hellos_random_index === hellos_random_index){
    temp_hellos_random_index = int(random(0,hellos.length)); 
    // Garante que a nova saudação seja diferente da anterior
  }
  
  hellos_random_index = temp_hellos_random_index; // Atualiza o índice usado
  
  // Cria e mostra nova saudação
  hellos_element = createP (hellos[hellos_random_index]); // Cria um parágrafo com a nova saudação
  hellos_element.id ("hellos"); // Dá um ID para poder ser removida depois
  
  hellos_element.parent (hellos_container_element); // Insere no container HTLM
}


//copyEmail() Copia o email para a área de transferência
function copyEmail(){
  temp_input = createInput(); // Cria um input temporário
  temp_input.parent (email_container_element); // Insere na DOM
  temp_input.value (email_a_element.elt.innerText);  // Preenche com o texto do email
  
  console.log(temp_input.elt.value); // Valor no console

  try {
    navigator.clipboard.writeText (temp_input.elt.value)
      .then(() => {
          temp_input.remove(); // Remove o input temporário
          email_button_element.hide(); // Oculta o botão novamente
          console.log ("Email copied to clipboard (Clipboard API)");
      })

      //Caso falhe, usa método alternativo
      .catch(err => {
          console.error ("Clipboard API failed: ", err);
          copyEmailFallback();  // Tenta método alternativo
      });
  } 
  catch (err) {
    console.error ("Clipboard API failed: ", err);
    copyEmailFallback();
  }
}

 //copyEmailFallback() Método antigo para copiar texto
function copyEmailFallback(){
  temp_input.elt.select(); // Seleciona o conteúdo
  document.execCommand ('copy'); // Executa comando de cópia
  
  temp_input.remove(); // Remove o input
  email_button_element.hide(); // Oculta o botão
  
  console.log ("Email copied to clipboard");
}

// Mostrar/Ocultar botão de email
function showEmailButton(){
  email_button_element.show(); // Exibe o botão
}


function hideEmailButton(){
  email_button_element.hide(); // Oculta o botão
}

/*JAVA SCRIPT PARA O MENU ☰ HAMBURGUER*/
function toggleMenu() {
  const menu = document.getElementById('menu'); // Seleciona o menu pelo ID
  menu.classList.toggle('open');  // Alterna a classe 'open' (abre/fecha)
}
