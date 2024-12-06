let screen = document.querySelector("input");
function clickappend(input){
    screen.value += input;
}
function clicktoclear(){
    screen.value = "";
}
function calculate(){
   screen.value= eval(screen.value);
}