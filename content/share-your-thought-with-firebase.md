---
title: 'Share your Thought with Firebase'
description: 'This CodeLab demonstrates use of Firebase for Web Developers'
slug: 'share-your-thought-with-firebase'
author: 'Vrijraj Singh'
date: 2024-4-28
categories: 'Technology'
label: 
duration: 30
image: '/codelabs/firebase-for-web/hero.png'
tags: ['FIREBASE', 'JAVASCRIPT']
draft: false
---

# Introduction 
In this lab session, you'll be leveraging the Firebase to create practical JavaScript utility tools.

##### What you'll do
- You'll utilize Firebaes to build Share your thought web application
- You'll get the Cloud Firestore concept to implement database query into your web app, aiding in the comprehension of captured information.

##### What you'll learn
- How to use of Firebase.
- Cloud Firestore Query.
- Add Firebase to your web app.

This lab is targeted to Web Developers and software developers of all levels, including beginners. Our focus will be on getting hands-on experience with the capabilities of Firebase in Web.


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

##### 1. Project Setup

```text
app Folder
├── js                      # Test files (alternatively `spec` or `tests`)
│       └──app.js           # Compiled files (alternatively `dist`)
├── index.html                    # Documentation files (alternatively `doc`)
└── README.md
```

##### 2. Setup Firebase Project and Get Keys
1. Create a Firebase project in the [Firebase console](https://console.firebase.google.com/).
1. From the project overview page in the `Firebase console`, click on `Settings` icon button and go to Project Settings.  
1. In this page, you will find `Your Apps` section and here you can get the `SDK setup and configuration` (CDN code) 
1. In `index.html`, Copy `SDK setup and configuration` and paste these scripts into the bottom of your <body> tag

<br/>

Be sure to paste the configuration code into your web page `js/app.js` as described.

```js 
// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  var config = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxx.firebaseapp.com",
    databaseURL: "https://xxxxxxxxxxxxxx.firebaseio.com",
    projectId: "xxxxxxxxxxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxxxxxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxx"
  };
  firebase.initializeApp(config);
   // Initialize Firebase
  const app = initializeApp(firebaseConfig);

```

##### 3. Load Firebase Service's Library

Now you can import the Library based on your use cases Such as if you want to use Cloud Firestore then import Cloud Firestore library.

You can get the Library CDN [here](https://firebase.google.com/docs/web/learn-more?hl=en&authuser=0&_gl=1*1rgp6jp*_ga*MjAzNTIwMjY5Ny4xNzEzNTA2Mjcw*_ga_CW55HF8NVT*MTcxNDI3NTYyMi4xNy4xLjE3MTQyNzYyMjYuNDcuMC4w#libraries-cdn)

```js 
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxxxxx.firebaseapp.com",
    databaseURL: "https://xxxxxxx.firebaseio.com",
    projectId: "xxxxxxx",
    storageBucket: "xxxxxxx.appspot.com",
    messagingSenderId: "xxxx",
    appId: "xxx"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db, collection, addDoc, getDocs}
```

##### 4. Add app.js into your web page 

Add your `app.js` file in your web page, before closing the body tag

```js
<script type="module" src="/js/app.js"></script>

<script type="module">
    import { db, collection, addDoc, getDocs } from '/js/app.js'
</script>
```

# Setup Cloud Firestore

Here, we'll setup Cloud Firestore Database in the Firebase Project Console
<br/>
1. On the Project Overview page, in the left side you can find Cloud Firestore
1. Click on Get Start Cloud Firestore Button and you need select Database region and you will find two options
database type (Production / Dev)
1. Use Dev Mode for the Development

![Alt text](https://camo.githubusercontent.com/b07163debff5b1fdb6a90946b41c8a1e5f9914e7f384e514cbb739e85557397c/68747470733a2f2f66697265626173652e676f6f676c652e636f6d2f646f63732f6669726573746f72652f696d616765732f7374727563747572652d646174612e706e67 "Data Modeling")

##### Add Data in Cloud Firestore

Cloud Firestore stores data in Documents, which are stored in Collections. Cloud Firestore creates collections and documents implicitly the first time you add data to the document. You do not need to explicitly create collections or documents.

Create a new collection and a document using the following example code.

```js
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/<version>/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = { 
    //... 
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

try {
    const ref = await addDoc(collection(db, 'users'), {name:'Vrijraj'})
    console.log(ref);
} catch (error) {
    console.log('error', e)
}
```

##### Read Data in Cloud Firestore by Document ID
```js
import { getFirestore, doc , getDoc } from "https://www.gstatic.com/firebasejs/<version>/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = { 
    //... 
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

let docid = "YOUR_DOC_ID" 

const docRef = doc(db, "data", docid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
} else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
}
```

##### Read all documents in Cloud Firestore
```js
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/<version>/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = { 
    //... 
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const querySnapshot = await getDocs(collection(db, 'users'))
let res = querySnapshot.docs.map(doc=> {
    return {...doc.data(),...{docid:doc.id}}
})

console.log(res);
```

##### Update Data in Cloud Firestore by Document ID
```js
import { getFirestore, doc, updateDoc } from "https://www.gstatic.com/firebasejs/<version>/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = { 
    //... 
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

let docid = 'YOUR_DOC_ID'
const docRef = doc(db, 'data', docid)

// set name 'name1' to 'name2'
await updateDoc(docRef,{name:'name2'})
```

##### Delete document in Cloud Firestore by Document ID
```js
import { getFirestore, doc, updateDoc } from "https://www.gstatic.com/firebasejs/<version>/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = { 
    //... 
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

let docid = 'YOUR_DOC_ID'
await deleteDoc(doc(db, "data", docid));
```

# Add Data from Input 

Now you can create one HTML Button and Input field, define some id such as `addBtn` and `msg`

```html [index.html]
<input type="text" placeholder="Add Your Msg" id="msg">
<button id="addBtn">Button</button>
```

Then you we need to perform action and add data in firestore
```js [index.html]
document.getElementById('addBtn').addEventListener('click', addData)

async function addData() {
    try {
        let dataToAdd = document.getElementById('msg').value
        const ref = await addDoc(collection(db, 'users'), { name: dataToAdd })
        console.log(ref);
        alert('Data Added Successfully')
    } catch (error) {
        console.log('error', e)
    }
}
```

# Read All Data 

Now you can create one more HTML Button and define some id such as `readBtn` and one div element for showing the results

```html [index.html]
<button id="readBtn">Read Data</button>

<div id="res"></div>
```
Then you need to perform action when user click on `Read Data` button

```js [index.html]
document.getElementById('readBtn').addEventListener('click', readData)
async function readData() {
    try {
        const querySnapshot = await getDocs(collection(db, 'users'))
        let res = querySnapshot.docs.map(doc => {
            return { ...doc.data(), ...{ docid: doc.id } }
        })
        res.forEach(ele=>{
            document.getElementById('res').innerHTML += `
                <p>${ele.name}</p>
            ` 
        })
    } catch (error) {
        console.log('error', e)
    }
}
```

# Conclusion

We learned how to create a web application with Firebase. 
<br>
Enjoy coding with Firebase!