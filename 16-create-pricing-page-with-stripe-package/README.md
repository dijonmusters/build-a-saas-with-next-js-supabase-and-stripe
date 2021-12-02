# Use Stripe.js to Query Product Data and Pre-Render with Next.js

**[📹 Video](https://egghead.io/lessons/next-js-use-stripe-js-to-query-product-data-and-pre-render-with-next-js)**

Each of our subscription options will be a product in Stripe. In this video, we create a /pricing page to display our new products. We use the Stripe package to fetch these options at build time and add some simple styling to make it look nice!

Annoyingly, the prices list is what we need to request for pricing information, but does not contain product information - such as name. This means we need to make an additional request for the product information for each price. Good thing we are only doing this once at build time, as the request time could add up pretty quickly, if we needed to do this on every request!

Lastly, we sort the list of plans from Stripe, to ensure that the prices go up in ascending order. Since each plan has a price, we can use a simple native JS sorting technique.

[👉 Next lesson](/17-create-shared-nav-bar-in-next-js-with-_app-js)

---

Enjoyed the course? Follow me on [Twitter](https://twitter.com/_dijonmusters) and subscribe to my [YouTube channel](https://www.youtube.com/channel/UCPitAIwktfCfcMR4kDWebDQ).
