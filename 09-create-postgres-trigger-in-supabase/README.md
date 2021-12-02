# Use Supabase to Subscribe to Database Events with Postgres Triggers

**[📹 Video](https://egghead.io/lessons/supabase-use-supabase-to-subscribe-to-database-events-with-postgres-triggers)**

We now have a Postgres function that can handle creating a profile for a user. In this video, we implement a Postgres trigger to listen to INSERT events on the auth.users table and call our create_profile_for_user function. This will ensure that every new user that logs into our application has an associated profile.

Triggers are a super powerful feature of PostgreSQL! When combined with Supabase real-time - covered later in the course - our applications can have multiple users changing data in the db, and UIs automatically updating without refreshing the page.

While triggers can be configured in the Supabase UI, only tables in the public schema are visible. Since our users table is in the auth schema, we need to write the SQL to create a trigger ourselves. Supabase contains an SQL editor, which can execute raw SQL on our Postgres DB.

[👉 Next lesson](/10-create-a-stripe-customer-with-next-js-api-routes)

---

Enjoyed the course? Follow me on [Twitter](https://twitter.com/_dijonmusters) and subscribe to my [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).
