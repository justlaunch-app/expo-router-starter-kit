# expo-router-starter-kit 🏎️📱

![Supports Expo iOS](https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff)

![Supports Expo Android](https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff)

[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)

expo-router-starter-kit is for building robust cross-platform apps blazingly fast! Currently we are focusing on building the best template to kick off your next mobile project.

- Expo

- [Expo Router](https://expo.github.io/router)

- expo-image

- [zustand](https://github.com/pmndrs/zustand) - state management

- [nativewind](https://nativewind.io/) - Tailwind CSS for React Native

- [apisauce](https://github.com/infinitered/apisauce) - Axios + standardized errors + request/response transforms.
- [Tanstack Query](https://tanstack.com/query/latest) - Powerful asynchronous state management

- [i18next](https://www.i18next.com/) - Internationalization-framework

- [@shopify/flash-list](https://github.com/Shopify/flash-list) - React Native flash list component

- [Lottie](https://lottiefiles.com/) - Animated Splash Screen

## Installation

1. Clone this template by clicking on Use this template -> Create new repository.

2. Clone the new repository

3. Install dependencies

```bash

pnpm install

```

4. Run the project

```bash

pnpm ios

```

or

```bash

pnpm android

```

## Environment Variables

1. Create a .env file in the root of the project.

2. Define env variables inside the .env file. Variables must begin with `EXPO_PUBLIC_`.

3. Define new variables in `_utils/env-loader` zod scheme:

```ts
const schema = z.object({
  EXPO_PUBLIC_MY_NEW_VARIABLE: z.string(),
});
```

4. Use env variables everywhere by import env-loader:

```ts
const my_env_var = process.env.EXPO_PUBLIC_MY_NEW_VARIABLE;
```

That's it! Nice and simple way of dealing with environment variables.

<small>Note: don't forget to restart the project once you created `.env`</small>

## Deep Linking

To set up Deep linking you can follow this documentation provided by Expo - [Deep Linking](https://docs.expo.dev/guides/deep-linking/)

## File Structure

```shell

- src  -  source  code  for  the  application.

- /components  -  contains  reusable  components.

- /screens  -  contains  the  application's screens.

- /assets - contains the application's  assets (all the  assets  stored  here  will  be  bundled  into  the  app).

- /config  -  contains  the  application's config files.

- /constants - contains the application's  constants.

- /context  -  contains  the  application's theme.

- /locales - contains the application's  local  files (i18n, i18next,  expo-localization).

- /store  -  contains  the  application's zustand store for state managment.

- /utils - contains the application's  utils  for  helper  functions.



```

## Screens

Main screens:

- Login

- Signup

- Home Screen

- Secondary Screen

- Settings Screen

- Top Navigation , Bottom Navigation, Native Modal

<img  src="https://zoltanfodor.b-cdn.net/expo-router-starter-kit/Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202023-11-05%20at%2015.21.28.png"  alt="Login screen with validation"  width="400"/>

<img  src="https://zoltanfodor.b-cdn.net/expo-router-starter-kit/Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202023-11-05%20at%2015.24.42.png"  alt="Signup Screen"  width="400"/>

<img  src="https://zoltanfodor.b-cdn.net/expo-router-starter-kit/Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202023-11-05%20at%2015.22.02.png"  alt="Signup Screen"  width="400"/>

<img  src="https://zoltanfodor.b-cdn.net/expo-router-starter-kit/Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202023-11-05%20at%2015.23.02.png"  alt="Signup Screen"  width="400"/>

<img  src="https://zoltanfodor.b-cdn.net/expo-router-starter-kit/Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202023-11-05%20at%2015.23.14.png"  alt="Signup Screen"  width="400"/>

## 🚧 Roadmap 🚧

This roadmap outlines the planned development and enhancement of the `expo-router` template project. Our primary goal is to create a comprehensive template covering essential Expo features, followed by the expansion into multiple templates and a CLI for tailored project initialization.

#### 🚀 Phase 1: Comprehensive Template Development - currently IN PROGRESS

1.  **Carousel and other components fix** - Address and fix carousel related issues in the current template + create/fix multiple expo base components, utils, helper functions.

2.  Originally we wanted to remove Nativewind due to some major issues that have not been fixed. We dropped this due to NativeWind will be patching all the known issues in version 4 therefor as soon as NativeWind v4 going to be release we are going to upgrade our current project.

3.  **Authentication Integration** - Explore and integrate authentication providers like Clark or other alternatives.

4.  **TanStack Query** - Implement an example of Data Mutation.

#### 🛠 Phase 2: Template Expansion and CLI Development

- Expand the project to include a variety of templates catering to different use cases. (e-commerce , barebone, base, etc)

- Develop a CLI to streamline the creation and management of projects based on these templates.

---

## Contributors

**Hey fellow developers! We are inviting developers who are enthusiastic about Expo and React Native to join us in this venture. Whether you are looking to contribute code, share ideas, or provide feedback, we welcome all forms of collaboration.** - Join to our Discord : https://discord.gg/ns6gassHaS

We would like to thank the following people who've contributed to this project:

[@kewinzaq1](https://github.com/kewinzaq1)
