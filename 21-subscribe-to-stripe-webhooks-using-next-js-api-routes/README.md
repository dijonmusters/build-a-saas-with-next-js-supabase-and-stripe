# Subscribe to Stripe Webhooks Using Next.js API Routes

**[📹 Video](https://egghead.io/lessons/next-js-subscribe-to-stripe-webhooks-using-next-js-api-routes)**

Webhooks allow us to subscribe to particular events, and have Stripe let us know when they occur. From the Stripe dashboard we can specify an endpoint to call, and which events we care about. For subscriptions, we want to know when a new subscription occurs, is updated, or deleted.

In this video, we create a new API route to handle webhook events from Stripe. We can call the stripe.webhooks.constructEvent function which returns the event object. It also takes the req, signature and signingSecret to verify the request is valid and came from Stripe.

The signature can be extracted from the request's headers, and the signing secret is available in the Stripe dashboard, however, the Next.js req object is a different structure to what constructEvent is expecting. Therefore, we need to install the micro package and use its buffer function to get the reqBuffer. We also need to export a config object from our page component, setting bodyParser to false.

[👉 Next lesson](/22-use-the-supabase-service-key-to-bypass-row-level-security)

---

Enjoyed the course? Follow me on [Twitter](https://twitter.com/jonmeyers_io) and subscribe to my [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).
