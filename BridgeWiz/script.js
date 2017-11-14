//global variables
var varloop = 0;
var myArray = [[]];
myArray[0] = new Array(10); 
var recommendationSelection;
var deleteNumber = 0;
var deleteNumberTwo = 0;
var leftLoop = 0;
var tableCleanupButton = 0;
var  editIDAsString;
//Goes forward a tab, disables the selected tab
function nextTab(){
var tabIndex = getSelectedTabIndex();
var tabIndexOne = tabIndex + 1;
var whenSpan = document.getElementById("whenSpan");
var tableColored = document.getElementById("coloredTable");
var tableWhen = document.getElementById("whenTable");
var numRowsColored = tableColored.rows.length;
var numRowsWhen = tableWhen.rows.length;
var benefitsSpan = document.getElementById("benefitsSpan");
var risksSpan = document.getElementById("risksSpan");
var ceqSpan = document.getElementById("ceqSpan");
var ceqSpanTwo = document.getElementById("ceqSpanTwo");
var notesButtons = document.getElementById("notesButtons");
var decidabilityTextarea = document.getElementById("decidabilityTextarea0");
var benefitsSpanTwo = document.getElementById("benefitsSpanTwo");
var risksSpanTwo = document.getElementById("risksSpanTwo");
var verbText = tableColored.rows[1].cells[1].innerHTML;
var whatText = tableColored.rows[1].cells[1].innerHTML;
var nextButton = document.getElementById("nextButton");   
var whoSpan = document.getElementById("whoSpan");
var whoTextarea = document.getElementById("whoTextarea");
var benefitsTextarea = document.getElementById("benefitsTextarea");
var risksTextarea = document.getElementById("risksTextarea");
var deonticSpan = document.getElementById("deonticSpan");
var deonticDiv = document.getElementById("deonticDiv");
var deonticSpanTwo = document.getElementById("deonticSpanTwo");
var deonticSpanThree = document.getElementById("deonticSpanThree");
var whoDeonticSpan = document.getElementById("whoDeonticSpan");

switch(tabIndex){
    case 0:
        notesButtons.style.visibility = "visible";
        $( "#tabs" ).tabs('enable', tabIndexOne);
        $( "#tabs" ).tabs({ active: tabIndexOne});
        $( "#tabs" ).tabs('disable', tabIndex);
        break;
    case 1:
        $( "#tabs" ).tabs('enable', tabIndexOne);
        $( "#tabs" ).tabs({ active: tabIndexOne});
        $( "#tabs" ).tabs('disable', tabIndex);
        backButton.disabled = false;
        tableCleanup();
        break;
    case 2:
        for(i = 1; i < numRowsColored; i++){
            var someText = tableColored.rows[i].cells[1].innerHTML;
            var otherText = tableColored.rows[i].cells[0].innerHTML; 
            var moreText = tableColored.rows[i].cells[2].innerHTML;

            whenSpan.insertAdjacentHTML("beforeend",otherText + " ");
            whenSpan.insertAdjacentHTML("beforeend",someText + " ");
            whenSpan.insertAdjacentHTML("beforeend", moreText + " ");

        }

	if(verbText.slice(-1) === "e"){
        if(verbText.includes("do not")){          
            benefitsSpan.innerHTML = verbText.slice(0, -1).split("do ").pop() + "ing"+" "+tableColored.rows[1].cells[2].innerHTML;
            risksSpan.innerHTML = verbText.slice(0,-1).split("do ").pop() + "ing"+" "+tableColored.rows[1].cells[2].innerHTML;
            ceqSpan.innerHTML = verbText.slice(0, -1).split("do ").pop() + "ing"+" "+tableColored.rows[1].cells[2].innerHTML;
            
    }   else{
            benefitsSpan.innerHTML = verbText.slice(0, -1) + "ing"+" "+tableColored.rows[1].cells[2].innerHTML;
            risksSpan.innerHTML = verbText.slice(0,-1) + "ing"+" "+tableColored.rows[1].cells[2].innerHTML;
            ceqSpan.innerHTML = verbText.slice(0, -1) + "ing"+" "+tableColored.rows[1].cells[2].innerHTML;
        }
    }else{
        if(verbText.includes("do not")){
            benefitsSpan.innerHTML = verbText.split("do ").pop() + "ing"+" "+tableColored.rows[1].cells[2].innerHTML;
            risksSpan.innerHTML = verbText.split("do ").pop() + "ing"+" "+tableColored.rows[1].cells[2].innerHTML;
            ceqSpan.innerHTML = verbText.split("do ").pop() + "ing"+" "+tableColored.rows[1].cells[2].innerHTML;
        }else{
            benefitsSpan.innerHTML = verbText + "ing"+" "+tableColored.rows[1].cells[2].innerHTML;
            risksSpan.innerHTML = verbText + "ing"+" "+tableColored.rows[1].cells[2].innerHTML;
            ceqSpan.innerHTML = verbText + "ing"+" "+tableColored.rows[1].cells[2].innerHTML;
        }
    }
      //  ceqSpan.innerHTML = verbText+" "+tableColored.rows[1].cells[2].innerHTML;

        var myVerb = tableColored.rows[varloop+1].cells[1].innerHTML;
        var myWhat = tableColored.rows[varloop+1].cells[2].innerHTML;
        whoSpan.innerHTML = "";
        if(myVerb.includes("do not")){
            whoSpan.insertAdjacentHTML("beforeend", myVerb.split("do ").pop() + " ");
            whoSpan.insertAdjacentHTML("beforeend", myWhat + " ");
        }else{
            whoSpan.insertAdjacentHTML("beforeend", myVerb + " ");
            whoSpan.insertAdjacentHTML("beforeend", myWhat + " ");
        }
        if(varloop === 0){
            
        }
        $( "#tabs" ).tabs('enable', tabIndexOne);
        $( "#tabs" ).tabs({ active: tabIndexOne});
        $( "#tabs" ).tabs('disable', tabIndex);
        break;
    case 3:
        $( "#tabs" ).tabs('enable', tabIndexOne);
        $( "#tabs" ).tabs({ active: tabIndexOne});
        $( "#tabs" ).tabs('disable', tabIndex);
        tableCleanupTwo();
        break;
    case 4:
         for(i = 1; i < numRowsWhen; i++){
            var someText = tableWhen.rows[i].cells[1].childNodes[0].value;
            var otherText = tableWhen.rows[i].cells[0].innerHTML;   
            benefitsSpanTwo.insertAdjacentHTML("beforeend",otherText + " ");
            benefitsSpanTwo.insertAdjacentHTML("beforeend",someText + " ");
            risksSpanTwo.insertAdjacentHTML("beforeend", otherText + " ");
            risksSpanTwo.insertAdjacentHTML("beforeend", someText + " ");
            ceqSpanTwo.insertAdjacentHTML("beforeend", otherText + " ");
            ceqSpanTwo.insertAdjacentHTML("beforeend", someText + " ");
        }
            if(leftLoop > 0 && varloop > 0){
                tabsRewrite();
            }
        $( "#tabs" ).tabs('enable', tabIndexOne);
        $( "#tabs" ).tabs({ active: tabIndexOne});
        $( "#tabs" ).tabs('disable', tabIndex);
        break;
    case 5:
        $( "#tabs" ).tabs('enable', tabIndexOne);
        $( "#tabs" ).tabs({ active: tabIndexOne});
        $( "#tabs" ).tabs('disable', tabIndex);
        break;
    case 6:
        $( "#tabs" ).tabs('enable', tabIndexOne);
        $( "#tabs" ).tabs({ active: tabIndexOne});
        $( "#tabs" ).tabs('disable', tabIndex);
        break;
    case 7:
        deonticSuggestion();
        $( "#tabs" ).tabs('enable', tabIndexOne);
        $( "#tabs" ).tabs({ active: tabIndexOne});
        $( "#tabs" ).tabs('disable', tabIndex);
        break;
    case 8:
        $( "#tabs" ).tabs('enable', tabIndexOne);
        $( "#tabs" ).tabs({ active: tabIndexOne});
        $( "#tabs" ).tabs('disable', tabIndex);
        break;
    case 9:
        $( "#tabs" ).tabs('enable', tabIndexOne);
        $( "#tabs" ).tabs({ active: tabIndexOne});
        $( "#tabs" ).tabs('disable', tabIndex);
        var lcDeonticText = deonticSpanTwo.innerHTML.toLowerCase();
        if(lcDeonticText.innerHTML.includes("not")){
            alerT(lcDeonticText.split(" not").pop());
            whoDeonticSpan.innerHTML = lcDeonticText.split("not").pop();
        }else{
            alert(lcDeonticText);
            whoDeonticSpan.innerHTML = lcDeonticText;
        }
        break;
    case 10:
        if(tableColored.rows[varloop + 1].cells[1].innerHTML.includes("do not")){
            myArray[varloop][0] = tableColored.rows[varloop + 1].cells[1].innerHTML.split("do ").pop();
        }else{
        myArray[varloop][0] = tableColored.rows[varloop + 1].cells[1].innerHTML;
        }
        myArray[varloop][1] = tableColored.rows[varloop + 1].cells[2].innerHTML;;
        myArray[varloop][2] = risksSpanTwo.innerHTML.trim();
        myArray[varloop][3] = whoTextarea.value;
        myArray[varloop][4] = benefitsTextarea.value;
        myArray[varloop][5] = risksTextarea.value;
        myArray[varloop][6] = deonticSpan.innerHTML;
       if(deonticDiv.innerHTML === "Strong Recommendation" || deonticDiv.innerHTML === "Weak" || deonticDiv.innerHTML === "No Recommendation"){
           myArray[varloop][7] = deonticDiv.innerHTML;
       }else{
            myArray[varloop][7] = recommendationSelection;
       }
        myArray[varloop][8] = deonticSpanTwo.innerHTML;
        myArray[varloop][9] = deonticSpanThree.innerHTML;
        varloop++;
        if(varloop > numRowsColored-2){
            profileCreatorOne();
            profileCreaterTwo();
            profileCreatorThree();
            profileCreatorFour();
            $( "#tabs" ).tabs('enable', tabIndexOne);
            $( "#tabs" ).tabs({ active: tabIndexOne});
            $( "#tabs" ).tabs('disable', tabIndex);
        }else{
            tabsLoop();
        }
        break;
    case 11:
        if(radioButtonCheck() === true){
        $( "#tabs" ).tabs('enable', tabIndexOne);
        $( "#tabs" ).tabs({ active: tabIndexOne});
        $( "#tabs" ).tabs('disable', tabIndex);
               }
        else{
            $("#selectDialog").dialog("open"); 
            $("#disabledDiv").addClass("disabledButton");

        }
        break;
    case 12:
        $("#judgementsSpan").text(" " + $("#judgementsTextarea").val()); 
        $("#vaguenessSpan").text(" " + $("#intentionalVaguenessTextarea").val());
        $("#preferencesSpan").text(" " + $("#preferencesTextarea").val());
        $("#exclusionsSpan").text(" " + $("#exclusionsTextarea").val());
        $("#policyLevelSpan").text(" " + $("#policyLevelTextarea").val());
        $("#dooSpan").text(" " + $("#dooTextarea").val());
        keyActionStatementProfileCreator();
        createPDF();
        break;
}
}

