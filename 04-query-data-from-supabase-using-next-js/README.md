# Query Data From Supabase Using Next.js

**[📹 Video](https://egghead.io/lessons/supabase-query-data-from-supabase-using-next-js)**

supabase-js is a JavaScript library that makes interacting with your Supabase database simple!

In this video, we install the package with npm using npm i @supabase/supabase.js. We then create a reusable Supabase client that can be used throughout our application.

Additionally, we create environment variables for the Supabase URL and key, which are available in our Next.js client. Exposing these values to the client is not a security risk, as we will be enabling Row Level Security in a future lesson.

Lastly, we tell Next.js that we would like to pre-render our landing page at build time, by exporting out a getStaticProps function. This ensures that our lesson data is only fetched once - when we rebuild our application - rather than each time to user visits the page.

[👉 Next lesson](/05-use-next-js-to-query-a-single-record-from-supabase)

---

Enjoyed the course? Follow me on [Twitter](https://twitter.com/_dijonmusters) and subscribe to my [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).
