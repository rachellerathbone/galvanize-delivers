// $(function() {
//   var cart = [];
//
//   var button = document.getElementById('burger').addEventListener('click', function(){
//     var subtotal = document.getElementById('subtotal');
//     console.log(subtotal.textContent);
//   });
// });
$(function() {
  $('#details-form').on('submit', function(e) {
    e.preventDefault();
    console.log($('#name').val());
    console.log($('#telephone').val());
    console.log($('#address').val());

    $('#order-confirmation').text('Your order has been placed successfully.');
  });

});
