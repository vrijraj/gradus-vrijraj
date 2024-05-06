---
title: 'Gemini for JavaScript'
description: 'This CodeLab demonstrates use of Gemini API with JavaScript'
slug: 'gemini-for-js'
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
date: 2024-04-25
categories: 'Technology'
duration: 30
image: '/codelabs/gemini-for-js/gemini.png'
tags: ['Gemini', 'JavaScript']
draft: false
---


# Introduction 
In this lab session, you'll be leveraging the Gemini API to create practical JavaScript utility tools.

##### What you'll do
- You'll utilize Google AI Studio to familiarize yourself with the tools for accessing the Gemini model and crafting a utility use case.
- You'll get the Prompt engineering concept to generate content, aiding in the comprehension of captured information.

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


# Create you First Prompt

##### Follow the Instructions
1. Go to `Create new` button and select `Freefrom Prompt`
1. In the right side, sidebar is for Gemini Model Selection, Number of Token, and other config
1. In the Center you can pass the Prompt and click on `Run` button to get the response 
1. On the top right side, you will find a button `Get Code`, to use Gemini API in your respective language

# Gemini API with JavaScript 

> Caution: Using the Google AI SDK for JavaScript directly from a client-side app is recommended for prototyping only. If you plan to enable billing, we strongly recommend that you call the Google AI Gemini API only server-side to keep your API key safe. You risk potentially exposing your API key to malicious actors if you embed your API key directly in your JavaScript app or fetch it remotely at runtime.

#### Initialize the Generative Model
Before you can make any API calls, you need to import and initialize the Generative Model. 

You can get the API Key from AI Studio by clicking on `Get API`

``` html
<html>
  <body>
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

      // Fetch your API_KEY
      const API_KEY = "...";

      // Access your API key (see "Set up your API key" above)
      const genAI = new GoogleGenerativeAI(API_KEY); d
      const model = genAI.getGenerativeModel({ model: "MODEL_NAME"});
    </script>
  </body>
</html>
```

#### Generate text from text-only input
When the prompt input includes only text, use the `gemini-pro` model with the generateContent method to generate text output:

```html
<html>

<body>
    <!-- ... Your HTML and CSS -->
    <button id="button">Get Response</button>
    <div id="res"></div>

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
        const API_KEY = "YOUR API KEY";
        const genAI = new GoogleGenerativeAI(API_KEY);

        async function run() {
            // For text-only input, use the gemini-pro model
            console.log('calling');
            const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });
            const prompt = "Write a story about a magic backpack."

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            document.getElementById('res').innerHTML = text
            console.log(text);
        }

        document.getElementById('button').addEventListener('click', ()=>{
            run()
        })

    </script>
</body>

</html>
```

You can find more info [here](https://ai.google.dev/gemini-api/docs/get-started/web)


# Conclusion
We learned how to create a web application with the assistance of Gemini. It's evident that Gemini can provide varied results, but refining the response is possible through improved writing prompts. Whether a developer is experienced or not, anyone can utilize Gemini to construct utility tools.<br />


Enjoy coding with Gemini!