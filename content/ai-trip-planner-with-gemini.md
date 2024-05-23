---
title: 'AI Trip Planner with Gemini'
description: 'This CodeLab demonstrates to developed the AI Trip Plnner with Gemini API by using JavaScript'
slug: 'ai-trip-planner-with-gemini'
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
        }
    },
  ]
date: 2024-05-12
categories: 'Technology'
duration: 30
image: '/codelabs/ai-trip-planner-with-gemini/aiplanner.png'
tags: ['GEMINI', 'JAVASCRIPT']
draft: false
---


# Introduction 
In this lab, you'll be developing AI Trip Planner by using the Gemini API and JavaScript.

##### What you'll do
- You'll utilize Google AI Studio to familiarize yourself with the tools for accessing the Gemini model and crafting a utility use case.
- You'll get the Prompt engineering concept to generate content, aiding in the comprehension of captured information.
- Basic of JavaScript Concepts such as Function Calling and Calling Function when user click on the Button

##### What you'll learn
- How to use of Google AI Studio.
- Propmt Engineering.
- Add Gemini API to your web app.

This lab is targeted to Web Developers and software developers of all levels, including beginners. Our focus will be on getting hands-on experience with the capabilities of Gemini AI in Web.


# What is Gemini?

Gemini API is a large language model API developed by Google AI. 

![Alt text](/codelabs/gemini-for-js/gemini.png "a title")

It's allows developers to interact with powerful AI models that can generate text, translate languages, write different kinds of creative content, and answer your questions in an informative way.<br>

You can integrates seamlessly with web applications, enabling features like chatbots, interactive content generation, and more.

##### With GenAI you can generate:
1. Text
1. Images
1. Audio
1. Video

##### How to Access Gemini API

1. You can use [Google AI Studio](https://aistudio.google.com), A browser-based tool that allows developers to prototype and test generative AI models
1. [Google Cloud Vertex AI ](https://cloud.google.com/vertex-ai)

You can find more info about Gemini [here](https://blog.google/technology/ai/google-gemini-ai/).


# What is AI Studio?
AI Studio, A browser-based tool that allows developers to prototype and test generative AI models
![Alt text](/codelabs/gemini-for-js/aistudio.png "AI Studio")

You access AI Studio [here](https://aistudio.google.com/).


# Create your HTML Page
##### Follow the Instructions
1. Open any `IDE` for Example `VS Code Editor` and Create new Workspace/Folder
2. Inside the workspace create new `html` file with name `index.html`
3. Define the html basic Structure

  ```html[index.html]
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
  ```

4. Import `generative-ai` library in your html page before closing the body tag with `type="importmap"`

```js
  <!-- ... Your HTML and CSS -->
    <script type="importmap">
      {
        "imports": {
          "@google/generative-ai": "https://esm.run/@google/generative-ai"
        }
      }
    </script>
```
5. Import `GoogleGenerativeAI` from the `generative-ai` module using another `script` tag using `type="module"`

```js
  <!-- ... Your HTML and CSS -->
    <script type="importmap">
      {
        "imports": {
          "@google/generative-ai": "https://esm.run/@google/generative-ai"
        }
      }
    </script>

    <script type="module">
      import { GoogleGenerativeAI } from "@google/generative-ai";
    </script>
```
6. Define `model` and `api_key`, you can get the `api_key` from [Google AI Studio](https://aistudio.google.com)
```js
  <!-- ... Your HTML and CSS -->
    <script type="importmap">
      {
        "imports": {
          "@google/generative-ai": "https://esm.run/@google/generative-ai"
        }
      }
    </script>

    <script type="module">
      import { GoogleGenerativeAI } from "@google/generative-ai";
      / Fetch your API_KEY
      const API_KEY = "...";

      // Access your API key (see "Set up your API key" above)
      const genAI = new GoogleGenerativeAI(API_KEY); d
      const model = genAI.getGenerativeModel({ model: "MODEL_NAME"});
    </script>
```

# Define Input Fields and action for Gemini

In the html page, you can create input fields such as Starting point, destination, number of days and button for action
```html
  <h1>Google Generative AI</h1>
  <input type="text" id="from" placeholder="Starting point" />
  <input type="text" id="to" placeholder="Destination" />
  <input type="text" id="days" placeholder="Number of days" />
  <button id="generateBtn">Generate</button>
  <h3>Generated Content</h3>
  <div id="output"></div>
```

In the `script` sction where `type='module'`

```js
 <script type="module">
    import { GoogleGenerativeAI } from "@google/generative-ai";

    // Fetch your API_KEY 
    const API_KEY = "API_KEY";

    // Access your API key (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(API_KEY);

    // ...
    async function run() {
      const fromDest = document.getElementById("from").value;
      const toDest = document.getElementById("to").value;
      const days = document.getElementById("days").value;
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

      const prompt = `Create a travel itinerary from ${fromDest} to ${toDest} for ${days} days.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      document.getElementById("output").innerHTML = text;
    }

    document.getElementById("generateBtn").addEventListener("click", run);
  </script>
```

Overall you will be
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <h1>Google Generative AI</h1>
  <input type="text" id="from" placeholder="Starting point" />
  <input type="text" id="to" placeholder="Destination" />
  <input type="text" id="days" placeholder="Number of days" />
  <button id="generateBtn">Generate</button>
  <h3>Generated Content</h3>
  <div id="output"></div>
  <script type="importmap">
    {
      "imports": {
        "@google/generative-ai": "https://esm.run/@google/generative-ai"
      }
    }
  </script>

  <script type="module">
    import { GoogleGenerativeAI } from "@google/generative-ai";

    // Fetch your API_KEY
    const API_KEY = "API_KEY";

    // Access your API key (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(API_KEY);

    // ...
    async function run() {
      const fromDest = document.getElementById("from").value;
      const toDest = document.getElementById("to").value;
      const days = document.getElementById("days").value;
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

      const prompt = `Create a travel itinerary from ${fromDest} to ${toDest} for ${days} days.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
    
      document.getElementById("output").innerHTML = text
    }

    document.getElementById("generateBtn").addEventListener("click", run);
  </script>
</body>

</html>

```

> Caution: Using the Google AI SDK for JavaScript directly from a client-side app is recommended for prototyping only. If you plan to enable billing, we strongly recommend that you call the Google AI Gemini API only server-side to keep your API key safe. You risk potentially exposing your API key to malicious actors if you embed your API key directly in your JavaScript app or fetch it remotely at runtime.

# Conclusion
We learned how to create a web application with the assistance of Gemini. It's evident that Gemini can provide varied results, but refining the response is possible through improved writing prompts. Whether a developer is experienced or not, anyone can utilize Gemini to construct utility tools.<br />


Enjoy coding with Gemini!