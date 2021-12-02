# Use the Supabase Service Key to Bypass Row Level Security

**[📹 Video](https://egghead.io/lessons/supabase-use-the-supabase-service-key-to-bypass-row-level-security)**

Stripe will call our /stripe-hooks API route anytime a subscription is created, updated, or deleted. By inspecting the event.type, we can specify what we want to do for each type of event. We will create a switch statement to process events from Stripe. If we are creating a subscription, we want to set is_subscribed to true.

This request to Supabase is happening on the server and does not have a session automatically attached. Since this endpoint is actually called by Stripe, we don't have a cookie that we can manually send along, so our request to update the user is being denied by RLS.

RLS can be bypassed by using Supabase's Service key. We can export a function from our utils/supabase.js file that returns a Supabase client - instantiated using the environment variable for the service key, rather than the anon key. Since this environment variable is only available server-side, this value will not be leaked to the client, and our database is still securely protected with RLS.

[👉 Next lesson](/23-create-a-client-page-that-requires-authentication-in-next-js-using-getserversideprops)

---

Enjoyed the course? Follow me on [Twitter](https://twitter.com/_dijonmusters) and subscribe to my [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).
