function loadShopify() {
	var client = ShopifyBuy.buildClient({
		domain: "sync-top.myshopify.com",
		storefrontAccessToken: "489ea32c9bc932c0322ed01ac4148373",
	});
		
	ShopifyBuy.UI.onReady(client).then(function (ui) {
		ui.createComponent("product", {
		id: "8086136422699",
		variantId: "44363968184619",
		node: document.getElementById("product-component-1679190228670"),
		moneyFormat: "%C2%A3%7B%7Bamount%7D%7D"});
	});
}