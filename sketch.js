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

let email_container_element, email_a_element, email_button_element;
let temp_input;

function setup(){
  noCanvas();
/*JAVA PARA O Copylink do email*/
  email_container_element = select ("#email_container");
  
  email_a_element = select ("#email");
  
  email_button_element = createButton ("Copy Email");
  email_button_element.parent (email_container_element);
  email_button_element.hide();
  email_button_element.mousePressed (copyEmail);
}


function copyEmail(){
  temp_input = createInput();
  temp_input.parent (email_container_element);
  temp_input.value (email_a_element.elt.innerText);
  
  console.log(temp_input.elt.value);

  try {
    navigator.clipboard.writeText (temp_input.elt.value)
      .then(() => {
          temp_input.remove();
          email_button_element.hide();
          console.log ("Email copied to clipboard (Clipboard API)");
      })
      .catch(err => {
          console.error ("Clipboard API failed: ", err);
          copyEmailFallback();
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