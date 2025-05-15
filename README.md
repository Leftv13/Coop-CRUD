# Course API (COOP-CRUD)

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node.js-%3E%3D14.0.0-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/express-%3E%3D4.17.1-blue.svg)](https://expressjs.com/)

> A simple RESTful API to manage programming and mathematics courses, built with Node.js and Express.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Request Examples (with REST Client)](#request-examples-with-rest-client)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)

## Description


> This RESTful API implements CRUD (Create, Read, Update, Delete) operations to manage information about programming and mathematics courses. It allows users to obtain lists of courses, filter by language or subject, search by level, and perform other basic data management operations.

## Features

- **Course CRUD:** Allows creating, reading, updating, and deleting course information.
- **Filter by Language (Programming):** Allows obtaining programming courses by a specific language.
- **Filter by Subject (Mathematics):** Allows obtaining mathematics courses by a specific subject.
- **Filter by Level:** Allows obtaining courses by a specific level.
- **Sorting:** (If you implemented sorting, such as by views) Allows sorting courses by a specific criterion (e.g., number of views).
- **Clear and RESTful Endpoints:** Uses RESTful conventions for easy integration.

## Requirements

- [Node.js](https://nodejs.org/) (version >= 14.0.0 recommended)
- [npm](https://www.npmjs.com/) (usually installed with Node.js)

## Installation

Follow these steps to clone our repository:

1.  **Clone the repository:**
    ```bash
    git clone [your repository URL here]
    cd [repository name]
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Usage


1.  **Run the server:**
    ```bash
    node express.js
    ```
    

2.  **Endpoints:**

    - **`GET /`**: Returns a welcome message (e.g., "Hello world!").
    - **`GET /api/courses`**: Retrieves the complete list of all courses (programming and mathematics).
    - **`GET /api/courses/programming`**: Retrieves the list of all programming courses.
    - **`GET /api/courses/programming/:language`**: Retrieves the list of programming courses filtered by the specified language (e.g., `/api/courses/programming/javascript`).
    - **`GET /api/courses/programming/:language/:level`**: Retrieves the list of programming courses filtered by language and level (e.g., `/api/courses/programming/python/basic`).
    - **`POST /api/courses/programming`**: Creates a new programming course (requires a request body in JSON format).
    - **`PATCH /api/courses/programming/:id`**: Partially updates an existing programming course with the specified ID (requires a request body in JSON format).
    - **`GET /api/courses/maths`**: Retrieves the list of all mathematics courses.
    - **`GET /api/courses/maths/:subject`**: Retrieves the list of mathematics courses filtered by the specified subject (e.g., `/api/courses/maths/algebra`).
    - **`GET /api/courses/maths/:subject/:level`**: Retrieves the list of mathematics courses filtered by subject and level (e.g., `/api/courses/maths/calculus/intermediate`).
    - **`GET /api/courses/maths/:subject/:level?sort=views`**: Retrieves the list of mathematics courses filtered by subject and level, optionally sorted by the number of views.

3.  **Request Examples (with REST Client or using the Index.http file):**

    ```http
    # Get all courses
    GET http://localhost:3000/api/courses

    ###

    # Get JavaScript programming courses
    GET http://localhost:3000/api/courses/programming/javascript

    ###

    # Create a new programming course (example)
    POST http://localhost:3000/api/courses/programming
    Content-Type: application/json

    {
        "title": "Beginner React Course",
        "language": "javascript",
        "level": "basic",
        "views": 150
    }

    ###

    # Partially update a programming course (example)
    PATCH http://localhost:3000/api/courses/programming/2
    Content-Type: application/json

    {
        "views": 200
    }

    ###

    # Get algebra mathematics courses
    GET http://localhost:3000/api/courses/maths/algebra

    ###

    # Get intermediate calculus courses sorted by views
    GET http://localhost:3000/api/courses/maths/calculus/intermediate?sort=views
    ```

## Project Structure
 ```
├── data/
│   └── courses.js        # Contains the course information
├── routers/
│   ├── maths.js          # Routes for mathematics courses
│   └── programming.js    # Routes for programming courses
├── express.js                # Main server file
├── package.json
├── package-lock.json
└── README.md
 ```
## Contributing

> Contributions are welcome. Please follow these steps:
>
> 1.  Fork the repository.
> 2.  Create a new branch with your feature or fix (`git checkout -b feature/new-feature`).
> 3.  Commit your changes (`git commit -m 'Add new feature'`).
> 4.  Push to the branch (`git push origin feature/new-feature`).
> 5.  Create a Pull Request to the `main` branch of this repository.

## License



```

MIT License

Copyright (c) [2025] [Andres Abreu, Abigail Araujo]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

## Authors

> [Andres Abreu] ([Leftv13](https://github.com/leftv13))
> [Abigail Araujo] ([Abigail-Araujo](https://github.com/Abigail-Araujo)))


