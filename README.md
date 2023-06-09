# 📱 expo-starter-kit

An opinionated expo-starter for building robust cross-platform apps blazingly fast! This project purpose is for creating a minimum viable product (MVP) in a single day.

## Stack

- Expo

- [Expo Router](https://expo.github.io/router)

- expo-image

- [zustand](https://github.com/pmndrs/zustand) - state management

- [nativewind](https://nativewind.io/) - Tailwind CSS for React Native

- [axios](https://axios-http.com/) - Promise based HTTP client

- [i18next](https://www.i18next.com/) - Internationalization-framework

- [@shopify/flash-list](https://github.com/Shopify/flash-list) - React Native flash list component

- [OneSignal](https://onesignal.com/) - Push Notification delivery

#### Why OneSignal over Expo Push ?

I have no qualms with the Expo Push service, it has been reliable and easy to work with. However, in considering the goal of this template future needs and growth, I've decided to use OneSignal for several key reasons:

1.  **Unlimited API Push**: OneSignal offers unlimited push notifications. This is critical as our user base grows, ensuring we can maintain efficient and reliable communication with our users without worrying about hitting a cap.
2.  **Richer Analytics**: OneSignal provides comprehensive analytics, giving us more detailed insights into how our users interact with notifications. This can help us refine our engagement strategies and understand our users better.
3.  **Advanced Features**: Beyond push notifications, OneSignal offers capabilities for in-app messages, emails, and SMS. This makes it a more holistic communication tool that can support our multi-channel engagement strategy.
4.  **Scalability and Versatility**: OneSignal is designed to handle large volumes of notifications and works independently of the Expo ecosystem. This gives us the flexibility to migrate away from Expo in the future if needed, without having to change our notification system.

## Project Structure

- `src` - source code for the application.

- `src/components` - contains reusable components.

- `src/screens` - contains the application's screens.

- `src/assets` - contains the application's assets (all the assets stored here will be bundled into the app).

- `src/config` - contains the application's config files.

- `src/constants` - contains the application's constants.

- `src/context` - contains the application's theme.

- `src/locales` - contains the application's local files (i18n, i18next, expo-localization).

- `src/store` - contains the application's zustand store for state managment.

- `src/utils` - contains the application's utils for helper functions.

## Setup Instructions

1. Clone the repository.

2. Install the dependencies using `yarn install`.

3. Start the expo server using `yarn start`.

#### OneSignal setup

1. If you don't have a [OneSignal](https://onesignal.com/) account register]
2. Create and App and get OneSignal App ID, available in Settings > [Keys & IDs](https://documentation.onesignal.com/docs/keys-and-ids)
3. Add the OneSignal App ID in root/app.json and load it inside \_layout.tsx via expo-constants or
4. Load App ID explicitly inside \_layout.tsx (src/app/\_layout.tsx)
5. To handle push notification user logic you can check out OneSignal [documentation](https://documentation.onesignal.com/docs).

The OneSignal implementation in this Expo project provided by [onesignal-expo-plugin](https://github.com/OneSignal/onesignal-expo-plugin)

## Roadmap

### Completed Tasks:

1. ~~Init Expo-router project with TypeScript.~~

2. ~~Create a src/ folder structure.~~

3. ~~Add Nativewind.~~

4. ~~Load Google fonts.~~

5. ~~Prettier.~~

6. ~~i18next.~~

7. ~~Implement One Signal notifications.~~

### In Progress:

1. Dark/light theme.

### Upcoming Tasks:

1. Add Login Screen/ Register modal.

2. Tutorial screens.

3. Home page with a carousel and two example lists with Shopify flashlist.

4. Settings screen with light/dark toggle switch and language selector.

5. Create an example axios weather call and store it in zustand for creating a universal header component.

6. Create a detail page when clicking on an element on the carousel or list item.

7. Create another tab with universal elements.

8. ENV variables handling

9. Re-usable components (Logo, Cards, etc.)

### Doubts

1. Instead of simple axios calls using react-query. If you have any opinion about this feel free to open a discussion.

2. Create a universal library for handling expo-icons. -> Create a universal component which can handle all the icon libs within one component.

3. E-commerce components/pages

4. Subscription implementation with [RevenueCat](https://www.revenuecat.com/)

## Contributing

If you have any suggestions on how to make this expo-starter better, feel free to create a discussion about it.

## License

This project is licensed under the terms of the MIT license.
