---
title: 'OpenAI API for JavaScript'
description: 'This CodeLab demonstrates the use of the OpenAI API with JavaScript'
slug: 'openai-for-js'
author: 'Your Name'
date: 2024-10-23
categories: 'Technology'
label: 
duration: 30
image: '/codelabs/openai.png'
tags: ['OpenAI', 'JavaScript']
draft: false
---

# Introduction 
In this lab session, you'll be leveraging the OpenAI API to create practical JavaScript utility tools.

##### What you'll do
- You'll utilize Google AI Studio to familiarize yourself with the tools for accessing the OpenAI model and crafting a utility use case.
- You'll understand the concept of prompt engineering to generate content, aiding in the comprehension of captured information.

##### What you'll learn
- How to use Google AI Studio.
- Prompt Engineering.
- Add OpenAI API to your web app.

This lab is targeted at Web Developers and software developers of all levels, including beginners. Our focus will be on getting hands-on experience with the capabilities of the OpenAI API in Web.

# What is OpenAI?

The OpenAI API provides access to state-of-the-art AI models, allowing developers to generate text, translate languages, create images, and more.

![OpenAI Logo](/codelabs/openai.png "OpenAI")

It seamlessly integrates with web applications, enabling features like chatbots, content generation, and more.

##### With OpenAI, you can generate:
1. Text
1. Images
1. Audio
1. Video

##### How to Access OpenAI API

1. You can use [OpenAI API](https://openai.com/api).
2. Sign up for an API key and get started.

You can find more info about the OpenAI API [here](https://openai.com/api).

# Create Your First Prompt

##### Follow the Instructions
1. Go to `Create new` button and select `Freeform Prompt`.
1. In the right sidebar, configure the OpenAI model selection and other settings.
1. In the center, pass the prompt and click on the `Run` button to get the response.
1. On the top right side, you will find a button `Get Code` to use the OpenAI API in your respective language.

# OpenAI API with JavaScript 

> Caution: Using the OpenAI SDK for JavaScript directly from a client-side app is recommended for prototyping only. If you plan to enable billing, we strongly recommend that you call the OpenAI API only server-side to keep your API key safe. You risk potentially exposing your API key to malicious actors if you embed your API key directly in your JavaScript app or fetch it remotely at runtime.

#### Initialize the Generative Model
Before you can make any API calls, you need to import and initialize the Generative Model. 

You can get the API Key from the OpenAI website after signing up.

```html
<html>
  <body>
    <!-- ... Your HTML and CSS -->

    <script type="importmap">
      {
        "imports": {
          "@openai/generative-ai": "https://esm.run/@openai/generative-ai"
        }
      }
    </script>
    <script type="module">
      import { OpenAIGenerativeAI } from "@openai/generative-ai";

      // Fetch your API_KEY
      const API_KEY = "...";

      // Access your API key (see "Set up your API key" above)
      const genAI = new OpenAIGenerativeAI(API_KEY);

      // ...

      const model = genAI.getGenerativeModel({ model: "MODEL_NAME"});

      // ...
    </script>
  </body>
</html>
```

##### Generate text from text-only input
<br />
When the prompt input includes only text, use the davinci model with the generateContent method to generate text output:

```html
<html>

<body>
    <!-- ... Your HTML and CSS -->
    <button id="button">Get Response</button>
    <div id="res"></div>

    <script type="importmap">
      {
        "imports": {
          "@openai/generative-ai": "https://esm.run/@openai/generative-ai"
        }
      }
    </script>
    <script type="module">
        import { OpenAIGenerativeAI } from "@openai/generative-ai";

        // Fetch your API_KEY
        const API_KEY = "YOUR API KEY";
        const genAI = new OpenAIGenerativeAI(API_KEY);

        async function run() {
            // For text-only input, use the davinci model
            const model = genAI.getGenerativeModel({ model: "davinci" });
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

# Conclusion
We learned how to create a web application with the assistance of the OpenAI API. It's evident that OpenAI can provide varied results, but refining the response is possible through improved writing prompts. Whether a developer is experienced or not, anyone can utilize OpenAI to construct utility tools.<br />

Enjoy coding with OpenAI!