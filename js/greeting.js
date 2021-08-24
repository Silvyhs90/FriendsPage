function greeting(name)
{
  let hello = (`Hola! Bienvenidx, ${name}, a la pagina tributo a la serie Friends`);
   alert(hello);
  document.write(hello.fontcolor("pink").fontsize(15));
}

function processUserInput(callback) 
{
const name = prompt("Como es tu nombre?");

callback(name);

}

processUserInput(greeting);