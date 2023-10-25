<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Wishlist" />

&#xa0;

  <!-- <a href="https://wishlist.netlify.app">Demo</a> -->
</div>

<h1 align="center">Wishlist</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/nathanmacfarlane/wishlist?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/nathanmacfarlane/wishlist?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/nathanmacfarlane/wishlist?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/nathanmacfarlane/wishlist?color=56BEB8">

  <img alt="Github issues" src="https://img.shields.io/github/issues/nathanmacfarlane/wishlist?color=56BEB8" />

  <img alt="Github forks" src="https://img.shields.io/github/forks/nathanmacfarlane/wishlist?color=56BEB8" />

  <img alt="Github stars" src="https://img.shields.io/github/stars/nathanmacfarlane/wishlist?color=56BEB8" />
</p>

<!-- Status -->

<!-- <h4 align="center">
	🚧  Wishlist 🚀 Under construction...  🚧
</h4>

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#deciduous_tree-environment">Environment Variables</a> &#xa0; | &#xa0;
  <a href="#rocket-deployment">Deployment</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/nathanmacfarlane" target="_blank">Author</a>
</p>

<br>

## :dart: About

Wishlist is a free, open source alternative to [Elfster](https://www.elfster.com/).

The app is [hosted here](https://wishlist-murex.vercel.app/my-list)

## :sparkles: Features

:heavy_check_mark: Feature 1;\
:heavy_check_mark: Feature 2;\
:heavy_check_mark: Feature 3;

## :rocket: Technologies

The following tools were used in this project:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Clerk](https://clerk.com/)
- [Tailwind](https://tailwindcss.com/)
- [shadcn](https://ui.shadcn.com/)
- [Prisma](https://www.prisma.io/)
- [Neon](https://neon.tech/)
- [Vercel](https://vercel.com/)

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting

```bash
# Clone this project
$ git clone https://github.com/nathanmacfarlane/wishlist

# Access
$ cd wishlist

# Install dependencies
$ yarn

# Run the project
$ yarn dev

# The server will initialize at <http://localhost:3000>
```

## :deciduous_tree: Environment

The following environment variables must exist for the app to function as expected.

Since this is a next.js app, they should exist in a `.env.local` file in the root of the project.

```
# clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
NEXT_PUBLIC_CLERK_SIGN_IN_URL
NEXT_PUBLIC_CLERK_SIGN_UP_URL
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL
CLERK_WEBHOOK_SECRET

# prisma
DATABASE_URL
```

## :rocket: Deployment

The project is automatically deployed via Vercel when the `production` branch is changed via pushes/merges/etc.

To host your own instance, verify that the correct <a href="#deciduous_tree-environment">environment variables</a> are set wherever you're deploying.

## :memo: License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

Made with :heart: by <a href="https://github.com/nathanmacfarlane" target="_blank">Nate Macfarlane</a>

&#xa0;

<a href="#top">Back to top</a>
