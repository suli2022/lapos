
const dolgozoTorzs = document.querySelector("#dolgozoTorzs");
const nameInput = document.querySelector("#name");
const cityInput = document.querySelector("#city");
const salaryInput = document.querySelector("#salary");
const addButton = document.querySelector("#addButton");

const modifyIdInput = document.querySelector("#modifyId");
const modifyNameInput = document.querySelector("#modifyName");
const modifyCityInput = document.querySelector("#modifyCity");
const modifySalaryInput = document.querySelector("#modifySalary");

const saveButton = document.querySelector('#saveButton');

const dolgozoLista = [
    { id: 1, name: "Pali", city: "Szolnok", salary: 385 },
    { id: 2, name: "Kait", city: "Szolnok", salary: 320 },
    { id: 3, name: "Mari", city: "Szeged", salary: 395 },
    { id: 4, name: "Dani", city: "Szeged", salary: 401 },
    { id: 5, name: "Atti", city: "Miskolc", salary: 372 },
    { id: 6, name: "Pisti", city: "Szolnok", salary: 357 },
    { id: 7, name: "Géza", city: "Pécs", salary: 325 }
];

function loadEmployees() {
    dolgozoLista.forEach((dolgozo) => {
        let tr = document.createElement('tr');
        let tdId = document.createElement('td');
        let tdName = document.createElement('td');
        let tdCity = document.createElement('td');
        let tdSalary = document.createElement('td');
        tdId.textContent = dolgozo.id;
        tdName.textContent = dolgozo.name;
        tdCity.textContent = dolgozo.city;
        tdSalary.textContent = dolgozo.salary;
        dolgozoTorzs.append(tr);
        tr.append(tdId);
        tr.append(tdName);
        tr.append(tdCity);
        tr.append(tdSalary);
        tr.append(generateDeleteButton(dolgozo.id));
        tr.append(generateModifyButton(dolgozo));
    });
}

loadEmployees();

function generateDeleteButton(id) {
    let tdDel = document.createElement('td');
    let button = document.createElement('button');
    button.textContent = "Törlés";
    button.classList = "btn btn-primary";
    handleDeleteEvent(button, id);
    tdDel.append(button);
    return tdDel;
}

function handleDeleteEvent(button, id) {
    button.addEventListener('click', () => {        
        let delIndex = 0;
        dolgozoLista.forEach((dolgozo, index) => {
            if(dolgozo.id == id) {
                delIndex = index;
            }
        } );
        dolgozoLista.splice(delIndex, 1);
        dolgozoTorzs.textContent = "";
        loadEmployees();
    });
}

function generateModifyButton(dolgozo) {
    let tdModify = document.createElement('td');
    let button = document.createElement('button');
    button.textContent = "Módosítás";
    button.classList = "btn btn-primary";
    button.setAttribute('data-bs-toggle', 'modal'); 
    button.setAttribute('data-bs-target', '#modifyModal'); 
    handleModifyEvent(button, dolgozo);
    tdModify.append(button);
    return tdModify;
}

function handleModifyEvent(button, dolgozo) {
    button.addEventListener('click', () => {        
        console.log(dolgozo.name)
        modifyIdInput.value = dolgozo.id;
        modifyNameInput.value = dolgozo.name;
        modifyCityInput.value = dolgozo.city;
        modifySalaryInput.value = dolgozo.salary;
    });
}

saveButton.addEventListener('click', () => {
    console.log('Mentés árnyékeljárás...');
    let id = modifyIdInput.value;
    let name = modifyNameInput.value;
    let city = modifyCityInput.value;
    let salary = modifySalaryInput.value;
    // console.log(id, name, city, salary);

    dolgozoLista.forEach( (dolgozo) => {
        if(dolgozo.id == id) {
            console.log(dolgozo.name)
            dolgozo.name = name;
            dolgozo.city = city;
            dolgozo.salary = salary;
        }
    });
    dolgozoTorzs.textContent = "";
    loadEmployees();    

});

addButton.addEventListener('click', () => {
    addEmployee();
});

function addEmployee() {
    dolgozo = {
        name: nameInput.value,
        city: cityInput.value,
        salary: salaryInput.value
    };
    dolgozoLista.push(dolgozo);
    clearFields();
    dolgozoTorzs.textContent = "";
    loadEmployees();
}

function clearFields() {
    nameInput.value = "";
    cityInput.value = "";
    salaryInput.value = "";
}