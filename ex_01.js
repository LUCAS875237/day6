function displayAgentInfo(obj){
    
    var age = obj.age;
    var numbers = obj.numbers;
    var firstName = obj.firstName;
    var lastName = obj.lastName;

    var text = `My name is ${lastName}, ${firstName} ${lastName}! I'm the agent ${numbers} and I'm ${age} years old.`;
    var paragraph = document.querySelector('p')

    paragraph.textContent = text}
var person = {
    age: 57,
    numbers: '007',
    firstName: 'James',
    lastName: 'Bond'}

window.onload = function(){

displayAgentInfo(person)}