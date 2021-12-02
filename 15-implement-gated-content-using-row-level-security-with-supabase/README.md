# Implement Gated Content Using Row Level Security with Supabase

**[📹 Video](https://egghead.io/lessons/supabase-implement-gated-content-using-row-level-security-with-supabase)**

We're using Row Level Security (RLS) to enforce authorization rules for each row in the database. This applies to the entire row, not specific columns. Therefore, if we want to create some premium content that is only available to our subscribed users, we need to create another table. Again, we can reference the lesson table's ID, using a foreign key relationship.

We will create a premium_content table that will store the video_url column for each lesson. We will fetch this data on the lesson details page, and write an RLS policy that will only enable read access for subscribed users.

This will ensure that our logged-in user has an active subscription, in order to view the video for our lesson. If the user is not signed in or has not paid for a subscription, they will only see the content from the lesson table.

Lastly, we want to display our video (hosted on YouTube) in an inline video player. For this, we can use the react-player package, and set some simple styling defaults that look great!

[👉 Next lesson](/16-use-stripe-js-to-query-product-data-and-pre-render-with-next-js)

---

Enjoyed the course? Follow me on [Twitter](https://twitter.com/_dijonmusters) and subscribe to my [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).
