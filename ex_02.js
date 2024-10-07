function addCar(agentString, car) {
    let object = JSON.parse(agentString)

    object.car = car;

    return object;}

agentString = '{"age": 57, "numbers": "007", "firstName": "James", "lastName": "Bond"}'
let car = "Aston Martin";

let updated = addCar(agentString, car);

console.log(updated);