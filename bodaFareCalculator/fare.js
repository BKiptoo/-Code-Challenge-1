function calculateBodaFare(distanceInKm) {
     const baseFare = 50;
     const chargePerKm = 15;
     const tripFare = distanceInKm * chargePerKm;
     const totalFare = baseFare + tripFare;

     console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
     console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
     console.log(`Mpaka Uko: KES ${tripFare}`);
     console.log(`Total: KES ${totalFare}`);
     console.log(`\nPanda Pikipiki!`);
}

const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
calculateBodaFare(Number(input));
