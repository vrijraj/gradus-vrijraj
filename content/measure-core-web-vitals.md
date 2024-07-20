---
title: "Measure Core Web Vitals"
description: "This CodeLab demonstrates how to measure core web vitals in website"
slug: "measure-core-web-vitals"
authors:
  [
    {
      name: "Vrijraj Singh",
      image: "/authors/vrijraj.jpeg",
      socials:
        {
          linkedin: "https://www.linkedin.com/in/vrijrajsingh/",
          github: "https://github.com/vrijraj",
          web: "https://vrijraj.xyz",
        },
    },
  ]
date: 2024-07-20
categories: "Technology"
duration: 30
image: "/codelabs/web-vitals/cwv-cover.png"
tags: ["Performance", "Web"]
draft: false
---

# Introduction

In this codelab, you learn how to measure a web page's Core Web Vitals with the web-vitals [JavaScript library](https://github.com/GoogleChrome/web-vitals).

##### What you'll do

- You'll utilize JavaScript Core Web Vital Library to measure the performance.
- Basic of Core Web Vital Concepts

##### What you'll learn

- Core Web Vital.

This lab is targeted to Web Developers and software developers of all levels, including beginners. Our focus will be on getting hands-on experience with the Core Web Vital.

# What is Core Web Vitals?

Core Web Vitals are a set of metrics that Google uses to measure the real-world user experience of loading performance, interactivity, and visual stability of a web page. In simpler terms, they evaluate how quickly a page loads, how responsive it is, and how stable it is as it loads.

## Why are they important?

- **Better user experience**: Websites with good Core Web Vitals tend to have happier users.
- **Improved search rankings**: Google considers Core Web Vitals as a ranking factor, so optimizing them can help your website appear higher in search results.

## The Three Core Web Vitals

There are three key metrics under Core Web Vitals:

![Alt text](/codelabs/web-vitals/cwv.png "a title")

### Largest Contentful Paint (LCP):

Measures how long it takes for the largest content element on the page to load. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.

### Interactive (INP):

Measures how long it takes for a user to interact with a page and get a response. To provide a good user experience, pages should have a INP of 200 milliseconds or less.

### Cumulative Layout Shift (CLS):

Measures how much the page content shifts around as it loads. To provide a good user experience, pages should maintain a CLS of 0.1. or less.

Check out this [Resources](https://web.dev/articles/vitals) know more about Core Web Vitals

# Getting Started

1. In your text editor, create a `index.html` file and then enter this HTML code in the file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Web Vitals Test</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <p>
      <img
        style="max-width: 360px"
        src="https://picsum.photos/200/300"
        alt="Random Image"
      />
    </p>
    <p>Text below image</p>
  </body>
</html>
```

1. In the HTML code's <body> element after the second <p> element, enter this module script and then save the file:

```javascript
<script type="module">
  import {(onCLS, onFID, onLCP)} from 'https://unpkg.com/web-vitals?module';
  onCLS(console.log); onFID(console.log); onLCP(console.log);
</script>
```

This module script loads the `web-vitals library` from a content delivery network. Now your file looks like this code snippet:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Web Vitals Test</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <p>
      <img
        style="max-width: 360px"
        src="https://picsum.photos/200/300"
        alt="Random Image"
      />
    </p>
    <p>Text below image</p>

    <script type="module">
      import { onCLS, onFID, onLCP } from "https://unpkg.com/web-vitals?module";

      onCLS(console.log);
      onFID(console.log);
      onLCP(console.log);
    </script>
  </body>
</html>
```

Modern browsers support module scripts, making them ideal for code that relies on new APIs, like those needed to measure Core Web Vitals. Browsers that don't support modules or the Core Web Vitals APIs will simply ignore this script.

# Measure with Chrome Dev Tools

1. In your web browser, open the saved file.
2. Right-click the web page and then click Inspect in the dialog.
3. In the Google Chrome Developer Tools pane, click the Console tab and then select Console settings > Preserve log. This setting ensures that logs persist when you refresh the web page.

![Alt text](/codelabs/web-vitals/devtools1.png "a title")

4. Click the Network tab, and then click the down icon expander arrow of the throttling drop-down menu and select Slow 3G. This setting simulates a slow network connection.
![Alt text](/codelabs/web-vitals/devtools2.png "a title")

5. Navigate back to the Console tab, and then click anywhere on the web page. The LCP and FID metrics print in the Console tab.
![Alt text](/codelabs/web-vitals/devtools3.png "a title")

6. Refresh the web page. The CLS metric prints in the Console tab.
![Alt text](/codelabs/web-vitals/devtools4.png "a title")

7. Navigate back to the Network tab, and then click the expander arrow of the throttling drop-down menu and select Fast 3G. This setting simulates a fast network connection.
8. Navigate back to the Console tab, and then click anywhere on the web page.The LCP and FID metrics print in the Console tab again, but they improved from earlier.
![Alt text](/codelabs/web-vitals/devtools5.png "a title")
9. Refresh the web page. The CLS metric prints in the Console tab again, but it improved from earlier.
![Alt text](/codelabs/web-vitals/devtools5.png "a title")

# Conclusion

Congratulations! You learned how to measure and report a web page's Core Web Vitals with the web-vitals library.
