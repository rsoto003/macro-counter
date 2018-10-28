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
    var dayData = $("<td>").text(day);
}
