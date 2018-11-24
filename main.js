var proteinCount;
var carbCount;
var day;
var foodName;
var foodType;
var fatCount;
var totalCalories;


var testObj = {
    obj1 : {
        day: 'Friday',
        type: 'Dinner',
        food: 'Tacos',
        protein: 15,
        carbs: 12,
        fat: 20
    },
    obj2: {
        day: 'Monday',
        type: 'Dinner',
        food: 'Steak',
        protein: 12,
        carbs: 13,
        fat: 100
    },
    obj3: {
        day: 'Thursday',
        type: 'Dessert',
        food: 'Pizookie',
        protein: 100,
        carbs: 4,
        fat: 89
    },
    obj4: {
        day: 'Friday',
        type: 'Breakfast',
        food: 'Pancakes',
        protein: 3,
        carbs: 21,
        fat: 12
    },
    obj5: {
        day: 'Friday',
        type: 'Lunch',
        food: 'Salad',
        protein: 17,
        carbs: 15,
        fat: 2
    },
    obj6: {
        day: 'Friday',
        type: 'Dinner',
        food: 'Chicken Noodle Soup',
        protein: 10,
        carbs: 10,
        fat: 19
    },
    obj7: {
        day: 'Saturday:',
        type: 'Breakfast',
        food: 'Bagel',
        protein: 7,
        carbs: 9,
        fat: 1
    }, 
    obj8: {
        day: 'Saturday',
        type: 'Lunch',
        food: 'Cheeseburger',
        protein: 5,
        carbs: 12,
        fat: 8
    }
}

$(document).ready(initializeApp);

function initializeApp(){
    $(".submitButton").on('click', inputCheck);
    testData(testObj.obj1);
    testData(testObj.obj2);
    testData(testObj.obj3);
    testData(testObj.obj4);
    testData(testObj.obj5);
    testData(testObj.obj6);
    testData(testObj.obj7);
    testData(testObj.obj8);
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
        class: "btn btn-danger btn-sm",
        type: "button",
        text: 'Delete',
        datatoggle: 'modal',
        dataTarget: "#deleteModal",
        on: {
            'click': function(){
                tableRow.remove();
            }
        }
    });

    obj.protein = obj.protein * 4;
    obj.carbs = obj.carbs * 4;
    obj.fat = obj.fat * 9;

    dayData.text(obj.day)
    typeData.text(obj.type);
    foodNameData.text(obj.food)
    proteinCountData.text(obj.protein + " cal");
    carbCountData.text(obj.carbs + " cal");
    fatCountData.text(obj.fat + " cal");
    totalCalories = obj.protein + obj.carbs + obj.fat;
    totalCalorieData.text(totalCalories + " cal");

    $("tbody").append(tableRow);
    buttonCell.append(deleteButton);
    tableRow.append(dayData, typeData, foodNameData, proteinCountData, carbCountData, fatCountData, totalCalorieData, buttonCell);
    
    $("tbody").append(tableRow);


}