//Goes back a tab, disables the selected tab
function backTab(){  
    var tabIndex = getSelectedTabIndex();
    var tabIndexOne = tabIndex - 1;
    var notesButtons = document.getElementById("notesButtons");
    var benefitsSpanTwo = document.getElementById("benefitsSpanTwo");
    var risksSpanTwo = document.getElementById("risksSpanTwo");
    var nextButton = document.getElementById("nextButton");
    var ceqSpanTwo = document.getElementById("ceqSpanTwo");

    if(tabIndex === 1){
        notesButtons.style.visibility = "hidden";
    }    
    if(tabIndex === 2){
        disableBack();
    }
    if(tabIndex === 3){
        whenSpan.innerHTML = "";
    }
    if(tabIndex===5){
        benefitsSpanTwo.innerHTML= "";
        risksSpanTwo.innerHTML = "";
        ceqSpanTwo.innerHTML = "";
        if(varloop > 0){
            leftLoop++;
        }
    }
    if(tabIndex === 11){
        nextButton.disabled = false;
        varloop--;
    }
    $( "#tabs" ).tabs('enable', tabIndexOne);
    $( "#tabs" ).tabs({ active: tabIndexOne});
     $( "#tabs" ).tabs('disable', tabIndex);
}
//Resets the form
function resetForm(){
    var userConfirm = confirm("Are you sure you want to start over?");
    if(userConfirm === true){
        window.location.reload(true);
    }
    else{}
}
//Returns the index of the selected tab
function getSelectedTabIndex(){
   return $("#tabs").tabs('option', 'active');
}

//Reveals the verb dropdown box
      function reveal() {
    var verbSelect = document.getElementById('mySelectVerb');
    if (verbSelect.style.visibility === 'hidden') {
        verbSelect.style.visibility = 'visible';
    } 
}

//Adds the text next to the verb select
function selectChange(){
     var verbName = document.getElementById("mySelectActivity").value;  
//    
//    var verbQuery = "based on the " + verbName + " action type, select a verb:";
//         mySelectVerb.insertAdjacentHTML('afterbegin', verbQuery);
        var mySpan = document.getElementById("mySpan");
        mySpan.innerHTML = "Based on the " + verbName + " action type, select a verb:";
}

//Takes input from the user to add a verb to the list
 function verbInput(){
//     var verb = prompt("What verb would you like to add to the list?");
     var verb = document.getElementById("verbWindow").value;
         if(verb != ""){
            var selectVerb = document.getElementById("selectVerb");
            var option = document.createElement("option");
            option.text = verb;
            selectVerb.add(option);
            option.selected = true;
            verb = capitalizeFirstLetter("" + verb);
            var mySpan = document.getElementById("textAreaSpan");
            mySpan.innerHTML = verb + " what?";      
            textareaReveal();w
            tableVerbInput();
          }
         }
//Updates the fields when the "NOT Checkbox" is clicked
function notIt(){
    var mySelectActivity = document.getElementById("mySelectActivity");
    var mySelectVerb = document.getElementById("mySelectVerb");
    var myTextarea = document.getElementById("textarea");
    var myDiv = document.getElementById("myTextarea");
    var table = document.getElementById("coloredTable");
    var tableTwo = document.getElementById("executableTable");
    var rowCount = table.rows.length;
    var myNode = document.createElement("TEXTAREA");
    var cellId = table.rows[rowCount-1].cells[2].id;
    var idAsString = parseInt(cellId.match(/\d+/));
    var idAsNumber = idAsString + 1;
    var ma = "myArea" + idAsNumber;
    var notCheckbox = document.getElementById("notCheckbox");
    var selectVerb = document.getElementById("selectVerb");
    var textAreaSpan = document.getElementById("textAreaSpan");
    if(notCheckbox.checked === true){
//        table.rows[rowCount-1].cells[1].setAttribute("checked", "true");
        table.rows[rowCount-1].cells[1].innerHTML = "do not " + selectVerb.value;
        tableTwo.rows[rowCount-2].cells[0].innerHTML = "do not " + selectVerb.value;
        textAreaSpan.innerHTML = capitalizeFirstLetter(table.rows[rowCount-1].cells[1].innerHTML) + " what?";
    }else{
        table.rows[rowCount-1].cells[1].innerHTML = table.rows[rowCount-1].cells[1].innerHTML.substring('do not '.length);
        tableTwo.rows[rowCount-2].cells[0].innerHTML = table.rows[rowCount-1].cells[1].innerHTML;
        textAreaSpan.innerHTML = capitalizeFirstLetter(table.rows[rowCount-1].cells[1].innerHTML) + " what?";
    }
}
 //Creates the list of verbs from the activity
