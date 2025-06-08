function calculateChaiIngredients(numberOfCups) {
     const waterPerCup = 200; 
     const milkPerCup = 50;   
     const teaLeavesPerCup = 1;
     const sugarPerCup = 2;
     
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
     // Browser
     const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
     calculateChaiIngredients(Number(input));
} else {
     // Node.js CLI
     const readline = require("readline");
     const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
     });

     rl.question("Karibu! How many cups of Chai Bora would you like to make?", (input) => {
          calculateChaiIngredients(Number(input));
          rl.close();
     });
}
