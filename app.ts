import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n \t Welcome To Yashna - Currency Converter\n"));


// Define The List Of Currencies And Their Exchange Rates
let exchange_rate: any = {
    "USD": 1,    // Base Currency
    "EUR": 0.9,  // European Currency (Euro)
    "JYP": 113,  // Japenese Currency (Yen)
    "CAD": 1.3,  // Canadian Dollar
    "AUD": 1.65, // Australian Dollar
    "PKR": 277.70,  // Pakistani Rupees
    // Add More Currencies And Their Exchange Rates Here
}

// Promt The User To Select Currencies To Convert From And To
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select The Currency To Convert From:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select The Currency To Convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]

    },
    {
        name: "amount",
        type: "input",
        message: "Enter The Amount To Convert:"
    }
]);

// Perform Currency Conversion By Using Formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

// Formula Of Conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display The Converted Amount
console.log(`Converted Amount = ${converted_amount.toFixed(2)}`);