
const Stripe =  require("stripe");
const createSession = async (req, res) => {
  try {
    
    const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);
    
        const session = await stripe.checkout.sessions.create({
          line_items: [
            {
              price_data: {
                product_data: {
                  name: "Laptop",
                },
                currency: "usd",
                unit_amount: 2000,
              },
              quantity: 1,
            },
            {
              price_data: {
                product_data: {
                  name: "TV",
                },
                currency: "usd",
                unit_amount: 1000,
              },
              quantity: 2,
            },
          ],
          mode: "payment",
          success_url: "http://localhost:3000/success",
          cancel_url: "http://localhost:3000/cancel",
        });

      return res.json({ url: session.url });
    return res.status(201).json({ message: 'Service created',data:{newService} })
  } catch (error) {
    return res.status(400).json({ error: 'Create Service', message: error.message })
  }
}

module.exports = { createSession } 