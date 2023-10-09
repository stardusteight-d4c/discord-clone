<div align="center">
  <img src="logo.png" width="222" height="78" />
</div>

<h1 align="center">
   Discord, Real-time Communication Channels
</h1>

This project is a web application developed with the aim of improving knowledge in specific frontend and backend technologies. The application aims to replicate the interface of two main Twitter pages: the posts feed and the login page.

Vue.js is a progressive JavaScript framework that allows the creation of reactive and interactive user interfaces broken down into reusable components. Nuxt 3 is an updated version of Nuxt.js, a Vue.js framework focused on creating SSR (Server-Side Rendered) and SSG (Static Site Generated) applications, offering better performance and an improved development experience.

To share logic between components, the project uses Composables, which are part of the Vue.js Composition API, allowing you to reuse logic across multiple components, making the code more modular and easier to maintain. The project's styling and styling is done with the help of TailwindCSS, a utility CSS framework that makes it easy to create custom styles through utility classes.

To handle communication between components, the application uses the Mitt library, which is a functional event emitter, offering a functional approach to event communication.

API routes are created using the Nuxt.js API Routes functionality, allowing communication between the frontend and the backend. The Transformers pattern is used to transform data before being sent to the client, allowing formatting and filtering of information before displaying it in the interface.

For interaction with the No SQL database, the project uses the Prisma tool, which facilitates the creation of database schemas through declarative language and allows queries to be carried out in a more intuitive way.

For form data analysis, especially file uploads, the project uses the Formidable library, simplifying the processing of data sent by forms.

The Cloudinary service is used to host images and manage digital assets, storing and delivering images to the application.

For authentication and authorization in the web application, the project uses Json Web Tokens, allowing the creation of signed tokens to authenticate users. In addition, the access and refresh token security approach is adopted, where users are given an access token with a short expiration and can renew it through the use of a refresh token.

In short, the project is a combination of modern frontend and backend technologies, which aims to replicate aspects of Twitter's interface and functionality, demonstrating the efficient and safe use of technologies such as TypeScript, Vue.js, Nuxt.js, TailwindCSS, Prisma and Json Web Tokens.

## :hammer_and_wrench: Tools

* TypeScript
* Next.js
* Radix
* Shadcn/ui
* Axios
* Livekit
* Socket.io
* Lucide React
* Uploadthing
* Zod
* Zustand
* Clerk
* React Hook Form
* React Query (tanstack)
* Query String
* Prisma

## :mailbox_with_mail: Utilities
 
### <strong>Composables Vs. Hooks</strong>

Composables in Vue.js can be compared to Hooks in React in terms of purpose and functionality. Both features aim to facilitate the reuse of logic in components, improving code composition and modularity.


![screen](./screenshots/emoji-picker.png)

<p align="center">Project made with :blue_heart: by <a href="https://github.com/stardusteight-d4c">Gabriel Sena</a></p>