function createVerbList(){
    var inquire = ["","ask", "assess", "complete", "conduct", "gather", "include", "incorporate", "inquire", "obtain", "review", "screen", "verify"];
    var examine = ["","assess", "auscultate", "examine", "include", "inspect", "palpate", "percuss", "perform", "use"];
    var test = ["","assess", "begin", "carry out", "check", "conduct", "continue", "determine", "do", "evaluate", "have", "identify", "indicate", "measure", "need", "obtain", "offer", "perform", "prefer", "recieve", "recommend", "repeat", "require", "reserve", "restore", "screen", "take",  "test", "trigger", "undergo", "use", "utilize"];
    var monitor = ["","arrange", "ascertain", "assess", "check", "conduct", "continue", "determine","evaluate","examine","follow up", "have", "include", "institute", "maintain", "manage", "monitor", "obtain","occur", "offer", "perform", "provide", "reassess", "recieve", "recommend", "repeat", "require", "review","screen","warrant"];
    var conclude = ["","assess","base","conclude","consider","contact","coordinate","determine","diagnose","distinguish","exclude","give (attention)","recognize", "recommend", "respect","review","suspect", "take (into account)", "use", "weigh"];
    var advocate = ["","advocate", "encourage", "endorse", "ensure", "focus", "recommend", "work (to)"];
    var dispose = ["","admit", "dispose", "hospitalize", "guide", "observe", "refer"];
    var documento = ["","complete", "document", "identify", "notate"];
    var educatecounsel = ["","adhere", "advise", "benefit", "clarify", "counsel", "deliver", "discuss","educate","enable", "encourage", "explain", "have","help", "identify", "include", "incorporate", "inform", "instruct", "involve", "modify", "negotiate", "offer", "promote", "protect", "provide","recieve", "recommend", "reinfornce", "review", "start", "support", "teach", "tell", "use"];
    var perform = ["","confine", "ensure", "follow", "give", "implement", "include", "incorporate", "indicate", "inspect", "offer", "operate", "perform", "place", "recieve", "recommend","relate", "respect", "reserve", "select", "start", "treat", "undergo", "use"];
    var prepare = ["","address", "adhere", "adjust","adopt" , "analyze", "attempt", "be (aware)", "become", "begin", "collect", "continue", "dedicate", "define", "develop", "encourage", "engage", "ensure", "establish", "form", "have", "identify", "include", "incorporate","initiate","institute", "know","lead","perform","plan", "prepare","recommend", "review", "share", "train", "understand", "undertake", "use"];
    var prescribe = ["","add", "adjust", "administer", "advance", "apply", "attempt", "avoid", "change", "choose", "continue", "desensitize", "dilute", "discontinue", "exercise", "improve", "increase", "indicate", "individualize", "influence", "initiate", "institute", "manage", "offer"," order", "prefer", "prescribe", "provide", "recieve", "recommend", "reduce", "repeat", "replace", "reserve", "restart", "review", "start", "suggest", "supplement", "taper", "titrate", "treat", "use", "utilize", "warrant"];
    var prevent = ["","administer", "avoid", "cleanse", "combine", "continue", "discard", "encourage", "give", "immunize", "minimize", "practice", "prevent","provide", "recieve", "recommend", "use"];
    var referconsult = ["","assess", "conduct", "consult", "manage", "obtain","offer", "recommend", "refer", "seek", "work (together)"];   
    var sel = document.getElementById("selectVerb");
    var selVal = document.getElementById("mySelectActivity").value;
    var useIt; 
    switch(selVal){
        case "INQUIRE": 
            useIt = inquire;
            break
        case "EXAMINE":
            useIt = examine;
            break
        case "TEST":
            useIt = test;
            break
        case "MONITOR":
            useIt = monitor;
            break
        case "CONCLUDE":
            useIt = conclude;
            break
        case "ADVOCATE":
            useIt = advocate;
            break
        case "DISPOSE":
            useIt = dispose;
            break
        case "DOCUMENT":
            useIt = documento;
            break
         case "EDUCATE/COUNSEL":
            useIt = educatecounsel;
            break
          case "PERFORM":
            useIt = perform;
            break
         case "PREPARE":
            useIt = prepare;
            break
        case "PRESCRIBE":
            useIt = prescribe;
            break
         case "PREVENT":
            useIt = prevent;
            break
        case "REFER/CONSULT":
            useIt = referconsult;
            break            
    }   
    sel.options.length = 0;    
    for (var i = 0; i < useIt.length; i++){
        var opt = document.createElement("option");
        opt.innerHTML = useIt[i];
        opt.value = useIt[i];
        sel.appendChild(opt);
    }
}
//Reveals the Tab 2 text area
function textareaReveal(){
    var myTextarea = document.getElementById("myTextarea");
    var coloredTable = document.getElementById("coloredTableDiv");
//    var container = document.getElementById("container");
//    var verb = document.getElementById("selectVerb").value;
    var verbDiv = document.getElementById("middle");
    if(myTextarea.style.visibility === "hidden" ){
        myTextarea.style.visibility = "visible";
        coloredTable.style.visibility = "visible";

    }
}
//adds the text before Tab 2 text area
function textAreaText(){
    var theVerb = document.getElementById("selectVerb").value;
    theVerb = capitalizeFirstLetter(theVerb);
    var mySpan = document.getElementById("textAreaSpan");
    var noCheckbox = document.getElementById("notCheckbox");
    mySpan.innerHTML = theVerb + " what?";
    
}
//Capitilizes the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
//Inputs into the "Verb" columns of the tables
function tableVerbInput(){
    var verb = document.getElementById("selectVerb").value;
    var table = document.getElementById("coloredTable");
    var tableTwo = document.getElementById("executableTable");
    var row = table.rows.length;
    var rowTwo = tableTwo.rows.length;
    var notCheckbox = document.getElementById("notCheckbox");
    if(notCheckbox.checked === true){
        table.rows[row-1].cells[1].innerHTML = "do not " + verb;
        tableTwo.rows[rowTwo-1].cells[0].innerHTML = "do not " + verb;
        
    }else{
    table.rows[row-1].cells[1].innerHTML = verb;    
    tableTwo.rows[rowTwo-1].cells[0].innerHTML = verb;
    }
}
//Inputs into the "What" columns of the tables
function tableWhatInput(){
    var textArea = document.getElementById("textarea");
    var table = document.getElementById("coloredTable");
    var tableTwo = document.getElementById("executableTable");
    var rowCount = table.rows.length;
    var rowCountTwo = tableTwo.rows.length;
    var rctl = rowCountTwo-1;  
    table.rows[rowCount-1].cells[2].innerHTML = textArea.value;
}
//Adds an "And row" to the table
function andButtonFunction(obj){
    var mySelectActivity = document.getElementById("mySelectActivity");
    var mySelectVerb = document.getElementById("mySelectVerb");
    var myTextarea = document.getElementById("textarea");
    var myDiv = document.getElementById("myTextarea");
    var table = document.getElementById("coloredTable");
    var tableTwo = document.getElementById("executableTable");
    var rowCount = table.rows.length;
    var rowCountTwo = tableTwo.rows.length;
    var row = table.insertRow(rowCount);
    var rowTwo = tableTwo.insertRow(rowCountTwo);
    var myNode = document.createElement("TEXTAREA");
    var buttonsCell = obj.parentNode;
    var index = obj.parentNode.parentNode.rowIndex;
    var cellId = table.rows[rowCount-1].cells[2].id;
    var idAsString = parseInt(cellId.match(/\d+/));
    var idAsNumber = idAsString + 1;
    var ma = "myArea" + idAsNumber;
    var notCheckbox = document.getElementById("notCheckbox");
    notCheckbox.checked = false;
    mySelectActivity.value = "null";
    mySelectVerb.style.visibility = "hidden";
    myTextarea.value = "";
    myDiv.style.visibility = "hidden";
    if(index === 1 && deleteNumber === 0){
        buttonsCell.childNodes[1].disabled = true;
        buttonsCell.childNodes[3].disabled = true;
    }
    else{
        buttonsCell.childNodes[0].disabled = true;
        buttonsCell.childNodes[1].disabled = true; 
    }
    row.insertCell(0).innerHTML = "AND";
    row.insertCell(1);
    var cell0 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    cell0.setAttribute("id", "td" + idAsNumber);
    var andButton = document.createElement("BUTTON");
    var orButton = document.createElement("BUTTON");
    var delButton = document.createElement("BUTTON");
    andButton.setAttribute("onclick", "andButtonFunction(this)");
    andButton.setAttribute("type", "button");
    var andText = document.createTextNode("AND");
    andButton.appendChild(andText);
    orButton.setAttribute("onclick","orButtonFunction(this)");
    orButton.setAttribute("type", "button");
    orButton.setAttribute("disabled", "true");
    var orText = document.createTextNode("OR");
    orButton.appendChild(orText);
    delButton.setAttribute("onclick", "delButtonFunction(this)");
    delButton.setAttribute("type", "button");
    var delText = document.createTextNode("DEL");
    delButton.appendChild(delText);
    cell3.appendChild(andButton);
    cell3.appendChild(orButton);
    cell3.appendChild(delButton);
    var cell1 = rowTwo.insertCell(0); 
    var cell2 = rowTwo.insertCell(1);
    cell1.style.verticalAlign="top";
    myNode.setAttribute("id", ma);
    myNode.setAttribute("style", "border: 0; width: 100%");
    myNode.setAttribute("oninput", "textareaTransferBackwardColored(this)");
    cell2.appendChild(myNode);
}
//Adds an "Or Row" to the table
function orButtonFunction(obj){
    var mySelectActivity = document.getElementById("mySelectActivity");
    var mySelectVerb = document.getElementById("mySelectVerb");
    var myTextarea = document.getElementById("textarea");
    var myDiv = document.getElementById("myTextarea");
    var table = document.getElementById("coloredTable");
    var tableTwo = document.getElementById("executableTable");
    var rowCount = table.rows.length;
    var rowCountTwo = tableTwo.rows.length;
    var row = table.insertRow(rowCount);
    var rowTwo = tableTwo.insertRow(rowCountTwo);
    var buttonsCell = obj.parentNode;
    var index = obj.parentNode.parentNode.rowIndex;
    var cellId = table.rows[rowCount-1].cells[2].id;
    var idAsString = parseInt(cellId.match(/\d+/));
    var idAsNumber = idAsString + 1;
    var ma = "myArea" + idAsNumber;
    var notCheckbox = document.getElementById("notCheckbox");
    var myNode = document.createElement("TEXTAREA");
    notCheckbox.checked = false;
    mySelectActivity.value = "null";
    mySelectVerb.style.visibility = "hidden";
    myTextarea.value = "";
    myDiv.style.visibility = "hidden";
    if(index === 1 && deleteNumber === 0){
        buttonsCell.childNodes[1].disabled = true;
        buttonsCell.childNodes[3].disabled = true;
    }
    else{
        buttonsCell.childNodes[0].disabled = true;
        buttonsCell.childNodes[1].disabled = true; 
    }
    row.insertCell(0).innerHTML = "OR";
    row.insertCell(1);
    row.insertCell(2);
    var cell0 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    cell0.setAttribute("id", "td" + idAsNumber);
    var andButton = document.createElement("BUTTON");
    var orButton = document.createElement("BUTTON");
    var delButton = document.createElement("BUTTON");
    andButton.setAttribute("onclick", "andButtonFunction(this)");
    andButton.setAttribute("type", "button");
    andButton.setAttribute("disabled", "true");
    var andText = document.createTextNode("AND");
    andButton.appendChild(andText);
    orButton.setAttribute("type", "button");
    orButton.setAttribute("onclick","orButtonFunction(this)");
    var orText = document.createTextNode("OR");
    orButton.appendChild(orText);
    delButton.setAttribute("onclick", "delButtonFunction(this)");
    delButton.setAttribute("type", "button");
    var delText = document.createTextNode("DEL");
    delButton.appendChild(delText);
    cell3.appendChild(andButton);
    cell3.appendChild(orButton);
    cell3.appendChild(delButton);
    var cell1 = rowTwo.insertCell(0); 
    var cell2 = rowTwo.insertCell(1);    
    myNode.setAttribute("id", "myArea" + rowCountTwo);
    myNode.setAttribute("style", "border: 0; width100%");
    myNode.setAttribute("oninput", "textareaTransferBackwardColored(this)");
    cell2.appendChild(myNode);
}
//Deletes the rows of a table
function delButtonFunction(obj){
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("coloredTable");
    var tableTwo = document.getElementById("executableTable");
    var myDiv = document.getElementById("myTextarea");
    var myTextArea = document.getElementById("textarea");
    var mySelectActivity = document.getElementById("mySelectActivity");
    var mySelectVerb = document.getElementById("mySelectVerb");
    var myTextArea = document.getElementById("textarea");
    var numRows = table.rows.length;
    var coloredTableDiv = document.getElementById("coloredTableDiv");

    if (index ===1 && deleteNumber > 0 && numRows === 3){
        table.rows[index + 1].cells[3].childNodes[0].disabled = false;
        table.rows[index + 1].cells[3].childNodes[1].disabled = false;
    }else if (index ===1 && deleteNumber === 0 && numRows === 3){
        table.rows[index + 1].cells[3].childNodes[0].disabled = false;
        table.rows[index + 1].cells[3].childNodes[1].disabled = false;
    }else if (index === 2 && deleteNumber === 0 && numRows === 3){
        table.rows[index-1].cells[3].childNodes[1].disabled = false;
        table.rows[index-1].cells[3].childNodes[3].disabled = false;  
    } else if (index === 2 && deleteNumber > 0 && numRows === 3){
        table.rows[index-1].cells[3].childNodes[0].disabled = false;
        table.rows[index-1].cells[3].childNodes[1].disabled = false;  
    }
    else if(index === numRows - 1 && numRows >3){
        if(table.rows[index].cells[3].childNodes[0].disabled === false){
        table.rows[index-1].cells[3].childNodes[0].disabled = false;
        }else{
        table.rows[index-1].cells[3].childNodes[1].disabled = false;  
    }
    }
    if(index === 1){
        deleteNumber++;
    }
    if(index === table.rows.length){
        mySelectActivity.value = "null";
        mySelectVerb.style.visibility = "hidden";
        myTextarea.value = "";
        myDiv.style.visibility = "hidden";
    }
    if(numRows === 2){
        mySelectActivity.value = "null";
        mySelectVerb.style.visibility = "hidden";
        myTextarea.value = "";
        myDiv.style.visibility = "hidden";
        coloredTableDiv.style.visibility = "hidden";
        table.rows[rowCount-1].cells[1].innerHTML = "";
        table.rows[rowCount-1].cells[2].innerHTML = "";
        tableTwo.rows[rowCount-1].cells[1].innerHTML = "";
        tableTwo.rows[rowCount-1].cells[2].innerHTML = "";
    }
    if(index === 1&&numRows > 2){
        table.rows[2].cells[0].innerHTML = "";
        table.deleteRow(index);
        tableTwo.deleteRow(index-1);
    }else{
        table.deleteRow(index);
        tableTwo.deleteRow(index-1);
    }
    if(leftLoop > 0){
        myArray.splice(index - 1, 1);
        
        if(index === varloop){
            varloop++;
            tabsLoop();
        }
        if(index ===numRows - 1){
            varloop--;
        }
    }
}
    // Sends data in the coloredTable forward to the respective row in executableTable
    function textareaTransferForwardColored(obj){
        var table = document.getElementById("coloredTable");
        var tableTwo = document.getElementById("executableTable");
        var numRows = table.rows.length;
        var objectID = table.rows[numRows-1].cells[2].id;
        var idAsString = parseInt(objectID.match(/\d+/));
        var idPlusOne = idAsString + 1;
        var theRowIndex = obj.parentNode.parentNode.rowIndex;
        var ta1 = document.getElementById("textarea");
        var ta2 = document.getElementById("myArea" + idAsString);
        ta2.value = ta1.value;
    }
    // Sends data in the executableTable back to the respective row in coloredTable
    function textareaTransferBackwardColored(obj){
        var table = document.getElementById("coloredTable");
        var tableTwo = document.getElementById("executableTable");
        var objectID = obj.id;
        var idAsString = parseInt(objectID.match(/\d+/));
        var idPlusOne = idAsString + 1;
        var theRowIndex = obj.parentNode.parentNode.rowIndex;
        var ta1 = document.getElementById("td" + idAsString);
        var ta2 = document.getElementById("myArea" + idAsString);
        ta1.innerHTML = ta2.value;
    }
    function andButtonFunctionTwo(obj){
        var table = document.getElementById("whenTable");
        var tableTwo = document.getElementById("decidabilityTextareas")
        var rowCount = table.rows.length;
        var rowCountTwo = tableTwo.rows.length;
        var row = table.insertRow(rowCount);
        var rowTwo = tableTwo.insertRow(rowCountTwo);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = rowTwo.insertCell(0);
        var taNode = document.createElement("TEXTAREA");
        var myNode = document.createElement("TEXTAREA");
        var decidabilityTextareaString = table.rows[rowCount-1].cells[1].childNodes[0].id;
        var decidabilityAsString = parseInt(decidabilityTextareaString.match(/\d+/));
        var decidabilityPlusOne = decidabilityAsString + 1;
        var index = obj.parentNode.parentNode.rowIndex;
        var buttonsCell = obj.parentNode;
        if(index === 1 && deleteNumberTwo === 0){
            buttonsCell.childNodes[1].disabled = true;
            buttonsCell.childNodes[3].disabled = true;
        }else{
            buttonsCell.childNodes[0].disabled = true;
            buttonsCell.childNodes[1].disabled = true; 
        }
        taNode.setAttribute("id", "decidabilityTextarea" + decidabilityPlusOne);
        taNode.setAttribute("style", "width: 70%")
        taNode.setAttribute("rows", "3");
        taNode.setAttribute("oninput", "textareaTransferBackward(this)");
        myNode.setAttribute("id", "whenArea" + decidabilityPlusOne);
        myNode.setAttribute("oninput", "textareaTransferForward(this)");
        myNode.setAttribute("style", "width:100%; height: 100%; border:0; background-color:LightYellow")
        cell0.innerHTML = "AND";
        var andButton = document.createElement("BUTTON");
        var orButton = document.createElement("BUTTON");
        var delButton = document.createElement("BUTTON");
        andButton.setAttribute("onclick", "andButtonFunctionTwo(this)");
        andButton.setAttribute("type", "button");
        var andText = document.createTextNode("AND");
        andButton.appendChild(andText);
        orButton.setAttribute("type", "button");
        orButton.setAttribute("onclick","orButtonFunctionTwo(this)");
        orButton.setAttribute("disabled","true");
        var orText = document.createTextNode("OR");
        orButton.appendChild(orText);
        delButton.setAttribute("onclick", "delButtonFunctionTwo(this)");
        delButton.setAttribute("type", "button");
        var delText = document.createTextNode("DEL");
        delButton.appendChild(delText);
        cell2.appendChild(andButton);
        cell2.appendChild(orButton);
        cell2.appendChild(delButton);

        cell1.appendChild(myNode);
        cell3.appendChild(taNode);
    }
    function orButtonFunctionTwo(obj){
        var table = document.getElementById("whenTable");
        var tableTwo = document.getElementById("decidabilityTextareas")
        var rowCount = table.rows.length;
        var rowCountTwo = tableTwo.rows.length;
        var row = table.insertRow(rowCount);
        var rowTwo = tableTwo.insertRow(rowCountTwo);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = rowTwo.insertCell(0);
        var taNode = document.createElement("TEXTAREA");
        var myNode = document.createElement("TEXTAREA");
        var decidabilityTextareaString = table.rows[rowCount-1].cells[1].childNodes[0].id;
        var decidabilityAsString = parseInt(decidabilityTextareaString.match(/\d+/));
        var decidabilityPlusOne = decidabilityAsString + 1;
        var index = obj.parentNode.parentNode.rowIndex;
        var buttonsCell = obj.parentNode;
        if(index === 1 && deleteNumberTwo === 0){
            buttonsCell.childNodes[1].disabled = true;
            buttonsCell.childNodes[3].disabled = true;
        }else{
            buttonsCell.childNodes[0].disabled = true;
            buttonsCell.childNodes[1].disabled = true; 
        }
        taNode.setAttribute("id", "decidabilityTextarea" + decidabilityPlusOne);
        taNode.setAttribute("style", "width: 70%")
        taNode.setAttribute("rows", "3");
        taNode.setAttribute("oninput", "textareaTransferBackward(this)");
        myNode.setAttribute("id", "whenArea" + decidabilityPlusOne);
        myNode.setAttribute("oninput", "textareaTransferForward(this)");
        myNode.setAttribute("style", "width:100%; height: 100%; border:0; background-color:LightYellow")
        cell0.innerHTML = "OR";
         var andButton = document.createElement("BUTTON");
        var orButton = document.createElement("BUTTON");
        var delButton = document.createElement("BUTTON");
        andButton.setAttribute("onclick", "andButtonFunctionTwo(this)");
        andButton.setAttribute("type", "button");
        andButton.setAttribute("disabled","true");
        var andText = document.createTextNode("AND");
        andButton.appendChild(andText);
        orButton.setAttribute("type", "button");
        orButton.setAttribute("onclick","orButtonFunctionTwo(this)");
        var orText = document.createTextNode("OR");
        orButton.appendChild(orText);
        delButton.setAttribute("onclick", "delButtonFunctionTwo(this)");
        delButton.setAttribute("type", "button");
        var delText = document.createTextNode("DEL");
        delButton.appendChild(delText);
        cell2.appendChild(andButton);
        cell2.appendChild(orButton);
        cell2.appendChild(delButton);
        
        cell1.appendChild(myNode);
        cell3.appendChild(taNode);
    }
    function delButtonFunctionTwo(obj){
        var index = obj.parentNode.parentNode.rowIndex;
        var table = document.getElementById("whenTable");
        var tableTwo = document.getElementById("decidabilityTextareas");
        var numRows = table.rows.length;
        if(index ===1 && numRows === 2){
            return;
        }
    if(index === 1){
        deleteNumberTwo++;
    }
    if (index ===1 && deleteNumberTwo > 0 && numRows === 3){
        table.rows[index + 1].cells[2].childNodes[0].disabled = false;
        table.rows[index + 1].cells[2].childNodes[1].disabled = false;
    }else if (index ===1 && deleteNumberTwo === 0 && numRows === 3){
        table.rows[index + 1].cells[2].childNodes[0].disabled = false;
        table.rows[index + 1].cells[2].childNodes[1].disabled = false;
    }else if (index === 2 && deleteNumberTwo === 0 && numRows === 3){
        table.rows[index-1].cells[2].childNodes[1].disabled = false;
        table.rows[index-1].cells[2].childNodes[3].disabled = false;  
    }else if(index ===2 && deleteNumberTwo > 0 && numRows === 3){
        table.rows[index-1].cells[2].childNodes[0].disabled = false;
        table.rows[index-1].cells[2].childNodes[1].disabled = false;  
    }
    else if(index === numRows - 1 && numRows >3){
        if(table.rows[index].cells[2].childNodes[0].disabled === false){
        table.rows[index-1].cells[2].childNodes[0].disabled = false;
        }else{
        table.rows[index-1].cells[2].childNodes[1].disabled = false;  
    }
 }
        if(index === 1&&numRows > 1){
            table.rows[2].cells[0].innerHTML = "";
            table.deleteRow(index);
            tableTwo.deleteRow(index-1);
        }
        else{
        table.deleteRow(index);
        tableTwo.deleteRow(index-1);
    }
    }
    
    function textareaTransferForward(obj){
        var myTextareaID = obj.id;
        var idAsString = parseInt(myTextareaID.match(/\d+/));
        var idPlusOne = idAsString + 1;
        var table = document.getElementById("whenTable");
        var tableTwo = document.getElementById("decidabilityTextareas")
        var theRowIndex = obj.parentNode.parentNode.rowIndex;
        var ta1 = document.getElementById("whenArea" + idAsString);
        var ta2 = document.getElementById("decidabilityTextarea" + idAsString);
        ta2.value = ta1.value;
    }

    function textareaTransferBackward(obj){
        var myTextareaID = obj.id;
        var idAsString = parseInt(myTextareaID.match(/\d+/));
        var idPlusOne = idAsString + 1;
        var table = document.getElementById("whenTable");
        var tableTwo = document.getElementById("decidabilityTextareas")
        var theRowIndex = obj.parentNode.parentNode.rowIndex;
        var ta1 = document.getElementById("whenArea" + idAsString);
        var ta2 = document.getElementById("decidabilityTextarea" + idAsString);
        ta1.value = ta2.value;
    }
    
    function imageSwap(){
        var equilibrium = document.getElementById("equilibrium");
        var preponderanceOfRisks = document.getElementById("preponderanceOfRisks");
        var preponderanceOfBenefits = document.getElementById("preponderanceOfBenefits");
        var balanceImage = document.getElementById("balanceImage");
        if (equilibrium.checked === true){
            balanceImage.src = "pictures/equilibrium.png";
        }
        else if(preponderanceOfBenefits.checked === true){
            balanceImage.src = "pictures/benefits.png";
        }
        else{
            balanceImage.src = "pictures/risks.png";
        }
    }
    function deonticSuggestion(){
        var ceqRadioButtonA = document.getElementById("ceqRadioA");
        var ceqRadioButtonB = document.getElementById("ceqRadioB");
        var ceqRadioButtonC = document.getElementById("ceqRadioC");
        var ceqRadioButtonD = document.getElementById("ceqRadioD");
        var ceqRadioButtonX = document.getElementById("ceqRadioX");
        var equilibrium = document.getElementById("equilibrium");
        var preponderanceOfRisks = document.getElementById("preponderanceOfRisks");
        var preponderanceOfBenefits = document.getElementById("preponderanceOfBenefits");
        var deonticDiv = document.getElementById("deonticDiv");
        var deonticSpan = document.getElementById("deonticSpan");
        var deonticSpanTwo = document.getElementById("deonticSpanTwo");
        var deonticSpanThree = document.getElementById("deonticSpanThree");
        var notCheckbox = document.getElementById("notCheckbox");
      if(preponderanceOfBenefits.checked){
          deonticSpanThree.innerHTML = "Preponderance of Benefit";
      } else if(preponderanceOfRisks.checked){
          deonticSpanThree.innerHTML = "Preponderance of Risks, Harms, Costs"
      }else{
          deonticSpanThree.innerHTML = "a Balance of Benefits and Harms";
      }
        if(ceqRadioButtonA.checked){
              deonticSpan.innerHTML = "A";
            if(preponderanceOfBenefits.checked || preponderanceOfRisks.checked){
                deonticDiv.innerHTML = "Strong Recommendation";
                deonticSpanTwo.innerHTML = "Should";
            }   else{
                if(notCheckbox.checked){ 
                    deonticSpanTwo.innerHTML = "Need Not";
                    
                }else{
                    deonticSpanTwo.innerHTML = "May";
                }
                deonticDiv.innerHTML = "Weak";
            }
        }
                if(ceqRadioButtonB.checked){

              deonticSpan.innerHTML = "B";
            if(preponderanceOfBenefits.checked || preponderanceOfRisks.checked){
                deonticDiv.innerHTML = "<fieldset style = 'display: inline'><input type = 'radio' name = recommendationStrength value = 'strong' id = 'strong' onclick = recommendationStrengthChoice(this)>Strong <input type = 'radio' name = recommendationStrength value = 'moderate' id = 'moderate' onclick = recommendationStrengthChoice(this)>Moderate</fieldset>";
                deonticSpanTwo.innerHTML = "Should";
            }   else{
                if(notCheckbox.checked){ 
                    deonticSpanTwo.innerHTML = "Need Not";
                }else{
                    deonticSpanTwo.innerHTML = "May";
                }
                deonticDiv.innerHTML = "Weak";
            }
        }
                if(ceqRadioButtonC.checked){
              deonticSpan.innerHTML = "C";
            if(preponderanceOfBenefits.checked || preponderanceOfRisks.checked){
                deonticDiv.innerHTML = "<fieldset style = 'display: inline'><input type = 'radio' name = recommendationStrength value = 'moderate' id = 'moderate' onclick = recommendationStrengthChoice(this)>Moderate <input type = 'radio' name = recommendationStrength value = 'weak' id = 'weak' onclick = recommendationStrengthChoice(this)>Weak</fieldset>";
                deonticSpanTwo.innerHTML = "Should";
            }   else{
                if(notCheckbox.checked){ 
                    deonticSpanTwo.innerHTML = "Need Not";
                    
                }else{
                    deonticSpanTwo.innerHTML = "May";
                }
                denoticDiv.innerHTML = "Weak";
            }
        }
           if(ceqRadioButtonD.checked){
              deonticSpan.innerHTML = "D";
               if(preponderanceOfBenefits.checked || preponderanceOfRisks.checked){
                deonticDiv.innerHTML = "Weak";
                if(notCheckbox.checked){ 
                    deonticSpanTwo.innerHTML = "Need Not";
                    
                }else{
                    deonticSpanTwo.innerHTML = "May";
                }
             
            }else{
                deonticDiv.innerHTML = "No Recommendation";
                deonticSpanTwo.innerHTML = "No Rec";
            }
        }
            if(ceqRadioButtonX.checked){
              deonticSpan.innerHTML = "X";
                if(preponderanceOfBenefits.checked || preponderanceOfRisks.checked){
                deonticDiv.innerHTML = "<fieldset style = 'display: inline'><input type = 'radio' name = recommendationStrength value = 'strong' id = 'strong' onclick = recommendationStrengthChoice(this)>Strong <input type = 'radio' name = recommendationStrength value = 'moderate' id = 'moderate' onclick = recommendationStrengthChoice(this)>Moderate</fieldset>";
                deonticSpanTwo.innerHTML = "Should";
            }   else{
                deonticDiv.innerHTML = "No Recommendation";
                deonticSpanTwo.innerHTML = "No Rec";
        }
    }
    }
    
    function tabsLoop(){
        var tableColored = document.getElementById("coloredTable");
        var tableWhen = document.getElementById("whenTable");
        var numRowsColored = tableColored.rows.length;
        var numRowsWhen = tableWhen.rows.length;
        var verb = tableColored.rows[varloop].cells[1].innerHTML;
        var verbWhat = tableColored.rows[varloop].cells[2].innerHTML;
        var benefitsSpan = document.getElementById("benefitsSpan");
        var risksSpan = document.getElementById("risksSpan");
        var ceqSpan = document.getElementById("ceqSpan");
        var benefitsSpanTwo = document.getElementById("benefitsSpanTwo");
        var risksSpanTwo = document.getElementById("risksSpanTwo");
        var whoTextarea = document.getElementById("whoTextarea");
        var benefitsTextarea = document.getElementById("benefitsTextarea");
        var risksTextarea = document.getElementById("risksTextarea");
        var deonticSpan = document.getElementById("deonticSpan");
        var deonticDiv = document.getElementById("deonticDiv");
        var deonticSpanTwo = document.getElementById("deonticSpanTwo");
        var ceqRadioA = document.getElementById("ceqRadioA");
        var ceqRadioB = document.getElementById("ceqRadioB");
        var ceqRadioC = document.getElementById("ceqRadioC");
        var ceqRadioD = document.getElementById("ceqRadioD");
        var ceqRadioX = document.getElementById("ceqRadioX");
        var equilibrium = document.getElementById("equilibrium");
        var whoTextarea = document.getElementById("whoTextarea");
        var numRowsColoredMinusOne = numRowsColored - 1;
        var whoSpan = document.getElementById("whoSpan");
        var deonticSpanThree = document.getElementById("deonticSpanThree");
        var testArray = new Array(10);
        myArray.push(testArray);

//        myArray[varloop - 1][0] = verb;
//        myArray[varloop - 1][1] = verbWhat;
//        myArray[varloop - 1][2] = risksSpanTwo.innerHTML.trim();
//        myArray[varloop - 1][3] = whoTextarea.value;
//        myArray[varloop - 1][4] = benefitsTextarea.value;
//        myArray[varloop - 1][5] = risksTextarea.value;
//        myArray[varloop - 1][6] = deonticSpan.innerHTML;
//       if(deonticDiv.innerHTML === "Strong Recommendation" || deonticDiv.innerHTML === "Weak" || deonticDiv.innerHTML === "No Recommendation"){
//           myArray[varloop - 1][7] = deonticDiv.innerHTML;
//       }else{
//            myArray[varloop - 1][7] = recommendationSelection;
//       }
//        myArray[varloop - 1][8] = deonticSpanTwo.innerHTML;
//        myArray[varloop - 1][9] = deonticSpanThree.innerHTML;
        if(varloop === numRowsColored-1){
            return;
        }else{
            if(getSelectedTabIndex() === 10){
                $("#tabs").tabs("enable", 5);
                $("#tabs").tabs({ active: 5});
                $("#tabs").tabs("disable", 10);
        }
        var nextVerb = tableColored.rows[varloop + 1].cells[1].innerHTML;
        var nextVerbWhat = tableColored.rows[varloop + 1].cells[2].innerHTML;

	if(nextVerb.slice(-1) === "e"){
        if(nextVerb.includes("do not")){          
            benefitsSpan.innerHTML = nextVerb.slice(0, -1).split("do ").pop() + "ing"+" "+nextVerbWhat;
            risksSpan.innerHTML = nextVerb.slice(0,-1).split("do ").pop() + "ing"+" "+nextVerbWhat;
            ceqSpan.innerHTML = nextVerb.slice(0, -1).split("do ").pop() + "ing"+" "+nextVerbWhat;
    }   else{
            benefitsSpan.innerHTML = nextVerb.slice(0, -1) + "ing"+" "+nextVerbWhat;
            risksSpan.innerHTML = nextVerb.slice(0,-1) + "ing"+" "+nextVerbWhat;
            ceqSpan.innerHTML = nextVerb.slice(0, -1) + "ing"+" "+nextVerbWhat;
        }
    }else{
        if(nextVerb.includes("do not")){
            benefitsSpan.innerHTML = nextVerb.split("do ").pop() + "ing"+" "+nextVerbWhat;
            risksSpan.innerHTML = nextVerb.split("do ").pop() + "ing"+" "+nextVerbWhat;
            ceqSpan.innerHTML = nextVerb.split("do ").pop() + "ing"+" "+nextVerbWhat;
        }else{
            benefitsSpan.innerHTML = nextVerb + "ing"+" "+nextVerbWhat;
            risksSpan.innerHTML = nextVerb+ "ing"+" "+nextVerbWhat;
            ceqSpan.innerHTML = nextVerb + "ing"+" "+nextVerbWhat;
        }
    }
            benefitsTextarea.value = "";
            risksTextarea.value = "";
//            ceqRadioA.checked = "false";
//            ceqRadioB.checked = "false";
//            ceqRadioC.checked = "false";
//            ceqRadioD.checked = "false";
//            ceqRadioX.checked = "false";
            $('input[name="ceq"]').prop('checked', false);
            equilibrium.checked = "true";
            whoSpan.innerHTML = "";
            whoSpan.insertAdjacentHTML("beforeend", nextVerb + " ");
            whoSpan.insertAdjacentHTML("beforeend", nextVerbWhat + " ");
            whoTextarea.value = "";
        
        }
    }
    
    function balanceBenefitsInput(obj){
        var benefitsEquilibriumTextarea = document.getElementById("benefitsEquilibriumTextarea");
        benefitsEquilibriumTextarea.value = obj.value;
        
    }
    function balanceRisksInput(obj){
        var risksEquilibriumTextarea = document.getElementById("risksEquilibriumTextarea");
        risksEquilibriumTextarea.value = obj.value;

    }
    function recommendationStrengthChoice(button){
        recommendationSelection = button.id;
    }
    function keyActionStatementProfileCreator(){
        var coloredTable = document.getElementById("coloredTable");
        var numRows = coloredTable.rows.length;
        var statementSpan = document.getElementById("keyActionStatementSpan");
        var dateSpan = document.getElementById("dateSpan");
        dateSpan.innerHTML = dateCreator();
        var keyActionString = "";
        var profileString = "";
        var profile0select = document.getElementById("profile0select");
        var profile1select = document.getElementById("profile1select");
        var profile2select = document.getElementById("profile2select");
        var profile3select = document.getElementById("profile3select");
        var notesTextarea = document.getElementById("notesTextarea");
        var notesSpan = document.getElementById("notesSpan");
        var benefitsBulleted = "";
        var risksBulleted = "";

        if(profile0select.checked === true){
            profileString = document.getElementById("profile0").value;
        }else if(profile1select.checked === true){
                profileString = document.getElementById("profile1").value;
        }else if(profile2select.checked === true){
                profileString = document.getElementById("profile2").value;
        }else{
                profileString = document.getElementById("profile3").value;
        }
        for(i = 0; i < numRows-1; i++){
            var benefitsSplit = myArray[i][4].split(/\n/);
            var risksSplit = myArray[i][5].split(/\n/);
            for( j = 0; j < benefitsSplit.length; j++){
                if(benefitsSplit[j] != ""){
                    benefitsBulleted = benefitsBulleted + "<li>" + benefitsSplit[j] + "</li>";
                }
            }
            for( k = 0; k < risksSplit.length; k++){
                if(risksSplit[k] != ""){
                    risksBulleted = risksBulleted + "<li>" + risksSplit[k] + "</li>";
                }
            }
            keyActionString = keyActionString + "<div><b> Action: </b> " + myArray[i][0] + " " + myArray[i][1] + "</div><br>" 
                + "<div><tab><b>Aggregate Evidence Quality: </b> " + myArray[i][6] + "</div><br>" + "<tab><b>Benefits: </b> <ul>" + benefitsBulleted + "</ul><tab><b>Risk, Harm, Cost:</b> <ul>" + risksBulleted + "</ul><div><tab><b>Benefit-Harm Assessment: </b>" + myArray[i][9] + "</div><br>";
            benefitsBulleted = "";
            risksBulleted = "";
        }
        statementSpan.innerHTML = profileString +"<h2></h2>"+ keyActionString;
        notesSpan.innerHTML = notesTextarea.value;
    }
    function profileCreatorOne(){
        var coloredTable = document.getElementById("coloredTable");
        var numRows = coloredTable.rows.length;
        var profile = document.getElementById("profile0");
        var andOr = "";
        if(numRows > 2){
            andOr = coloredTable.rows[2].cells[0].innerHTML;
        }
        var whoAndStrength = "";
        if(andOr.length !== 0)
        {
            for ( i = 0; i < numRows - 1; i++){
                if(i != numRows - 2){
                    whoAndStrength = whoAndStrength + myArray[i][3] + " " + myArray[i][8].toLowerCase() + " " + myArray[i][0] + " " +myArray[i][1] + " (Evidence quality: " + myArray[i][6] + "; " + "Recommendation strength: " + myArray[i][8] + ") " +  andOr + " ";
                }else{
                    whoAndStrength = whoAndStrength + myArray[i][3] + " " + myArray[i][8].toLowerCase() + " " + myArray[i][0] + " " +myArray[i][1] + " (Evidence quality: " + myArray[i][6] + "; " + "Recommendation strength: " + myArray[i][8] + ") ";
                }
            }
        }
        else
        {
            whoAndStrength = whoAndStrength + myArray[0][3] + " " + myArray[0][8].toLowerCase() + " " + myArray[0][0] + " " +myArray[0][1] + "\n(Evidence quality: " + myArray[0][6] + "; " + "Recommendation strength: " + myArray[0][8] + ") ";

        }



        var profileText = "If\n" + myArray[0][2] +"\n" + "Then \n" + whoAndStrength;
        profile.value = profileText;
    }
    function profileCreaterTwo(){
        var coloredTable = document.getElementById("coloredTable");
        var numRows = coloredTable.rows.length;
        var profile = document.getElementById("profile1");
        var andOr = "";
        var profileText="";
        if(numRows > 2){
            andOr = coloredTable.rows[2].cells[0].innerHTML;
        }
        var whoAndStrength = "";
        if(andOr.length !== 0) {
            for (i = 0; i < numRows - 1; i++) {
                if (i != numRows - 2) {
                    whoAndStrength = whoAndStrength + myArray[i][3] + " " + myArray[i][8].toLowerCase() + " " + myArray[i][0] + " " + myArray[i][1] + " (Evidence quality: " + myArray[i][6] + "; " + "Recommendation strength: " + myArray[i][8] + ") " + andOr + " ";
                } else {
                    whoAndStrength = whoAndStrength + myArray[i][3] + " " + myArray[i][8].toLowerCase() + " " + myArray[i][0] + " " + myArray[i][1] + " (Evidence quality: " + myArray[i][6] + "; " + "Recommendation strength: " + myArray[i][8] + ") ";
                }
            }
            profileText =  whoAndStrength + "\n" + "if/when/whenver\n" + myArray[0][2];
        }
        else
        {
            whoAndStrength = whoAndStrength + myArray[0][3] + " " + myArray[0][8].toLowerCase() + " " + myArray[0][0] + " " +myArray[0][1] ;
            profileText =  whoAndStrength + "\n" + "if/when/whenver\n" + myArray[0][2]+ "\n(Evidence quality: " + myArray[0][6] + "; " + "Recommendation strength: " + myArray[0][8] + ") ";
        }

        profile.value = profileText;
    }
    
    function profileCreatorThree(){
        var coloredTable = document.getElementById("coloredTable");
        var numRows = coloredTable.rows.length;
        var profile = document.getElementById("profile2");
        var andOr = "";

        if(numRows > 2){
            andOr = coloredTable.rows[2].cells[0].innerHTML;
        }
        var whoAndStrength = "";
        if(andOr.length !== 0) {
            for (i = 0; i < numRows - 1; i++) {
                if (i != numRows - 2) {
                    whoAndStrength = whoAndStrength + myArray[i][3] + " " + myArray[i][8].toLowerCase() + " " + myArray[i][0] + " " + myArray[i][1] + " (Evidence quality: " + myArray[i][6] + "; " + "Recommendation strength: " + myArray[i][8] + ") " + andOr + " ";
                } else {
                    whoAndStrength = whoAndStrength + myArray[i][3] + " " + myArray[i][8].toLowerCase() + " " + myArray[i][0] + " " + myArray[i][1] + " (Evidence quality: " + myArray[i][6] + "; " + "Recommendation strength: " + myArray[i][8] + ") ";
                }
            }
        }
        else
        {
            whoAndStrength = whoAndStrength + myArray[0][3] + " " + myArray[0][8].toLowerCase() + " " + myArray[0][0] + " " + myArray[0][1] + "\n(Evidence quality: " + myArray[0][6] + "; " + "Recommendation strength: " + myArray[0][8] + ") ";

        }
        var profileText ="The {developer} suggests that if\n" + myArray[0][2] + "\n" +"Then" + "\n" + whoAndStrength;
        profile.value = profileText;
    }
    
    function profileCreatorFour(){
        var coloredTable = document.getElementById("coloredTable");
        var numRows = coloredTable.rows.length;
        var profile = document.getElementById("profile3");
        var andOr = "";
        var profileText="";
        if(numRows > 2){
            andOr = coloredTable.rows[2].cells[0].innerHTML;
        }
        var whoAndStrength = "";
        if(andOr.length !== 0) {
            for (i = 0; i < numRows - 1; i++) {
                if (i != numRows - 2) {
                    whoAndStrength = whoAndStrength + myArray[i][3] + " " + myArray[i][8].toLowerCase() + " " + myArray[i][0] + " " + myArray[i][1] + " (Evidence quality: " + myArray[i][6] + "; " + "Recommendation strength: " + myArray[i][8] + ") " + andOr + " ";
                } else {
                    whoAndStrength = whoAndStrength + myArray[i][3] + " " + myArray[i][8].toLowerCase() + " " + myArray[i][0] + " " + myArray[i][1] + " (Evidence quality: " + myArray[i][6] + "; " + "Recommendation strength: " + myArray[i][8] + ") ";
                }
            }
            profileText = "The {developer} suggests that\n" + whoAndStrength + "\n" + "if/when/whenver\n" + myArray[0][2];
        }
        else
        {
            whoAndStrength = whoAndStrength + myArray[0][3] + " " + myArray[0][8].toLowerCase() + " " + myArray[0][0] + " " + myArray[0][1] ;
            profileText = "The {developer} suggests that\n" + whoAndStrength + "\n" + "if/when/whenver\n" + myArray[0][2]+ "\n(Evidence quality: " + myArray[0][6] + "; " + "Recommendation strength: " + myArray[0][8] + ") ";
        }

        profile.value = profileText;
    }
    function dateCreator(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();

        if(dd<10) {
        dd='0'+dd
        } 

        if(mm<10) {
        mm='0'+mm
    } 

        today = mm+'/'+dd+'/'+yyyy;
       return today;
    }
