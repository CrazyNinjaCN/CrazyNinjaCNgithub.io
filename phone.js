$( document ).ready(function() {

    $( ".form-1 .dop_container1" ).on( "click", function() {
        var val = $( ".form-1 .dop_container1" ).children().attr('value');
        console.log(val);
        $( ".form-1 .b_container" ).append($( ".form-1 .dop_container1" ).children());
        $( ".form-1 .dop_container1" ).children().remove();
        $( ".form-1 .dop_container1" ).append($( ".form-1 .b_container" ).children().eq(0));
        $('.form-1 input[name="callback"][value="'+ val +'"]').prop('checked', true);
    });
    $( ".form-1 .dop_container2" ).on( "click", function() {
        var val = $( ".form-1 .dop_container2" ).children().attr('value');
        console.log(val);
        $( ".form-1 .b_container" ).append($( ".form-1 .dop_container2" ).children());
        $( ".form-1 .dop_container2" ).children().remove();
        $( ".form-1 .dop_container2" ).append($( ".form-1 .b_container" ).children().eq(0));
        $('.form-1 input[name="callback"][value="'+ val +'"]').prop('checked', true);
  });

  $( ".form-2 .dop_container1" ).on( "click", function() {
    var val = $( ".form-2 .dop_container1" ).children().attr('value');
    console.log(val);
    $( ".form-2 .b_container" ).append($( ".form-2 .dop_container1" ).children());
    $( ".form-2 .dop_container1" ).children().remove();
    $( ".form-2 .dop_container1" ).append($( ".form-2 .b_container" ).children().eq(0));
    $('.form-2 input[name="callback"][value="'+ val +'"]').prop('checked', true);
});
$( ".form-2 .dop_container2" ).on( "click", function() {
    var val = $( ".form-2 .dop_container2" ).children().attr('value');
    console.log(val);
    $( ".form-2 .b_container" ).append($( ".form-2 .dop_container2" ).children());
    $( ".form-2 .dop_container2" ).children().remove();
    $( ".form-2 .dop_container2" ).append($( ".form-2 .b_container" ).children().eq(0));
    $('.form-2 input[name="callback"][value="'+ val +'"]').prop('checked', true);
});

$( ".form-3 .dop_container1" ).on( "click", function() {
    var val = $( ".form-3 .dop_container1" ).children().attr('value');
    console.log(val);
    $( ".form-3 .b_container" ).append($( ".form-3 .dop_container1" ).children());
    $( ".form-3 .dop_container1" ).children().remove();
    $( ".form-3 .dop_container1" ).append($( ".form-3 .b_container" ).children().eq(0));
    $('.form-3 input[name="callback"][value="'+ val +'"]').prop('checked', true);
});
$( ".form-3 .dop_container2" ).on( "click", function() {
    var val = $( ".form-3 .dop_container2" ).children().attr('value');
    console.log(val);
    $( ".form-3 .b_container" ).append($( ".form-3 .dop_container2" ).children());
    $( ".form-3 .dop_container2" ).children().remove();
    $( ".form-3 .dop_container2" ).append($( ".form-3 .b_container" ).children().eq(0));
    $('.form-3 input[name="callback"][value="'+ val +'"]').prop('checked', true);
});
    
  });