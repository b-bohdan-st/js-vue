let studentsName = document.querySelector("#studentsName");
let profileName = document.querySelector(".profile-name");

studentsName.addEventListener("input", function() {
    let name = studentsName.value.trim();
    if (name === "") {
        profileName.textContent = "Hi there, Guest";
    } else {
        profileName.textContent = `Hi there, ${name}`;
    }
});

let submitBtn = document.querySelector("#submit");
let profileDescription = document.querySelector(".profile-description");
let profileDescriptionInput = document.querySelector("#profileDescriptionInput")
submitBtn.addEventListener('click', function() {
    let description = profileDescriptionInput.value.trim();
    if (description === "") {
        profileDescription.textContent = "(Nothing was entered)"
    }
    else {
        profileDescription.textContent = description
    }
    submitBtn.classList.add("success");
    submitBtn.textContent = "Changes saved";
});

let detailBtn = document.querySelector("#detailBtn");
let oddInfo = document.querySelector(".odd-info");
detailBtn.addEventListener('click', function() {
    oddInfo.classList.toggle("hidden");
    if (oddInfo.classList.contains("hidden")) {
        detailBtn.textContent = "Show odd info";
    } else {
        detailBtn.textContent = "Hide odd info";
    }
});

let profileSettings = document.querySelector(".profile-settings");
let themeSelect = document.querySelector("#themeSelect");
themeSelect.addEventListener("change", function() {
    if (themeSelect.value === "dark") {
        profileSettings.classList.add('dark');
    } else {
        profileSettings.classList.remove('dark');
    }
});