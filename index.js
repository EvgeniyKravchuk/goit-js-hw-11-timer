//   То, что должно быть в README.md:
//1. Скачать CountdownTimer.js к себе в проект
//2. Импортировать к себе в js файл (import timer from "./js/countdownTimer.js")
//3. создать переменную и создать экземпляр класса, передать 2 аргумента ("name", "YYYY-MM-DDTHH:MM" или YYYY-MM-DD)
//   const myTimer = new timer("myTimer", "2021-05-20T21:55")
//4. Вызвать метод класса createTimer(".selector"), где selector - селектор DOM узла после которого будет создан таймер.
//   Если оставить пустым, тогда таймер будет создан по умолчанию после body

import timer from "./js/countdownTimer.js";

const myTimer = new timer("myTimer", "2021-05-16T19:30");
myTimer.createTimer();
