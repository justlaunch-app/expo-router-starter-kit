# expo-router-starter-kit 🏎️📱

Expo-router-starter-kit is a streamlined template for building cross-platform mobile apps with Expo. This template provides a starting point with updated features and simplified components for efficient development.

## 🌟 Updates

- **SDK Update**: Upgraded to version 50 (canary).
- **NativeWind**: Updated to version 4.
- **React-native-picker**: Latest version implemented.
- **Template Simplification**: Removed certain components/pages for a leaner template.
- **Shopify/Flashlist Removal**: Currently incompatible with expo-router.
- **Type Updates**: Enhanced and updated type definitions.
- **Splash Screen Fix**: Replaced Lottie with an alternative solution.
- **UI Adjustments**: Minor improvements in UI, especially for FontAwesome icons on iOS.

## 🚀 Features

- **Expo**
- **[Expo Router](https://expo.github.io/router)**
- **expo-image**
- **[Zustand](https://github.com/pmndrs/zustand)** for state management
- **[Tanstack Query](https://tanstack.com/query/latest)** for asynchronous state management
- **[i18next](https://www.i18next.com/)** for internationalization
- **[Apisauce](https://github.com/infinitered/apisauce)** for HTTP communication

## 💻 Installation

```bash
# Clone and create a new repository from this template
# Install dependencies
pnpm install
```

```bash
# Run the project
pnpm ios
```

```bash
# or
pnpm android
```

## 🌐 Environment Variables

1. Create a `.env` file in the root of the project.
2. Define environment variables inside the `.env` file. Variables must start with `EXPO_PUBLIC_`.
3. Update `_utils/env-loader` schema to include new variables:

   ```typescript
   const schema = z.object({
     EXPO_PUBLIC_MY_NEW_VARIABLE: z.string(),
   });
   ```

```typescript
const my_env_var = process.env.EXPO_PUBLIC_MY_NEW_VARIABLE;
```

Note: Remember to restart the project after creating the .env file.

## 🔗 Deep Linking

For setting up deep linking, follow the documentation provided by Expo: [Deep Linking](https://docs.expo.dev/guides/deep-linking/).

## 📁 File Structure

The project is organized as follows:

```shell
- src          - Source code for the application.
- /components  - Reusable components.
- /screens     - Application screens.
- /assets      - Application assets (all assets stored here will be bundled).
- /config      - Application configuration files.
- /constants   - Application constants.
- /context     - Application theme and context.
- /locales     - Localization files (i18n, i18next, expo-localization).
- /store       - Zustand store for state management.
- /utils       - Helper functions and utilities.
```

## 🖥 Screens

Main screens included in the template:

- **Home Screen**: The primary screen users see after logging in.
- **Secondary Screen**: Additional screen for supplementary features.
- **Settings Screen**: Allows users to customize their app experience.
- **Navigation**: Includes Top Navigation, Bottom Navigation, and Native Modal for seamless app navigation.

## 👥 Contributors

We are inviting developers who are passionate about Expo and React Native to collaborate with us. Whether it's contributing code, sharing ideas, or providing feedback, all forms of collaboration are welcome.

Special thanks to our contributors, including [@kewinzaq1](https://github.com/kewinzaq1).
