//used clouse
//used IIFE (Immediate Invoke Function Expression)
//used module pattern

//defined UI controller
var UIController = (function(){
    
    //expose or make public funciton
    function itemHtml (item){
        return  ` <div class="item clearfix" id="income-0">
        <div class="item__description">${item.description}</div>
        <div class="right clearfix">
            <div class="item__value">${item.value}</div>
            <div class="item__delete">
                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
            </div>
        </div>
    </div>`
    }
    return {
        getInput: function(){
            return {
                type: document.querySelector('.add__type').value,
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            }
        },
        addItemToUI: function(item,type){
            var element,html;
            if(type === 'inc'){
                element = '.income__list';
            }else if (type == 'exp'){
                element = '.expenses__list';
            }
          html = itemHtml(item);
           document.querySelector(element).insertAdjacentHTML('beforeend', html)
        
            
        }
           
    }
    
})();

//defined Budget Controller
var BudgetController = (function(){
    var Expense = function(id,description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }
    var Income = function(id,description, value){
        this.id = id;
        this.description = description;
        this.value = value
    }
     //create data structure for budget
     data = {
         allItems: {
             inc: [],
             exp:[]
         },
         totals: {
            expense: 0,
            income: 0
         },
         budget: 0
     }
    
    return{
        addNewItem: function(type, description,value){
            var newItem,ID;
            if(data.allItems[type].length === 0){
                ID = 0
            }else{
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }
            if(type === 'inc'){
                newItem = new Income(ID, description, value);
            }else if(type === 'exp'){
                newItem = new Expense(ID, description,value);
            }
            data.allItems[type].push(newItem);
            return newItem;
        },
        updateBudget: function(type){

        },
        testing: function () {
            console.log(data)
        }
    }
})();

//defined EventController
var EventController = (function(uiCtrl, budgetCtr){
    console.log(location.search)
    document.querySelector('.add__btn').addEventListener('click',function(e){
       var inputs;
       //1 get input from UI
       inputs = uiCtrl.getInput();
       //2 add item to expense or income budget controller
        if(inputs.type !== '' &&  inputs.description !== '' && inputs.valu !== '' ){
           var newItem = budgetCtr.addNewItem(inputs.type, inputs.description, inputs.value)
           uiCtrl.addItemToUI(newItem,inputs.type)
              
        }
       //3 add or substarct it to the current budget
       //4 update the ui controller


    })
})(UIController, BudgetController);

