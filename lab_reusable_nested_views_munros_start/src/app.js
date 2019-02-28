const Munros = require('./models/munros.js')
const MunrosView = require('./views/munros_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const munrosContainer = document.querySelector('h1')
  const munrosView = new MunrosView(munrosContainer);
  munrosView.bindEvents();

  const munros = new Munros();
  munros.getData();

});
