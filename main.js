var proteinCount;
var carbCount;
var day;
var foodName;
var foodType;
var fatCount;
var totalCalories;

// var testArr = [ 
//     ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday'],
//     ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert', ],
//     ['Eggs', 'Spaghetti','Steak Burrito', 'Chips', 'Pizooki'],
//     [9, 8, 10, 3, 5],
//     [20, 5, 8, 13, 11],
//     [19, 4, 10, 25, 30]
// ]
var testArr = [
    ['Monday', 'Breakfast', 'Eggs', 9, 20, 19],
    ['Tuesday', 'Lunch', 'Spaghetti', 8, 5, 4]
]

var testObj1 = {
    day: 'Tuesday',
    type: 'Breakfast',
    food: 'Eggs',
    protein: 9,
    carbs: 20,
    fat: 19
}
var testObj2 = {
    day: 'Wednesday',
    type: 'Lunch',
    food: 'Spaghetti',
    protein: 8,
    carbs: 9,
    fat: 15
}

$(document).ready(initializeApp);

function initializeApp(){
    $(".submitButton").on('click', inputCheck);
    testData(testObj1);
    testData(testObj2);
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
    var buttonCell = $("<td>");
    var deleteButton = $("<button>", {
        'class': "btn btn-danger btn-sm ",
        type: "button",
        text: 'Delete',
        datatoggle: 'modal',
        dataTarget: "bd-example-modal-sm",
        on: {
            'click': function(){
                tableRow.remove();
            }
        }
    });
    buttonCell.append(deleteButton);
    tableRow.append(dayData, typeData, foodNameData, proteinCountData, carbCountData, fatCountData, totalCalorieData, buttonCell);
    
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
//need to check to see if both form values are chosen, 

function inputCheck(){
    var form1 = $(".form1").val();
    var form2 = $(".form2").val();
    var form3 = $(".form3").val();
    var form4 = $(".form4").val();
    if(form1 && form2 && form3 && form4){
        if(!isNaN(form2 && form3 && form4)){
            submitHandler();
            return true;
        } else {
            //add alert modal here??
            return false;
        }
    } else {
        //add alert modal here??
        alert("form is empty")
    }
}

//test data function here: 
function testData(obj){
    var tableRow = $("<tr>");
    var dayData = $("<th>");
    var typeData = $("<td>");
    var foodNameData = $("<td>");
    var proteinCountData = $("<td>").text(proteinCount + "cal");
    var carbCountData = $("<td>").text(carbCount + "cal");
    var fatCountData = $("<td>").text(fatCount +"cal");
    var totalCalorieData = $("<td>").text(totalCalories);
    var buttonCell = $("<td>");
    var deleteButton = $("<button>", {
        'class': "btn btn-danger btn-sm ",
        type: "button",
        text: 'Delete',
        datatoggle: 'modal',
        dataTarget: "bd-example-modal-sm",
        on: {
            'click': function(){
                tableRow.remove();
            }
        }
    });

    dayData.text(obj.day)
    typeData.text(obj.type);
    foodNameData.text(obj.food)
    proteinCountData.text(obj.protein);
    carbCountData.text(obj.carbs);
    fatCountData.text(obj.fat);
    totalCalories = obj.protein + obj.carbs + obj.fat;
    totalCalorieData.text(totalCalories);

    $("tbody").append(tableRow);
    buttonCell.append(deleteButton);
    tableRow.append(dayData, typeData, foodNameData, proteinCountData, carbCountData, fatCountData, totalCalorieData, buttonCell);
    
    $("tbody").append(tableRow);


}


