const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stoptBtn = document.querySelector('[data-action="stop"]');

const interval = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      const randomColorIndex = randomIntegerFromInterval(0, colors.length - 1);

      const randonColor = colors[randomColorIndex];
      console.log(randonColor);
      document.body.style.backgroundColor = randonColor;
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

startBtn.addEventListener('click', () => {
  interval.start();
});

stoptBtn.addEventListener('click', () => {
  interval.stop();
});
