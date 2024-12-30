## Repository Magdelena Kałucka
This repository present UI tests for one website:
> https://www.automationexercise.com. 

 I used different testing frameworks, like as **Playwright**, **Cypress**, **Selenium** and **Specflow** and using two languages programming  **C#(.NET 8)** and **Typescript**. To write tests in Playwright and Cypress, I used  **Visual Studio Code** and to write test based on Specflow, I worked with **Visual Studio 2022**

Also, the repository contains API tests implemented in **RestSharp**  with **SpecFlow** using the public API on the page: 
> https://reqres.in/

## How to run tests in frameworks:


### Playwright

Type following commands in the terminal in IDE

- Installing new project in Playwright - requirement is installed Node.js 18+ 
 check `NodeJS` version: 
`node -v`

```npm init playwright@latest```

Choose TypeScript. Name of your Tests folder.  Add a GitHub Actions workflow and Install Playwright browsers.

- run tests
 ```npx playwright test```
 
- run tests in headed
```npx playwright test --headed```

- raport with tests
```npx playwright show-raport```  

### Cypress 

 Type fallowing commands in the terminal in IDE
 
- install new project Cypress
```npm install cypress --save-dev```

- run tests 
`npx cypress run`

### SpecFlow/ Selenium 

Two options to run tests:
- run in the Test Explorer in your IDE
- go to the folder with projects, open terminal and type: 
`dotnet test`  

To generate raport with results after tests execution install  **LivingDoc.CLI** on your computer. Type in the terminal to install: 
`dotnet tool install --global SpecFlow.Plus.LivingDoc.CLI`

Generated raport will be in test assembly folder, follow the path .../bin/Debug/net8.0/TestReport  