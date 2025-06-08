function estimateTransactionFee(amountToSend) {
     const feeRate = 0.015; // 1.5%
     const minFee = 10; // KES 10
     const maxFee = 70; // KES 70

     let fee = amountToSend * feeRate;
     fee = Math.max(minFee, Math.min(maxFee, fee)); // Apply min and max fee limits
     const totalDebit = amountToSend + fee;

     return {
          amountToSend,
          transactionFee: fee,
          totalDebit
     };
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
     document.addEventListener('DOMContentLoaded', function () {
          const transactionForm = document.getElementById('transactionForm');
          const resultDiv = document.getElementById('result');
          const errorDiv = document.getElementById('error');

          transactionForm.addEventListener('submit', function (e) {
               e.preventDefault();
               resultDiv.textContent = '';
               errorDiv.textContent = '';

               const amount = parseFloat(document.getElementById('amount').value);

               if (isNaN(amount) || amount <= 0) {
                    errorDiv.textContent = "Tafadhali weka kiasi sahihi cha pesa (zaidi ya 0).";
                    return;
               }

               const transaction = estimateTransactionFee(amount);

               resultDiv.innerHTML = `
                    <p>Sending KES ${transaction.amountToSend.toFixed(0)}:</p>
                    <ul>
                         <li>Calculated Transaction Fee: KES ${transaction.transactionFee.toFixed(0)}</li>
                         <li>Total amount to be debited: KES ${transaction.totalDebit.toFixed(0)}</li>
                    </ul>
                    <strong>Send Money Securely!</strong>
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

     rl.question("Unatuma Ngapi? (KES): ", (answer) => {
          const amount = parseFloat(answer);
          if (isNaN(amount) || amount <= 0) {
               console.log("Tafadhali weka kiasi sahihi cha pesa (zaidi ya 0).");
          } else {
               const transaction = estimateTransactionFee(amount);
               console.log(`Sending KES ${transaction.amountToSend.toFixed(0)}:`);
               console.log(`Calculated Transaction Fee: KES ${transaction.transactionFee.toFixed(0)}`);
               console.log(`Total amount to be debited: KES ${transaction.totalDebit.toFixed(0)}`);
               console.log("Send Money Securely!");
          }
          rl.close();
     });
}