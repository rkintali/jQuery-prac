/**
 * 
 */

$(document).ready(
		function() {
			console.log("Document loaded");
			$("a").attr({
				title : "This is a hyper link",
				href : "#"
			});
			console.log($("a").attr('href'));
			$(".jumbotron a").html("<b>New value</b>");
			$("a").data("keyName", "value");
			$("div").find("p").css("color", "blue");
			// iteration
			$("div").find("p").each(function(index, element) {
				console.log($(element).html());
				console.log($(this).html());
			});

			// utility methods
			var arrayObj = [ {
				"key" : "value",
				"param" : "value"
			}, {
				"key" : "Kaleesi",
				"param" : "     Dragon's Mother     "
			} ];
			// $.each and $.trim
			$.each(arrayObj, function(index, element) {
				console.log("Index:" + index + " Element key: " + element.key
						+ " Element value: " + $.trim(element.param));
			});

			$.each({
				foo : "bar",
				baz : "bim"
			}, function(k, v) {
				console.log(k + " : " + v);
			});

			// $.inArray
			if ($.inArray(4, [ 1, 2, 3, 4 ]) != -1) {
				console.log("Given element is present in the array");
			}

			console.log("Is array:" + $.isArray([]));
			console.log("Is numeric:" + $.isNumeric(3.14));
			console.log("Is function:" + $.isFunction(function() {
			}));

			// use .map()
			var colors = $("p").map(function(index, element) {
				return element.style.color;
			}).get();
			console.log("Colors:" + colors);

			// syntax difference - element comes first in the call back fn
			var elementKeys = $.map(arrayObj, function(element, index) {
				return element.key;
			});
			console.log("Element keys:" + elementKeys);
			// see if an element has a class
			console.log($("body").hasClass("container"));
			// see if an element is there
			console.log($("body").length);

			// event handlers
			$(".jumbotron").on(
					"click",
					"a",
					{
						"name" : "foo"
					},
					function(event) {
						console.log("Element name on action handler:"
								+ event.data.name);
					});

			// multiple event handlers registered in one on method
			$('input[id="inputTxtObj"]').on({
				'focus' : function(event) {
					$(this).val("Enter your text here");
				},
				'blur' : function(event) {
					if ($.trim($(this).val()) != 'Enter your text here') {
						$(this).val("Enter your text here");
					}
				}
			});

			// event delegation
			$("#list").on('click', 'li a', function(event) {
				console.log("Value:" + $(this).html());
			});

			// define custom events
			$(document).on("myCustomEvent", {
				foo : "bar"
			}, function(event, arg1, arg2) {
				console.log(event.data.foo); // "bar"
				console.log(arg1); // "bim"
				console.log(arg2); // "baz"
			});

			// with trigger - you can pass arguments as well
			$(document).trigger("myCustomEvent", [ "bim", "baz" ]);

		});