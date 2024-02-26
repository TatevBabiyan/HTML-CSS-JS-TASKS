var myArray = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        department: "Engineering",
        role: { title: "Frontend Developer", level: "Mid" },
        contact: { email: "john.doe@example.com", phone: "123-456-7890" },
        skills: ["JavaScript", "React", "CSS"]
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 28,
        department: "Design",
        role: { title: "UI/UX Designer", level: "Senior" },
        contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
        skills: ["Figma", "Sketch", "Adobe XD"]
    },
];

buildTable(myArray);

function buildTable(data) {
    var table = document.getElementById('MyTable');
    table.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].age}</td>
            <td>${data[i].department}</td>
            <td>${data[i].role.title}</td>
            <td>${data[i].role.level}</td>
            <td>${data[i].contact.email}</td>
            <td>${data[i].contact.phone}</td>
            <td>${data[i].skills.join(", ")}</td>
            <td><button onclick="removeEmployeeById(${data[i].id})">Remove</button></td>
        </tr>`;
        table.innerHTML += row;
    }
}

function addEmployee() {
    var newEmployee = {
        id: myArray.length + 1,
        name: "New Employee",
        age: 25,
        department: "New Department",
        role: { title: "New Role", level: "Entry" },
        contact: { email: "new.employee@example.com", phone: "000-000-0000" },
        skills: ["New Skill"]
    };
    myArray.push(newEmployee);
    buildTable(myArray);
}

function removeEmployee() {
    myArray.pop();
    buildTable(myArray);
}

function removeEmployeeById(id) {
    myArray = myArray.filter(employee => employee.id !== id);
    buildTable(myArray);
}
