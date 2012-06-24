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

Spieler.one = function() {
     var suchZahl = 1;
     var zahl = 0;
     for(i=0;i<5;i++){
		if(allDice[i]===suchZahl){
			zahl += suchZahl;
		}
	 }
	 this.one = zahl;
	 runde();
};

Spieler.two = function() {
     var suchZahl = 2;
     var zahl = 0;
     for(i=0;i<5;i++){
		if(allDice[i]===suchZahl){
			zahl += suchZahl;
		}
	 }
	 this.two = zahl;
	 runde();    
};
Spieler.three = function() {
     var suchZahl = 3;
     var zahl = 0;
     for(i=0;i<5;i++){
		if(allDice[i]===suchZahl){
			zahl += suchZahl;
		}
	 }
	 this.three = zahl;
	 runde();       
};
Spieler.four = function() {
     var suchZahl = 4;
     var zahl = 0;
     for(i=0;i<5;i++){
		if(allDice[i]===suchZahl){
			zahl += suchZahl;
		}
	 }
	 this.four = zahl;
	 runde();       
};
Spieler.five = function() {
     var suchZahl = 5;
     var zahl = 0;
     for(i=0;i<5;i++){
		if(allDice[i]===suchZahl){
			zahl += suchZahl;
		}
	 }
	 this.five = zahl;
	 runde();       
};
Spieler.six = function() {
     var suchZahl = 6;
     var zahl = 0;
     for(i=0;i<5;i++){
		if(allDice[i]===suchZahl){
			zahl += suchZahl;
		}
	 }
	 this.six = zahl;
	 runde();       
};
Spieler.dreierp = function() {
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
		  this.dreierp = augen;
		  runde();
		  return;
	     }
	     else {
		      zaehler = 0;
		 }	 
	 }       
};
Spieler.viererp = function() {
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
		  this.viererp = augen;
		  runde();
		  return;
	     }
	     else {
		      zaehler = 0;
		 }	 
	 }              
};
Spieler.fullHouse = function() {
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
				this.fullHouse = 25;
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
Spieler.kniffel = function() {
     var zaehler = 0
     for(i=1;i<7;i++){
		 for(j=0;j<5;j++){
			 if(i===allDice[j]){
				   zaehler++; 
			 }
		 }
		 if(zaehler===5){
		  this.kniffel = 50;
		  runde();
		  return;
	     }
	     else {
		      zaehler = 0;
		 }	 
	 }
};
Spieler.chance = function() {
    var augen = 0;
    for(k=0;k<5;k++){
			  augen += allDice[k];
		  }
		  this.chance = augen;
		  runde();
};
Spieler.kleines = function() {
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
		this.kleines = 30;
		runde();
		} 
};
Spieler.groses = function() {
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
		this.groses = 40;
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

