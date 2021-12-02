# Automatically Create a Stripe Customer for Each User with Supabase Function Hooks

**[📹 Video](https://egghead.io/lessons/supabase-automatically-create-a-stripe-customer-for-each-user-with-supabase-function-hooks)**

We want to call our API route to create a new Stripe customer anytime a new user signs into our application. Since this triggers an insert on our profile table, we can use hooks in Supabase to listen to insert events and call our API route.

Function hooks in Supabase are similar to PostgreSQL triggers, however, rather than executing a function, we can call a HTTP endpoint. Since our Next.js application is running locally on our machine it is not possible for Supabase to send a HTTP request directly to our API route.

Ngrok is a simple tool that allows us to tunnel traffic from a publicly accessible URL on the internet, through to our Next.js application running locally.

In order for our API route to process the request, we need to tell our Supabase hook to also send our API_ROUTE_SECRET. Query parameters can be declared as HTTP params for our hook.

Lastly, we want our Stripe customer to be associated with our user via their email address.

[👉 Next lesson](/13-make-user-state-globally-accessible-in-next-js-with-react-context-and-providers)

---

Enjoyed the course? Follow me on [Twitter](https://twitter.com/_dijonmusters) and subscribe to my [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).
