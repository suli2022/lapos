
const dolgozoTorzs = document.querySelector("#dolgozoTorzs");

const dolgozoLista = [
    { name: "Pali", city: "Szolnok", salary: 385 },
    { name: "Kait", city: "Szolnok", salary: 320 },
    { name: "Mari", city: "Szeged", salary: 395 },
    { name: "Dani", city: "Szeged", salary: 401 },
    { name: "Atti", city: "Miskolc", salary: 372 },
    { name: "Pisti", city: "Szolnok", salary: 357 },
    { name: "Géza", city: "Pécs", salary: 325 }
];

dolgozoLista.forEach((dolgozo) => {
    console.log(dolgozo.name);
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdCity = document.createElement('td');
    let tdSalary = document.createElement('td');
    tdName.textContent = dolgozo.name;
    tdCity.textContent = dolgozo.city;
    tdSalary.textContent = dolgozo.salary;
    dolgozoTorzs.append(tr);
    tr.append(tdName);
    tr.append(tdCity);
    tr.append(tdSalary);
});
