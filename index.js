var orders = [{

    id: 1,
    price: 18,
    ordination: "Fiorentina",
    token: "pippo",
    status: "closed"
  },

{
    id: 2,
    price: 10,
    ordination: "Fritto misto con pastelle",
    token: "caio",
    status: "closed"
  },

{
    id: 3,
    price: 12,
    ordination: "Carbonara",
    token: "sempronio",
    status: "new"
}]

var news = [];
var ready = [];
var closed = [];


exports.getallOrders = function(){
  return orders;
}

exports addOrder = function (newOrder) {
  orders.push({
    id: ordersCounter++,
    ordination: newOrder.ordination,
    token: newOrder.token,
    price: newOrder.price,
    status: "new" });

}
exports deleteOrder = function (id) {
  for (var index in orders) {
    if (orders[index].id == id) {
      orders.splice(index, 1)
    }
  }
}
exports setOrderReady = function (id) {
  for (var index in orders) {
    if (orders[index].id == id) {
      orders[index].status = "ready";
      readies.push(orders[index])
      news.splice(orders[index])
    }
  }
}
exports setOrderClosed = function (id) {
  for (var index in orders) {
    if (orders[index].id == id) {
      orders[index].status = "closed";
      closed.push(orders[index])
      readies.splice(orders[index])
    }
  }
}
exports showOrdersList = function (status) {
  if (status == "new") {
    return news; }
    else if (status == "ready") {
      return readies; }
      else if (status == "closed") {
        return closed;
      }
    }

  exports showTotProfit = function () {
    var temp = 0; for (var index in orders) {
      var profit = orders[index].price + temp;
      temp = orders[index].price }
      return profit;
    }
