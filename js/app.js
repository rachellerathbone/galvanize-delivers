// set text of last cell to the price of the card clicked
var subtotal = 0;
var tax = 0;
//var total = 0;

$(function() {
  // Initialize collapse button
  $(".button-collapse").sideNav();

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

    var str = $(td3).html();
    var res = str.substring(1, str.length);
    subtotal += parseFloat(res);
    var newSubtotal = subtotal.toFixed(2);
    tax = parseFloat(res);
    //total = parseFloat(res);
    var total = (subtotal + tax).toFixed(2);

    tax = (newSubtotal * 0.09).toFixed(2);

    $('#subtotal').html(newSubtotal);
    $('#tax').html(tax);
    $('#total').html(total);

    return;
  });
});


$(function() {
  $('#details-form').on('submit', function(e) {
    e.preventDefault();
    // $('#order-confirmation').text('Your order has been placed successfully.');
    var $toastContent = $('<span>Your order was placed successfully.</span>');
    Materialize.toast($toastContent, 5000);
  });
});
