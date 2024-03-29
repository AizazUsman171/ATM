#! usr/bin/env node
import inquirer from "inquirer";

let CurrentAcc = 10000;
let SavingAcc = 20000;

let try1 = 0;

while(try1 <=3){
const answers = await inquirer.prompt([{message: "Enter Your PIN",type: "number",name: "pin"},
                                      {message: '1:Balance Inquiry\n2:Cash Withdrawl\n3:Cash Deposit\n',type:"number",name: "task"},
                                      {message: '1:Current Account\n2:Saving Account\n' ,type: "number",name: "accType"},
                                      {message: 'Enter Amount\n' ,type: "number",name: "cash"}
                                      ]);

if(answers.pin===1217){
    console.log("Your PIN is correct\n");
    console.log(answers.task);
    if(answers.task===1){
        console.log(answers.accType);
        if(answers.accType===1){
            console.log("Your balance is ",CurrentAcc,"\n");
        }
        else if(answers.accType===2){
            console.log("Your balance is ", SavingAcc,"\n");
        }
        else{
            console.log("Kindly Select correct option!\n");
        }
    
    }

    else if(answers.task===2){
        console.log(answers.accType);
        if(answers.accType === 1){
            console.log(answers.cash);
            if(answers.cash<=CurrentAcc){
                CurrentAcc = CurrentAcc - answers.cash;
                console.log("Your remaining balance is ", CurrentAcc, "\n");
            }else{
                console.log("Insufficient Balance\n");
            }
        }
        else if(answers.accType === 2){
            console.log(answers.cash);
            if(answers.cash<=SavingAcc){
                SavingAcc = SavingAcc - answers.cash;
                console.log("Your remaining balance is ", SavingAcc, "\n");
            }else{
                console.log("Insufficient Balance\n");
            }
        }
        else{
            console.log("Kindly Select correct option!\n");
        }

    }
    else if(answers.task===3){
        console.log(answers.accType);
        if(answers.accType === 1){
            console.log(answers.cash);
            CurrentAcc = CurrentAcc + answers.cash;
            console.log("Your new balance is ", CurrentAcc, "\n");
        }
        else if(answers.accType === 2){
            console.log(answers.cash);
            SavingAcc = SavingAcc + answers.cash;
            console.log("Your new balance is ", SavingAcc, "\n");
        }
        else{
            console.log("Kindly Select correct option!\n");
        }
    }
    
    else{
        console.log("Kindly Select correct option!\n");
    }
    

        

}
else{
    console.log("Incorrect Pin!");
    const answer = await inquirer.prompt([{message: "DO you want to try Again? yes(1) no(0)",type: "number",name: "retry"}]);
    if(answer.retry===1){
        try1++;
    }
    else{
        break;
    }

}
}

