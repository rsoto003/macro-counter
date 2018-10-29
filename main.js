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
    var carbCountData = $("<td>").text(carbCount);
    console.log(`fat count: ${fatCount}`);
    console.log(`food name: ${foodName}`);
    console.log(`day: ${day}`);
    console.log(`carb count: ${carbCount}`);
    console.log(`food type: ${foodType}`);
    console.log(`calorie count: ${calCount}`);
    var fatCountData = $("<td>").text(fatCount);

    

    tableRow.append(dayData, typeData, foodNameData, carbCountData, fatCountData);

    $("tbody").append(tableRow);
    // clearInputs();
}
 
function clearInputs(){
    $("table").val("");
}