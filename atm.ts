#! usr/bin/env node
import inquirer from "inquirer";

let CurrentBal = 10000;
let SavingBal = 20000;
let trials = 0;
let notExit = true;

while(trials <3 && notExit===true){
const answers = await inquirer.prompt([{message: "Enter Your PIN",type: "number",name: "pin"} ]);

if(answers.pin===1217 ){
    console.log("Your PIN is correct\n");
    const answer = await inquirer.prompt([{message: "Kindly Select Option",type: "list", name: "task",choices :["Balance Inquiry","Cash Withdraw","Cash Deposit"]}]);
    if(answer.task==="Balance Inquiry"){
        const answer = await inquirer.prompt([{message: "Kindly Select Option", type: "list", name: "account", choices :["Current Account", "Saving Account"]}]);
         if(answer.account==="Current Account"){
            console.log("Your Current Account Balance is", CurrentBal);
            
         }
         else{
            console.log("Your Saving Account Balance is", SavingBal);
         }
    // const answers = inquirer.prompt([{message: "Do you want to proceed to more options",type: "confirm",name: "proceed"}]);
    // if(answer.proceed){
    //     notExit = false;
    // }          
    }
    else if(answer.task==="Cash Withdraw"){
        const answer = await inquirer.prompt([{message: "Kindly Select Option", type: "list", name: "account", choices :["Current Account", "Saving Account"]}]);
        if(answer.account==="Current Account"){
            const answer  = await inquirer.prompt([{message: "Enter Amount", type: "number", name: "amount"}]);
            if(answer.amount<=CurrentBal){
                console.log(`Your Current Account Balance is ${CurrentBal-answer.amount}`);
            }
            else{
                console.log("Insufficient Balance");
            }   
        }
        else{
            const answer  = await inquirer.prompt([{message: "Enter Amount", type: "number", name: "amount"}]);
            if(answer.amount<=SavingBal){
                console.log(`Your Current Account Balance is ${SavingBal-answer.amount}`);
            }
            else{
                console.log("Insufficient Balance");
            }   
        }
    //     const answers = inquirer.prompt([{message: "Do you want to proceed to more options",type: "confirm",name: "proceed"}]);
    //     if(answer.proceed){
    //         notExit = false;
    //     } 
    }


    else if(answer.task==="Cash Deposit"){
        const answer = await inquirer.prompt([{message: "Kindly Select Option", type: "list", name: "account", choices :["Current Account", "Saving Account"]}]);
        if(answer.account==="Current Account"){
            const answer  = await inquirer.prompt([{message: "Enter Amount", type: "number", name: "amount"}]);
            CurrentBal = CurrentBal+answer.amount;
            console.log("Your New Current Account Balance is", CurrentBal);

        }
        else{
            const answer  = await inquirer.prompt([{message: "Enter Amount", type: "number", name: "amount"}]);
            SavingBal = SavingBal+answer.amount;
            console.log("Your New Saving Account Balance is", SavingBal);
        }
    }
    // const answers = inquirer.prompt([{message: "Do you want to proceed to more options",type: "confirm",name: "proceed"}]);
    // if(answer.proceed){
    //     notExit = false;
    // } 
notExit = false;
}

else{
    console.log("Your PIN is incorrect\n");
    const answer = await inquirer.prompt([{message: "Do You Want To Try Again", type: "confirm", name: "try"}]);
    if(answer.try){
        trials++;
    }
    else{
        notExit = false;
    }
}
}