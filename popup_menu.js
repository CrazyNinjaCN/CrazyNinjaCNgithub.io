$( document ).ready(function() {
    $( "#popup1" ).on( "click", function() {
        $( "#content" ).addClass( "blur" );
        $( "#popup_overlay" ).css('display','block');
    });
    $( "#popup2" ).on( "click", function() {
      $( "#content" ).addClass( "blur" );
      $( "#popup_overlay" ).css('display','block');
  });
    $(document).mouseup( function(e){
		var div = $( "#popup_block" ); 
		if ( !div.is(e.target) 
		    && div.has(e.target).length === 0 ) {
                $( "#content" ).removeClass( "blur" );
                $( "#popup_overlay" ).css('display','none'); 
		}
	});
  });