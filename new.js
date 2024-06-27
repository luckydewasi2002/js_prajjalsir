function function2 (skills) {
    skills.forEach((skill) => {
        console.log(skill);
    });
}

function greet({ name, age, skills }) {
    console.log(`hello from ${name} and my age is ${age}`);

    function2(skills);
}
const person = {
    Name: "lax",
    age: 24,
    skills: ["Java", "Python", "Cpp"]

}
greet(person);

