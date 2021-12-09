"use strict";

// Задание 1

let articles =  [
    {
        title: "Нейросеть может читать текст быстрее человека",
        image: "https://picsum.photos/id/22/1000/1000"
    },
    {
        title: "Пять сервисов, которые помогут написать статью за 5 минут",
        image: "https://picsum.photos/id/24/1000/1000"
    },
    {
        title: "Названы основные правила движения поездов",
        image: "https://picsum.photos/id/28/1000/1000"
    },
    {
        title: "Самая посещаемая достопримечательность мира",
        image: "https://picsum.photos/id/27/1000/1000"
    },
    {
        title: "Появился новый термин для обозначения радиоволн",
        image: "https://picsum.photos/id/29/1000/1000"
    },
    {
        title: "В России появится новый вид бумаги",
        image: "https://picsum.photos/id/30/1000/1000"
    }
];

Vue.createApp({
    data() {
        return {
            articles,
            userInput: "",
        }
    },
    computed: {
        filteredArticles() {
            return this.articles.filter(elem =>  elem.title.toLowerCase().includes(this.userInput.toLowerCase()))
        }
    },
}).mount(".search")


// Задание 2

let services =  [
    {
        title: "Женская стрижка на длинные волосы",
        price: 2000
    },
    {
        title: "Стрижка челки",
        price: 300
    },
    {
        title: "Детская стрижка (до 7 лет)",
        price: 700
    },
    {
        title: "Мужская стрижка",
        price: 1000
    },
    {
        title: "Коррекция бороды",
        price: 1200
    },
    {
        title: "Тонирование мужских волос",
        price: 1500
    },
    {
        title: "Окрашивание волос",
        price: 5000
    },
    {
        title: "Женский маникюр",
        price: 1500
    },
    {
        title: "Мужской маникюр",
        price: 1700
    },
    {
        title: "Педикюр",
        price: 2500
    },
    {
        title: "Покрытие гель-лаком",
        price: 1500
    }
];

Vue.createApp({
    data() {
        return {
            services,
            checked: [],
        }
    },
    computed: {
        priceTotal(){
            let sum = 0;
            this.checked.forEach(elem => {
                sum = sum + elem.price;
                })
            return sum;
            }
        }
}).mount(".services")