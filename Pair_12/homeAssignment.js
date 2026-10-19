let courses = [
    {id: 1, title: "Blender. 3D моделювання", category: "IT технології", price: 600, duration: 50, rating: 4.3, available: true},
    {id: 2, title: "Базові комп'ютерні навички", category: "IT технології", price: 300, duration: 10, rating: 4.7, available: true},
    {id: 3, title: "HTML, CSS, JavaScript", category: "IT технології", price: 700, duration: 50, rating: 5, available: true},
    {id: 4, title: "Pascal", category: "IT технології", price: 150, duration: 20, rating: 3.3, available: false},
    {id: 5, title: "Основи графічного дизайну", category: "Дизайн", price: 450, duration: 30, rating: 4.6, available: true},
    {id: 6, title: "UI/UX дизайн для початківців", category: "Дизайн", price: 500, duration: 35, rating: 4.7, available: true},
    {id: 7, title: "Основи психології людини", category: "Психологія", price: 350, duration: 25, rating: 4.2, available: true},
    {id: 8, title: "Курс саморозвитку", category: "Психологія", price: 300, duration: 20, rating: 4.5, available: true},
]

let choice = -1;
while (choice !== 0) {
    let menu = +prompt(`Оберіть пункт меню:
1 - пошук курсу за id
2 - виведення всіх курсів за категорією
3 - пошук курсів за сумою нижче введеної
4 - пошук курсу за частиною назви
5 - формування списку курсів (лише з назвами)
6 - формування списку курсів (назва та знижка)
7 - сортування курсів за зростанням вартості
8 - сортування курсів за спаданням рейтингу
9 - сортування курсів за назвою в алфавітному порядкому
10 - обчислення загальної та середньої вартості доступних курсів`)
    choice = menu;
    if (choice === 1) {
		let courseId = +prompt("Введіть номер курсу:");
		let found = courses.find(course => course.id === courseId);
		if (found) {
            let ifAvailable = found.available;
            let isAvailable = "";
            if (ifAvailable) {
                isAvailable = "так";
            }
            else {
                isAvailable = "ні";
            }
			alert(`Назва: ${found.title}\nКатегорія: ${found.category}\nЦіна: ${found.price} грн\nРейтинг: ${found.rating}\nДоступний: ${isAvailable}`);
		} else {
			alert(`Курса з ID ${courseId} не існує`);
		}
	}
	else if (choice === 2) {
		let categoryName = prompt("Введіть назву категорії:");
		let categoryCourses = courses.filter(course => course.category.toLowerCase().includes(categoryName.toLowerCase()));
		if (categoryCourses.length > 0) {
			let resultText = "";
			for (let i = 0; i < categoryCourses.length; i++) {
				resultText += `${categoryCourses[i].title}\n`;
			}
			alert(resultText);
		} else {
			alert("Курсів у такій категорії не знайдено.");
		}
	}
	else if (choice === 3) {
		let priceEnter = +prompt("Введіть ціну:");
		let priceCources = courses.filter(course => course.price <= priceEnter);
		if (priceCources.length > 0) {
			let resultText = "";
			for (let i = 0; i < priceCources.length; i++) {
				resultText += `${priceCources[i].title} - ${priceCources[i].price} грн\n`;
			}
			alert(resultText);
		} else {
			alert("Немає курсів з такою або нижчою ціною.");
		}
	}
	else if (choice === 4) {
		let nameEnter = prompt("Введіть назву курсу (або частину назви):");
		let nameCourses = courses.filter(course => course.title.toLowerCase().includes(nameEnter.toLowerCase()));
		if (nameCourses.length > 0) {
			let resultText = "";
			for (let i = 0; i < nameCourses.length; i++) {
				resultText += nameCourses[i].title + "\n";
			}
			alert(resultText);
		} else {
			alert(`Жоден з курсів не містить "${nameEnter}" у назві.`);
		}
	}
	else if (choice === 5) {
		let namesCourses = courses.map(course => course.title);
		let resultText = "";
		for (let i = 0; i < namesCourses.length; i++) {
			resultText += namesCourses[i] + "\n";
		}
		alert(`Створено список:\n${resultText}`);
	}
	else if (choice === 6) {
		let namesDiscountCourses = courses.map(course => {
			let discountedPrice = course.price * 0.85;
			return `${course.title} — ${discountedPrice} грн`;
		});
		let resultText = "";
		for (let i = 0; i < namesDiscountCourses.length; i++) {
			resultText += `${namesDiscountCourses[i]}\n`;
		}
		alert(resultText);
	}
	else if (choice === 7) {
		let sortedPriceCources = courses.slice().sort((a, b) => a.price - b.price);
		let resultText = "";
		for (let i = 0; i < sortedPriceCources.length; i++) {
			resultText += `${sortedPriceCources[i].title} — ${sortedPriceCources[i].price} грн\n`;
		}
		alert(resultText);
	}
	else if (choice === 8) {
		let sortedRatingCources = courses.slice().sort((a, b) => b.rating - a.rating);
		let resultText = "";
		for (let i = 0; i < sortedRatingCources.length; i++) {
			resultText += `${sortedRatingCources[i].title} (Рейтинг: ${sortedRatingCources[i].rating})\n`;
		}
		alert(resultText);
	}
	else if (choice === 9) {
		let sortedNameCources = courses.slice().sort((a, b) => {
			if (a.title > b.title) {
				return 1;
			}
			else if (a.title < b.title) {
				return -1;
			}
			else {
				return 0;
			}
		});
		let resultText = "";
		for (let i = 0; i < sortedNameCources.length; i++) {
			resultText += `${sortedNameCources[i].title}\n`;
		}
		alert(resultText);
	}
	else if (choice === 10) {
		let availableCources = courses.filter(course => course.available === true);
		let totalCost = 0;
		for (let i = 0; i < availableCources.length; i++) {
			totalCost += availableCources[i].price;
		}
		let avgCost = 0;
		if (availableCources.length > 0) {
			avgCost = Math.round(totalCost / availableCources.length);
		} else {
			avgCost = 0;
		}
		alert(`Доступних курсів: ${availableCources.length}\nЗагальна вартість: ${totalCost} грн\nСередня вартість: ${avgCost} грн`);
	}
}