function radioButtonCheck(){
    var profile0select = document.getElementById("profile0select");
    var profile1select = document.getElementById("profile1select");
    var profile2select = document.getElementById("profile2select");
    var profile3select = document.getElementById("profile3select");
    if(profile0select.checked || profile1select.checked || profile2select.checked ||profile3select.checked === true){
        return true;
    }else{
    return false;
}
}

function tabsRewrite(){
        var tableColored = document.getElementById("coloredTable");
        var tableWhen = document.getElementById("whenTable");
        var numRowsColored = tableColored.rows.length;
        var numRowsWhen = tableWhen.rows.length;
        var verb = tableColored.rows[varloop].cells[1].innerHTML;
        var verbWhat = tableColored.rows[varloop].cells[2].innerHTML;
        var benefitsSpan = document.getElementById("benefitsSpan");
        var risksSpan = document.getElementById("risksSpan");
        var ceqSpan = document.getElementById("ceqSpan");
        var benefitsSpanTwo = document.getElementById("benefitsSpanTwo");
        var risksSpanTwo = document.getElementById("risksSpanTwo");
        var whoTextarea = document.getElementById("whoTextarea");
        var benefitsTextarea = document.getElementById("benefitsTextarea");
        var risksTextarea = document.getElementById("risksTextarea");
        var deonticSpan = document.getElementById("deonticSpan");
        var deonticDiv = document.getElementById("deonticDiv");
        var deonticSpanTwo = document.getElementById("deonticSpanTwo");
        var ceqRadioA = document.getElementById("ceqRadioA");
        var ceqRadioB = document.getElementById("ceqRadioB");
        var ceqRadioC = document.getElementById("ceqRadioC");
        var ceqRadioD = document.getElementById("ceqRadioD");
        var ceqRadioX = document.getElementById("ceqRadioX");
        var equilibrium = document.getElementById("equilibrium");
        var whoTextarea = document.getElementById("whoTextarea");
        var numRowsColoredMinusOne = numRowsColored - 1;
        var whoSpan = document.getElementById("whoSpan");
        var deonticSpanThree = document.getElementById("deonticSpanThree");
        var nextVerb = tableColored.rows[varloop + 1].cells[1].innerHTML;
        var nextVerbWhat = tableColored.rows[varloop + 1].cells[2].innerHTML;
            benefitsSpan.innerHTML = nextVerb+" "+nextVerbWhat;
            risksSpan.innerHTML = nextVerb;
            ceqSpan.innerHTML = nextVerb;
            benefitsTextarea.value = "";
            risksTextarea.value = "";
            ceqRadioA.checked = "false";
            ceqRadioB.checked = "false";
            ceqRadioC.checked = "false";
            ceqRadioD.checked = "false";
            ceqRadioX.checked = "false";
            equilibrium.checked = "true";
            whoSpan.innerHTML = "";
        if(nextVerb.includes("do not")){
            whoSpan.insertAdjacentHTML("beforeend", nextVerb.split("do not").pop() + " ");
        }
        else{
            whoSpan.insertAdjacentHTML("beforeend", nextVerb + " ");            
        }
            whoSpan.insertAdjacentHTML("beforeend", nextVerbWhat + " ");
            whoTextarea.value = "";
}
function disableBack(){
    var backButton = document.getElementById("backButton");
    backButton.disabled = true;
}

