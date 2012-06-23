var counter = 0
var allDice = [0, 0, 0, 0, 0];
var wurf = function() {
    for(i=0;i<5;i++){
		if(document.dice.elements[i].checked){
			allDice[i] = Math.floor(Math.random()*6+1);
			}
		changeText("dice"+(i+1),allDice[i]);
       }
       counter +=1
       
};
var changeText = function(id, text){
	document.getElementById(id).innerHTML=text;
};
