var proteinCount;
var carbCount;
var day;
var foodName;
var foodType;
var fatCount;

$(document).ready(initializeApp);

function initializeApp(){
    $(".submitButton").on('click', submitHandler);
}

function submitHandler() {

    day = $("#daySelect").val();
    proteinCount = $("#proteinCount").val();
    foodType = $("#foodType").val();
    foodName = $("#foodName").val();
    carbCount = $("#carbCount").val(); 
    fatCount = $("#fatCount").val();
    // macro calculations below

    proteinCount = proteinCount * 4 + " cal";   
    carbCount = carbCount * 4 + " cal";
    fatCount = fatCount * 9 + " cal";   
    
    var tableRow = $("<tr>");
    var dayData = $("<th>").text(day);
    var typeData = $("<td>").text(foodType);
    var foodNameData = $("<td>").text(foodName);
    var proteinCountData = $("<td>").text(proteinCount);
    var carbCountData = $("<td>").text(carbCount);
    var fatCountData = $("<td>").text(fatCount);

    var fatCountData = $("<td>").text(fatCount);

    tableRow.append(dayData, typeData, foodNameData, proteinCountData, carbCountData, fatCountData);
    
    $("tbody").append(tableRow);
    clearInputs();
    
}
 
function clearInputs(){
    $("#daySelect").val("Choose...");
    $("#proteinCount").val("");
    $("#carbCount").val("");
    $("#fatCount").val("");
    $("#foodType").val("Choose...");
    $("#foodName").val(""); 
}
function inputCheck(){
    if($("#proteinCount").val() !== ""){
        console.log("this is not empty!");
    } else {
        console.log('this is currently empty :(');
    }
}