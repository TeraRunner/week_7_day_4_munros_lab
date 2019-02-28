const PubSub = require('../helpers/pub_sub.js')

const MunrosView = function (container) {
  this.container = container;
}

MunrosView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:Munros-data-loaded', (evt) => {
    const munros = evt.detail;
    this.render(munros);
  })
};

MunrosView.prototype.render = function (munros) {
  munros.forEach((munro) => {
    const name = document.createElement('h2');
    name.textContent = munro.name;
    this.container.appendChild(name);

    const munroUl = document.createElement('ul');
    this.container.appendChild(munroUl);

    const munroMeaningLi = document.createElement('li');
    munroMeaningLi.textContent = `Meaning: ${munro.meaning}`;
    this.container.appendChild(munroMeaningLi);

    const munroHeightLi = document.createElement('li');
    munroHeightLi.textContent = `Height: ${munro.height}`;
    this.container.appendChild(munroHeightLi);
  })
};

module.exports = MunrosView;
