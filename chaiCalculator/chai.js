function calculateChaiRequirements(cups) {
     // Example: 1 cup = 200ml water, 10g sugar, 10g tea leaves, 50ml milk
     const waterPerCup = 200; // ml
     const sugarPerCup = 10;  // g (equivalent to 2 teaspoons)
     const teaPerCup = 10;    // g (equivalent to 1 tablespoon)
     const milkPerCup = 50;   // ml

     return {
          cups,
          totalWater: cups * waterPerCup,
          totalSugar: cups * sugarPerCup / 5, // Convert grams to teaspoons (1 tsp ≈ 5g)
          totalTea: cups * teaPerCup / 10,    // Convert grams to tablespoons (1 tbsp ≈ 10g)
          totalMilk: cups * milkPerCup
     };
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
     document.addEventListener('DOMContentLoaded', function () {
          const chaiForm = document.getElementById('chaiForm');
          const resultDiv = document.getElementById('result');
          const errorDiv = document.getElementById('error');

          chaiForm.addEventListener('submit', function (e) {
               e.preventDefault();
               resultDiv.textContent = '';
               errorDiv.textContent = '';

               const cups = parseInt(document.getElementById('cups').value);

               if (isNaN(cups) || cups < 1) {
                    errorDiv.textContent = "Karibu! Tafadhali weka idadi sahihi ya vikombe (angalau 1).";
                    return;
               }

               const chai = calculateChaiRequirements(cups);

               resultDiv.innerHTML = `
                    <p>To make ${chai.cups} cups of Kenyan Chai, you will need:</p>
                    <ul>
                         <li>Water: ${chai.totalWater} ml</li>
                         <li>Milk: ${chai.totalMilk} ml</li>
                         <li>Tea Leaves (Majani): ${chai.totalTea} tablespoons</li>
                         <li>Sugar (Sukari): ${chai.totalSugar} teaspoons</li>
                    </ul>
                    <strong>Enjoy your Chai Bora!</strong>
               `;
          });
     });
}

// Node.js/Terminal logic
if (typeof window === "undefined" && require.main === module) {
     const readline = require("readline");
     const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
     });

     rl.question("Karibu! How many cups of Chai Bora would you like to make? ", (answer) => {
          const cups = parseInt(answer);
          if (isNaN(cups) || cups < 1) {
               console.log("Karibu! Tafadhali weka idadi sahihi ya vikombe (angalau 1).");
          } else {
               const chai = calculateChaiRequirements(cups);
               console.log(`To make ${chai.cups} cups of Kenyan Chai, you will need:`);
               console.log(`Water: ${chai.totalWater} ml`);
               console.log(`Milk: ${chai.totalMilk} ml`);
               console.log(`Tea Leaves (Majani): ${chai.totalTea} tablespoons`);
               console.log(`Sugar (Sukari): ${chai.totalSugar} teaspoons`);
               console.log("Enjoy your Chai Bora!");
          }
          rl.close();
     });
}