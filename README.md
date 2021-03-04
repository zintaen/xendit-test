# Summary

Thank you for your time to check my examination 🎉

So hope I can get your satisfaction with the output result

**Live version**: https://stephen-xendit.vercel.app/

_Notes_: Please feel free to ping me to update this document if you have some questions or I missed something 😄

## Technology decision and approach

I used [React](https://reactjs.org) as the main library for Front-end development.

Combine with [Next.js](https://nextjs.org) (React framework) to handle SSR (Server-side rendering) for React application.

Next.js actually is a Express server that wrap our application inside.

So I can take it's advantage to write an **API** for my application too.

## Folder Structure

ReactJS doesn't have general structure, it's a JavaScript Libraty and provide us their utilities / built-in functions to use.

So the React developer community created many structure to work with React Application.

Of course, each structure also have their pros and cons and it rely on our project size and scope too.

In this project, I think it needs scalability and fast development with many complex features.

So I decided to setup this project with Domains-base Structure

I read about this structure in this blog (the last section): [React Folder Structure in 5 Steps - Robin Wieruch](https://www.robinwieruch.de/react-folder-structure)

## Development

Below is necessary steps to continue contribute to this application

1. Clone this repository
2. Install node_modules by run the `yarn` or `npm install`
3. Run `yarn dev` or `npm run dev` to start development mode

Run `yarn build` or `npm run build` to build production optimization version.

Run `yarn start` or `npm start` to start to run your production built version.

## Requirement checklist

- [x] SVG format logo with cursor interaction
- [x] Optimized and lazy load images (Use [Next's image optimize built-in component](https://nextjs.org/docs/basic-features/image-optimization))
- [x] Fetch/Load data with Skeleton placeholder
- [x] Use **[Redux](https://redux-toolkit.js.org/tutorials/basic-tutorial)** library for State management (Redux-toolkit supported)
- [x] Handled API Response Error with display notification and supported page reload action.
- [x] Take advantage of environment variable (.env file) for security purpose
- [x] Finish deployment process (deploy with [Vercel](https://vercel.com/))
- [x] Response payload should bandwidth friendly

I think with this feature list above is enough to release [MVP](https://www.productplan.com/glossary/minimum-viable-product/#:~:text=A%20minimum%20viable%20product%2C%20or,iterate%20and%20improve%20the%20product.) version of our application.

So our application in this [MVP](https://www.productplan.com/glossary/minimum-viable-product/#:~:text=A%20minimum%20viable%20product%2C%20or,iterate%20and%20improve%20the%20product.) version can meet the needs of the user (in this case is Sarah - our character)
