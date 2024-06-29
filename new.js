const vehicle = {
    vehicleModel: 'Tesla Model 3',
    vehiclePrice: 49999,
    vehicleColor: 'Midnight Silver Metallic',
    vehicleFeatures: ['Autopilot', 'Long Range Battery', 'Premium Interior'],
    vehicleSpecs: {
        horsepower: 283,
        torque: '273 lb-ft',
        topSpeed: '140 mph'
    }
};


function function2 (vehicleFeatures) {
    vehicleFeatures.forEach((vehicleFeatures) => {
        console.log(vehicleFeatures);
    });
}


function printVehicleInfo({vehicleModel,vehiclePrice,vehicleColor,vehicleFeatures,vehicleSpecs}){
    console.log(`my vehicle  model is :${vehicleModel} and my vehicle price is :${vehiclePrice} and vehicle color is :
         ${vehicleColor} and vehicle features is :${vehicleFeatures} and vehicles specs is :${vehicleSpecs}`)
              function2(vehicleFeatures)
        }

printVehicleInfo(vehicle);