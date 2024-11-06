     function updateTime() {
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      // Форматирование времени
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
    }

    // Обновление времени каждую секунду
    setInterval(updateTime, 1000);

    // Вызов функции при загрузке страницы
    updateTime(); 