function tableCleanup(){
    var table = document.getElementById("coloredTable");
    var tableTwo = document.getElementById("executableTable");
    var rowCount = table.rows.length;
    var rowCountTwo = tableTwo.rows.length;
    
//    if(rowCount > 2 && table.rows[rowCount - 1].cells[3].childNodes[3].disabled === true){
//        tableCleanupButton = 1;
//    }else{tableCleanupButton = 3}
//    for(i = 1; i < table.rows.length; i++){
//        if(table.rows[i].cells[1].innerHTML === ""){
//            table.deleteRow(i);
//            tableTwo.deleteRow(i-1);
//            i--;
//        } 
//    }
//    if(table.rows.length === 2){
//        table.rows[table.rows.length - 1].cells[3].childNodes[1].enabled = true;
//        table.rows[table.rows.length - 1].cells[3].childNodes[3].enabled = true;
//    } else if(table.rows.length > 2){
//        table.rows[table.rows.length - 1].cells[3].childNodes[tableCleanupButton].enabled = true;
//        table.rows[table.rows.length - 1].cells[3].childNodes[2].enabled = true;
//
//    }
    for(i = 1; i < rowCount; i++ ){
    if(table.rows.length != 2){
    if(table.rows[i].cells[1].innerHTML === ""){
        table.deleteRow(i);
        tableTwo.deleteRow(i-1);
        i--;
    }
    }
    buttonRestoration();
}
}

