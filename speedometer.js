const speedElement = document.querySelector("#speed");
const startBtn = document.querySelector("#start");
const stoptBtn = document.querySelector("#stop");

let watchID = null;

startBtn.addEventListener("click", () => {
    if (watchID) return;
    function handlerSuccess(position) {
        speedElement.innerHTML = position.coords.speed
            ? (position.coords.speed * 3.6).toFixed(1)
            : 0;
    }
    function handlerError(error) {
        console.log(error.msg);
    }

    const options = { enableHighAccuracy: true };

    watchID = navigator.geolocation.watchPosition(
        handlerSuccess,
        handlerError,
        options
    );

    startBtn.classList.add("d-none");
    stoptBtn.classList.remove("d-none");
});

stoptBtn.addEventListener("click", () => {
    if (!watchID) return;
    navigator.geolocation.clearWatch(watchID);
    watchID = null;

    startBtn.classList.remove("d-none");
    stoptBtn.classList.add("d-none");
});
