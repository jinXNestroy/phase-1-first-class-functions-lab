const scuberDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function (scuberDrivers) {
    let firstTwo = scuberDrivers.slice(0, 2)
    return firstTwo

}

const returnLastTwoDrivers = function (scuberDrivers) {
    let lastTwo = scuberDrivers.slice(2)
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    let fareMultiplier = function (fare) {
        let fareM = fare * num
        return fareM
    }
    return fareMultiplier
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(scuberDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(scuberDrivers)

}
