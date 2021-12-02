# Implement Authorization Using Row Level Security and Policies

**[📹 Video](https://egghead.io/lessons/supabase-implement-authorization-using-row-level-security-and-policies)**

Row level security is a feature of PostgreSQL, that secures our database by automatically denying all read and write requests. We can then create policies to enable particular actions for specific tables. This is similar to declaring an SQL where clause that is automatically appended to every query.

We use the Supabase dashboard to write a simple select policy. This allows anyone (signed in or not) to view rows from the lesson table.

Taking this concept a little further, we create a select policy for the profile table. This will allow any logged in user to select their specific profile.

Row level security is a powerful way to implement authorization, as it is enforced by the database itself, and runs for each row returned by a query. No need to go through an API to determine whether the user should have access or not. This can drastically improve the performance and reliability of our data fetching, as we can remove an unnecessary hop! 🎉

[👉 Next lesson](/15-implement-gated-content-using-row-level-security-with-supabase)

---

Enjoyed the course? Follow me on [Twitter](https://twitter.com/_dijonmusters) and subscribe to my [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).
