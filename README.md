# :computer: Atlan Frontend Task: Mastering SQL Queries
<strong> Link to the application: https://atlan-frontend-sql-editor.vercel.app/</strong>
<br>

## Introduction

This particular project was created as part of Atlan hiring process for Frontend Intern Role. The problem statement for teh same is present towards the end.

## Project Features

Lazy Loading has been used for the main page, to make the page show some message ("Loading....") and not leave the user with a blank screen.

The tables are being paginated, which in this case where data is present in the frontend won't have much of a difference but the same when a backend is involved would be helpful.

The functions to get table-related data are written such that they can easily accommodate a backend with minimal change in the existing code.

The run time for the page are shown in the attached screenshots

## Screenshots
### Page Load Times (Google Lighthouse used, in Incognito Browser Mode in Google Chrome)
<strong>Load Time (Desktop) : 0.7 seconds</strong>
![DesktopTime](https://drive.google.com/uc?export=view&id=1hV3BsNK1MPyRDUAngcObLIJR5qTyGWPc)
<strong>Load Time (Mobile) : 1.7 seconds</strong>
![MobileTime](https://drive.google.com/uc?export=view&id=1h4Lh_ZjmO5hp6QwWZOa4-OIKkWBhYX8d)

### Performace (Google Lighthouse used, in Incognito Browser Mode in Google Chrome)
<strong>Desktop</strong>
![Desktop](https://drive.google.com/uc?export=view&id=1eNl8V7U2ywv1dJv_wGBki7B50Hu8BGvo)
<strong>Mobile</strong>
![Mobile](https://drive.google.com/uc?export=view&id=1r0_2gpwnHHW310L39M5XGnp9l1VIKRyB)



## Problem Statement

### SQL Editor
Create a SQL editor view where your users can query easily on a table using SQL, and see the results. Think of all the features, style, design, layout that you think would be needed to make the query experience beautiful, smooth & efficient. Create your web app accordingly.

<strong>Ideal User:</strong> Our target users here are the data analysts of any organization, who will actually use the interface, query the data and pass on the results to their business team.

<strong>*Note:</strong> Do not worry about the backend of the app. Just focus on the frontend. Use stubs & mocks wherever you think the backend is necessary.

<strong>*Note2:</strong> Do not write SQL logic to show data results. Have a few predefined SQL queries and show their results directly.

<strong>Sample csv data you can use:</strong> https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv

<strong>Things to note:</strong>
1. Use a JavaScript framework for the task, preferably Vue.js/Nuxt.js but any framework would work. <strong>DO NOT code</strong> in vanilla JS.
2. You are <strong>NOT</strong> restricted to use this particular data. You can use any external data as well, if you want.
3. Calculate the page load time of your app. Write the page load time in README. Also write, how did you calculate the page load time of the app.
4. If you made any changes to optimize the page load time of your app, write all the steps you took to optimize the page load time in README.

<strong>Submission details:</strong>
1. Host the code in a version control system eg. Github, Gitlab etc, and send us the link to the repository.
2. Also, host the web app online using services like Netlify, Surge etc and send us its link. (DO NOT EXPECT the person checking the task to install your web app locally. There can be a lot of issues and back & forth, in case of any issue during local installation. It’s better you host the app and send us the link)

<strong>You will be judged on the following: </strong>
1. Code structure and readability.
2. Page layout and feature set
3. Information hierarchy of all the content and components shown on the page(s) of your app.
4. Page load time of your app.
