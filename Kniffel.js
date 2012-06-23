var counter = 0
var allDice = [0, 0, 0, 0, 0];
var wurf = function() {
    for(i=0;i<5;i++){
		if(!document.dice.elements[i].checked){
			allDice[i] = Math.floor(Math.random()*6+1);
			}
		changeText("dice"+(i+1),allDice[i]);
       }
       counter +=1;
       changeText("counter", counter);
       
};
var changeText = function(id, text){
	document.getElementById(id).innerHTML=text;
};

var one = function() {
     var suchZahl = 1;
     var zahl = 0;
     for(i=0;i<5;i++){
		if(allDice[i]===suchZahl){
			zahl += suchZahl;
		}
	 }
	 changeText("p1_one", zahl);
};

var two = function() {
     var suchZahl = 2;
     var zahl = 0;
     for(i=0;i<5;i++){
		if(allDice[i]===suchZahl){
			zahl += suchZahl;
		}
	 }
	 changeText("p1_two", zahl);    
};
var three = function() {
     var suchZahl = 3;
     var zahl = 0;
     for(i=0;i<5;i++){
		if(allDice[i]===suchZahl){
			zahl += suchZahl;
		}
	 }
	 changeText("p1_three", zahl);       
};
var four = function() {
     var suchZahl = 4;
     var zahl = 0;
     for(i=0;i<5;i++){
		if(allDice[i]===suchZahl){
			zahl += suchZahl;
		}
	 }
	 changeText("p1_four", zahl);       
};
var five = function() {
     var suchZahl = 5;
     var zahl = 0;
     for(i=0;i<5;i++){
		if(allDice[i]===suchZahl){
			zahl += suchZahl;
		}
	 }
	 changeText("p1_five", zahl);       
};
var six = function() {
     var suchZahl = 6;
     var zahl = 0;
     for(i=0;i<5;i++){
		if(allDice[i]===suchZahl){
			zahl += suchZahl;
		}
	 }
	 changeText("p1_six", zahl);       
};
var dreierp = function() {
       
};
var viererp = function() {
       
};
var fullHouse = function() {
       
};
var kniffel = function() {
     for(i=1;i<7;i++){
		 for(j=0;j<5;j++){
			 if(i===allDice[j]){
				   changeText("p1_kniffel", 50);
			 }
		 }
	 }
};
var chance = function() {
       
};
var kleines = function() {
       
};
var groses = function() {
	var new_ad = allDice.slice();
	new_ad.sort();
	if(new_ad[0] > 2){return}
	else {
			for(i=new_ad[0];i<new_ad[0]+3;i++)
				{
					if(new_ad[i]+1 !== new_ad[i+1])
					{
						changeText("p1_groses", "Nope");
					}
				}
		changeText("p1_groses", 40);
		}
	 
};
