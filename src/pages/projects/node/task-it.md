---
title: Task It API
description: A page that talks about the task it api that i built.
---

# Task It API

*TODO: Link to github and site*

Task-It is a user-friendly API designed for efficient task management. Users can create tasks with details such as title, description, completion status, due date, and assignment to another user. The API incorporates default settings to ensure data validity, such as setting the due date as the task creation date if not provided, assigning tasks to the creator if no user is specified, and setting the status to false if no due date is provided.

Built with Node.js, Express, and MongoDB using Mongoose for data modeling and validation, Task-It provides a reliable platform for managing tasks. During development, Postman was utilized for testing API endpoints, and Nodemon was employed for automatic server restarts when making changes. Simplify task management with Task-It.

## I. Getting started

### Prerequisites

The following must be installed on your machine or accessible to you:
* NodeJS
* MongoDB Account

### Installation

How to install and run the application:

1. Clone the repository from GitHub.
```bash copy
git clone https://github.com/LadyBluenotes/task-it
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

* [Body Parser](https://github.com/expressjs/body-parser)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Node.js](https://nodejs.org/en)
* [Nodemon](https://nodemon.io/)

The primary goal of this was to develop an API that encompasses the fundamental CRUD operations. Going beyond the basics, I also aimed to incorporate additional features such as task assignment to other users and setting due dates. Using the power of NodeJS, Express, and MongoDB, I successfully constructed the API while seamlessly integrating these additional features. 

Node.js, a JavaScript runtime built on Chrome's V8 engine, enables developers to write server-side code using JavaScript. Coupled with Express, a robust web application framework for Node.js, this duo proved to be efficient in building both web applications and APIs. To streamline development, I used Nodemon to automatically restart the server once detecting code changes. This allowed me to focus on API development without the hassle of manual server restarts. Furthermore, Body Parser was employed as middleware to parse incoming request bodies, facilitating access to the data contained within.

MongoDB, a scalable and flexible document database, provided the ideal storage solution, offering powerful querying and indexing capabilities. To facilitate interaction between MongoDB and Node.js, Mongoose, an Object Data Modeling (ODM) library, was used. Mongoose managed data relationships, enforced schema validation, and created seamless translation between code objects and their representations within MongoDB. Through this combination of technologies, data storage and retrieval from the database was made efficient.

The selection of these technologies was driven by the desire to gain a comprehensive understanding of how they worked together. Rigorous testing of API endpoints was conducted using Postman, ensuring its smooth functionality and it meeting expectations.

Overall, this project allowed me to deepen my understanding of the interplay between Node.js, Express, and MongoDB, as well as the importance of efficient testing using Postman. By incorporating additional features and leveraging the strengths of these technologies, the resulting API met my expectations when built.

## III. Motivation

The driving force behind this project was to gain hands-on experience in implementing user authentication within an API. Having previously developed Task It, I acquired a solid understanding of creating APIs and performing CRUD operations using HTTP methods. However, Task It lacked user authentication, so I decided to embark on a new venture that would not only benefit me personally but also provide practical value.

Recognizing the need to track expenses and income, I sought an alternative to relying on external tools like Google Sheets. Hence, the idea of creating an API that would facilitate expense and income tracking while being compatible with future front-end applications emerged.

Being a hands-on learner, I firmly believe in the value of learning through practical application. Instead of relying solely on pre-built authentication tools, I wanted to delve into the authentication process itself. I believe that understanding the underlying mechanics is crucial before employing a tool, and it enables a deeper comprehension of the overall system. Through this project, I had the opportunity to gain practical expertise and refine my skills in building APIs.

Ultimately, this API served as a way for me to further my understanding of user authentication, improving my knowledge and proficiency in API development.

## IV. Key takeaways

### Discoveries and reflections

Building my own API from scratch has been rewarding and enlightening experience. Throughout it, it had pushed me to explore innovative problem solving approaches. Some of the things I learned were:

1. **Creative problem solving**: This API challenged me to think beyond conventional solutions and encouraged me to adopt a more creative mindset. I learned to approach problems from different angles and to consider various strategies to achieve the desired outcomes.
2. **Handling Errors**: Handling errors that may arise during API development became a crucial aspect of my learning process. I delved into understanding error handling techniques and best practices, ensuring that appropriate error messages were communicated to clients for enhanced user experience.
3. **Browser Tools**: I also discovered the further enforced the importance of browser developer tools as a valuable resource for debugging and troubleshooting. Leveraging these tools enabled me to examine network requests, inspect responses, and identify potential issues, improving the efficiency of my development workflow.
4. **Incremental development**: I grasped the significance of breaking down complex tasks into smaller, manageable components. Adopting an incremental development approach, I focused on building and testing simple functionalities first, gradually expanding them to encompass the broader scope of the project. This methodology allowed for easier debugging and more efficient progress tracking.

### Technical growth

While developing my API, I experienced significant growth in various technical aspects. This project served as a platform for expanding my skills and knowledge in specific areas.

#### Postman

Working with Postman proved to be invaluable in testing API endpoints and validating server responses. I gained proficiency in leveraging Postman's features to send requests, inspect responses, and verify the expected behavior of the API, enhancing the overall quality and reliability of the developed solution.

#### Schema validation

The concept of creating schemas introduced me to a structured approach for validating incoming data on the server side. I furthered my understanding of how schemas improve data management by ensuring data integrity and providing a clear structure for efficient storage and retrieval.

#### MongoDB and Mongoose

Exploring MongoDB as a NoSQL database and utilizing Mongoose for data modeling and validation provided valuable insights into their unique capabilities. I learned to effectively interact with MongoDB, gaining proficiency in storing and retrieving data while optimizing schema design based on observed database behaviors.

#### Express and Middleware

Working with Express showed me how to understand the power of route handling and request processing. I became adept at utilizing various HTTP methods for CRUD operations and incorporating middleware functions to enhance functionality, validate data, and manage errors. Organizing the codebase into separate files for routes, controllers, and models also enhanced the project's maintainability and scalability.

In summary, this project offered a rewarding journey of discovery and reflection. It fostered a creative mindset, deepened my understanding of error handling, and highlighted the significance of utilizing browser developer tools. Additionally, it facilitated technical growth through practical experience with Postman, schema validation, MongoDB and Mongoose, as well as Express and middleware. This project served as an invaluable introduction to server-side development and building APIs from scratch, providing a strong foundation for future endeavors.

## V. Acknowledgments

This project would not be possible without the documentation written by the creators the technologies used. I believe that, without their clear and concise examples and explanations, I would not have been able to complete this as efficiently as I had.

## VII. Additional information

While this project is completed at the time of writing this, I may come back and iterate on it some more based on the features listed below.

### Known issues

Can be found [here](https://github.com/LadyBluenotes/task-it/issues).

### Future improvements

- [ ] Protect endpoints using auth.


