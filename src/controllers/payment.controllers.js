const stripe = require('stripe')('sk_test_CGGvfNiIPwLXiDwaOfZ3oX6Y');

const PaymentIntent=async ()=>{
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 1,
            currency: 'usd',
            automatic_payment_methods: {enabled: true},
          });
        res.status(200).json({clientSecret: paymentIntent.client_secret});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports={
    PaymentIntent
}