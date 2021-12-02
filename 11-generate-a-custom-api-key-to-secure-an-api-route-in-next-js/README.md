# Generate a Custom API Key to Secure an API Route in Next.js

**[📹 Video](https://egghead.io/lessons/next-js-generate-a-custom-api-key-to-secure-an-api-route-in-next-js)**

Currently, our API route can be used by anyone navigating to its endpoint. To ensure that this function can only be executed by our application, we need to create a special secret value.

In this video, we generate a special key to secure our API route. This value must be provided as a query parameter on the request to our endpoint, or an error response will be sent back.

To confirm this is working correctly, we use the Thunder Client extension. When the API_ROUTE_SECRET is not provided we receive a 401 response. When the correct value is attached our serverless function executes, creating a stripe customer and updating our profile table in Supabase.

[👉 Next lesson](/12-automatically-create-a-stripe-customer-for-each-user-with-supabase-function-hooks)

---

Enjoyed the course? Follow me on [Twitter](https://twitter.com/_dijonmusters) and subscribe to my [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).
