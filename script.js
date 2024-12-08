


//////////////////////////////////  CHAPTER NO. 09 TO 11  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


console.log("HELLO"); // HELLO !!!
console.log("");


// QUESTION NUMBER 01 : KARACHI  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
var city = prompt("WHERE ARE YOU FROM ? ");

if(city === "karachi"){
    console.log("WELCOME TO THE CITY OF LIGHTS !", city.toLowerCase().toUpperCase()) // OUTPUT: CITY OF LIGHTS !!! KARACHI !!!
}else{
      console.log("ENTER VALID CITY") // ENTER VALID CITY  
}


console.log("");
// QUESTION NUMBER 02 : ON GENDER ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

var gender = prompt("PLEASE ENTER YOUR GENDER   ( male or female )").toLowerCase().toUpperCase();

if(gender === "male".toLowerCase().toUpperCase()){ //OUTPUT: MALE
    console.log("WELCOME, GOOD MORNING SIR !!"); 
}else if(gender === "female".toLowerCase().toUpperCase()){    //OUTPUT: FEMALE
    console.log("WELCOME, GOOD MORNING MADAM !!");
}else{
    console.log("PLEASE ENTER VALID GENDER")// OUTPUT: PLEASE ENTER VALID GENDER 
}


console.log("");
// QUESTION NUMBER 03 : TRAFFIC SIGNAL ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
console.log("TRAFFIC SIGNAL:");
var light_color = prompt("PLEASE ENTER THE COLOR OF TRAFFIC LIGHT ( RED , YELLOW , GREEN");
var light_color = light_color.toLowerCase().toUpperCase();
if(light_color === "RED".toLowerCase().toUpperCase()){   // OUTPUT: STOP PLEASE
    console.log("PLEASE STOP YOUR VEHICLE");
}else if(light_color === "YELLOW".toLowerCase().toUpperCase()){  // OUTPUT: READY TO GO 
    console.log("PLEASE GET READY TO MOVE")
}else if(light_color === "GREEN".toLowerCase().toUpperCase()){  // OUTPUT: GO PLEASE 
    console.log("PLEASE MOVE AHEAD")
}else{
    console.log("PLEASE ENTER VALID COLOR") // OUPUT: PLEASE ENTER VALID COLOR
}


console.log("");
// QUESTION NUMBER 04 : CAR PETROL  INDICATION ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
console.log("CHECK YOUR CAR FUEL ! ")
alert("CHECK YOUR CAR FUEL")
var petrol = prompt("HOW MUCH FUEL IS REMAINING IN YOUR CAR ? (IN LITERS)");
var petrol = petrol.toLowerCase().toUpperCase();


if(petrol <= 2 ){ // OUTPUT: PLEASE FILL FUEL
    console.log("PLEASE FILL THE FUEL IN CAR ");
}else if(petrol >= 2.5){  // OUTPUT: FUEL IS ENOUGH
    console.log("YOUR CAR HAS MUCH FUEL YOU CAN DRIVE ,", "YOUR CAR FUEL IS REMAINING " + petrol + " LITERS !!");
}
// QUESTION NUMBER 4 DONE!!!!!!!!!


console.log("");
// QUESTION NUMBER 5 : CHECKING MARKS WITH GRADE!!!! , PERCENTAGE!!!!!! AND REMARKS !!!!!!!!!!!;;;;;;;;;;;;;;;;;
console.log("YOUR MARKSHEET OF THIS SEMESTER:");
var marks = Number(prompt("PLEASE ENTER YOUR TOTAL MARKS OF SEMESTER" + "( OUT OF 500)"));
var total_marks = 500;
var percentage = (marks) / (total_marks) * 100;
console.log(
    "TOTAL MARKS:" + total_marks + "\n" , 
    "Your Obtained Marks : " + (marks) + "/" + total_marks + "\n" +
    "Your percentage is : " + ((marks) * 100 / total_marks).toFixed(2) + "%");

    if(percentage >= 90-99){
        console.log("GRADE : A+" , "REMARKS : EXELLENT")
    } else if(percentage >=  80-89){
        console.log("GRADE : A" , "REMARKS : GOOD")
        
    } else if(percentage >= 70-79){
        console.log("GRADE : B ", "REMARKS : GOOD ")
    }


console.log("");
// QUESTION NUMBER 06 : NUMBER GUESSING GAME ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
console.log("ITS A NUMBER GUESSING GAME:");

var secret_num = 7;
var guess = Number(prompt("PLEASE GUESS THE SECRET NUMBER ! , (1 TO 10 ) "));

if(guess === secret_num){ // CORRECT GUESS
    console.log("BINGO !!! , CORRECT ANSWER !!!") 
}else if(guess != secret_num){
    console.log("SOO CLOSE, CLOSE ENOUGH TO THE CORRECT NUMBER !, TRY AGAIN"); // WRONG GUESS !!!
    alert("TRY AGAIN!.  YOU LOSS THE NUMBER GUESSING GAME !!!")
} 


console.log("");
// QUESTION NUMBER 07 : PROMPT THE USER TO ENTER NUMBER ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
var  number = Number(prompt("Enter a number to check if it is divisible by 3:"), 10);

// Check if the number is divisible by 3
if (number % 3 === 0) {
    console.log(`${number} is divisible by 3.`); 
} else {
    console.log(`${number} is not divisible by 3.`);
}


console.log("");
// QUESTION NUMBER 08 : CHECK THE NUMBER THAT IS EVEN OR ODD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
console.log(" CHECK THAT THE NUMBER IS EVEN OR ODD  :");
var num = Number(prompt("ENTER NUMBER TO CHECK IF IT IS EVEN OR ODD"));
if (num % 2 === 0){
    console.log( num , " is Even Number")
}else{
    console.log(num , "is Odd Number")
}


                             console.log("");
// QUESTION NUMBER 09 : CHECK WEATHER IS IT HOT OR COLD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
console.log("CHECK WEATHER IS IT HOT OR COLD : ");
var temp = Number(prompt("ENTER THE TEMPERATURE IN DEGREE"));

if(temp > 40){
    console.log("ITS TOO HOT OUTSIDE ");
}else if(temp > 30){
    console.log("THE WEATHER TODAY IS NORMAL ");
}else if(temp > 20){
    console.log("ITS COLD OUTSIDE");
}else{
    console.log("ITS TOO COLD OUTSIDE")
}


console.log("");
// QUESTION NUMBER 10 : SIMPLE CALCULATOR USING """"""""""""""""""""""""IF"""""""""""""""""""""""""""""
console.log("THIS IS SIMPLE CALCULATOR :");
var num1 = Number(prompt("ENTER FIRST NUMBER"));
var opr = prompt("ENTER OPERATOR ( "+" "-" "*" "/" ");
var num2 = Number(prompt("ENTER SECOND NUMBER "));

if (opr === "+"){
    console.log("THE ANSWER IS : " , num1 + num2)
}else if(opr === "-"){
    console.log("THE ANSWER IS :", num1-num2)
}else if(opr === "*"){
    console.log("THE ANSWER IS :", num1*num2)
}else if(opr === "/"){
    console.log("THE ANSWER IS :", num1/num2)
}else{
    console.log("ENTER CORRECT OPERATOR !!! , THE GIVEN OPERATOR IS NOT CORRECT !")
}


console.log("");


////////////////////////////// CHAPTER 09 TO 11 COMPLETED !!!  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\