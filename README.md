# Star Seeker

**Star Seeker** is a revolutionary app that calculates the cost of your interstellar journeys, finds efficient routes through a network of gates, and provides detailed gate information. We've added a "Journey Memory" feature, allowing you to save your favourite routes for future adventures. With a sleek and user-friendly interface, our app ensures a delightful experience, whether you're on the web or a mobile device. Join us in this mission to redefine the future of travel, one hyperspace jump at a time. The cosmos is calling, and the journey begins with Star Seeker. Start your cosmic adventure now!

## My Approach

### Requirements Gathering

#### What are the core features to be supported?

- Calculate the cost of a Journey
- Display the cheapest transport recommendation
- Display gate details and other relevant information
- Let users find the cheapest routes between two gates
- Allow the ability to save/favourite a route

#### Identify the target audience and their needs.
The assignment brief did not specify. Therefore it is assumed that the users of the application will be international users of a wide age range: US, Asia, Europe, etc.

#### Non-functional requirements
Page and data loading time should ideally be under 2 seconds with quick interactions with elements. Booking travels are usually a very time sensitive affair.

#### Devices the application will be used on
It is expected that the user will engage with the applicaiton via a few mediums: laptop, tablets, mobile, etc.

#### Authentication
Signing in was not within the scope of this assessment. However, future iterations may benefit from it when it come to storing user data

## Architecture / high-level design
[Star Seeker Architecture.pdf](https://github.com/Kayode-Olumo/star-seeker-kayode/files/13300785/Star.Seeker.Architecture.pdf)

### Component responsibilities
- Server: Provides HTTP APIs to fetch gates data, Journey data, modify the favourites.
- Controller: Controls the flow of data within the application and makes network requests to the server (React hooks).
- Client Store: Stores data needed across the whole application. 

- Pages:
    - Gates: Displays a list of gates that can be clicked for more info.
    - Product Details: Displays the details of a single gate along with additional details.
    - Favourites: Displays favourite routes and allows users to remove added routes.
    - Home: Has feature to calculate Journey cost and suggest a recommended mode of transport based on a few parameters.


### Technology Stack Selection:
#### Front-end
- React 18
- React router dom
- Styled components

#### UI Component Library
- Material UI
- React Icons

#### API Data Fetching
- Axios


### User Interface Design:

Please see attached pdf for wireframes and information architecture to visualize the user interface and user experience (UI/UX).
This was the first iteration, just an exercise to walk through my ideas

[StarSeeker UI.pdf](https://github.com/Kayode-Olumo/star-seeker-kayode/files/13300584/StarSeeker.UI.pdf)

[Star Seeker - Information Architecture.pdf](https://github.com/Kayode-Olumo/star-seeker-kayode/files/13300587/Star.Seeker.-.Information.Architecture.pdf)

## Considerations during development

In the project directory, you can run:

## Assumptions


## Bonus Task

## Future Improvements

1. Tailwind CSS
2. Redux for state management
3. Develop a backend node server to handle api call
4. NoSQL database solution e.g. mongoDB
5. More UI iterations and feedback loops
6. Better client side validation
7. Pagination for data above a specific limit
8. More robust unit tests

# How to run 

## Installation

Silver Client uses React in conjunction with Webpack, Babel and React Hot Loader to help make local development as fast as possible.

`git clone git@github.com:Kayode-Olumo/star-seeker-kayode.git`

`npm install` - Install all necessary dev dependencies and package logs before\

`npm start`

In the browser:
http://localhost:3000/

### `.env`
API token has to be stored at the root level of the application in a .env file e.g. REACT_APP_API_KEY= *Your api token goes here*







