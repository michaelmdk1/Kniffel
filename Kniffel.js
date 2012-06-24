var counter = 0
var runden = 1
var allDice = [0, 0, 0, 0, 0];
var points = [];
var wurf = function() {
    if(counter<3){
		for(i=0;i<5;i++){
			if(!document.dice.elements[i].checked){
				allDice[i] = Math.floor(Math.random()*6+1);
				}
			changeText("dice"+(i+1),allDice[i]);
		   }
		   counter +=1;
		   changeText("counter", counter);
   }
   else {
	   changeText("fehler", "Maximale Würfe erreicht");
   }
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
	 runde();
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
	 runde();    
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
	 runde();       
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
	 runde();       
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
	 runde();       
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
	 runde();       
};
var dreierp = function() {
     var augen = 0
     var zaehler = 0
     for(i=1;i<7;i++){
		 for(j=0;j<5;j++){
			 if(i===allDice[j]){
				   zaehler++; 
			 }
		 }
		 if(zaehler>=3){
		  for(k=0;k<5;k++){
			  augen += allDice[k];
		  }
		  changeText("p1_dreierp", augen);
		  runde();
		  return;
	     }
	     else {
		      zaehler = 0;
		 }	 
	 }       
};
var viererp = function() {
     var augen = 0
     var zaehler = 0
     for(i=1;i<7;i++){
		 for(j=0;j<5;j++){
			 if(i===allDice[j]){
				   zaehler++; 
			 }
		 }
		 if(zaehler>=4){
		  for(k=0;k<5;k++){
			  augen += allDice[k];
		  }
		  changeText("p1_viererp", augen);
		  runde();
		  return;
	     }
	     else {
		      zaehler = 0;
		 }	 
	 }              
};
var fullHouse = function() {
    var zaehler = 0;
    var zaehler2 = 0;
     for(i=1;i<7;i++){
		 for(j=0;j<5;j++){
			 if(i===allDice[j]){
				   zaehler++; 
			 }
		 }
		 if(zaehler===3){
			for(k=0;k<5;k++){
			 if(i===allDice[k]&&i!==allDice[j]){
				   zaehler2++; 
			 }
			if(zaehler2===2){
				changeText("p1_fullHouse", 25);
				runde();
				return;
			}
		 }
	 }
	     else {
		      zaehler = 0;
		 }	 
	 } 
};
var kniffel = function() {
     var zaehler = 0
     for(i=1;i<7;i++){
		 for(j=0;j<5;j++){
			 if(i===allDice[j]){
				   zaehler++; 
			 }
		 }
		 if(zaehler===5){
		  changeText("p1_kniffel", 50);
		  runde();
		  return;
	     }
	     else {
		      zaehler = 0;
		 }	 
	 }
};
var chance = function() {
    var augen = 0;
    for(k=0;k<5;k++){
			  augen += allDice[k];
		  }
		  changeText("p1_chance", augen);
		  runde();
};
var kleines = function() {
	var count=0;
	var new_ad = allDice.slice();
	new_ad.sort();

	for(i=0;i<4;i++)
		{
			if(new_ad[i]+1 === new_ad[i+1])
			{
				count++;
				changeText("fehler", count);
			}
		}
	if(count >= 3){
		changeText("p1_kleines", 30);
		runde();
		} 
};
var groses = function() {
	var count=0;
	var new_ad = allDice.slice();
	new_ad.sort();

	for(i=0;i<4;i++)
		{
			if(new_ad[i]+1 === new_ad[i+1])
			{
				count++;
				changeText("fehler", count);
			}
		}
	if(count === 4){
		addText("p1_groses", 40);
		runde();
		}  
};
var runde = function(){
	runden +=1;
	counter = 0;
};

