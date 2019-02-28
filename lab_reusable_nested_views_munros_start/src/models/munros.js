const RequestHelper = require('../helpers/request_helper.js')
const PubSub = require('../helpers/pub_sub.js')

const Munros = function () {
  this.data = null;
}

// Munros.prototype.bindEvents = function () {
//   this.getData();
//   console.log(this.data);
// };

Munros.prototype.getData = function () {
  const url = `https://munroapi.herokuapp.com/munros`;
  const request = new RequestHelper(url);
  request.get()
    .then((data) => {
      this.data = data;
      PubSub.publish('Munros:Munros-data-loaded', this.data);
    })
    .catch((error) => console.error(error));
};

module.exports = Munros;
