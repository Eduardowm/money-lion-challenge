## Run the Project

To run the project you need to first install the project dependencies:

```bash
npm run dev
```

Then you can run the development server:

```bash
npm run dev
```

Once the server is running you can access the feed at [http://localhost:3000](http://localhost:3000).

As for the API, you can see its JSON result accessing it directly on [http://localhost:3000/api/feed](http://localhost:3000/api/feed).

## Brief Description

I've chose NextJS with typescript for this project due to being easy to setup and a very well established framework. I am using the latest versions for all packages (may 2024). This means that we are now using the App Router on Next, which brings a different approach for both the api and the pages compared to the older versions.

### Front-end

The front-end is simple and mostly using raw JSX, but I am also using the `Avatar` and `AspectRatio` components from the `radix primitives` package. For styling I am using `tailwindcss` due to its ease of use and personal preference.

Due to the data being loaded on the server, I am using server components for all components that don't have user interactions or that depend on client data. The approach I used for the front-end is very simple, with the folder structure being organized like this:

The `components` folder holds all components that are shared and can be used anywhere on the application.
The `partials` folder inside any `page` contains all components that are specific for the `page.tsx` on the same level.

The only possible user interactions with the feed content is the `Read More` and `View [x] comments` buttons. These will show the complete content of the components when clicked.

### Back-end

As for the back-end, there is a single route that gets all feed content cards, you can access it on `GET /api/feed`. This route will return all valid content cards treated to the entity structure used by the front-end.

For treating and transforming the raw data from the API, I am using a simplified approach with models and entities.

The `models` transform the raw data from the API into a class with `isValid` and `toEntity` functions. On the model we can perform any necessary changes, validations and security checks, but keeping the same structure as its coming from the API.

The `entities` transform a model into a class that holds the structure that will be used on our application, so the data is transformed so it holds only the data that we need in the expected format. Here we also have a `toObject` function that will transform the class into an object, without any of the class methods, so it can be returned in the API response.

So what is being done on the feed route is basically:

- Request the `raw` data from the `stoplight.io` mock API.
- Transform the `raw` data on a `model`.
- Filter out any models that do not pass the `isValid` check from the model.
- Transform the `model` into the `entity` and then into an `object` to be returned by the API.
- Return the `object` in the response.

### Testing

I've developed tests for all front-end components, but since the components are very simple most of the tests are only snapshot tests, to ensure we can watch any changes made to the structure and identify if anything was changed incorrectly.

There are also tests for all models and entities to ensure they are behaving as expected.

And finally a test for the `/api/feed` route, that checks if the API is returning the content cards data as expected.

### Additional information

Here are also a few more configurations made:

- `eslint` and `prettier` are being used to keep a consistent code syntax and identify errors before building the application.
- `jest` is setup to work with NextJS and typescript, there is also a mock for the `next/image` component since its not very friendly with the JSDom environment.
- There are some `vscode` settings setup so anyone that is using the editor doesn't need to manually setup things like tab size and autoformat settings.
