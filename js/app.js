$(function() {
  $('.card-action').on('click', function(e) {
    e.preventDefault();
    // create row with 3 cells
    var tr = $('<tr>');
    var td1 = $('<td>');
    // set text of first cell to the title of the card clicked
    td1.html($('span.card-title', e.target.parentNode.parentNode).html());
    var td2= $('<td>');
    var td3 = $('<td>');
    // set text of last cell to the price of the card clicked
    td3.html($('p.price', e.target.parentNode.parentNode).html());
    // append cells to the row.
    $(tr).append(td1);
    $(tr).append(td2);
    $(tr).append(td3);

    // append rows to the body of the table
    $('#order-table tbody').append(tr);//.append($td);
  });
});

 //  $('.card-action').on('click', function(e) {
 //    e.preventDefault();
 //    var $price = $('.price').text()
 //     $('#subtotal').text($price);
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
