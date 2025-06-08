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

A simple web and terminal application to estimate the ingredients needed to make your perfect cup(s) of Kenyan chai.

### Features

- **Web App:** Enter the number of cups and get an instant breakdown of required ingredients in your browser.
- **Terminal App:** Run the script in Node.js, enter the number of cups, and see the ingredient breakdown in your terminal.
- **Responsive Design:** Mobile-friendly interface for easy use on any device.

### How It Works

For each cup of chai, the calculator uses:

- **Water:** 200 ml
- **Sugar:** 10 g
- **Tea Leaves:** 10 g
- **Milk:** 50 ml

**Total Ingredients = Number of Cups × Amount per Cup**

### Usage

#### In the Browser

1. Open `chaiCalculator/index.html` in your browser.
2. Enter the number of cups you want to make.
3. Click **Hesabu Mahitaji** to see the ingredient breakdown.

#### In the Terminal

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Run:
   ```bash
   node chaiCalculator/chai.js
   ```
3. Enter the number of cups when prompted.

---

## 3. Mobile Money Estimator

Estimate mobile money transaction costs (e.g., M-Pesa) for sending or withdrawing money.

### Features

- **Web App:** Enter the amount and get an instant estimate of transaction costs in your browser.
- **Terminal App:** Run the script in Node.js, enter the amount, and see the transaction cost breakdown in your terminal.
- **Responsive Design:** Mobile-friendly interface.

### Usage

> **Instructions:**  
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
│   └── chai.js
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