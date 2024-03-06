const stripe = Stripe('pk_test_51OqNhuP6biLuy2CVhDDKclvqCiHfOSJow1dqVLFkKuw4pikVwfKiABQzXcViP4bYOcSEgFCcWuyT8AMEa6C4ujSC006ojWW99W');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener( 'click', () => {
	stripe.redirectToCheckout({
		sessionId: sessionId
	})
});