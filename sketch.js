let email_container_element, email_a_element, email_button_element;
let temp_input;

let hellos_container_element, hellos_element;
let hellos, temp_hellos_random_index, hellos_random_index;

function setup(){
  noCanvas();
/*JAVA PARA O Copylink do email*/
  email_container_element = select ("#email_container");
  
  email_a_element = select ("#email");
  
  email_button_element = createButton ("Copy Email");
  email_button_element.parent (email_container_element);
  email_button_element.hide();
  email_button_element.mousePressed (copyEmail);



  /*JAVA PARA O HELLO-Random*/
  temp_hellos_random_index = 0;
  hellos_random_index = 0;
  
  hellos = [];
  hellos[0] = "olá";
  hellos[1] = "hello";
  hellos[2] = "ciao";
  hellos[3] = "여보!";
  hellos[4] = "你好";
  hellos[5] = "こんにちは";

  hellos_container_element = select("#hellos_container");
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


function copyEmailFallback(){
  temp_input.elt.select();
  document.execCommand ('copy');
  
  temp_input.remove();
  email_button_element.hide();
  
  console.log ("Email copied to clipboard");
}

function showEmailButton() 
{
  email_button_element.show();
}


function hideEmailButton() 
{
  email_button_element.hide();
}

function draw(){
  if (select("#hellos") != null){
    hellos_element = select ("#hellos");
    hellos_element.remove();
  }
  else{
    frameRate (0.5);
  }
  
  while (temp_hellos_random_index === hellos_random_index){
    temp_hellos_random_index = int(random(0,hellos.length));
  }
  
  hellos_random_index = temp_hellos_random_index;
  
  hellos_element = createP (hellos[hellos_random_index]);
  hellos_element.id ("hellos");
  
  hellos_element.parent (hellos_container_element);
}