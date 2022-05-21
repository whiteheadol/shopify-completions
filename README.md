# Shopify Completions (Fun with GPT-3)

<img width="500" alt="home page" src="https://user-images.githubusercontent.com/96206823/169663216-fbd0959c-d9b1-4779-8f69-9d32969dddf1.png">

## Deploy Link
View the project [here](https://profound-syrniki-b9c41f.netlify.app/).

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
This project was completed as a part of Shopify's 2022 Fall Front End Developer Intern Challenge. Developers were given a project spec along with a specific API, but the rest of the design was to be chosen by them.

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
- After deciding on their trip description, the user can click **let's go** to see their recommended destination. Both their prompt, and the ai's suggested vacation will appear in the container on the right. As their suggestions grow, they can scroll through the container to view them all.

## Page Demo
Submitting a destination prompt:
<img width="500" alt="submitting a prompt" src="https://user-images.githubusercontent.com/96206823/169663233-80d6cc55-fdeb-4de7-b4af-d816b99833df.png">

Receiving a response:
<img width="500" alt="viewing a response" src="https://user-images.githubusercontent.com/96206823/169663238-996c665e-586d-432b-9bf1-40de1af3b908.png">



## Possible Future Extensions
- As mentioned previously, I hope to revisit this application with more knowledge of API keys. I would like to refactor my current solution to the correct key storage instead.
- I would also like to add a repository of background images, and change the image to appropriately reflect the most recently suggested destination. (Ex: If the ai suggests that a user visit Fiji, I'd like the background to change to a tropical beach.)

## Set Up
1. Clone this repo to your local machine.
2. `cd` into your local directory.
3. Run `npm install`.
4. Run `npm start`.
5. Enjoy exploring the application!

## Contributors
- Olivia Whitehead (GitHub: [whiteheadol](https://github.com/whiteheadol))

## Project Specs
- The spec for this project can be found [here](https://docs.google.com/document/d/1O7mCynsz_cBXkEaCFGSZAuvAOY84QVq35l20xJwjOYg/edit?usp=sharing).

## Project GitHub Repo
- The project repo can be found [here](https://github.com/whiteheadol/shopify-completions).

## Additional Resources
- [Project Board](https://github.com/whiteheadol/shopify-completions/projects/1)
- Forest image sourced from Pexels, photographer found [here](https://www.pexels.com/@creative-vix/).
