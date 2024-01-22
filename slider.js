$( document ).ready(function() {
    var n = $('#slider').children().toArray().length;
    var size = 1/n;
    var sum = 0;
    var transform = 0;
    var ellipsesArray = $('#ellipses').children();
    let slideIndex = 0;
    
    size = parseInt(size.toString().split('.')[1]);
    sum = (n-1) * size;


        $( "#right" ).on( "click", function() {
            console.log("right");
            if(slideIndex < n-1){
                transform += size;
                $( "#slider" ).css('transform', 'translateX(-'+ transform +'%)');
                disActivate()
                slideIndex++;
                setActivate()
            }
        });
    

        $( "#left" ).on( "click", function() {
            console.log("left");
            if(slideIndex > 0){
                transform -= size;
                $( "#slider" ).css('transform', 'translateX(-'+ transform +'%)');
                disActivate()
                slideIndex--;
                setActivate()
            }
        });

        for(var i = 0;i < ellipsesArray.length;i++){
            ellipsesArray.eq(i).on( "click", function() {
                var ind = $.inArray( this , ellipsesArray );
                disActivate()
                slideIndex = ind;
                setActivate()
                console.log('i '+ind);
                transform = size * slideIndex;
                $( "#slider" ).css('transform', 'translateX(-'+ transform +'%)');
            });
        }

        function disActivate(){
            ellipsesArray.eq(slideIndex).removeClass('ellipse-activate');
        }

        function setActivate(){
            ellipsesArray.eq(slideIndex).addClass('ellipse-activate');
        }
        
       
  });