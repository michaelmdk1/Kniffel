var counter = 0;
var runden = 1;
var allDice = [0, 0, 0, 0, 0];
var anzahlSpieler = 0;
var spielerArray =new Array();
var aktiverSpieler = 0;


/* Klasse Spieler*/
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
	
	this.writeToHTML = function() {
		if(this.one!=0) changeText("p"+this.number+"_one",this.one);
		if(this.two!=0) changeText("p"+this.number+"_two",this.two);
		if(this.three!=0) changeText("p"+this.number+"_three",this.three);
		if(this.four!=0) changeText("p"+this.number+"_four",this.four);
		if(this.five!=0) changeText("p"+this.number+"_five",this.five);
		if(this.six!=0) changeText("p"+this.number+"_six",this.six);
		if(this.zwsumme!=0) changeText("p"+this.number+"_zwSumme",this.zwsumme);
		if(this.zwsumme >=63){
			changeText("p"+this.number+"_bonus",this.bonus);
		}
		if(this.summe!=0) changeText("p"+this.number+"_summe",this.summe);
		if(this.dreierp!=0) changeText("p"+this.number+"_dreierp",this.dreierp);
		if(this.viererp!=0) changeText("p"+this.number+"_viererp",this.viererp);
		if(this.chance!=0) changeText("p"+this.number+"_chance",this.chance);
		if(this.fullHouse!=0) changeText("p"+this.number+"_fullHouse",this.fullHouse);
		if(this.groses!=0) changeText("p"+this.number+"_groses",this.groses);
		if(this.kleines!=0) changeText("p"+this.number+"_kleines",this.kleines);
		if(this.kniffel!=0) changeText("p"+this.number+"_kniffel",this.kniffel);
		if(this.summe_g!=0) changeText("p"+this.number+"_summe_g",this.summe_g);
	}
	
	this.calc = function (){
		this.zwsumme=this.one+this.two+this.three+this.four+this.five+this.six;
		if(this.zwsumme >= 63)
		{
			this.summe=this.bonus+this.zwsumme;
		}
		else {
			this.summe = this.zwsumme;
		}
		this.summe_g=this.summe+this.chance+this.dreierp+this.fullHouse+this.groses+this.kleines+this.kniffel+this.viererp;
	}
	
	this.setOne = function() {
		 var suchZahl = 1;
		 var zahl = 0;
		 for(i=0;i<5;i++){
			if(allDice[i]===suchZahl){
				zahl += suchZahl;
			}
		 }
		 this.one = zahl;
		 zug();
	};
	
	this.setTwo = function() {
		 var suchZahl = 2;
		 var zahl = 0;
		 for(i=0;i<5;i++){
			if(allDice[i]===suchZahl){
				zahl += suchZahl;
			}
		 }
		 this.two = zahl;
		 zug();    
	};
	
	this.setThree = function() {
		 var suchZahl = 3;
		 var zahl = 0;
		 for(i=0;i<5;i++){
			if(allDice[i]===suchZahl){
				zahl += suchZahl;
			}
		 }
		 this.three = zahl;
		 zug();       
	};
	
	this.setFour = function() {
     var suchZahl = 4;
     var zahl = 0;
     for(i=0;i<5;i++){
		if(allDice[i]===suchZahl){
			zahl += suchZahl;
		}
	 }
	 this.four = zahl;
	 zug();       
};
	
	this.setFive = function() {
     var suchZahl = 5;
     var zahl = 0;
     for(i=0;i<5;i++){
		if(allDice[i]===suchZahl){
			zahl += suchZahl;
		}
	 }
	 this.five = zahl;
	 zug();       
};
	
	this.setSix = function() {
     var suchZahl = 6;
     var zahl = 0;
     for(i=0;i<5;i++){
		if(allDice[i]===suchZahl){
			zahl += suchZahl;
		}
	 }
	 this.six = zahl;
	 zug();       
};
	
	this.setDreierp = function() {
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
		  zug();
		  return;
	     }
	     else {
		      zaehler = 0;
		 }	 
	 }       
};
	
	this.setViererp = function() {
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
			  zug();
			  return;
			 }
			 else {
				  zaehler = 0;
			 }	 
		 }              
	};
	
	this.setFullHouse = function() {
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
					zug();
					return;
				}
			 }
		 }
			 else {
				  zaehler = 0;
			 }	 
		 } 
	};

	this.setKniffel = function() {
		 var zaehler = 0
		 for(i=1;i<7;i++){
			 for(j=0;j<5;j++){
				 if(i===allDice[j]){
					   zaehler++; 
				 }
			 }
			 if(zaehler===5){
			  this.kniffel += 50;
			  zug();
			  return;
			 }
			 else {
				  zaehler = 0;
			 }	 
		 }
	};

	this.setChance = function() {
		var augen = 0;
		for(k=0;k<5;k++){
				  augen += allDice[k];
			  }
			  this.chance = augen;
			  zug();
	};

	this.setKleines = function() {
		var count=0;
		var new_ad = allDice.slice();
		new_ad.sort();

		for(i=0;i<4;i++)
			{
				if(new_ad[i]+1 === new_ad[i+1])
				{
					count++;
				}
			}
		if(count >= 3){
			this.kleines = 30;
			zug();
			} 
	};
	
	this.setGroses = function() {
	var count=0;
	var new_ad = allDice.slice();
	new_ad.sort();

	for(i=0;i<4;i++)
		{
			if(new_ad[i]+1 === new_ad[i+1])
			{
				count++;
			}
		}
	if(count === 4){
		this.groses = 40;
		zug();
		}  
	};
	
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

