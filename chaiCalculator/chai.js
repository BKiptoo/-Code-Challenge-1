function calculateChaiIngredients(numberOfCups) {
     const waterPerCup = 200;  // ml
     const milkPerCup = 50;    // ml
     const teaLeavesPerCup = 1; // tablespoons
     const sugarPerCup = 2;     // teaspoons

     const water = numberOfCups * waterPerCup;
     const milk = numberOfCups * milkPerCup;
     const teaLeaves = numberOfCups * teaLeavesPerCup;
     const sugar = numberOfCups * sugarPerCup;

     console.log(`\nKutengeneza vikombe ${numberOfCups} vya Chai Bora ya Kenya, utahitaji:`);
     console.log(`Maji: ${water} ml`);
     console.log(`Maziwa: ${milk} ml`);
     console.log(`Majani Chai: ${teaLeaves} vijiko`);
     console.log(`Sukari: ${sugar} vijiko vidogo`);
     console.log(`\nFurahia Chai Bora yako! ☕`);
}

// Environment check
if (typeof window !== "undefined" && typeof document !== "undefined") {
     // Running in browser
     const input = prompt("Karibu! Ungependa kutengeneza vikombe vingapi vya Chai Bora?");
     calculateChaiIngredients(Number(input));
} else {
     // Running in Node.js CLI
     const readline = require("readline");
     const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
     });

     rl.question("Karibu! Ungependa kutengeneza vikombe vingapi vya Chai Bora? ", (input) => {
          calculateChaiIngredients(Number(input));
          rl.close();
     });
}
