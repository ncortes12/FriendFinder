# PetFinder


Would you like to find your perfect dog match? Use this app!

## Live Link
 https://agile-earth-39394.herokuapp.com/

## Usage


TO use the app visit the home page with the link that is provided below to be paired with the dog of your dreams.

## Requirements
- Modularity in the form of separate files for server logic, storing of pets, views, and routing
- 10-question survey to assess uniqueness of users
- Use `express`, `body-parser`, and `path` npm packages in the `server.js` file
- Separate JavaScript files for routing (`htmlRoutes.js` and `apiRoutes.js`)
- Appropriate GET and POST routes for serving HTML pages and API calls
- Separate file for storing friends (`pets.js`)
- Calculate best match for user once survey is completed and return that match to the user

## Technologies Utilized

- JavaScript
- jQuery
- node.js
- Express.js
- HTML
- Bootstrap

## Code Explanation
- My `server.js` file sets up the Express server, specifying our port number both for use on a local host or heroku live site, the npm packages that need to be loaded, and also the routes, which we have externalized
- There are 2 separate HTML files (`home.html` and `survey.html`) that serve as the front-end portion of our code; they determine what the user sees (the homepage and the survey, which will also show the resulting best match)
- My 2 routing files (`htmlRoutes.js` and `apiRoutes.js`) determine the back-end logic (based on the request being made, the response that gets sent to the browser); the HTML routes display the survey and the homepage based on the URL that is accessed, and the API routes send back existing content in our server-side data 
- Best match is calculated by finding the dog with the minimal difference in scores and then sending that friend to the browser as a JSON object
- A modal is then toggled, displaying the the best match to the person who just took the survey
- In essense, this will also be a form of notes that you may later reference weeks later
- Pets are stored as such:

```js
{
		name: "Beagle",
		photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRinEZvZsKJ5yuTsD1ug6Hq5OEwYkv-sQjCNsOTwaNrx0_B-VDy6g",
		scores: [2, 5, 4, 1, 2, 3, 3, 2, 3, 3]
}
