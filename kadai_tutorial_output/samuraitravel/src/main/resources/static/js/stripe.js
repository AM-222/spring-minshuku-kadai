const stripe = Stripe('pk_test_51QuRP8QwWegcm5K2D9g79o1mvKVhR9nSQHJNRuYibhZXia7562YJNCib79pqBzFtHALUt4I5nbiSVafFU7lkYGP500plaEIdm1');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});