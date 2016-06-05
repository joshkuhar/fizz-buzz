$(".enter").click(function() {
	$(".output").empty();
	$(".output").append($(".text-box").val()); 
	$(".text-box").val("");
	console.log("check");
	});
/*
// use enter to add list items
$('.add-item-input').keyup(function(event){
	if(event.keyCode == 13) {
		//event.preventDefault();
		$('.add-item-button').click();
	};
});	

$('ul').on('click', '.remove-item-btn', function(event){
  $(this).parent().remove();
  console.log("remove clicked");
});

*/
