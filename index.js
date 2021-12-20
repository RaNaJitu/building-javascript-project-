
//this is for after the array freecodecamp video 
function count(){
   for(let c = 0; c < 15 ;c += 1){
       console.log(c);
   }
}
//count();
//this is explain te for loop
    // for(let i= 0; i < 100; i += 10){
    //     console.log(i);
    // }
//array with the loop
    // let messages = [
    //     "hey, how's it going",
    //     "I'm great, thanks you !",
    //     "All good",
    //     "same here !"
    // ]
    // console.log(messages); //here it is showing with double comma so we wants
// to display only one by one message without using comma we do accss the valus with the help of index values
    // console.log(messages[0]);
    // console.log(messages[1]);
    // console.log(messages[2]);
// console.log(messages[3]);//if we are doing like that it is not good for any developer so we use the loop

        // for(let j=0; j < messages.length; j +=1){
        //     console.log(messages[j]);
        // }
 //For loop, array and DOM
        // let sentence = ["hello", "my", "name", "is" , "jeet"];
        // let greetingEl = document.getElementById("greeting-el")
        // for(let i = 0; i < sentence.length ; i += 1){
        //     greetingEl.innerHTML += sentence[i] + " ";
        // }
//Generate the random Number
    // let rendomNumber = Math.random();
    // console.log("RendomNumber :" + rendomNumber);

//Flooring the number with Math.random()
            // let floorNumber = Math.floor(3.223);
            // console.log("floorNumber :" + floorNumber);

//wrapping the floor and rendom methods
        // let floorNumber1 = Math.floor(Math.random() * 6);
        // console.log("RendomNumber :" + floorNumber1);

 //logical operator
        // let hasSolvedChallenge =false;
        // let hasHintsleft =false;
        // if(hasSolvedChallenge === false && hasHintsleft === false){
        //     console.log("Showing the solution ..... ");
        // }

 //defination of the object
        // let course = {
        //     title: "Learn CSS Grid fro free",
        //     Lessons:16,
        //     creator : " jee",
        //     Length : 63,
        //     Level : 2,
        //     isFree : true,
        //     tags : ["html" , "css" ]
        // }
        // //access of the object
        // console.log(course.Level)
        // console.log(course.tags)
        // console.log(course["tags"])

 //rock paper scissor
            // let hands = ["rock" , "paper" , "scissor"]
            // function getHands(){
            //     let randomIndex = Math.floor(Math.random() * 3)
            //     return hands[randomIndex]
            // }
            //console.log(getHands());

 //filter the orange and rad apples
            // let fruits = ["red", "orange", "red", "red", "orange"];

            // let p =new  Set([...fruits]);
            // console.log(p)

            // for(let i=0; i< fruits.length; i++){
            //     if(fruits[i] === "red" ){
            //         let redVal = "";
            //         redVal += "red ";
            //         console.log(redVal)
            //     }
            //     else{
            //         let orangeVal = "";
            //         orangeVal += "orange ";
            //         console.log(orangeVal)
            //     }
            // }


 function getDay(){
    days = ["Sunday ", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return Math.floor(Math.round() * 6)
}
let jj = getDay();
//console.log(jj)


//this is  for break statement 
        // let text = "";
        // for(let i = 0; i < 10; i++){
        //     if(i === 3){
        //         break;
        //     }
        //     text += "The Number is : " + console.log(i) + "<br>"
        // }

//localStorage  store in the key values pair
localStorage.setItem("myName", "jitendra")
//this is the get the values whatever set in the localStorage 
let name1 = localStorage.getItem("myName")
//console.log(name1)
//if we wants to delete the perticular items in the localStorage we can use the removeItem() method.
//localStorage.removeItem(name1);
//console.log(name1)
//this is the clear the the localStorage 
//localStorage.clear();

//how to convert string to array in local storage

        // myLead=   `["jeet"]`;
        // myLead = JSON.parse(myLead)//this block is use to convet into the array
        // myLead.push("  kumar")
        // myLead = JSON.stringify(myLead)//this is use for convert array to sting
        // console.log(myLead) //without converting into the array it will throug the type error first we need to convert into array then we push the values

//Truthy and falsy practices
let trueOrFalse  = Boolean("hello")
console.log(trueOrFalse);


// console.log(Boolean(""));   // output: false
// console.log(Boolean("0"));  // output: true
// console.log(Boolean(100));  // output: true
// console.log(Boolean(null)); // output: false
// console.log(Boolean([0]));  // output: true
// console.log(Boolean(-0));   // output: false

//this is used for define Arguments as parameters
        // function add(a, b){
        //     return a+b;
        // }
        // console.log( add(5, 5));
        // console.log( add(53, 53));

//Arrays as params
//this function is shown  return the first index values of the array
        const array =[];
            function getFirst(arr){
                return arr[0]
            }
        console.log(getFirst([12, 22, 33]));

