---
title: 'Firebase for Web'
description: 'This CodeLab demonstrates use of Firebase for Web Developers'
slug: 'firebase-for-web'
author: 'Vrijraj Singh'
date: 2024-10-23
categories: 'Technology'
label: 
duration: 30
image: '/codelabs/firebase-for-web/hero.png'
tags: ['Firebase', 'JavaScript']
draft: false
---

# Introduction 
In this lab session, you'll be leveraging the Firebase to create practical JavaScript utility tools.

##### What you'll do
- You'll utilize Google AI Studio to familiarize yourself with the tools for accessing the Gemini model and crafting a utility use case.
- You'll get the Prompt engineering concept to generate content, aiding in the comprehension of captured information.

##### What you'll learn
- How to use of Google AI Studio.
- Propmt Engineering.
- Add Gemini API to your web app.

This lab is targeted to Web Developers and software developers of all levels, including beginners. Our focus will be on getting hands-on experience with the capabilities of Gemini AI in Web.


# What is Firebase?
Firebase is a development platform from Google that helps developers build and improve mobile and web applications. It essentially provides a backend-as-a-service (BaaS) solution, which means it offers a suite of tools that handle common development tasks you would otherwise need to build yourself. This frees up developers to focus on the core functionality and user experience of their application.
<br/>
Firebase is a popular choice for developers because it's easy to use, has a wide range of features, and is backed by Google's infrastructure. There's a free tier available to get you started, and pricing scales based on your usage.Firebase helps mobile app teams succeed.

![Alt text](/codelabs/firebase-for-web/firebase-services.png "a title")

#### With Firebase you can:

1. Build better apps
1. Improve app quality
1. Grow your business

You can find more info about Firebase [here](https://firebase.google.com/products-build).

# Add Firebase to your web app

Create a new Firebase project and follow the below instructions
<br/>

1. Create a Firebase project in the `Firebase console`.
1. From the project overview page in the `Firebase console`, click Add Firebase to your web app. If your project already has an app, select Add App from the project overview page.
Copy and paste your project’s customized code snippet in the <head> tag of your page, before other script tags.
1. Copy and paste your project’s customized code snippet in the <head> tag of your page, before other script tags.
1. Create a HTML page and include JS code from Firebase Web Console
<br/>
Be sure to paste the configuration code into your web page as described.

```js
<script src="https://www.gstatic.com/firebasejs/<version>/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxx.firebaseapp.com",
    databaseURL: "https://xxxxxxxxxxxxxx.firebaseio.com",
    projectId: "xxxxxxxxxxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxxxxxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxx"
  };
  firebase.initializeApp(config);
  // your code
  </script>
```

#### Second Way! (If you are using Firebase Hosting)

If you are building a web app and your web app is entirely static content, you can deploy it easily using Firebase Hosting.

Firebase Hosting is a developer-focused static web hosting for modern front-end web applications. Using Firebase Hosting, you can deploy SSL-enabled web apps to your own domain on a global content-delivery network (CDN) from a single command.

<br/>
Web apps hosted with Firebase Hosting can benefit from simpler project configuration. Paste the following code snippets into your application HTML to import the Firebase SDK and configure it automatically for the project your app is hosted on:

```html
    <!-- Firebase App is always required and must be first -->
    <script src="/__/firebase/<version>/firebase-app.js"></script>

    <!-- Add additional services you want to use -->
    <script src="/__/firebase/<version>/firebase-auth.js"></script>
    <script src="/__/firebase/<version>/firebase-database.js"></script>
    <script src="/__/firebase/<version>/firebase-messaging.js"></script>
    <script src="/__/firebase/<version>/firebase-functions.js"></script>

    <!-- Comment out (or don't include) services you don't want to use -->
    <!-- <script src="/__/firebase/<version>/firebase-storage.js"></script> -->

    <script src="/__/firebase/init.js"></script>
```


# Use of Cloud Firestore Database

Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform. Like Firebase Realtime Database, it keeps your data in sync across client apps through realtime listeners and offers offline support for mobile and web so you can build responsive apps that work regardless of network latency or Internet connectivity.

<br/>
Cloud Firestore's NoSQL data model, you store data in documents that contain fields mapping to values. These documents are stored in collections, which are containers for your documents that you can use to organize your data and build queries. Documents support many different data types, from simple strings and numbers, to complex, nested objects. You can also create subcollections within documents and build hierarchical data structures that scale as your database grows.

#### Create a Cloud Firestore project
1. Open the Firebase Console and create a new project.
1. In the Database section, click Try Firestore.
1. Click Enable.

#### Set up your development environment

Add the required dependencies and client libraries to your app.

1. Follow the instructions to add Firebase to your Web app.
1. Add the Firebase and Cloud Firestore libraries to your app:

```js
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
    import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js";
```