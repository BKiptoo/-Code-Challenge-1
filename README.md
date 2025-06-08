# Code Challenge 1 Projects

This repository contains three simple web and terminal applications for common daily calculations in Kenya:

- **Boda Boda Fare Calculator**
- **Chai Calculator**
- **Mobile Money Estimator**

---

## 1. Boda Boda Fare Calculator

Estimate Boda Boda (motorbike taxi) fares based on distance traveled.

### Features

- **Web App:** Enter distance in kilometers and get an instant fare breakdown in your browser.
- **Terminal App:** Run the script in Node.js, enter distance, and see the fare breakdown in your terminal.
- **Responsive Design:** Mobile-friendly interface.

### How It Works

- **Base Fare:** KES 50
- **Charge Per Km:** KES 15

**Total Fare = Base Fare + (Distance × Charge Per Km)**

### Usage

#### In the Browser

1. Open `bodaFareCalculator/index.html` in your browser.
2. Enter the distance in kilometers.
3. Click **Kadiria Fare** to see the fare breakdown.

#### In the Terminal

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Run:
   ```bash
   node bodaFareCalculator/fare.js
   ```
3. Enter the distance in kilometers when prompted.

---

## 2. Chai Calculator

A simple calculator to estimate the cost of making tea (chai) based on your ingredients and servings.

> **_Instructions:_**  
> Open the `chaiCalculator` folder and follow the README or instructions in the code to use the calculator.

---

## 3. Mobile Money Estimator

Estimate mobile money transaction costs (e.g., M-Pesa) for sending or withdrawing money.

> **_Instructions:_**  
> Open the `mobileMoneyEstimator` folder and follow the README or instructions in the code to use the estimator.

---

## Project Structure

```
-Code-Challenge-1/
├── bodaFareCalculator/
│   ├── index.html
│   ├── styles.css
│   └── fare.js
├── chaiCalculator/
│   ├── index.html
│   ├── styles.css
│   └── chaiCalculator.js
├── mobileMoneyEstimator/
│   ├── index.html
│   ├── styles.css
│   └── mobileMoneyEstimator.js
└── README.md
```

## Author

Bettson Kiptoo

---

*This project is for learning and demonstration purposes.*