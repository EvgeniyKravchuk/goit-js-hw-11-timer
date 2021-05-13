export default class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  creatMarkup(createMarkupSelector) {
    let createMarkupSelectorRef;
    const markup = `
    <div class="timer" id=${this.selector}>
      <div class="field">
        <span class="value" data-value="days">00</span>
        <span class="label">Days</span>
      </div>

      <div class="field">
        <span class="value" data-value="hours">00</span>
        <span class="label">Hours</span>
      </div>

      <div class="field">
        <span class="value" data-value="mins">00</span>
        <span class="label">Minutes</span>
      </div>

      <div class="field">
        <span class="value" data-value="secs">00</span>
        <span class="label">Seconds</span>
      </div>
    </div>`;

    if (
      createMarkupSelector === undefined ||
      createMarkupSelector === null ||
      typeof createMarkupSelector !== "string"
    ) {
      document.body.classList.add("js-body");
      createMarkupSelectorRef = document.querySelector(".js-body");
    } else {
      createMarkupSelectorRef = document.querySelector(createMarkupSelector);
    }

    createMarkupSelectorRef.insertAdjacentHTML("afterend", markup);
  }

  timerOperation() {
    const currentDate = Date.now();
    const targetDate = new Date(this.targetDate).getTime();
    let time = targetDate - currentDate;

    const arrayOfTimerIntervalsRef = document.querySelectorAll(".value");
    const timerIntervalsRefs = {
      days: arrayOfTimerIntervalsRef[0],
      hours: arrayOfTimerIntervalsRef[1],
      mins: arrayOfTimerIntervalsRef[2],
      secs: arrayOfTimerIntervalsRef[3],
    };

    const timer = setInterval(() => {
      time -= 1000;
      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

      timerIntervalsRefs.days.textContent = days;
      timerIntervalsRefs.hours.textContent = hours;
      timerIntervalsRefs.mins.textContent = mins;
      timerIntervalsRefs.secs.textContent = secs;

      if (time <= 0) {
        clearInterval(timer);
        timerIntervalsRefs.days.textContent = "00";
        timerIntervalsRefs.hours.textContent = "00";
        timerIntervalsRefs.mins.textContent = "00";
        timerIntervalsRefs.secs.textContent = "00";
      }

      function pad(value) {
        return String(value).padStart(2, "0");
      }
    }, 1000);
  }

  timerStyles() {
    const timerRef = document.querySelector(`#${this.selector}`);
    const timerFieldsRefs = document.querySelectorAll(".field");
    const arrayOfTimerIntervalsRef = document.querySelectorAll(".value");

    timerFieldsRefs.forEach((el) => {
      el.style = "display: flex; flex-direction: column; margin-right: 10px";
    });

    arrayOfTimerIntervalsRef.forEach((el) => {
      el.style = "text-align: center";
    });

    timerRef.style = "display: flex;";
  }

  createTimer(createMarkupSelector) {
    this.creatMarkup(createMarkupSelector);
    this.timerOperation();
    this.timerStyles();
  }
}
