$(".enter").click(function() {
	var numberInTen = $(".text-box").val();
    $(".output").empty();
    while (numberInTen < 10) {
      		$(".output").append("<div>"+numberInTen+"</div>");
      		numberInTen++;
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
