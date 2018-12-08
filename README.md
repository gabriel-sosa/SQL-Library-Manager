# [SQL Library Manager](https://sql-library.herokuapp.com/)
## **Grade:** :heavy_check_mark: Exceeds Expectations
### **Premise** 
>You've been tasked with creating an application for your local library to help them manage their collection of books. The librarian has been using a simple SQLite database and has been entering data in manually. The librarian wants a more intuitive way to manage the library's collection of books.

>In this project, you'll build a web application that'll include pages to list, add, update, and delete books. You'll be given HTML designs and an existing SQLite database. You'll be required to implement a dynamic website using JavaScript, Node.js, Express, Pug, and the SQL ORM Sequelize.
### **Project Instructions**
1. Handle files and folders that shouldn't be stored in your repo
2. Initialize your project
3. Add your dependencies
   - #### Reviewer Comments:
   - > Nice work setting up your app. Your .gitignore file is being used to keep your repo from tracking your node modules folder. Running npm install adds all the necessary dependencies. And npm start launches the app. Bravo!
4. Initialize Sequelize and create your models
   - #### Reviewer Comments:
   - > Your Sequelize Model, properties and validation appear to be all set up and in working order. Great work! This can be a tricky task, but you handled it like a champ!
5. Set up your server, middleware and routes
   - #### Reviewer Comments:
   - > Routes all look good and work well. You clearly have a good understanding of setting up routes in an Express app.
   - > Excellent error handling. Your app deals with server and routing errors well and notifies the user in a friendly manner. This is top notch work!
6. Build your views
7. Required fields and forms
   - If the required title and author fields are empty upon form submission, the user should be notified accordingly with a friendly error message on the page.
   - #### Reviewer Comments:
   - > Yes!! Your project's form inputs utilize Sequelize Model validation, and not just HTML5 built in validation. You're on fire and coding like a pro!
8. Styles and Layout
   - You are provided with all the styles you will need for this project, in the public/stylesheets/styles.css file. This is the CSS file that you will need to link to your Pug templates.
   - #### Reviewer Comments:
   - > Project styles and layout look sharp. The CSS is a little off, like the pagination buttons slightly collide with the table. A look into your CSS file and giving some margin to the table should do. Well done!
9. Add good code comments
### Extra Credit
1. Search
   - Include a search field for the books listing page. Search should work for all of the following fields:
     - Title
     - Author
     - Genre
     - Year
2. Pagination
   - Include pagination for the books listing page.
   - #### Reviewer Comments:
   - > Wow! Seriously impressive additions. Search, pagination and all your views look and work great. Round of applause!
### Overall Comments
> You were amazing, absolutely amazing, with this project! I love how thorough you were and the consistency throughout was solid. Awesome work. It will take your physical energy away even though you may have only worked at it for a couple hours at a time. However, you pulled through.

> From using Sequelize's ORM properties in the models' files, commissioning your middleware to different files in the routes folder, to rendering all of this in your views templates. It's a lot, I know, but now that you understand how ORMs work, you'll have a much easier time getting acquainted with other ORMs. Their operations achieve the same end goal so you'll see many references to each other that make them extremely similar.
