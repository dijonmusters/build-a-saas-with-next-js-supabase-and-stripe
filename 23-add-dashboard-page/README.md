# Create a Client Page that Requires Authentication in Next.js Using getServerSideProps

**[📹 Video](https://egghead.io/lessons/supabase-create-a-client-page-that-requires-authentication-in-next-js-using-getserversideprops)**

We can create protected client pages that require a user to be signed in with Supabase to view, by exporting a getServerSideProps function from our page component. This will allow us to execute some logic on the server, before Next.js renders our component.

We will create a new page for /dashboard. It doesn't make sense for this page to be rendered unless we have a user, therefore, we can redirect the user to the /login route if they are not signed in.

We can extract our user from the Supabase auth cookie by calling the getUserByCookie function. If we don't have a user, we can redirect the request to our login page, otherwise, we can display our dashboard page.

We want it to be easy to navigate to this page if we have a user, therefore, we add a link to our <Navbar> component, and conditionally render it based on whether or not we have a user signed in.

Lastly, we implement an isLoading state and only display our user's subscription information in the dashboard.

[👉 Next lesson](/24-allow-customer-to-manage-their-subscription-with-stripe-customer-portal)

---

Enjoyed the course? Follow me on [Twitter](https://twitter.com/_dijonmusters) and subscribe to my [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).
