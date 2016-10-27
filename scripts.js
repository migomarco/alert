// this is a comment
//{}();

$(document).ready(function(){

	console.log("Today you are going to learn how to ask for a father's blessing to marry his daughter!");

	//var myGreeting = "hello world with variables";

	//console.log(myGreeting + " and also strings!");

	//var x = 100;
	//var y = 5;

	//console.log((x * y) + 5);

//x = 5 ---> means x is 5
//x == 5 --> means x is equal to 5
//  || ----> means or
//	!= ----> means not equal
//	&& ----> means and
//	! -----> not

	//if (x > 5) {
	//	console.log("it's more than 5!");
	//} else if (x == 100) {
	//	console.log("it's a 100");
	//} else{
	//	console.log("it's neither 5 nore 100")
	//}

//alret ("Today you are going to learn how to ask for a father's blessing to marry his daughter!")

var answer = prompt(" Pick what you need to write (write a number): 1) how to ask for a father's blessing to marry his daughter!     2) Magic Mushrooms");





//if (answer == "Miguel") {
//	$("body").prepend("Hello Miguel");
//} else {
//	$("body").prepend("Hello " + answer);
//}

//$("body").append(answer + "is my name");

//$("body").html(answer);

//Prepend - Beginning of the tag
//Append - End of the tag





if (answer == "1") {

var sillyname1 = prompt("1/16 enter a SILLY NAME");
var sillyword1 = prompt("2/16 enter a SILLY WORD");
var verb1 = prompt("3/16 enter a VERB");
var noun1 = prompt("4/16 enter a NOUN");
var bodypart = prompt("5/16 enter a BODY PART (PLURAL)");
var femalename = prompt("6/16 enter a FEMALE NAME");
var verbed = prompt("7/16 enter a VERB ENDING IN ED");
var noun2 = prompt("8/16 enter a NOUN");
var nounplural = prompt("9/16 enter a NOUN (PLURAL)");
var verb2 = prompt("10/16 enter a VERB");
var noun3 = prompt("11/16 enter a NOUN");
var occupation = prompt("12/16 enter a OCCUPATION");
var number = prompt("13/16 enter a NUMBER");
var verb3 = prompt("14/16 enter a VERB");
var sillyword2 = prompt("15/16 enter a SILLY WORD");
var sillyname3 = prompt("16/16 enter a SILLY NAME");

	$("body").prepend("Dear Mr. and Mrs. " + sillyname1 + " " + sillyword1 + ","
		+ " Will you let me " + verb1 + " your " + noun1 + "? Ever since I have laid " + bodypart + " on " + femalename + ", I have " + verbed + " madly in love with her. I wish that she will be the " + noun2 + " of my " + nounplural + " and that someday we will " + verb2 + " happily ever after. I have a " + noun3 + " as a/an " + occupation + " that pays $" + number + " each month. I promise to " + verb3 + " " + femalename + " with kindness and respect. "
	 	+ "Sincerely, " + sillyword2 + " " + sillyname3);
} 


if (answer == "2"){
var numberf = prompt("1/22 enter a NUMBER");
var firstname = prompt("2/22 enter a FIRST NAME");
var animalf = prompt("3/22 enter an ANIMAL");
var location1 = prompt("4/22 enter a LOCATION");
var nounf1 = prompt("5/22 enter a NOUN");
var colour1 = prompt("6/22 enter a COLOUR");
var animalp = prompt("7/22 enter a ANIMAL (PLURAL)");
var colour2 = prompt("8/22 enter a COLOUR");
var adjectivef2 = prompt("9/22 enter an ADJECTIVE");
var nounf2 = prompt("10/22 enter a NOUN");
var celebname1 = prompt("11/22 enter a CELEBRITY NAME");
var nounpluralf1 = prompt("12/22 enter a NOUN (PLURAL)");
var adverbf1 = prompt("13/22 enter an ADVERB");
var adjectivef = prompt("14/22 enter an ADJECTIVE");
var nounf3 = prompt("15/22 enter a NOUN");
var exclamationf1 = prompt("16/22 enter an EXCLAMATION");
var verbpresentendsining1 = prompt("17/22 enter a VERB PRESENT ENDING IN ING");
var celebname2 = prompt("18/22 enter a CELEBRITY NAME");
var verbpresentendsining2 = prompt("19/22 enter a VERB PRESENT ENDING IN ING");
var nounf4 = prompt("20/22 enter a NOUN");
var exclamationf2 = prompt("21/22 enter an EXCLAMATION");
var adjectivef1 = prompt("22/22 enter an ADJECTIVE");

	$("body").prepend("I'll never forget the time I ate " + numberf + " Magic mushrooms! My friend " + firstname + " Turned into a " + animalf + ". And we flew Over " + location1 +" on a " + adjectivef1 + " " + nounf1 + "! I was Seeing " + colour1 +" and green " + animalp + " everywhere We decided to go skiing on a " + colour2 + " mountain Called the " + adjectivef2 + " " + nounf2 + " where we later Joined a " + celebname1 + " fan club but everyone Turned into " + nounpluralf1 +". We were Surrounded but escaped " + adverbf1 +" with the help Of a " + adjectivef +" " + nounf3 + ". I know crazy. " + "'" + exclamationf1 + "'" + " He shouted. After hours of " + verbpresentendsining1 + ", Everything was back to normal but then I saw " + celebname2 + " " + verbpresentendsining2 + " to a " + nounf4 + " orchestra " + "'" + exclamationf2 + "'" + " I cried out");
} 

if (answer != "1" || "2"){
	$("body").prepend("PLEASE REFRESH AND TYPE NUMBER 1 OR 2");
}


















});