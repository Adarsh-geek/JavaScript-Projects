let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteEl = document.getElementById("delete-btn");
const tabEl = document.getElementById("tab-btn");

const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

tabEl.addEventListener("click", function() {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })
});

if(leadFromLocalStorage) {
    myLeads = leadFromLocalStorage;
    render(myLeads);
}

deleteEl.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

//Use of event listeners to let the Js do the work when a HTML element is clicked rather than telling HTML to do the work
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    inputEl.value ="";
});

/*  Name: render()
    Param: an array of leads
    Description: This function render all the avialable leads on the HTML page if SAVE INPUT button is clicked.
*/
function render(leads) {
    console.log("Rendring all Leads avaialble");
    let listItems = "";
    for(let i=0; i<leads.length; i++) {
            // listItems += "<li><a target='_blank' href='https://" + myLeads[i] + "'>"+ myLeads[i] + "</a></li>";
            listItems += `
                        <li>
                            <a target="_blank" href="https://${leads[i]}">${leads[i]}</a>
                        </li>
                        `;
    }

    ulEl.innerHTML = listItems;
}