var counter = 0;
var runden = 1;
var allDice = [0, 0, 0, 0, 0];
var points = [[0,0,0,0,0,0],[]];

/* Konstruktor Spieler*/
var Spieler1 = new Spieler;
function Spieler(number, name)
{
	this.Name=name;
	this.number=number;
	this.one=0;
	this.two=0;
	this.three=0;
	this.four=0;
	this.five=0;
	this.six=0;
	this.zwsumme=0;
	this.bonus=35;
	this.summe=0;
	this.chance=0;
	this.dreierp=0;
	this.fullHouse=0;
	this.groses=0;
	this.kleines=0;
	this.kniffel=0;
	this.viererp=0;
	this.summe_g=0;
}
Spieler.calc = function (){
	this.zwsumme=this.one+this.two+this.three+this.four+
	this.five+this.six;
	if(this.zwsumme >= 63)
	{
		this.summe=this.bonus+this.zwsumme;
	}
	else {
		this.summe = this.zwsumme;
	}
	this.summe_g=this.summe+this.bonus+this.chance+this.dreierp+
	this.fullHouse+this.groses+this.kleines+this.kniffel+
	this.viererp;
}
Spieler.writeToHTML = function() {
	
	changeText("p"+this.number+"_one",this.one);
	changeText("p"+this.number+"_two",this.two);
	changeText("p"+this.number+"_three",this.three);
	changeText("p"+this.number+"_four",this.four);
	changeText("p"+this.number+"_five",this.five);
	changeText("p"+this.number+"_six",this.six);
	changeText("p"+this.number+"_zwsumme",this.zwsumme);
	if(zwsumme >=63){
		changeText("p"+this.number+"_bonus",this.bonus);
	}
	else{
		changeText("p"+this.number+"_bonus",0);
		}
	changeText("p"+this.number+"_summe",this.summe);
	changeText("p"+this.number+"_dreierp",this.dreierp);
	changeText("p"+this.number+"_viererp",this.viererp);
	changeText("p"+this.number+"_chance",this.chance);
	changeText("p"+this.number+"_fullHouse",this.fullHouse);
	changeText("p"+this.number+"_groses",this.groses);
	changeText("p"+this.number+"_kleines",this.kleines);
	changeText("p"+this.number+"_kniffel",this.kniffel);
	changeText("p"+this.number+"_summe_g",this.summe_g);
}


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
		   changeText("runden", runden);
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
	allDice = [0, 0, 0, 0, 0];
	uncheckAll();
};

function uncheckAll()
{
for (i = 0; i < document.dice.wuerfel.length; i++)
	document.dice.wuerfel[i].checked = false ;
}

