# React Quizmachine

My first solo encounter with Redux is this history quiz app. Using the Open Trivia API
I created a quiz that generates questions for a single user and then presents an
answer sheet at the end (along with a silly gif based on the user's score). 

# Technologies Used:

* React
* Redux
* SCSS
* Jest, Redux-Mock-Store, Fetch-Mock

# Setting Up

```
git clone [repo path]
```

1. Install all dependencies: 
```
npm i
```
2. Build the site: 
```
npm run build
```
3. Copy and paste the index.html path into your browser

## Testing
```
npm test
```

# Things I would have liked to add:

* A back end. At this point the core-focus was on introducing Redux, and a back end seemed like
too much work for a weekend.

* Socket.io functionality. I worked on the Quizster project (in my repositories) which did almost exactly
this, in order to support a multiplayer approach, where (x) number of users could partake of a single
quiz.

