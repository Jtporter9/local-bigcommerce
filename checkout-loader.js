script.onload = function () {
    checkoutKitLoader.load('checkout-sdk')
        .then(function (module) {
            var checkoutService = module.createCheckoutService();
            return checkoutService.loadCheckout(window.checkoutConfig.checkoutId);
        })
        .then(function (state) {
            console.log('Checkout SDK Quickstart', state.data.getCheckout());
            document.getElementById(window.checkoutConfig.containerId).innerHTML = 'Checkout ID: ' + state.data.getCheckout().id;
        });
};
script.src = 'https://checkout-sdk.bigcommerce.com/v1/loader.js';
document.head.appendChild(script);