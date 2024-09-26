let myLeads  = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
//here we are get the local storage values
//.parse methos we are convert string values into the array
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")
// this function is use when all the text box input values are display 
if(leadsFromLocalStorage){
    myLeads =leadsFromLocalStorage;
    render(myLeads); 
}
//console.log(leadsFromLocalStorage)
//this is the array object is decleared 
// const tabs =[
//     { url : "https://www.linkedin.com/login"}
// ]
//this function is invoked when click to save tabs buttons 
tabBtn.addEventListener("click", function(){
    //console.log(tabs[0].url); //here we are access the array object values with the help of keys
    
    //this is for grab the url from current tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs)
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads) );
        render(myLeads);
    });
    
})

//
function render(leads){
    let listItem = "";
    for(let i =0 ; i < leads.length; i++){
        listItem += "<li>" + leads[i] + "</i> " //here show the html tag is rander with the help of javascrip
    }
    let url = "https://www.google.co.in/    ";
    // it lock like long so how to overcome the this situation usng Template String
            //ulEl.innerHTML = "<a target='_blank' href=' " + url +"'>" + listItem + "</a>";
            ulEl.innerHTML = `<a target='_blank' href=' ${url}'> ${listItem}  </a>`;
}

//this function is used for clear the local storage and and reassing the array 
//this function is invoked when double click to the delete button
deleteBtn.addEventListener("dblclick", function(){
    console.log("like");
    localStorage.clear()
    myLeads= [];
    render(myLeads);
})
//this method is invoked when click to SAVE INPUT
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    //clear out the input field 
    inputEl.value = "";
    localStorage.clear(); 
    localStorage.setItem("myLeads", JSON.stringify(myLeads) );
    render(myLeads);
})
 
//console.log(ulEl)





// const container = document.getElementById("container")
// container.innerHTML = "<button onclick='buy()'> Buy !</button>";
// function buy(){
//     container.innerHTML += "<p> Thanks you for buying !</p>"; //here we are concate the two html tags 
// }

// //Use createElement() and append() instead of innerHTML
// for(let i =0 ; i < myLeads.length; i++){
//     const li = document.createElement("li") 
//     li.textContent = myLeads[i] //line no 12, for block we can also write like that
//     ulEl.append(li)
// }
let cc = () => 3+5;
console.log(cc())