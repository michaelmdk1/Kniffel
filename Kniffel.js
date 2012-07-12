var counter = 0;
var runden = 1;
var allDice = [0, 0, 0, 0, 0];
var anzahlSpieler = 0;
var spielerArray =new Array();
var aktiverSpieler = 0;
var ende = 14; //used in move und ergebnis.html load

$( document ).delegate("#select", "pageinit", function() {
	console.log("init-select");
	changeText("names",spielerArray[aktiverSpieler].Name);
	showNumbers();
	spielerArray[aktiverSpieler].writeToHTML();
});

$( document ).delegate("#diceroll", "pageinit", function(){
	console.log("init-diceroll");
	schreibeName();
    for(i=0;i<5;i++){
        document.getElementById("dice"+(i+1)).value=allDice[i];
    }
    if(counter===0){
        wurf();
    }
	changeText("fehler", "");
});
	
$( document ).delegate("#dienamen", "pageinit", function(){
	console.log("init-namen");
	writeNames();
});

$( document ).delegate("#ergebnis", "pageinit", function(){
	console.log("init-ergebnis");
    writeErgebnis();
    if(runden>=ende && aktiverSpieler === 0){
        alert("Spielende");
    }
});

var writeErgebnis = function() {
    var text = ['<table><tr><th></th>',
                '</tr><tr><td>1er</td>',
                '</tr><tr><td>2er</td>',
                '</tr><tr><td>3er</td>',
                '</tr><tr><td>4er</td>',
                '</tr><tr><td>5er</td>',
                '</tr><tr><td>6er</td>',
                '</tr><tr><td>ZwSumme</td>',
                '</tr><tr><td>drPasch</td>',
                '</tr><tr><td>viPasch</td>',
                '</tr><tr><td>Chance</td>',
                '</tr><tr><td>Full House</td>',
                '</tr><tr><td>Kniffel</td>',
                '</tr><tr><td>Kleine Straße</td>',
                '</tr><tr><td>Große Straße</td>',
                '</tr><tr><td>Summe</td>'];
                
    var text_add = new Array();
    for(i=0;i<16;i++){
        text_add[i] = "";
    }
	for(i=0;i<anzahlSpieler;i++)
	{
        text_add[0]+='<th>'+spielerArray[i].Name+'</th>';
        text_add[1]+='<td>'+spielerArray[i].one+'</td>';
        text_add[2]+='<td>'+spielerArray[i].two+'</td>';
        text_add[3]+='<td>'+spielerArray[i].three+'</td>';
        text_add[4]+='<td>'+spielerArray[i].four+'</td>';
        text_add[5]+='<td>'+spielerArray[i].five+'</td>';
        text_add[6]+='<td>'+spielerArray[i].six+'</td>';
        text_add[7]+='<td>'+spielerArray[i].summe+'</td>';
        text_add[8]+='<td>'+spielerArray[i].dreierp+'</td>';
        text_add[9]+='<td>'+spielerArray[i].viererp+'</td>';
        text_add[10]+='<td>'+spielerArray[i].chance+'</td>';
        text_add[11]+='<td>'+spielerArray[i].fullHouse+'</td>';
        text_add[12]+='<td>'+spielerArray[i].kniffel+'</td>';
        text_add[13]+='<td>'+spielerArray[i].kleines+'</td>';
        text_add[14]+='<td>'+spielerArray[i].groses+'</td>';
        text_add[15]+='<td>'+spielerArray[i].summe_g+'</td>';
	}
    var text_all = "";
    for(i=0;i<16;i++){
        text_all += text[i]+text_add[i];
    } 
	$('#ergebnis_add').append(text_all);
}
	
var writeNames = function() {
	var text = '';
	for(i=1;i<=anzahlSpieler;i++)
	{
		text += "<input type='text' id='player"+i+"' value='' placeholder='Bitte Namen eingeben' />";
	}
	$('#thenames').append(text);
};

