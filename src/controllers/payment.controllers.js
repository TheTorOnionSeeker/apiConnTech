const stripe = require('stripe')('sk_test_CGGvfNiIPwLXiDwaOfZ3oX6Y');

const PaymentIntent=async ()=>{
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 1,
            currency: 'usd',
            automatic_payment_methods: {enabled: true},
          });
        res.status(201).json({clientSecret: paymentIntent.client_secret});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const setPremium=async ()=>{
    const {id}=req.body;
    try {
        const user = await User.findOne({
            where: {
                id : id
            },
            attributes:["id","name","email","phone","roleId","experienceId","educationId","isPremium"]
        })
        if(user.isPremium === true) throw new Error('User is already premium!');
        user.isPremium=true;
        res.status(201).json({user:user, msg:'Premium updated'});
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

module.exports={
    PaymentIntent,
    setPremium
}