// let header = document.getElementsByTagName('h1');
// let header2 = document.getElementById('profile-name');
// let profileName = document.getElementsByClassName('profile-role');
// let header3 = document.querySelector('#skills-list');
// let header4 = document.querySelector('.profile-role');
// let skills = document.querySelectorAll('.skill');
// console.log(header);

let student = {
    name: "Vlada",
    role: "11 IT",
    city: "Kyiv",
    portfolio: "https://github.com"   
};

let nameElement = document.querySelector("#profile-name");
let roleElement = document.querySelector(".profile-role");
let cityElement = document.querySelector("#profile-city");
let portfolioElement = document.querySelector("#profile-link");

nameElement.textContent = student.name;
roleElement.textContent = student.role;
cityElement.textContent = student.city;
// portfolioElement["href"] = students[0].portfolio;
portfolioElement.setAttribute("href", student.portfolio)
portfolioElement.setAttribute("target", "_blank");
// portfolioElement.innerHTML = `<strong>${students[0].portfolio}</strong>`;

let skillsArray = ["HTML", "CSS", "JavaScript"];

let skills = document.querySelectorAll(".skill");
// for (let skill of skills) {}
for (let i = 0; i < skillsArray.length; i++) {
    skills[i].textContent = skillsArray[i];
}
// skills[0].textContent = "HTML";
// skills[1].textContent = "CSS";
// skills[2].textContent = "JavaScript";