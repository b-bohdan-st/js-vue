// let book = {
//     title: "Кобзар",
//     author: "Тарас Шевченко",
//     year: 1840,
//     price: 500,
//     isAvailable: true
// };

// console.log(book)
// console.log(book.title)

// let books = [
//     {
//         id: 1,
//         title: "Кобзар",
//         author: "Тарас Шевченко",
//         year: 1840,
//         price: 500,
//         isAvailable: true
//     },
//     {
//         id: 2,
//         title: "Лісова Пісня",
//         author: "Леся Українка",
//         year: 1918,
//         price: 600,
//         isAvailable: true
//     },
//     {
//         id: 3,
//         title: "Тигролови",
//         author: "Іван Багряний",
//         year: 1944,
//         price: 450,
//         isAvailable: false
//     },
//     {
//         id: 4,
//         title: "Місто",
//         author: "Валер'ян Підмогильний",
//         year: 1928,
//         price: 550,
//         isAvailable: true
//     }
// ]

// console.log(books);
// console.log(books.length);
// console.log(books[3]);

// for (let book of books) {
//     console.log(`book: ${book.title} - ${book.author}`)
// }

// books.forEach(function (book) {
//     console.log(`book: ${book.author}, book: ${book.isAvailable}`)
// });

// let isAvailableCount = 0;
// let totalPrice = 0;
// for (let book of books) {
//     if (book.isAvailable === true) {
//         isAvailableCount++;
//     };
//     totalPrice += book.price;
// }

// console.log(totalPrice);
// console.log(isAvailableCount);

// books[1].price = 750;
// console.log(books);

// books.push({
//     id: 5,
//     title: "Захар Беркут",
//     author: "Іван Франко",
//     year: 1882,
//     price: 500,
//     isAvailable: false
// });

// let enterId = +prompt("Enter your book id:");
// let bookFound = null;

// for (book of books) {
//     if (book.id === enterId) {
//         bookFound = book;
//         break;
//     }
// }

// if (bookFound !== null) {
//     status = "Book is not available";
//     if (bookFound.isAvailable) {
//         status = "Book is available"
//         alert(`Книга ${bookFound.title}. ${bookFound.price} грн. ${status}`)
//     }
// }
// else {
//     alert("Книжку не знайдено");
// }

//_______________________________________________________praktychna

let clubs = [
	{
		id: 1,
		name: "Програмування",
		category: "IT",
		price: 500,
		members: 10,
		active: true
	},
	{
		id: 2,
		name: "Малювання",
		category: "Мистецтво",
		price: 300,
		members: 8,
		active: false
	},
	{
		id: 3,
		name: "Шахи",
		category: "Спорт",
		price: 250,
		members: 12,
		active: true
	}
];

let choice = -1;

while (choice !== 0) {
	choice = +prompt(`1 - Показати всі гуртки
2 - Знайти гурток за ID
3 - Записати учасника
4 - Змінити статус набору
5 - Додати новий гурток
6 - Показати статистику
0 - Вихід`);
	if (choice === 1) {
		let result = "";
		let status = "";
		for (let i = 0; i < clubs.length; i++) {
			if (clubs[i].active === true) {
				status = "відкритий";
			} else if (clubs[i].active === false) {
				status = "закритий";
			}
			result += `ID: ${clubs[i].id};
Назва: ${clubs[i].name};
Категорія: ${clubs[i].category};
Ціна: ${clubs[i].price} грн;
Учасники: ${clubs[i].members};
Набір: ${status};\n`;
		}
		alert(result);
	} else if (choice === 2) {
		let id = +prompt("Введіть ID гуртка");
		let found = false;
		let status = "";
		for (let i = 0; i < clubs.length; i++) {
            if (clubs[i].active === true) {
                status = "відкритий";
            } else if (clubs[i].active === false) {
                status = "закритий";
            } else {
                alert("Помилка! Невірний статус");
            }
			if (clubs[i].id === id) {
				alert(`ID: ${clubs[i].id}
Назва: ${clubs[i].name}
Категорія: ${clubs[i].category}
Ціна: ${clubs[i].price} грн
Учасники: ${clubs[i].members}
Набір: ${status}`);
				found = true;
				break;
			}
		}
		if (!found) {
			alert("Помилка! Гурток з таким ID не знайдено");
		}
	} else if (choice === 3) {
		let id = +prompt("Введіть ID гуртка");
		let found = false;
		for (let i = 0; i < clubs.length; i++) {
			if (clubs[i].id === id) {
				found = true;
				if (clubs[i].active) {
					clubs[i].members++;
					alert(`Учасника записано до гуртка "${clubs[i].name}". Кількість учасників: ${clubs[i].members}`);
				} else {
					alert("Набір до цього гуртка закритий");
				}
				break;
			}
		}
		if (!found) {
			alert("Помилка! Гурток з таким ID не знайдено");
		}
	} else if (choice === 4) {
		let id = +prompt("Введіть ID гуртка");
		let found = false;
        let status = "";
		for (let i = 0; i < clubs.length; i++) {
            if (clubs[i].id === id) {
                clubs[i].active = !clubs[i].active;

                if (clubs[i].active === true) {
                    status = "відкритий";
                } else if (clubs[i].active === false) {
                    status = "закритий";
                } else {
                    alert("Помилка! Невірний статус");
                    break;
                }

                alert(`Статус набору для гуртка "${clubs[i].name}" змінено на "${status}"`);
                found = true;
                break;
            }
        }
        if (!found) {
            alert("Помилка! Гурток з таким ID не знайдено");
        }
	} else if (choice === 5) {
		let id = clubs.length + 1;
		let name = prompt("Введіть назву гуртка:");
		let category = prompt("Введіть категорію гуртка:");
		let price = +prompt("Введіть ціну гуртка:");
		let members = +prompt("Введіть кількість учасників:");
        let statusEnter = prompt("Введіть статус (відкритий або закритий):").toLowerCase();
        let status = true;
        if (statusEnter === "відкритий") {
            status = true;
        } else if (statusEnter === "закритий") {
            status = false;
        } else {
            alert("Помилка! Невірно введено статус")
        }
		if (price >= 0 && members >= 0) {
			clubs.push({
				id: id,
				name: name,
				category: category,
				price: price,
				members: members,
				active: status
			});
			alert("Новий гурток успішно додано");
		} else {
			alert("Помилка! Невірно введено дані");
		}
	} else if (choice === 6) {
		let totalMembers = 0;
		let totalPrice = 0;
		let activeClubs = 0;
		let closedClubs = 0;
		for (let i = 0; i < clubs.length; i++) {
			totalMembers += clubs[i].members;
			totalPrice += clubs[i].price;
			if (clubs[i].active) {
				activeClubs++;
			} else {
				closedClubs++;
			}
		}
		alert(`Усього гуртків: ${clubs.length}
Загальна кількість учасників: ${totalMembers}
Гуртків з відкритим набором: ${activeClubs}
Гуртків із закритим набором: ${closedClubs}
Сума вартості всіх гуртків: ${totalPrice} грн`);
	} else if (choice !== 0) {
		alert("Помилка! Невірний пункт меню");
	}
}