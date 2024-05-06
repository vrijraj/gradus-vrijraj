![Alt text](/public/donotremove/gradus-social.png "Gradus")

# Gradus
Gradus is an open-source tool that enables you to create codelabs using both markdown and rich markdown components. It offers the flexibility to operate either server-side or client-side, depending on your preference. Additionally, Gradus is experimenting with AI-enabled features to enhance its capabilities.

### Show some :heart: and :star: the repo to support the project

## Features
- Gradus is user-friendly, allowing you to effortlessly create codelabs with markdown and its rich components.
- Features a mobile-friendly user interface.
- SEO-optimized to ensure all content is indexed, boosting visibility in search results.
- Equipped with experimental AI-enabled functionalities.
- Suitable for both individual developers and tech communities.
- Fast and optimized for performance.

# Setup Guide

[Follow this Codelab on Gradus](https://trygradus.web.app/getting-started-with-gradus)


## Prerequisites

Ensure you have the following installed:

- Node.js (version 18 or later)
- NUXT 3 (a modern Vue.js framework)
- Vuetify 3 (a Vue UI Library)

## Installing Gradus

Follow these steps to set up the GRADUS project on your local machine:

1. **Fork and Clone the Repository:** Start by forking [this repository](https://github.com/oss-labs/gradus) and then clone it to your local machine.
2. **Install Dependencies:** Navigate to the project directory and run the following command to install all the required dependencies.
  ```bash
npm install
```
3. **Run Locally:** Execute the following command to start the development server and view the project in your browser.
```bash
npm run dev
```
4. **Prepare for Production:** When you're ready to build for production, use the following command. This will create a `./output` directory containing the production build of your project.
```bash
npx nuxi generate
```
5. **Setup Complete:** Your setup is now complete, and you're ready to start using Gradus!


# Customization

To personalize your GRADUS setup, modify the following files:

1. **Project Meta Information:** Navigate to `assets/config.js` to customize your codelab’s metadata, such as the project name, description, and social media links, along with SEO and AI-related settings.
2. **Images:** Upload thumbnail images and favicon to the `public` directory.

# Configuration

Customize your project to suit your needs with the following configuration options:

## Google Analytics Integration

To add Google Analytics to your project:

- **File Location:** Open the `nuxt.config.ts` file.
- **Configuration:** Insert your Google Analytics tracking code here to start monitoring your application's traffic.

```ts[nuxt.config.ts]
gtag: {
  id: "G-your-tag"
}
```

## Banner Management

Manage the display banner easily:

- **File Location:** Navigate to the `config.js` file.
- **Toggle Banner:** You can easily enable or disable the banner. Additionally, you can modify the content of the banner directly within this file.

## Enabling AI Features

To leverage AI functionalities within your project:

- **Configuration Steps:**

  1. Go to the `config.js` file.
  2. Set `aiFlag` to `true` to enable AI features.
  3. Adjust `aiFlagType` to specify the type of AI you want to activate (openai, gemini).
  4. Create a `.env` file in the project root to securely store API keys.

- **Environment File Setup:** Provide your API keys in the `.env` file as follows:

```
OPENAI_API_KEY="YOUR-API-KEY"
GEMINI_API_KEY="YOUR-API-KEY"
```

# Deployment

This codelab can be deployed using one of two methods, each suited to different hosting environments and use cases.

## Server Side Rendering (SSR)

Server Side Rendering (SSR) enhances SEO and improves performance for users by serving pre-rendered pages from the server.

- **How to Generate Server-Side Code:**
  - Run the command `npm run build` in your project directory. This builds the application and prepares it for deployment.
- **Hosting Options:**

  - **Netlify:** Follow Netlify’s documentation to deploy your SSR application.
  - **Vercel:** Use Vercel for advanced server-side rendering capabilities. Both platforms support automatic deployment from your git repository.

  <br>

:::md-alert{type="error"}
#content
**Note on AI Features:** Currently, AI features are only supported in SSR deployments.
:::

## Static Site Generation (SSG)

Static Site Generation (SSG) offers fast loading times and reliable performance by generating HTML files at build time, which can be hosted on any static hosting service.

- **How to Generate Static Code:**
  - Execute the command `npx nuxi generate`. This command will produce a fully static version of your site, which can be deployed without needing a server.
- **Hosting Options:**
  - **Firebase:** Ideal for hosting static files with benefits like integrated security features and easy scaling.
  - **GitHub Pages:** A straightforward option for hosting static websites, especially if your project is already managed in a GitHub repository.

<br>

Choose the deployment method that best fits your project needs and the expected traffic. SSR is generally better for dynamic sites with heavy user interaction, while SSG is excellent for sites with fewer updates and high performance requirements.

# Contribution

Awesome! We greatly appreciate contributions of all kinds. To make the process smoother, here are some guidelines that should help you get started quickly.

### Using GitHub Issues

- **What to Use Issues For:** Feel free to use GitHub issues for questions, bug reports, and feature requests.
- **Searching:** Before creating a new issue, use the search feature to check if there is already an existing discussion about it.
- **Information and Resources:** Include as much information as possible when creating an issue. Relevant resources like screenshots are very helpful.
- **Bug Reports:** For bug reports, ensure you provide a reproducible test case. A pull request with a failing test is ideal, though not required.

### Submitting a Pull Request

- **Commit Management:** Squash your commits to keep the history clean.
- **Code Quality:** Lint your code with eslint, using the provided configuration, to maintain code quality.
- **Tests:** Include updates or additions to tests relevant to your changes.
- **Branch Policy:** Make pull requests against the `dev-contribution` branch. Pull requests to other branches will be rejected unless specified by the maintainers.


# List Your Project

You can highlight your project in the `readme.md` file and also fill out the provided [Google form](https://link-url-here.org) to share more about what you’ve built.

# Technology Stack

* [Nuxt 3](https://nuxt.com/)
* [Vuetify](https://vuetifyjs.com/en/)
* [Nuxt Content](https://content.nuxt.com/)

# Team and Support
If you encounter any issues or have queries, post them in the issues section. Our dedicated team will strive to address your concerns within 10-12 hours.
