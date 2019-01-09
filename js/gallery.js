$(document).ready(function(){
	$('#overlay, .gallery').hide();
			
	$(".modelthumbnail1").click(function(){
		$("#overlay, .img1").fadeIn(500);
	});

	$(".modelthumbnail3").click(function(){
		$("#overlay, .img3").fadeIn(500);
	});
	$(".modelthumbnail4").click(function(){
		$("#overlay, .img4").fadeIn(500);
	});
	$(".modelthumbnail5").click(function(){
		$("#overlay, .img5").fadeIn(500);
	});
	$(".modelthumbnail6").click(function(){
		$("#overlay, .img6").fadeIn(500);
	});
	$(".modelthumbnail7").click(function(){
		$("#overlay, .img7").fadeIn(500);
	});
	$(".modelthumbnail8").click(function(){
		$("#overlay, .img8").fadeIn(500);
	});
	$(".modelthumbnail9").click(function(){
		$("#overlay, .img9").fadeIn(500);
	});
		$(".modelthumbnail10").click(function(){
		$("#overlay, .img10").fadeIn(500);
	});

		
			$(".next-img1").click(function(){
				$(".img1").hide();
				$(".img3").show();
			});
			$(".next-img3").click(function(){
				$(".img3").hide();
				$(".img4").show();
			});
			$(".next-img4").click(function(){
				$(".img4").hide();
				$(".img5").show();
			});
			$(".next-img5").click(function(){
				$(".img5").hide();
				$(".img6").show();
			});
			$(".next-img6").click(function(){
				$(".img6").hide();
				$(".img7").show();
			});
			$(".next-img7").click(function(){
				$(".img7").hide();
				$(".img8").show();
			});
			$(".next-img8").click(function(){
				$(".img8").hide();
				$(".img9").show();
			});
			$(".next-img9").click(function(){
				$(".img9").hide();
				$(".img10").show();
			});
			$(".next-img10").click(function(){
				$(".img10").hide();
				$(".img1").show();
			});

				
					$(".prev-img1").click(function(){
						$(".img1").hide();
						$(".img10").show();
					});
		
					$(".prev-img10").click(function(){
						$(".img10").hide();
						$(".img9").show();
					});	
					
					$(".prev-img9").click(function(){
						$(".img9").hide();
						$(".img8").show();
					});		
					$(".prev-img8").click(function(){
						$(".img8").hide();
						$(".img7").show();
					});		
					$(".prev-img7").click(function(){
						$(".img7").hide();
						$(".img6").show();
					});		
					$(".prev-img6").click(function(){
						$(".img6").hide();
						$(".img5").show();
					});		
					$(".prev-img5").click(function(){
						$(".img5").hide();
						$(".img4").show();
					});		
					$(".prev-img4").click(function(){
						$(".img4").hide();
						$(".img3").show();
					});		
					$(".prev-img3").click(function(){
						$(".img3").hide();
						$(".img1").show();
					});		
				
						$("#close").click(function(){
							$("#overlay, .gallery").fadeOut(500);
						});
});