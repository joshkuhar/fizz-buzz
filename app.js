$(".enter").click(function() {
    $(".output").empty();
  
	var y = $(".text-box").val();
    var x = 1;
    while (x <= y) {
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

/*
$('ul').on('click', '.remove-item-btn', function(event){
  $(this).parent().remove();
  console.log("remove clicked");
});

$(".enter").click(function() {
	$(".output").empty();
	$(".output").append($(".text-box").val()); 
	$(".text-box").val("");
	console.log("check");
	});

*/
