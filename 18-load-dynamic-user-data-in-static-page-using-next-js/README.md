# Query Dynamic Supabase Data in Static Pages Using Next.js

**[📹 Video](https://egghead.io/lessons/supabase-query-dynamic-supabase-data-in-static-pages-using-next-js)**

Pre-rendered static pages are great for performance, however, they can reduce the quality of our user's experience. Content may feel less relevant and engaging if it doesn't change based on the information our user has already the app.

We will use the state of our user to dynamically change the call to action button for each plan. If we don't have a user, we want them to create an account; if we have a user but they are not subscribed, we want them to subscribe; and if we have a user that is subscribed, we want to give them the option to manage their subscription.

Additionally, we implement a loading state for our useUser hook, which can be used to determine whether we are waiting for our auth.users data to be enriched with the columns from our profile table.

By using the isLoading state, our pricing page can delay the rendering of the call to action button until we have the necessary state to display the correct one.

[👉 Next lesson](/19-pass-supabase-session-cookie-to-api-route-to-identify-user)

---

Enjoyed the course? Follow me on [Twitter](https://twitter.com/_dijonmusters) and subscribe to my [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).
