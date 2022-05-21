# Shopify Completions (Fun with GPT-3)

<img width="500" alt="hotel home page" src="">

## Deploy Link
View the project [here]().

## Table of Contents

  - [Introduction & Learning Goals](#introduction-&-learning-goals)
  - [Technologies](#technologies)
  - [Features](#features)
  - [Page Demo](#page-demo)
  - [Possible Future Extensions](#possible-future-extensions)
  - [Set Up](#set-up)
  - [Contributors](#contributors)
  - [Project Specs](#project-specs)
  - [Project GitHub Repo](#project-github-repo)
  - [Additional Resources](#additional-resources)

## Introduction & Learning Goals
This project was completed as a part of Shopify's 2022 Fall Front End Developer Intern Challenge. Developers were given a project spec along with a specific API endpoint, but the rest of the design was to be chosen by them.
The project spec can be viewed [here]().

My personal goals while completing this project included the following:
- Keep the UI clean, simple, and easy to understand for a new user.
- Fully test each user story, including intercepting the Post request upon form submission.
- Push myself to use a framework (React) that I recently began learning.
- Prioritize my app's accessibility.

Personally, my biggest wins were gaining a deeper understanding of React and Cypress, both of which are new technologies for me. I did choose to complete the project without the use of React hooks, as I wanted the extra practice building out class-based components.

My biggest challenge, was the use of an API key for the first time. I spent quite a bit of time attempting to store it in an .env file with little success, and although my solution at the moment works, I realize that this is not correct. I hope to revisit this in the future.

## Technologies
  - Javascript
  - React
  - HTML
  - CSS
  - Cypress
  - Fetch API
  - NPM
  - Lighthouse (accessibility)
  - Wave (accessibility)

## Features
- When the page loads, the user will see a title, a simple form, and an empty container labeled **your past inspiration**.
- The form instructs a user to describe their dream trip in a few words, and an example description is included in the input field. Inputs can be as simple as one word, but results will be more accurate if the user provides three to four words.
- After deciding on their trip description, the user can click **let's go** to see their recommended destination. Both their prompt, and the ai's suggested vacation will appear in the container on the right.

## Page Demo
Logging in to view a user dashboard:

![Logging in](https://media.giphy.com/media/TH8grcR66c2emwCpAw/giphy.gif)

Search for a room by type:

![Filtering by room type](https://media.giphy.com/media/InoxdR3Ikf5NQzX2k3/giphy.gif)


## Possible Future Extensions
- I hope to build out **manager** functionality in the future, as laid out in the extension section of the spec.
- I also hope to add a feature that will allow the user to sort their booked rooms by date, either ascending or descending.

## Set Up
1. Clone this repo to your local machine.
2. `cd` into your local directory.
3. Run `npm install`.
4. Run `npm start`.
5. Clone the [project's API](https://github.com/turingschool-examples/overlook-api) to your local machine as well.
6. `cd` into the API directory.
7. Run `npm install` in the API directory.
8. Run `npm start` in the API directory.
9. Once both directories are running in separate tabs of your terminal, copy the local address from the main project's directory into your browser.
10. Enjoy exploring the application!

## Contributors
- Olivia Whitehead (GitHub: whiteheadol)

## Project Specs
- The spec for this project can be found [here](https://frontend.turing.edu/projects/overlook.html).

- The backend API can be found [here](https://github.com/turingschool-examples/overlook-api).

## Project GitHub Repo
- The project repo can be found [here](https://github.com/whiteheadol/overlook).

## Additional Resources
- [Project Board](https://github.com/whiteheadol/overlook/projects/1)
- Ocean image sourced from Pexels, photographer found [here](https://www.pexels.com/@matthardy/).
