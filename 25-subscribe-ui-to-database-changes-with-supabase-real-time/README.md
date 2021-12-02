# Subscribe the UI to Database Changes with Supabase Real-Time

**[📹 Video](https://egghead.io/lessons/supabase-subscribe-the-ui-to-database-changes-with-supabase-real-time)**

The cancellation event from stripe doesn't get triggered until the end of the billing cycle. Therefore, our customer may still be using our app when their subscription status changes, with their dashboard confusingly displaying the incorrect data.

In this video, we implement Supabase real-time to subscribe the UI to changes in the database. We can initiate the subscription in our useUser hook, and specify that we only care about updates to our currently logged in user.

In order for Supabase to broadcast these changes on our websocket connection, we need to enable replication for the specific tables we want to subscribe to.

This means that anytime our is_subscribed value changes in the profile table, our useUser hook will automatically be updated with the new value, and the dashboard will immediately update to display the correct data.

[👉 Next lesson](/26-configure-stripe-for-production-and-deploy-next-js-application-with-vercel)

---

Enjoyed the course? Follow me on [Twitter](https://twitter.com/_dijonmusters) and subscribe to my [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).
