var headOne = document.querySelector('#firstH1');
var headTwo = document.querySelector('#secondH1');
var headThree = document.querySelector('#thirdH1');


console.log(headOne);

headOne.addEventListener('mouseover',function(){
    headOne.textContent = "Mouse hovered on me!";
    headOne.style.color = "white";
    headOne.style.backgroundColor = 'black';
});

headOne.addEventListener('mouseout',function(){
    headOne.textContent = "Hover me!";
    headOne.style.backgroundColor = 'white';
    headOne.style.color = 'black';
});

headTwo.addEventListener('click',function(){
    headTwo.innerHTML = "<p>Converting to h1 to p!</p>";
    headTwo.style.color = 'blue';

});


headThree.addEventListener('dblclick',function(){

    headThree.innerHTML = "<em>Converting to h1 to emphasis</em>";
    headThree.style.backgroundColor = "red";
    headThree.style.color = "white"

});
