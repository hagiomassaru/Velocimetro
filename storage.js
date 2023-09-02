

function createNewRide() {
    const rideID = Date.now();
    const rideRecord = {
        data: [],
        startTime: rideID,
        stopTime: null,
    };
    localStorage.setItem(rideID, JSON.stringify(rideRecord));
    return rideID;
}
function getRideRecord(rideID) {
    return JSON.parse(localStorage.getItem(rideID));
}
function addPosition(rideID, position) {
    const rideRecord = getRideRecord(rideID);
    const newData = {

    }
}