var move = function(){
	document.getElementById(aktiverSpieler).style.backgroundColor = "#FFFFFF";
	aktiverSpieler++;
	if(aktiverSpieler>=anzahlSpieler){
		aktiverSpieler=0;
		runden++;
	}
	document.getElementById(aktiverSpieler).style.backgroundColor = "#FF9933";
	changeText("fehler", "");
	
};
	
var one = function(){
	if(spielerArray[aktiverSpieler].one <= 0){
		spielerArray[aktiverSpieler].setOne();
		spielerArray[aktiverSpieler].calc();
		spielerArray[aktiverSpieler].writeToHTML();
		move();
	}
};

var two = function(){
	if(spielerArray[aktiverSpieler].two <= 0){
		spielerArray[aktiverSpieler].setTwo();
		spielerArray[aktiverSpieler].calc();
		spielerArray[aktiverSpieler].writeToHTML();
		move();
	}
};

var three = function(){
	if(spielerArray[aktiverSpieler].three <= 0){
		spielerArray[aktiverSpieler].setThree();
		spielerArray[aktiverSpieler].calc();
		spielerArray[aktiverSpieler].writeToHTML();
		move();
	}
};

var four = function(){
	if(spielerArray[aktiverSpieler].four <= 0){
		spielerArray[aktiverSpieler].setFour();
		spielerArray[aktiverSpieler].calc();
		spielerArray[aktiverSpieler].writeToHTML();
		move();
	}
};

var five = function(){
	if(spielerArray[aktiverSpieler].five <= 0){
		spielerArray[aktiverSpieler].setFive();
		spielerArray[aktiverSpieler].calc();
		spielerArray[aktiverSpieler].writeToHTML();
		move();
	}
};

var six = function(){
	if(spielerArray[aktiverSpieler].six <= 0){
		spielerArray[aktiverSpieler].setSix();
		spielerArray[aktiverSpieler].calc();
		spielerArray[aktiverSpieler].writeToHTML();
		move();
	}
};

var dreierp = function(){
	if(spielerArray[aktiverSpieler].dreierp <= 0){
		spielerArray[aktiverSpieler].setDreierp();
		spielerArray[aktiverSpieler].calc();
		spielerArray[aktiverSpieler].writeToHTML();
		move();
	}
};

var viererp = function(){
	if(spielerArray[aktiverSpieler].viererp <= 0){
		spielerArray[aktiverSpieler].setViererp();
		spielerArray[aktiverSpieler].calc();
		spielerArray[aktiverSpieler].writeToHTML();
		move();
	}
};

var fullHouse = function(){
	if(spielerArray[aktiverSpieler].fullHouse <= 0){
		spielerArray[aktiverSpieler].setFullHouse();
		spielerArray[aktiverSpieler].calc();
		spielerArray[aktiverSpieler].writeToHTML();
		move();
	}
};

var kniffel = function(){
	spielerArray[aktiverSpieler].setKniffel();
	spielerArray[aktiverSpieler].calc();
	spielerArray[aktiverSpieler].writeToHTML();
	move();
};

var chance = function(){
	if(spielerArray[aktiverSpieler].chance <= 0){
		spielerArray[aktiverSpieler].setChance();
		spielerArray[aktiverSpieler].calc();
		spielerArray[aktiverSpieler].writeToHTML();
		move();
	}
};

var kleines = function(){
	if(spielerArray[aktiverSpieler].kleines <= 0){
		spielerArray[aktiverSpieler].setKleines();
		spielerArray[aktiverSpieler].calc();
		spielerArray[aktiverSpieler].writeToHTML();
		move();
	}
};

var groses = function(){
	if(spielerArray[aktiverSpieler].groses <= 0){
		spielerArray[aktiverSpieler].setGroses();
		spielerArray[aktiverSpieler].calc();
		spielerArray[aktiverSpieler].writeToHTML();
		move();
	}
};
var zug = function(){
	counter = 0;
	allDice = [0, 0, 0, 0, 0];
	for(i=0;i<5;i++){
		   changeText("dice"+(i+1),allDice[i]);
		   }
		   changeText("counter", counter);
	uncheckAll();
};

function uncheckAll()
{
for (i = 0; i < document.dice.wuerfel.length; i++)
	document.dice.wuerfel[i].checked = false ;
}
function spieleranzahl_lesen(){
	anzahlSpieler = document.getElementById('spieleranzahl').value;
	console.log("Anzahl Spieler gesetzt: "+anzahlSpieler);
	for(i=0; i < anzahlSpieler; i++){
		spielerArray[i] = new Spieler(i+1,"testname");
		spielerArray[i].calc();
		spielerArray[i].writeToHTML();
	}
	document.getElementById(aktiverSpieler).style.backgroundColor = "#FF9933";
	
}

