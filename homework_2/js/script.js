"use strict";

// Задача 1

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 0
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];

Vue.createApp({
    data(){
        return {
            goods,
            sortTitle: ["По цене", "По названию", "По количеству"],
            currentSortTitle: "По количеству",
        }
    },
    computed: {
        sortByCount(){
            return goods.sort((a, b) => a.count - b.count);
        },
        sortByPrice(){
            return goods.sort((a, b) => a.price - b.price);
        },
        sortByName(){
            return goods.sort((a, b) => a.title.localeCompare(b.title));
        },
        sortClicked(){
            if (this.currentSortTitle === this.sortTitle[0]) return this.sortByPrice;
            else if (this.currentSortTitle === this.sortTitle[1]) return this.sortByName;
            else return this.sortByCount;
        },
    }
}).mount(".goods")


// Задача 2

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
    data(){
        return {
            articles,
            selectorType: "Отобразить списком"
        }
    }
}).mount(".articles")
