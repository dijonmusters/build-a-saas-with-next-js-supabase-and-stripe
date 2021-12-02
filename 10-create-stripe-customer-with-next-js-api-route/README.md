# Create a Stripe Customer with Next.js API Routes

**[📹 Video](https://egghead.io/lessons/supabase-create-a-stripe-customer-with-next-js-api-routes)**

Every transaction in Stripe is associated with a customer. Since we want our user to be able to see their transaction history in Stripe, we need to keep a track of their customer ID in our profile table.

In this video, we create a new Stripe account and configure our Next.js application to use its publishable and secret API keys. Additionally, we discuss by adding NEXT*PUBLIC* to our environment variable names, it exposes them to the client - running in the user's browser. This is entirely safe for our publishable key - which can be public - but not our secret key - which should always be kept private.

To create a Stripe customer, we need to use our private API key, meaninh this logic will need to be executed on the server. Next.js makes this simple with API routes - special serverless functions that will be created for any .js files in the pages/api directory.

We create a new API route to handle adding a stripe customer and updating the user's profile with their customer ID.

[👉 Next lesson](/11-generate-a-custom-api-key-to-secure-an-api-route-in-next-js)

---

Enjoyed the course? Follow me on [Twitter](https://twitter.com/_dijonmusters) and subscribe to my [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).
