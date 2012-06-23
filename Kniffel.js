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
     var einser = 0;
     for(i=0;i<5;i++){
		if(allDice[i]===1){
			einser += 1;
		}
	 changeText("p1_one", einser);
};

var two = function() {
       
};
var three = function() {
       
};
var four = function() {
       
};
var five = function() {
       
};
var six = function() {
       
};
var dreierp = function() {
       
};
var viererp = function() {
       
};
var fullHouse = function() {
       
};
var kniffel = function() {
       
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
