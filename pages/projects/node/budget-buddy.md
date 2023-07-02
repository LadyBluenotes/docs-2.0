---
title: Budget Buddy API
description: A page that talks about the budget buddy api that i built.
---

# Budget Buddy API

*TODO: Link to github and site*

Budget Buddy is a RESTful API built with Node.js, Express, and MongoDB. It enables users to track expenses and income. The API uses JSON Web Tokens (JWT) for authentication, safeguarding endpoints from unauthorized access. User data is protected using bcryptjs for password hashing and salting. With Budget Buddy, users can create accounts, log in, and manage transactions securely.

## I. Getting started

### Prerequisites

The following must be installed on your machine or accessible to you:
* NodeJS
* MongoDB Account

### Installation

How to install and run the application:

1. Clone the repository from GitHub.
```bash copy
git clone https://github.com/LadyBluenotes/budget-buddy
```
2. Install the dependencies
```bash copy
npm install
```
3. Copy the contents of the `.env.example` file into a new file called `.env` and add the appropriate values.

4. Run the application.
```bash copy
npm run start
```

## II. About

### Built with

* [Bcrypt.js](https://github.com/kelektiv/node.bcrypt.js/)
* [Body Parser](https://github.com/expressjs/body-parser)
* [Express.js](https://expressjs.com/)
* [JSON Web Token](https://jwt.io/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Node.js](https://nodejs.org/en)
* [Nodemon](https://nodemon.io/)
* [Validator](https://validatejs.org/)

Inspired by what I learned in [Task It](/backend/task-it/), I developed an API that focuses on the implementation of user authentication while providing practical functionality for real-world scenarios. Instead of a basic to-do list, I created an API specifically tailored for expense and income tracking, addressing a common need in everyday life.

The API retains the solid foundation of Node.js, Express, and MongoDB, leveraging their proven capabilities as a reliable tech stack. For a comprehensive overview of these technologies, you can refer to the About section of Task It.

To secure access to protected endpoints, I integrated JSON Web Tokens (JWT) into the API. The utilization of JWT brings benefits in terms of simplicity, scalability, and strong security measures with use. Additionally, user data security is through the implementation of bcryptjs, effectively hashed and salted the passwords. Bcryptjs follows industry best practices, providing an extra layer of protection against potential data breaches.

By combining these technologies and industry-standard practices, this API lets users to create accounts, securely log in, and manage their financial transactions with ease. The primary focus on user authentication, along with the inclusion of essential features for expense and income tracking, created a powerful and secure solution for users' financial management needs.

## III. Motivation

The driving force behind this project was to gain hands-on experience in implementing user authentication within an API. Having previously developed Task It, I acquired a solid understanding of creating APIs and performing CRUD operations using HTTP methods. However, Task It lacked user authentication, so I decided to embark on a new venture that would not only benefit me personally but also provide practical value.

Recognizing the need to track expenses and income, I sought an alternative to relying on external tools like Google Sheets. Hence, the idea of creating an API that would facilitate expense and income tracking while being compatible with future front-end applications emerged.

Being a hands-on learner, I firmly believe in the value of learning through practical application. Instead of relying solely on pre-built authentication tools, I wanted to delve into the authentication process itself. I believe that understanding the underlying mechanics is crucial before employing a tool, and it enables a deeper comprehension of the overall system. Through this project, I had the opportunity to gain practical expertise and refine my skills in building APIs.

Ultimately, this API served as a way for me to further my understanding of user authentication, improving my knowledge and proficiency in API development.

## IV. Key takeaways

### Discoveries and reflections

While a good portion of this project was a review of the technologies I had previously used, I still gained valuable insights such as:

1. **Learning secure user data transfer**: One of the most important things I further learned was how to pass user data to the API securely. Recognizing the importance of security in API development, I took measures to protect user data and ensure its integrity throughout the process. This exploration improved my understanding and equipped me with essential skills in securing sensitive information.
2. **Endpoint protection**: Implementing JWT for endpoint protection was an enlightening experience. JWT's stateless and cookie-free nature provided a great solution for securing authenticated endpoints. I found the simplicity, scalability, and inherent security features of JWT fascinating. Moreover, this project has piqued my interest in further exploring how JWT integrates with various front-end architectures.
3. **Postman for API Testing**:Postman emerged as an invaluable tool for testing the API. Its diverse features allowed me to thoroughly assess the API's functionality, test various scenarios, and evaluate the authentication process without relying on extensive front-end development. This streamlined testing process enabled me to ensure the security and functionality of the API with ease.

### Technical growth

Building the Budget Buddy API provided valuable opportunities for technical growth and expanding my knowledge in several key areas.

#### Integration of technologies

During the development process, I gained hands-on experience integrating various technologies to make a robust and efficient API. Working with Node.js, Express, and MongoDB allowed me to leverage their strengths in building a scalable and performant. By using these technologies, I honed my skills in server-side JavaScript development and gained a deeper understanding of handling data using a NoSQL database.

#### JWT for authentication

Implementing JWT for authentication was a big milestone in my technical growth. By integrating JWT into the API, I learned how to generate, sign, and verify tokens for secure user authentication. This approach allowed for stateless authentication, eliminating the need for server-side session management or cookies. Exploring the inner workings of JWT and understanding its role in securing protected endpoints broadened my knowledge in user authentication practices.

#### Password hashing and salting with bcrypt.js

Ensuring the security of user data was something I wanted to make sure of when building this app. I incorporated bcrypt.js to hash and salt user passwords. This industry-standard approach to password security adds an extra layer of protection against unauthorized access and potential data breaches. Implementing bcrypt.js enhanced my understanding of secure password storage and reinforced the importance of safeguarding sensitive user information.

## V. Acknowledgments

This project would not be possible without the documentation written by the creators the technologies used. I believe that, without their clear and concise examples and explanations, I would not have been able to complete this as efficiently as I had.

## VII. Additional information

While this project is completed at the time of writing this, I may come back and iterate on it some more based on the features listed below.

### Known issues

Can be found [here](https://github.com/LadyBluenotes/budget-buddy/issues).

### Future improvements

- [ ] Convert from JavaScript to TypeScript to see how the two languages differ when writing APIs.

