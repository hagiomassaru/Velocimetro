const rideListElement = document.querySelector("#ridelist");
const allRides = getAllRides();

allRides.forEach(async ([id, value]) => {
    const ride = JSON.parse(value);
    ride.id = id;

    const firstPosition = ride.data[0];
    const firstLocationData = await getLocation(
        firstPosition.latitude,
        firstPosition.longitude
    );
    console.log(ride);
    console.log(firstLocationData);
    const itemElement = document.createElement("li");
    itemElement.id = ride.id;

    const cityDiv = document.createElement("div");
    cityDiv.innerText = `${firstLocationData.principalSubdivision} - ${firstLocationData.countryCode}`;
    itemElement.appendChild(cityDiv);

    rideListElement.appendChild(itemElement);
});

async function getLocation(latitude, longitude) {
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&=localityLanguage=en`;

    const response = await fetch(url);
    return await response.json();
}

function getMaxSpeed(positions) {}
