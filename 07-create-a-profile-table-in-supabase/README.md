# Add Relationships Between Tables in Supabase Using Foreign Keys

**[📹 Video](https://egghead.io/lessons/supabase-add-relationships-between-tables-in-supabase-using-foreign-keys)**

Supabase is a collection of tools around a PostgreSQL database. Postgres is a relational database, which means we can create tables that are related to other tables - by referencing columns with a foreign key relationship.

In this video, we query our auth.users table to inspect the data that Supabase stores about our user. This is a special table that is managed by Supabase, and not something we should modify ourselves.

In order to store additional data about our user, we create a profile table. This will contain our user's stripe customer ID and whether or not they are currently subscribed. A profile should only ever exist for a specific user, therefore, we can create a relationship between these two tables.

Additionally, this will enforce constraints to stop our data becoming corrupted. It will not be possible to create a profile for a user that does not exist, and we will not be able to delete a user that has a profile.

[👉 Next lesson](/08-use-postgres-functions-to-implement-database-logic-with-supabase)

---

Enjoyed the course? Follow me on [Twitter](https://twitter.com/_dijonmusters) and subscribe to my [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).
