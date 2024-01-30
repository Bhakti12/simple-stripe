exports.doPayment = async (req, res) => {
    try{
        const stripe = require('stripe')('your stripe secret key');
        const session = await stripe.checkout.sessions.create({
            mode : 'payment',
            success_url : 'https://www.google.com/',
            cancel_url : 'https://www.flipkart.com/',
            // return_url : 'https://www.amazon.in/gp/sva/dashboard?ref_=nav_cs_apay',
            line_items : [
                {
                    quantity : 3,
                    price_data : {
                        product_data : {
                            name : 'Apples',
                            description : 'Fruits'
                        },
                        currency : 'INR',
                        unit_amount : 2000
                    }
                },
                {
                    quantity : 12,
                    price_data : {
                        product_data : {
                            name : 'kaju katli',
                            description : 'Sweets'
                        },
                        currency : 'INR',
                        unit_amount : 20000
                    }
                },
                {
                    quantity : 1,
                    price_data : {
                        product_data : {
                            name : 'Android Phone',
                            description : 'Phone'
                        },
                        currency : 'INR',
                        unit_amount : 200000
                    }
                }
            ]
        }); 
        return res.json({
            code : 200,
            data : session
        });
    }catch(err){
        console.log("err",err);
        return res.json({
            code : 200,
            message : 'Error'
        });
    }
};