function buttonRestoration(){
    var table = document.getElementById("coloredTable");
    var rowCount = table.rows.length;

        if(table.rows.length === 2){
    table.rows[1].cells[3].childNodes[1].disabled = false;
    table.rows[1].cells[3].childNodes[3].disabled = false;
        }else{
            if(table.rows[rowCount - 1].cells[0].innerHTML === "AND"){
                table.rows[rowCount - 1].cells[3].childNodes[0].disabled = false;
            }else{
                table.rows[rowCount - 1].cells[3].childNodes[1].disabled = false;
            }
        }
}

function tableCleanupTwo(){
    var table = document.getElementById("whenTable");
    var tableTwo = document.getElementById("decidabilityTextareas");
    var rowCount = table.rows.length;
    var rowCountTwo = tableTwo.rows.length;
    
    for(i = 1; i < rowCount; i++ ){
        if(table.rows.length != 2){
            if(table.rows[i].cells[1].childNodes[0].value === ""){
                table.deleteRow(i);
                tableTwo.deleteRow(i-1);
                i--;
    }
    }
        buttonRestorationTwo();
}
}
function buttonRestorationTwo(){
    var table = document.getElementById("whenTable");
    var rowCount = table.rows.length;

        if(table.rows.length === 2){
    table.rows[1].cells[2].childNodes[1].disabled = false;
    table.rows[1].cells[2].childNodes[3].disabled = false;
        }else{
            if(table.rows[rowCount - 1].cells[0].innerHTML === "AND"){
                table.rows[rowCount - 1].cells[2].childNodes[0].disabled = false;
            }else{
                table.rows[rowCount - 1].cells[2].childNodes[1].disabled = false;
            }
        }
}
//Click event for profileEdit buttons in tab 13
function profileEditor(buttonID){
//
//    var myWindow = window.open("child.html", "", "width=400, height=400");  // Opens a new window
//    myWindow.focus();  // Sets focus to the new window
//    myWindow.name = "Text Editor";
//    

    $("#editWindowDiv").css("visibility", "visible");
    $("#disabledDiv").addClass("disabledButton");
    editIDAsString = parseInt(buttonID.id.match(/\d+/));
    var desiredProfileID = "profile" + editIDAsString;
    $("#editWindow").val($('#'+desiredProfileID).val()); 
}
//Click event for exitClick button in tab 13
function exitClick(){
    $("#editWindowDiv").css("visibility", "hidden");
    $("#disabledDiv").removeClass("disabledButton");
    var textValue = $("#editWindow").val();
    var desiredProfileID = "profile" + editIDAsString;
    $('#'+ desiredProfileID).val(textValue); 
}

function createPDF(){
    var doc = new jsPDF();          
    doc.fromHTML($('#keyActionStatementProfileDiv').get(0), 20, 20, {
        'width': 180
    });

    doc.save("BridgeWiz.pdf");
    $("#documentDownloaded").dialog( "open" );

}