var proteinCount;
var carbCount;
var day;
var foodName;
var foodType;
var fatCount;
var totalCalories;





$(document).ready(initializeApp);

function initializeApp(){
    $(".submitButton").on('click', inputCheck);
}

function submitHandler() {
    day = $("#daySelect").val();
    proteinCount = $("#proteinCount").val();
    foodType = $("#foodType").val();
    foodName = $("#foodName").val();
    carbCount = $("#carbCount").val(); 
    fatCount = $("#fatCount").val();
    // macro calculations below

    proteinCount = proteinCount * 4;   
    carbCount = carbCount * 4;
    fatCount = fatCount * 9;   
    totalCalories = proteinCount + carbCount + fatCount + "cal";
    
    //end macro calculations

    var tableRow = $("<tr>");
    var dayData = $("<th>").text(day);
    var typeData = $("<td>").text(foodType);
    var foodNameData = $("<td>").text(foodName);
    var proteinCountData = $("<td>").text(proteinCount + "cal");
    var carbCountData = $("<td>").text(carbCount + "cal");
    var fatCountData = $("<td>").text(fatCount +"cal");
    var totalCalorieData = $("<td>").text(totalCalories);

    tableRow.append(dayData, typeData, foodNameData, proteinCountData, carbCountData, fatCountData, totalCalorieData);
    
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


//function that checks to make sure inputs aren't empty and correct input is added
function inputCheck(){
    var form1 = $(".form1").val();
    var form2 = $(".form2").val();
    var form3 = $(".form3").val();
    var form4 = $(".form4").val();
    if(!(form1 && form2 && form3 && form4)){
        alert("a form is empty!");
    } else {
        console.log("submitHandler true")
        submitHandler();
    }
}