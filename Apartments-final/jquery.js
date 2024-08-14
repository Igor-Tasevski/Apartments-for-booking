//border//
$(document).ready(function(){
     
    var images = $("img")
    images.each(function(){
    images.css("border","6px solid orange")
   
    })
   
   });

//font-size//
   $(document).ready(function(){
   $("p").css("font-size", "16px")

   });

//justify//
   $(document).ready(function(){
    $("p").css("text-align", "justify")
 
    });



 ///font-family//   
    $(document).ready(function(){
     $("p").css("font-family","Times New Roman")

    });

 //  
 //line-height//
 $(document).ready(function(){

   $("section p").css("line-height","1.4em")
   
      
  
  });
   
//text-indent plus padding//
  $(document).ready(function(){

   $("section p").css("text-indent","30px")
   $("section p").css("padding","18px")
   
  
  });

/*
$(document).ready(function(){

$("section p").each(function(){
var $this = $(this);
var firstLetter = $this.text().charAt(0).toUpperCase(); 
var restOfText = $this.text().slice(1);

$this.text(firstLetter + restOfText); 
});
   
   
  
  });
*/

  //margins//
$(document).ready(function(){

   $("h3").css("margin-left","42px")
  
  });

  //neparen//
  $(document).ready(function(){

   $("ul li:nth-child(odd)").css("color","yellow")
  
  });

  //paren
  $(document).ready(function(){

   $("ul li:nth-child(even)").css("color","violet")
  
  });
