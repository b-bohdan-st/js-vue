let news = [
    {
        category: "JS",
        title: "JS оживляє сторінку",
        description: "DOM допомагає керувати елементами",
        date: "12.11.2026"
    },
    {
        category: "Design",
        title: "Дизайн важливий",
        description: "Чому картки важливі для нас?",
        date: "20.11.2026"
    }
];

let newsList = document.querySelector("#news-list");
let newsCount = document.querySelector("#news-count");
let allBtn = document.querySelector("#show-all");
let jsBtn = document.querySelector("#show-js");
let designBtn = document.querySelector("#show-design");

function addNews(items) {
    newsList.innerHTML = '';
    for (let item of items) {
        let card = document.createElement("article");
        card.classList.add("news-card")
        
        let tag = document.createElement("span");
        tag.classList.add("tag");
        tag.textContent = item.category;

        let title = document.createElement("h2");
        title.textContent = item.title;

        let description = document.createElement("p");
        description.textContent = item.description;

        let date = document.createElement("small");
        date.textContent = item.date;

        card.append(tag, title, description, date);
        newsList.append(card);
    };
    newsCount.textContent = news.length;

    allBtn.addEventListener("click", function() {
        addNews(news);
        if (!allBtn.classList.contains('active')) {
            allBtn.classList.add("active");
        }
        jsBtn.classList.remove("active");
        designBtn.classList.remove("active");
    });
    jsBtn.addEventListener("click", function() {
        let jsNews = news.filter(function(item) {
            return item.category === "JS";
        });
        addNews(jsNews);
        if (!jsBtn.classList.contains('active')) {
            jsBtn.classList.add("active");
        }
        allBtn.classList.remove("active");
        designBtn.classList.remove("active");
    });
    designBtn.addEventListener("click", function() {
        let designNews = news.filter(function(item) {
            return item.category === "Design";
        });
        addNews(designNews);
        if (!designBtn.classList.contains('active')) {
            designBtn.classList.add("active");
        }
        allBtn.classList.remove("active");
        jsBtn.classList.remove("active");
    });
};

addNews(news);