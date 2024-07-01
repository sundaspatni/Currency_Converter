import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t welcome to 'code_with_resham' -currency converter\n"));
//define the list of currencies and their exchange rates 
let exchange_rate = {
    "USD": 1, // base currency
    "EUR": 0.9, //euro
    "JYP": 113, //yen
    "CAD": 1.3, //canadian dollar
    "AUD": 1.65, //australian dollar
    "PKR": 277.70, // pakistani rupees
};
//prompt the user to select currencies to convert from add to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:",
    }
]);
//perform currency conversion by using formula 
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//display the converted amount
console.log(`Converted Amount = ${converted_amount.toFixed(2)}`);
