/*Create a personAccount out function. It has firstname, lastname, incomes, expenses  inner variables. It has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance inner functions. 
Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.*/

const personAccount = function() {

    let firstname = "Anton"
    let lastname = "Makarskiy"
    
    const incomes = {
        incs: 10000,
        description:'incomes'
    }
    
    let expenses = {
        exps: 2000,
        description:'expenses'
    }
    
    return {
        totalIncome: function() { 
            return incomes.incs 
        }, 
        totalExpense:function() { 
            return expenses.exps
        },
        accountInfo:function() { 
            return firstname + lastname 
        },
        addIncome:function(inc) { 
            let key= Object.keys(inc)[0];
            let value= Object.values(inc)[0];
            incomes[key]=value;
            return incomes;
        }, 
        addExpense:function(exp) { 
            return expenses.exps + exp
        }, 
        accountBalance:function(incomes, expenses) { 
            return incomes.incs - expenses.exps
        } 
    };
};
    
console.log(personAccount().addIncome({'bonus':1000})); 

