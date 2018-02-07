# Description

Repository dedicated to practice API development skills based on a <https://lynda.com> tutorial taught by Emmanuel Henri.

## Breakdown

- **Node.js** (JavaScript) was the selected framework used to design, build, and test this RESTful API
- Main JavaScript libraries used for the completion of the project
    - express
    - body-parser
    - mongoose

- **MongoDB** was the selected non-relational data base used to store the data
    - **Data Modeling** and **Querying** was achieved through the use of `mongoose` which helped to design the desired schema on top of mongo
    
## Routes

1. `localhost:3000/api/contact`

- **Requests**
    - GET
    - POST
        - Data Schema
        
        ```javascript
        {
            firstName: {
                type: String,
                required: true,
            },
            lastName: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            phone: {
                type: String,
                required: true,
            },
            createdDate: {
                type: Date,
                default: Date.now,
            }
        }
        ```

2. `localhost:3000/api/contact/:id`

- **Requests**
    - GET
    - PUT
    - DELETE
    

## Additional Info
    
This API and all the code included in this repository are for learning purposes.
    
It is assumed **you have already installed** the following on your computer:
    
- Node.js (most updated version)
- npm
- mongoDB
