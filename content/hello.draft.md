---
title: 'Send notifications for a web app using Cloud Messaging and Cloud Functions'
description: 'Learn why variables are useful in programming, as well as how to define and update variables in your Kotlin code.'
slug: 'firebase-cloud-functions'
author: 'Vrijraj Singh'
date: 23-10-2024
categories: 'Technology'
label: 
duration: 23
image: '/codelabs/hello.png'
tags: ['node.js']
draft: true
---


# Overview

In this codelab, you'll learn how to use Cloud Functions for Firebase to add functionality to a chat web app by sending notifications to users of the chat app.


```ts [nuxt.config.ts]
export default defineNuxtConfig({
  // ...
  modules: ["nuxt-server-utils"],
});
```

<!-- ::button
Button 2
:: -->

::Alert
This codelab is meant as a sequel to the Firebase Web Codelab, in which you learn how to build a chat app using the Firebase Web SDK. If you would like to learn how to use the Firebase platform on the Web by building a chat app, follow the Firebase Web Codelab first. If you already know how to use the Firebase platform and CLI and want to learn about the Firebase SDK for Cloud Functions, you're at the right place. We'll show you how to clone the completed Firebase Web Codelab below.
::

::card
The content of the card
::

##### What you'll learn
- Create Google Cloud Functions using the Firebase SDK.
- Trigger Cloud Functions based on Auth, Cloud Storage, and Cloud Firestore events.
- Add Firebase Cloud Messaging support to your web app.

##### What you'll need
1. A credit card. Cloud Functions for Firebase requires the Firebase Blaze plan, which means you will have to enable billing on your Firebase project using a credit card.
1. The IDE/text editor of your choice such as WebStorm, Atom or Sublime.
1. A terminal to run shell commands with NodeJS v9 installed.
1. A browser such as Chrome.
1. The sample code. See next step for this.


According to the officials [ExpressJS Website](https://expressjs.com/), Express is a Fast, unopinionated, minimalist web framework for Node.js

Finally, let's add the plugin to the `plugins` section of our `nuxt.config.ts` file:



# Get the sample code

Clone the GitHub repository from the command line:

```js
git clone https://github.com/firebase/friendlychat
```

Using your IDE, open or import the android_studio_folder.pngcloud-functions-start directory from the sample code directory. This directory contains the starting code for the codelab which consists of a fully functional Chat Web App.




This page corresponds to the `/` route of your website. You can delete it or create another file in the `content/` directory.

Try to navigate to [/about](/about). These 2 pages are rendered by the `pages/[...slug].vue` component.

# Section 3

The main content starts here. This section will dive deeper into the subject.

Here's a paragraph with some **bold text** and *italic text*.

1. First ordered item
2. Second ordered item

### Subheading in Main Content

Sub-sections provide more detailed information.

> This is a blockquote.

# Section 4

In the conclusion, we'll summarize the key points and provide final thoughts.

Thank you for reading through our guide. We hope you found it informative.

- Conclusion Item 1
- Conclusion Item 2

---

Look at the [Content documentation](https://content.nuxtjs.org/) to learn more.

# Section 4


# Section 4


# Section 4


# Section 4
