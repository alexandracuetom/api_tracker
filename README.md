# API Subscription Tracker

## About the project
### 1. Description
This is an API subscription tracker which allows to keep track of which users have subscribed to which services. By making HTTP requests one can take a look to the subscriptions the associated user has payed for as long as they have permission to do so since authentication and authorization measures have been implemented to make sure no unauthorized person can access sensible information.

Essentially, this would be the backbone of a real-world app such as Netflix, but at a much smaller scale and with limited functionality, of course.

This project is great for getting started in the API world and learning some basic yet truly important concepts on the matter.

### 2. Motivation
This project was born with the idea to dig deeper into the API world, but since it was an unexplored topic to me I decided to follow and build along a project using a tutorial I found online. By doing so I was able to follow some general guidelines and solve any problems that arose on my own, meaning I was being given code to work with but had to solve any bugs by myself while also having to substitute some parts of the code since some functions were deprecated. 

### 3. Technologies used
* [![Node.js][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
* [![MondoDB][MongoDB]][MongoDB-url]
* [![Mongoose][Mongoose]][Mongoose-url]
* [![JWT][JWT]][JWT-url]
* [![Arcjet][Arcjet]][Arcjet-url]
* [![Upstash][Upstash]][Upstash-url]
* [![Nodemon][Nodemon]][Nodemon-url]


## Getting started

The project is ready to run locally, but it requires a few environment variables and external services to be configured beforehand.

You need to have installed:
- Node.js
- npm
- MongoDB database or MongoDB Atlas
- Upstash/Qstash 
- HTTPie

### Installation

Clone the repository:
```
git clone https://github.com/alexandracuetom/api_tracker.git
```

Move into the project folder:
```
cd API_TRACKER
```

Install dependencies:
```
npm install
```

**Create a .env.development.local file in the root of the project:**

`touch .env.development.local`

Add the required environment variables:

> Remember to replace the variables with your values

```
PORT=5500
NODE_ENV=development
````
```
SERVER_URL=http://localhost:5500
```
```
MONGODB_URI=your_mongodb_connection_string
```
```
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
```
```
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=your_local_qstash_token
QSTASH_CURRENT_SIGNING_KEY=your_current_signing_key
QSTASH_NEXT_SIGNING_KEY=your_next_signing_key
```

```
ARCJET_KEY=your_arcjet_key
```

**Run Qstash locally in a different terminal**

```
npx @upstash/qstash-cli dev
```

Copy the local QStash values printed in the terminal into your `.env.development.local file.`

**Run the API**

Start the development server:

`npm run dev`

The API should be running at:

`http://localhost:5500`

## Usage
You can test the endpoints using HTTPie, Postman or any API client.

1. Create a new user

```
http POST http://localhost:5500/api/v1/auth/sign-up \
  name="Alexandra" \
  email="name_here@example.com" 
  password="password123"
```

2. Sign in with an existing user:
```
http POST http://localhost:5500/api/v1/auth/sign-in \
  email="name_here@example.com" \
  password="password123"
```

The API will return a JWT token. Use this token to access protected routes.

Example:

```
http GET http://localhost:5500/api/v1/subscriptions \
  Authorization:"Bearer YOUR_TOKEN_HERE"
```

3. Create a subscription

```
http POST http://localhost:5500/api/v1/subscriptions \
  Authorization:"Bearer YOUR_TOKEN_HERE" \
  name="Netflix" \
  price:=15.99 \
  currency="EUR" \
  frequency="monthly" \
  category="fashion" \
  startDate="2026-02-01T00:00:00.000Z" \
  paymentMethod="Credit Card"
```

4. Get subscriptions for a user:

```
http GET http://localhost:5500/api/v1/subscriptions/USER_ID \
  Authorization:"Bearer YOUR_TOKEN_HERE"
```

## Resources used

Below are linked all the extra resources along with the documentation used for the dvelopment of this project.

### Main tutorial

* [JavaScript Mastery YouTube Tutorial](https://www.youtube.com/watch?v=ha_leEpnT30)


### Express and API development

* [Express.js Error Handling Guide](https://expressjs.com/en/5x/guide/error-handling/)
* [Access Your REST APIs with HTTPie](https://medium.com/@javatechie/access-your-rest-apis-with-httpie-8a144b0b76d1)
* [Mastering REST API Design Best Practices](https://medium.com/@syedabdullahrahman/mastering-rest-api-design-essential-best-practices-dos-and-don-ts-for-2024-dd41a2c59133)

### Node.js and npm

* [npm package.json Documentation](https://docs.npmjs.com/cli/v11/configuring-npm/package-json)

### JavaScript concepts

* [MDN JavaScript `let` Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
* [MDN JavaScript Destructuring Assignment](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring)

### MongoDB and Mongoose

* [Mongoose Transactions Documentation](https://mongoosejs.com/docs/transactions.html)

### Authentication and JWT

* [JWT Introduction](https://www.jwt.io/introduction#why-use-json-web-tokens)
* [JWT for Dummies](https://medium.com/@shivam_bathla/jwt-for-dummies-79a381244ce8)
* [Understanding the Token Bucket Algorithm for Rate Limiting](https://medium.com/@0xTanzim/understanding-the-token-bucket-algorithm-for-rate-limiting-fccdf80e27ca)

### Development environment and tooling

* [How do I install Tkinter? — Reddit discussion](https://www.reddit.com/r/learnpython/comments/wlan8q/how_do_i_install_tkinter/)

### README and documentation

* [A Beginner’s Guide to Writing a Kickass README](https://meakaakka.medium.com/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3)
* [Best README Template](https://github.com/othneildrew/Best-README-Template/blob/main/README.md?plain=1)








<!-- MARKDOWN LINKS  -->
[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/

[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/

[MongoDB]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/

[Mongoose]: https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white
[Mongoose-url]: https://mongoosejs.com/

[JWT]: https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white
[JWT-url]: https://jwt.io/

[Arcjet]: https://img.shields.io/badge/Arcjet-000000?style=for-the-badge&logo=arc&logoColor=white
[Arcjet-url]: https://arcjet.com/

[Upstash]: https://img.shields.io/badge/Upstash-00E9A3?style=for-the-badge&logo=upstash&logoColor=black
[Upstash-url]: https://upstash.com/

[Nodemon]: https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white
[Nodemon-url]: https://nodemon.io/
