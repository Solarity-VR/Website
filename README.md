# Website

<h3>Solarity's Website</h3>

Built with React, classic procedure.

## Getting Started

### Prerequisites

#### Node.js 12+ (versions below could work, but are not tested)

* Linux:

   ```
   sudo apt install nodejs npm
   ```

* Windows or macOS:

   https://nodejs.org/en/

### Installing

1. Clone the repository

   ```
   git clone https://github.com/dunky11/react-saas-template
   ```
2. Install dependencies, this can take a minute

   ```
   cd react-saas-template
   npm install
   ```
3. Start the local server

   ```
   npm start
   ```

Your browser should now open and show the app. Otherwise open http://localhost:3000/ in your browser. Editing files will automatically refresh the page.

### What to do next?

If you are new to React, you should watch a [basic React tutorial](https://www.youtube.com/results?search_query=react+tutorial) first.

If you know React, then most of the information you need is in the [Material-UI documentation](https://material-ui.com/getting-started/usage/).

You can go into [src/theme.js](/src/theme.js) and change the primary and secondary color codes at the top of the script to the values you like and some magic will happen.

## Deployment

If you are satisfied with the state of your website you can run:

```
npm run build 
```

It will create a folder named build with your compiled project inside. After that copy its content into your webroot and you are ready to go.
