# Pass Supabase Session Cookie to API Route to Identify User

**[📹 Video](https://egghead.io/lessons/supabase-pass-supabase-session-cookie-to-api-route-to-identify-user)**

Supabase does not automatically set an auth cookie for our signed-in user. If we want to know who our user is on the server, we need to call supabase.auth.api.setAuthCookie.

We will create an API route to set a Supabase auth cookie. Additionally, we modify our useUser hook to call this endpoint anytime the state of our user changes. In order to make our HTTP requests slightly more readable, we install the axios library.

Now that we have a cookie being automatically sent with every request, we can use the getUserByCookie function to get the requesting user. If our API route requires a signed-in user, we can immediately send a 401 response if a user is not present.

We need to know our user's stripe_customer to initiate a checkout session with Stripe (next lesson), so need to enrich this user data with their profile.

While our request from the client to the API route contains our auth cookie, it is not automatically attached to server-side calls using our Supabase client.

[👉 Next lesson](/20-charge-customer-for-stripe-subscription-in-next-js)

---

Enjoyed the course? Follow me on [Twitter](https://twitter.com/_dijonmusters) and subscribe to my [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).
