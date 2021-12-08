# Make User State Globally Accessible in Next.js with React Context and Providers

**[📹 Video](https://egghead.io/lessons/next-js-make-user-state-globally-accessible-in-next-js-with-react-context-and-providers)**

Using React Context, we can create global variables that are available throughout our Next.js application. In this video, we create a useUser hook that exposes the state of our Supabase user to our tree of React components.

To get the state of our Supabase user when our application loads, we can use supabase.auth.user(). When the state of our user changes - e.g. our user logs in - Supabase will call the supabase.auth.onAuthStateChange callback. We can use this to update the state of our user object whenever the user signs in or out.

In order to consume our user context, we need to wrap our root component in our Context Provider. This can be done in the pages/\_app.js file. Now any component in our tree of decedents can call useUser to get the state of our global singleton user.

Lastly, our user object only contains values from the auth.users table. In order to enrich our user with data from the profile table, we need to add a request to our Supabase db within our user provider.

[👉 Next lesson](/14-implement-authorization-using-row-level-security-and-policies)

---

Enjoyed the course? Follow me on [Twitter](https://twitter.com/jonmeyers_io) and subscribe to my [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).
