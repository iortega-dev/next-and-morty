# Next & Morty

This project is a demonstration of various data fetching strategies in Next.js, using the [Rick and Morty API](https://rickandmortyapi.com/) to display character data. It showcases Server-Side Rendering (SSR), Static Site Generation (SSG), and client-side fetching with SWR for Progressive Server-Side Rendering (PSSR). The user interface is built with Reactstrap and Bootstrap.

## Features

*   **Multiple Data Fetching Examples:** See different rendering strategies in action on separate pages.
*   **Dynamic Data Loading:** Fetch subsequent pages of character data on the client side.
*   **Responsive UI:** Built with Reactstrap, based on the Bootstrap album template.
*   **Custom Hooks:** Utilizes a custom `useRequest` hook that abstracts `SWR` and `axios` for streamlined data fetching.

## Pages Overview

This application provides three different pages to demonstrate various rendering methods:

*   **Home (`/`): Static Site Generation (SSG)**
    *   This page is pre-rendered at build time using `getStaticProps`. The initial character data is fetched and embedded directly into the HTML, providing excellent performance and SEO.

*   **SWR SSR (`/swr-ssr`): Server-Side Rendering (SSR) with SWR**
    *   This page is pre-rendered on each request using `getServerSideProps`. The initial data is fetched on the server and passed as props to the page. `SWR` takes over on the client-side to manage the data state, allowing for features like re-fetching and seamless updates, such as loading the second page of characters.

*   **SWR PSSR (`/swr-pssr`): Progressive Server-Side Rendering (Client-Side Fetching)**
    *   This page demonstrates progressive rendering. The initial HTML is served quickly from the server, while the data is fetched on the client-side using `SWR`. A deliberate 2-second timeout is included in the backing API route (`/api/data`) to emphasize the client-side loading state.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v14 or later)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/iortega-dev/next-and-morty.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd next-and-morty
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the Application

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can navigate between the different pages to see the rendering strategies in action.

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in development mode.
*   `npm run build`: Builds the app for production.
*   `npm run start`: Starts the production server after a build.

## Technologies Used

*   [Next.js](https://nextjs.org/) - The React Framework for Production
*   [React](https://reactjs.org/) - A JavaScript library for building user interfaces
*   [SWR](https://swr.vercel.app/) - React Hooks for data fetching
*   [Reactstrap](https://reactstrap.github.io/) - Simple React Bootstrap 4 components
*   [Axios](https://axios-http.com/) - Promise based HTTP client
*   [Isomorphic Unfetch](https://github.com/developit/unfetch/tree/master/packages/isomorphic-unfetch) - A lightweight fetch implementation

## Attribution

This project's UI is a Next.js adaptation based on the [react-bootstrap-album-template](https://github.com/nas5w/react-bootstrap-album-template).
