# Allow Customer to Manage Their Subscription with Stripe Customer Portal

**[📹 Video](https://egghead.io/lessons/next-js-allow-customer-to-manage-their-subscription-with-stripe-customer-portal)**

We can use Stripe's Customer Portal to allow our users to manage their subscription and payment information. We will configure the Customer Portal in the Stripe Dashboard and create the required pages for /terms and /privacy.

Additionally, we create an API route to initiate our customer portal session. Similarly to our API route that charges for a subscription, we need to get the token from the cookie, add it to the Supabase session and fetch the associated profile data.

Since the updated event gets triggered for creating a new subscription, as well as updating an existing one, and we want to perform the same changes in our Supabase DB, we can replace our case statement to handle customer.subscription.updated.

Lastly, we implement a case for deleted, setting is_subscribed to false and interval to null. Since this event doesn't actually trigger until the end of the customer's billing cycle, we can manually cancel the user's subscription from the Stripe dashboard.

[👉 Next lesson](/25-subscribe-the-ui-to-database-changes-with-supabase-real-time)

---

Enjoyed the course? Follow me on [Twitter](https://twitter.com/_dijonmusters) and subscribe to my [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).
