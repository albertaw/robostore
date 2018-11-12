function addToCart(e) {
  const path = 'http://localhost:8080/api/orderItems';
 	const uid = $(e.target).attr('data-uid');

  axios.post(path, {
    orderId: 0,
    itemId: uid,
    quantity: 1,
    price: .99,
    sender: 0,
    receiver: 4
  })
  .then(function(response) {
  	alert(response.data);
  })
  .catch(function (error) {
    res.render('pages/error', {message: error});
  });
}

$('.btn-add').click(function(e){
	addToCart(e);
});