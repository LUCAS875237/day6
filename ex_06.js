function agent(firstName, lastName, code, age, car)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.code = code;
    this.age = age;
    this.car = car;

    this.isMatching = function(key, value)
    {
        return this.car[key] === value;
    };
}

function searchCars(agents, key, value)
{
    let cars = [];

    agents.forEach(function(agent)
    {
        if(agent.isMatching(key, value))
        {
            cars.push(agent.car);
        }
    });
    return cars;
}

const agents = 
[
    new agent("James", "Bond", "007", 57, {brand: "Aston Martin", model: "DB5", color: "grey"}),
    new agent("Aldric", "Garcia", "001", 31, {brand: "Porshe", model: "GT3", color: "blue"})
];

let result = searchCars(agents, "model", "GT3");
console.log(result);