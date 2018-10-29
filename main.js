var calCount;
var carbCount;
var day;
var foodName;
var foodType;
var fatCount;

$(document).ready(initializeApp);

function initializeApp(){
    $(".submitButton").on('click', submitHandler);
}

function submitHandler(){
    day = $("#daySelect").val();
    calCount = $("#calCount").val();
    foodType = $("#foodType").val();
    foodName = $("#foodName").val();
    carbCount = $("#carbCount").val(); 
    fatCount = $("#fatCount").val();

    var tableRow = $("<tr>");
    var dayData = $("<th>").text(day);
    var typeData = $("<td>").text(foodType);
    var foodNameData = $("<td>").text(foodName);
    var calCountData = $("<td>").text(calCount);
    var carbCountData = $("<td>").text(carbCount);
    var fatCountData = $("<td>").text(fatCount);

    var fatCountData = $("<td>").text(fatCount);

    tableRow.append(dayData, typeData, foodNameData, calCountData, carbCountData, fatCountData);
    
    $("tbody").append(tableRow);
    clearInputs();
    
}
 
function clearInputs(){
    $("#daySelect").val("Choose...");
    $("#calCount").val("");
    $("#carbCount").val("");
    $("#fatCount").val("");
    $("#foodType").val("Choose...");
    $("#foodName").val(""); 
}
function inputCheck(){
    if($("#calCount").val() !== ""){
        console.log("this is not empty!");
    } else {
        console.log('this is currently empty :(');
    }
}