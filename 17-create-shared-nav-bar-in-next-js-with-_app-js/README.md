# Create Shared Nav Bar in Next.js with \_app.js

**[📹 Video](https://egghead.io/lessons/next-js-create-shared-nav-bar-in-next-js-with-_app-js)**

Manually typing the URL to navigate between our different pages is becoming cumbersome. Let's create a shared navigation bar that will display on every page in our application.

In this video, we create a new component to display our Nav options - / and /pricing. Each of our routes uses the Next.js <Link> component to make transitions between pages client-side. By rendering our <Nav> component in pages/\_app.js, our navbar will display on every page.

Additionally, we would like to dynamically swap out our login and logout options, based on the user's signed in status. In order to do this, we can use the useUser hook and conditionally render each link based on our user's state.

[👉 Next lesson](/18-query-dynamic-supabase-data-in-static-pages-using-next-js)

---

Enjoyed the course? Follow me on [Twitter](https://twitter.com/jonmeyers_io) and subscribe to my [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).
