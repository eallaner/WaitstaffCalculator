(function(){
     $('#submit').bind('touchstart', function(event){
            event.stopPropagation(); 
     });

     $('#cancel').bind('touchstart', function(event){
            event.stopPropagation(); 
     });

     $('#reset').bind('touchstart', function(event){
            event.stopPropagation(); 
     });
})
		