var read = function() {
	for(i=0; i<anzahlSpieler;i++){
		spielerArray[i].Name=document.getElementById('player'+(i+1)).value;
	}
	/*for(i=0; i<anzahlSpieler;i++){
			console.log(spielerArray[i].Name);
	}*/
	$.mobile.changePage( "diceroll.html", { transition: "flip"} );
};

var showNumbers = function() {

       //var new_ad = allDice.slice();
		//new_ad.sort();
	allDice.sort();
    for(i=0;i<5;i++){
		changeText("zahl"+(i+1),allDice[i]);
	}     
};

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
		if(this.one!=0) 
			{
				changeText("one",this.one);
			} 
			else 
			{
				changeText("one","");
			}
		if(this.two!=0) changeText("2",this.two);
		if(this.three!=0) changeText("3",this.three);
		if(this.four!=0) changeText("4",this.four);
		if(this.five!=0) changeText("5",this.five);
		if(this.six!=0) changeText("6",this.six);
		if(this.zwsumme!=0) changeText("zwSum",this.zwsumme);
		if(this.zwsumme >=63){
			changeText("bonus",this.bonus);
		}
		if(this.summe!=0) changeText("sum",this.summe);
		if(this.dreierp!=0) changeText("dp",this.dreierp);
		if(this.viererp!=0) changeText("vp",this.viererp);
		if(this.chance!=0) changeText("ch",this.chance);
		if(this.fullHouse!=0) changeText("fh",this.fullHouse);
		if(this.groses!=0) changeText("gr",this.groses);
		if(this.kleines!=0) changeText("kl",this.kleines);
		if(this.kniffel!=0) changeText("kn",this.kniffel);
		if(this.summe_g!=0) changeText("gSum",this.summe_g);
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
		 //zug();
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
		 //zug();    
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
		 //zug();       
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
	 //zug();       
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
	 //zug();       
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
	 //zug();       
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
		  //zug();
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
			  //zug();
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
					//zug();
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
			  //zug();
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
			  //zug();
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
			//zug();
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
		//zug();
		}  
	};
	
}

var wurf = function() {
	if(counter === 0){
		uncheckAll();
	}
    if(counter<3){
		for(i=0;i<5;i++){
			if(document.getElementById("on-off-slider"+(i+1)).value==="on"){
				allDice[i] = Math.floor(Math.random()*6+1);
				}
			document.getElementById("dice"+(i+1)).value=allDice[i];
			//changeText("dice"+(i+1),allDice[i]);
		   }
		   counter +=1;
		   changeText("counter", counter);
		   changeText("runden", runden);
   }
	if(counter>=3){
		$.mobile.changePage( "select.html", { transition: "flip"} );
	}
};
var changeText = function(id, text){
	document.getElementById(id).innerHTML=text;
};

var move = function(){
	aktiverSpieler++;
	if(aktiverSpieler>=anzahlSpieler){
		aktiverSpieler=0;
		runden++;
	}
    changeText("fehler", "");
	counter=0;
    console.log("Anzahl Spieler: "+anzahlSpieler+".  aktiver Spieler: "+aktiverSpieler);
    if(runden >= ende && aktiverSpieler === 0){
        $.mobile.changePage( "ergebnis.html", { transition: "flip"} );
    }else{
        $.mobile.changePage( "diceroll.html", { transition: "flip"} );
    }
};

var schreibeName = function(){
	changeText("name",spielerArray[aktiverSpieler].Name);
}
	
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
};

function uncheckAll()
{
	for (i = 0; i < 5; i++){
		//document.getElementById("on-off-slider"+(i+1)).value="on";
		var myswitch = $("select");
		myswitch[i].selectedIndex = 0;
		myswitch.slider("refresh");	
	}
};
function spieleranzahl_lesen(){
	anzahlSpieler = document.getElementById('numberofplayers').value;
	for(i=0; i < anzahlSpieler; i++){
		spielerArray[i] = new Spieler(i+1,"Spieler "+(i+1));
		spielerArray[i].calc();
		//spielerArray[i].writeToHTML(); //Hat ja noch keine Zahlen drin
	}
	$.mobile.changePage( "names.html", { transition: "flip"} );
};

