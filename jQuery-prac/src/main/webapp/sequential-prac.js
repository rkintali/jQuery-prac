/**
 * 
 */

$(document).ready(
		function() {

			function sequentialFadeIn(selectorText, speed, display, callBack) {

				display = typeof display !== 'undefined' ? display : "block";

				function helper() {
					nextElementToFadeIn = $(selectorText)
							.not(".alreadyFadedIn").first();
					nextElementToFadeIn.fadeIn(speed, function() {
						$(this).addClass("alreadyFadedIn");
						helper();
					}).css("display", display);
				}
				helper();

				callBack(selectorText);
			}
			sequentialFadeIn(".toBeFaddedIn", "slow", "inline-block",
					function cleanUp(selectorText1) {
						$(selectorText1).removeClass("alreadyFadedIn");
						console.log("Clean up has been performed.");
						console.log("Selector Text: " + selectorText1);

					});

		});
