# :computer: Task - Atlan Frontend Engineer
<strong> Link to the application: https://atlan-frontend-sql-editor.vercel.app/</strong>
<br>

## Introduction

This particular project was created as part of Atlan hiring process for Frontend Developer. The problem statement for the same is present towards the end.

## Project Features

Lazy Loading has been used for the main page, to make the page show some message ("Loading....") and not leave the user with a blank screen.

The tables are being paginated, which in this case where data is present in the frontend won't have much of a difference but the same when a backend is involved would be increase performance.

The functions to get table-related data are written such that they can easily accommodate a backend with minimal change in the existing code.

The run time for the page is shown in the attached screenshots

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
Create, design and implement a web-based application capable of running SQL queries and displaying the results of said query. The application must include a space which accepts SQL queries in the form of user inputs, then runs the given query, and displays the result within the application.
