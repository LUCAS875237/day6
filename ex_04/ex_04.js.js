function updateLicensePlates(agent, plate)
{
    if(!agent.car)
    {
        agent.car = {};
    }

    agent.car.licensePlates = plate;
    return agent;
}

function showLicensePlates(agent)
{
    if(!agent.car || !agent.car.licensePlates)
    {
        console.error("No car or license plates found for this agent.");
        return;
    }
    const ul = document.querySelector(".plates-container");
    ul.innerHTML = '';
    
    agent.car.licensePlates.forEach(function(plate)
    {
        const li = document.createElement('li');
        li.textContent = plate;
        ul.appendChild(li);
    });
}

let person =
{
    age: 57,
    numbers: '007',
    firstName: 'James',
    lastName: 'Bond'
};

let plates = ["LU 6789", "4711-EA-62", "BMT 216A"];
let updatedAgent = updateLicensePlates(person, plates);

showLicensePlates(updatedAgent);