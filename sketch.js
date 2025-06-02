let email_container_element, email_a_element, email_button_element;
let temp_input;

let hellos_container_element, hellos_element;
let hellos, temp_hellos_random_index, hellos_random_index;

function setup() 
{
  noCanvas();
/*JAVA PARA O Copylink do email*/
  email_container_element = select ("#email_container");
  
  email_a_element = select ("#email");
  
  email_button_element = createButton ("Copy Email");
  email_button_element.parent (email_container_element);
  email_button_element.hide();
  email_button_element.mousePressed (copyEmail);



  /*JAVA PARA O HELLO*/
  temp_hellos_random_index = 0;
  hellos_random_index = 0;
  
  hellos = [];
  hellos[0] = "olá";
  hellos[1] = "hello";
  
  hellos_container_element = select("#hellos_container");
}


function copyEmail() 
{
  temp_input = createInput();
  temp_input.parent (email_container_element);
  temp_input.value (email_a_element.html());
  
  try {
    navigator.clipboard.writeText (temp_input.elt.select())
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


function copyEmailFallback() 
{
  temp_input.elt.select();
  document.execCommand ('copy');
  
  temp_input.remove();
  email_button_element.hide();
  
  console.log ("Email copied to clipboard");
}

