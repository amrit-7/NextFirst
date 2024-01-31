## "The Scoop on Next.js 14"
// image
What is Next.js ?

Next.js is React Framework to build production ready application developed by Vercel.
React is a library to build user interfaces but in react we have to configure routing and data fetching.
So only react is not feasible to create fully featured application ready for production
Next.js on the other hand is designed to simplify and accelerate the development of React-based projects by providing a set of conventions and tools. Like Routing, Optimized rendering, data fetching and compiling.We don't have to install any additional packages for these.
<Note: Next.js is a framework and some opinions and conventions should be followed to implement these features/>

## Features of Next.js

1. Routing: 
To implement routing in react, we need to install a third party package like react-router or reach-router and we have to configure and add every rout when adding a new page. Whereas, Next.js uses the file based routing, eliminating the need of third party packages.
2. API routes
Next.js allows you to create apis making it a fullstack app.Using Next, we can define apis and user interface in the same application
3. Rendering
Next.js allows both client side and server side rendering which results in better performance and seo.
4. Data Fetching
Next.js allows simplified data fetching with async await inside react component.
5. Optimization
Next.js also allows optimization out of the box for images, fonts ans scripts for better performance
6. Dev and production build system
Next.js provides dev and production  build system with optimization, Allows you to focus on coding rather than configuration.
7. Turbopack
It is a compiler that replaces Webpack. Built on the Rust programming language, this helps the development process with local server startup times 53.3% faster and code updates 94.7% faster
8. Parallel Routes
Parallel Routes helps to simultaneously or conditionally render one or more pages within the same layout. They are useful for highly dynamic sections of an app like dashboard.
9. Typescript 
Improved support for TypeScript, with better type checking and more efficient compilation, as well as custom TypeScript Plugin and type checker.
## using next.js 

To start using next.js there should be node.js installed on the system.
To create new next project, open the terminal and run the command 
 -> npx create-next-app@latest
on installing there are some prompts like name and other preferences
<What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/* />
After that a folder with the name entered will be created and we can cd into it ans start the app by running a command in the terminal 
 -> npm run dev
The development server will be started at port 3000 by default with a default template of next.js

# Folder structure

At the root level of the project we have 4 folders and near about 1 files created by default
starting from the files there is 
package.json: it consist of all the project dependencies and it it created when npm i command runs.
 next.config.js: it has the configuration for Next.js
and the folders are 
1. .next : it is build when we build the app or run the app in development.
2. node_modules : it have all the installed dependencies.
3. public: to sere the static assets like images.
4. src/: inside src folder we have the app folder which is newly introduced in Next 14 app router.
Inside that we have layout.js which is the UI that can be shared across the app and page.ts which is default UI when we start a new project.

When we run the command "npm run dev" the execution is transferred to the layout.tsx and the root layout component in that layout file is rendered.
It will render the children inside that layout.tsx which is page.tsx
this page.tsx is the default home component which will be rendered on the browser then the app is started.