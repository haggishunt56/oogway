# Oogway

Oogway is a person trainer web application providing users with a range of workouts.

### Running the application

To run the application, clone this repository into the desired directory, navigate to the directory and run the following commands:

1. `npm install` to install dependencies and libraries used by this project.

2. `npm run start` to run the application

Note you must be on Node version 21 to run this application.

The first time you run the application, you *may* need to create a .env file. Do so, and enter `ACCESS_TOKEN_SECRET="[any_random_string]"`

### Features

**This is a prototype application and is therefore not suitable for production use.**

Most of the application is accessible only after login. Unverified users (users not logged in) can access the following resources:
- Landing page
- Login
- Registration
- About us

Users must be logged in to access the remaining features of the application. To log in, an account must be created first using the registration tool. Details are saved in a local NeDB database file. Passwords are hashed for security.
Verified users can access the following features:
- Create goals in each of the following categories:
    - Nutrition
    - Fitness
    - Healthy lifestyle
- View and edit their own goals
- Delete their own goals
- Add personal achievements
- View guides/blog posts on the following topics:
    - Nutrition
    - Fitness
    - Lifestyle

The application has been tested on different viewport sizes and is suitable for use on a range of different devices.

### Known issues

1. There is a critical vulnerability in the database used in this project (NeDB). The database is no longer maintained so it is unlikely this vulnerability will ever be fixed.

### Suggested improvements
1. Nunjucks should be used as the templating engine instead of Mustache. Nunjucks offers more features than Mustache, including logic and formatting. For example, NeDB saves dates as Date objects but these are not user-friendly when printed on the page as-is. Nunjucks offers filters to change the date string into something more user-friendly. With Mustache, this has to be done by the JavaScript code before being passed to the template.
2. Users can view or edit goals for other users if they know the id of the goal. They are a random string so may be difficult to guess, but some server-side verification is required to prevent this from happening.
3. Some basic input field validation is applied server-side. Mostly this is just checking if a required field is blank and returning an error to the user if it is. More validation is required though, such as checking that dates are provided in date fields and email addresses are in the correct format, e.g. john@example.com
4. Browser compatibility - CSS styles have been tested on Google Chrome and Opera browsers. Additional browsers should be tested such as Edge, Safari, Firefox and Internet Explorer.
5. Allow login using *either* the email address *or* username. Currently users can only login with the username.
6. SEO: <link rel="canonical" href="https://glitch-hello-website.glitch.me/" />
<meta name="description" content="A simple website, built with Glitch. Remix it to get your own."/>
<meta name="robots" content="index,follow" />
<meta property="og:title" content="Hello World!" />
<meta property="og:type" content="article" />
<meta property="og:url" content="https://glitch-hello-website.glitch.me/" />
<meta property="og:description" content="A simple website, built with Glitch. Remix it to get your own."/>
<meta property="og:image" content="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2Fhello-website-social.png?v=1616712748147"/>
<meta name="twitter:card" content="summary" />
