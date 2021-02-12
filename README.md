<b>Brewery DB / Client-Side-Programming Assessment for PIXEL.WIDGET</b>

<b>Instructions:</b><br/> To run the application, you need to install the dependencies by running the following command:

<i>npm install</i> <br/><br/>

Create a <i>ApiKey.js</i> file in the server directory and add your API key for the BreweryDB api:

<i>module.exports = {API_KEY: 'yourKey'}</i> <br/><br/>

In the project directory, you can run:

<i>npm run dev</i> <br/><br/>

Front-end and Back-end will run together.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<b>Technologies:</b><br/>

React | Redux | Express.js | Bootstrap | CSS | HTML | RestApi from www.brewerydb.com

<b>About the project:</b> <br/> This is a little website connected to the BreweryDB API, listing breweries in the United States, Ireland and Belgium.

Is it possible to filter breweries for country or search for them by name

Each brewery is provided with the list of all the beers they produce, and every beer is provided with the description and food pairings (when these info are available).

For more realistic user experience I added a dropdown menu to filter beers by type in the single brewery page, instead of in the breweries list page as the assignment was requiring. I felt it's more useful filtering beers by type, rather than filtering breweries by beer type.

With Express.Js I created an API Proxy Server in Node.js to request data from the API's endpoints. This because for security reasons, the BreweryDB is not supporting CORS or requests from front-end clients. I after created a store, actions, reducers and functional components with Redux and React Hooks to retrieve and display data.

I also created a directory <i>utils</i> with a file <i>breweryDetails</i> where I've put some functions in order to leave the code as much clean and understandable as possible.

<b>Challenges:</b>

The main challenge was to understand which API's endpoints were more useful to call. There were a lot of different pieces of information and ordered in a different way accordingly to different endpoints. I changed several time my API's endpoints, especially when I was trying to filter the data.

Unfortunately, there is a tiny bug that I wasn't able to sort out: <br/>-Lagunitas Brewing Company <br/>-New Holland Brewing Company <br/>-Sierra Nevada Brewing Company <br/>-Zero Gravity Craft Brewery

When clicking in the details of these breweries A TypeError appears.
