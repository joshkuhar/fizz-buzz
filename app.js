$(".enter").click(function() {
    $(".output").empty();
  
	var inputNumber = $(".text-box").val();
    var x = 1;
    while (x <= inputNumber) {
      if ((x % 3 === 0) & (x % 5 == 0)){
        $(".output").append("<div>"+"fizz buzz"+"</div>");
      }
      else if (x % 3 === 0) {
         $(".output").append("<div>"+"fizz"+"</div>");
      }
      else if (x % 5 === 0){
        $(".output").append("<div>"+"buzz"+"</div>");
      }
      else {
      	$(".output").append("<div>"+x+"</div>");
      }
      x++;
    }
	$(".text-box").val("");
	console.log("check");
	});

// use enter to add list items
$('.text-box').keyup(function(e){
	if(e.keyCode == 13) {
		//event.preventDefault();
		$('.enter').click();
	};
});	

