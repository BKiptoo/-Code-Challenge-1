function calculateBodaFare(distanceInKm) {
     const baseFare = 50;
     const chargePerKm = 15;
     const tripFare = distanceInKm * chargePerKm;
     const totalFare = baseFare + tripFare;

     return {
          baseFare,
          chargePerKm,
          tripFare,
          totalFare,
          distanceInKm
     };
}

// Browser logic
if (typeof window !== "undefined" && typeof document !== "undefined") {
     document.addEventListener('DOMContentLoaded', function () {
          const fareForm = document.getElementById('fareForm');
          const errorDiv = document.getElementById('error');
          const resultDiv = document.getElementById('result');
          const fareDetailsDiv = document.getElementById('fareDetails');

          fareForm.addEventListener('submit', function (e) {
               e.preventDefault();
               errorDiv.textContent = '';
               resultDiv.textContent = '';
               fareDetailsDiv.textContent = '';

               const distance = parseFloat(document.getElementById('distance').value);

               if (isNaN(distance) || distance <= 0) {
                    errorDiv.textContent = "Please enter a valid distance in kilometers (positive number).";
                    return;
               }

               const fare = calculateBodaFare(distance);

               resultDiv.textContent = `Total Fare: KES ${fare.totalFare}`;
               fareDetailsDiv.innerHTML = `
                    <ul>
                         <li>Base Fare: KES ${fare.baseFare}</li>
                         <li>Distance: ${fare.distanceInKm} km</li>
                         <li>Distance Charge: KES ${fare.tripFare}</li>
                    </ul>
                    <strong>Panda Pikipiki!</strong>
               `;
          });
     });
}

// Node.js logic
if (typeof window === "undefined" && require.main === module) {
     const readline = require("readline");
     const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
     });

     rl.question("Unafika wapi Mkubwa? Kilometer ngapi? ", (answer) => {
          const fare = calculateBodaFare(Number(answer));
          console.log(`Uko kwote? Io ni ${fare.distanceInKm} km:`);
          console.log(`Ukikalia Pikipiki: KES ${fare.baseFare}`);
          console.log(`Mpaka Uko: KES ${fare.tripFare}`);
          console.log(`Total: KES ${fare.totalFare}`);
          console.log(`\nPanda Pikipiki!`);
          rl.close();
     });
}
