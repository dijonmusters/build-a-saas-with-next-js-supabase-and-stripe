# Use Postgres Functions to Implement Database Logic with Supabase

**[📹 Video](https://egghead.io/lessons/supabase-use-postgres-functions-to-implement-database-logic-with-supabase)**

Each time a new user signs in, we want to create an associated profile. In PostgreSQL, we can use triggers to listen to events - such as INSERT - on specific tables - such as auth.users - and execute a Postgres function.

In this video, we use the Supabase UI to create a Postgres function that returns a trigger. This is a special kind of function that can be invoked when particular events occur in the database - covered in the next lesson. This function will be responsible for creating a new row in the profile table, using the ID from our auth.users record.

[👉 Next lesson](/09-use-supabase-to-subscribe-to-database-events-with-postgres-triggers)

---

Enjoyed the course? Follow me on [Twitter](https://twitter.com/_dijonmusters) and subscribe to my [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).
