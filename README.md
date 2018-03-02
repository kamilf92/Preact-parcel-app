# Description

App is coded for an interview. 

The application should be light and fast because it was created on:

- Parcel.js (lightweight bundler with caching)
- Preact.js ("Fast 3kB React alternative with the same modern API")
- Babel

...

## Getting Started

You should have installed node/yarn and npm.


### Installing

First, you should install dependecies:

```
npm install / yarn
```

### Running up

To run dev app

```
npm start / yarn start
```

The client will be available at http://localhost:1234


To run eslint

```
npm run lint / yarn run lint
```


To run tests

```
npm run test / yarn run test
```

### Application development

The application was created based on preact. This library itself is light and provides better performance. The architecture has been divided so as to ensure the greatest possible scalability which is the main advantage of react. The created components may be re-usable in the further development of the application.
In the future, I would certainly add a minification/gzip of files to provide a better performance. Using sprites in the case of a large number of images is also a good way out. In the case of a large amount of content, I would implement a lazy loading. If we could write on the server side, we could render the components on the backend part of our application.

Using HTTP/2 also significantly improved performance due to:
⦁	Allowing multiple requests and responses to be sent at the same time.
⦁	Headers are compressed using a new algorithm which in turn reduces the amount of data.
⦁	Allows a client to use just one connection per origin.

If we would like the application to be mobile in the future, we would be tempted to apply for progressive applications. I would use a pattern created by Polymer's creators - PRPL pattern. I have read a little about it recently and it seems to me that this in the future will be the standard
