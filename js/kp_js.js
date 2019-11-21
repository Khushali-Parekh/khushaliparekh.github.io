 // JavaScript Document
 $(document).ready(function () {
 	"use strict";
 	/*Know more button*/
 	$("input[type=submit], a, button").button();

 	$("[data-toggle='tab']").click(function () {
 		var tabs = $(this).attr('data-tabs');
 		var tab = $(this).attr("data-tab");
 		$(tabs).find(".gtab").removeClass("active");
 		$(tabs).find(tab).addClass("active");

 	});
 	$(".tab_content").hide();
 	$(".tab_content:first").show();

 	/* if in tab mode */
 	$("ul.tabs li").click(function () {

 		$(".tab_content").hide();
 		var activeTab = $(this).attr("rel");
 		$("#" + activeTab).fadeIn();

 		$("ul.tabs li").removeClass("active");
 		$(this).addClass("active");

 		$(".tab_drawer_heading").removeClass("d_active");
 		$(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

 	});
 	/* if in drawer mode */
 	$(".tab_drawer_heading").click(function () {

 		$(".tab_content").hide();
 		var d_activeTab = $(this).attr("rel");
 		$("#" + d_activeTab).fadeIn();

 		$(".tab_drawer_heading").removeClass("d_active");
 		$(this).addClass("d_active");

 		$("ul.tabs li").removeClass("active");
 		$("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
 	});


 	/* Extra class "tab_last" 
 	   to add border to right side
 	   of last tab */
 	$('ul.tabs li').last().addClass("tab_last");


 	$(function () {

 		var goToCartIcon = function ($addTocartBtn) {
 			var $cartIcon = $(".fa-shopping-cart");
 			var $image = $('<img width="30px" height="30px" src="../' + $addTocartBtn.data("image") + '"/>').css({
 				"position": "fixed",
 				"z-index": "999"
 			});
 			$addTocartBtn.prepend($image);
 			var position = $cartIcon.position();
 			$image.animate({
 				top: position.top,
 				left: position.left
 			}, 500, "linear", function () {
 				$image.remove();
 			});
 		};


 		//		An attempt to make the shopping cart icon with value of quantity

 		/*	$('.my-cart-btn').myCart({
 			currencySymbol: '$',
 			classCartIcon: 'fa-shopping-cart',
 			classCartBadge: 'my-cart-badge',
 			classProductQuantity: 'my-product-quantity',
 			classProductRemove: 'my-product-remove',
 			classCheckoutCart: 'my-cart-checkout',
 			affixCartIcon: true,
 			showCheckoutModal: true,
 			numberOfDecimals: 2,

 			clickOnAddToCart: function ($addTocart) {
 				goToCartIcon($addTocart);
 			},

 			clickOnCartIcon: function ($cartIcon, products, totalPrice, totalQuantity) {
 				console.log("cart icon clicked", $cartIcon, products, totalPrice, totalQuantity);
 			},
 			checkoutCart: function (products, totalPrice, totalQuantity) {
 				var checkoutString = "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity;
 				checkoutString += "\n\n id \t name \t summary \t price \t quantity \t image path";
 				$.each(products, function () {
 					checkoutString += ("\n " + this.id + " \t " + this.name + " \t " + this.summary + " \t " + this.price + " \t " + this.quantity + " \t " + this.image);
 				});
 				alert(checkoutString)
 				console.log("checking out", products, totalPrice, totalQuantity);
 			},

 		});
*/

 	});
 	var navListItems = $('div.setup-panel div a'),
 		allWells = $('.setup-content'),
 		allNextBtn = $('.nextBtn');

 	allWells.hide();

 	navListItems.click(function (e) {
 		e.preventDefault();
 		var $target = $($(this).attr('href')),
 			$item = $(this);

 		if (!$item.hasClass('disabled')) {
 			navListItems.removeClass('btn-success').addClass('btn-default');
 			$item.addClass('btn-success');
 			allWells.hide();
 			$target.show();
 			$target.find('input:eq(0)').focus();
 		}
 	});

 	allNextBtn.click(function () {
 		var curStep = $(this).closest(".setup-content"),
 			curStepBtn = curStep.attr("id"),
 			nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
 			curInputs = curStep.find("input[type='text'],input[type='url']"),
 			isValid = true;

 		$(".form-group").removeClass("has-error");
 		for (var i = 0; i < curInputs.length; i++) {
 			if (!curInputs[i].validity.valid) {
 				isValid = false;
 				$(curInputs[i]).closest(".form-group").addClass("has-error");
 			}
 		}

 		if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
 	});

 	$('div.setup-panel div a.btn-success').trigger('click');

 	//DROPDOWN SELECTOR
 	$("#myselect").val();


 	//TAB NAV TO ACCORDION
 	$('#parentHorizontalTab').easyResponsiveTabs({
 		type: 'default', //Types: default, vertical, accordion
 		width: 'auto', //auto or any width like 600px
 		fit: true, // 100% fit in a container
 		tabidentify: 'hor_1', // The tab groups identifier
 		activate: function (event) { // Callback function if tab is switched
 			var $tab = $(this);
 			var $info = $('#nested-tabInfo');
 			var $name = $('span', $info);
 			$name.text($tab.text());
 			$info.show();
 		}
 	});

 	// Child Tab
 	$('#ChildVerticalTab_1').easyResponsiveTabs({
 		type: 'vertical',
 		width: 'auto',
 		fit: true,
 		tabidentify: 'ver_1', // The tab groups identifier
 		activetab_bg: '#fff', // background color for active tabs in this group
 		inactive_bg: '#F5F5F5', // background color for inactive tabs in this group
 		active_border_color: '#c1c1c1', // border color for active tabs heads in this group
 		active_content_border_color: '#5AB1D0' // border color for active tabs contect in this group so that it matches the tab head border
 	});

 	//Vertical Tab
 	$('#parentVerticalTab').easyResponsiveTabs({
 		type: 'vertical', //Types: default, vertical, accordion
 		width: 'auto', //auto or any width like 600px
 		fit: true, // 100% fit in a container
 		closed: 'accordion', // Start closed if in accordion view
 		tabidentify: 'hor_1', // The tab groups identifier
 		activate: function (event) { // Callback function if tab is switched
 			var $tab = $(this);
 			var $info = $('#nested-tabInfo2');
 			var $name = $('span', $info);
 			$name.text($tab.text());
 			$info.show();
 		}
 	});

 	// Get the modal
 	var modal = document.getElementById('id01');

 	// When the user clicks anywhere outside of the modal, close it
 	window.onclick = function (event) {
 			if (event.target == modal) {
 				modal.style.display = "none";
 			}
 		}
 		// Get the modal
 	var modal = document.getElementById('id01');

 	// When the user clicks anywhere outside of the modal, close it
 	window.onclick = function (event) {
 			if (event.target == modal) {
 				modal.style.display = "none";
 			}
 		}
 		// Get the modal
 	var modal = document.getElementById('id01');

 	// When the user clicks anywhere outside of the modal, close it
 	window.onclick = function (event) {
 		if (event.target == modal) {
 			modal.style.display = "none";
 		}
 	};
 });
