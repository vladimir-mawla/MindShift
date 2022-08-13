<img src="./readme-assets/title1.svg"/>

<div align="center">

> The project is a web application related to gamification at work, implemented by incorporating gaming elements in non-gaming situations.   

**[PROJECT PHILOSOPHY](#project-philosophy) • [WIREFRAMES](#wireframes) • [TECH STACK](#tech-stack) • [IMPLEMENTATION](#implementation) • [HOW TO RUN?](#how-to-run)**

</div>

<br><br>


<img src="./readme-assets/title2.svg"/>
<a id="project-philosophy"></a>

> Gamification has become very popular and an integral part of the corporate world. Many companies are adopting it as it is an innovative approach and has lot of benefits on all levels. Not only it promotes employee loyalty and engagement by making work processes fun and rewarding but also it increases productivity driving better results to the company.
> 
> The project is about gamification at work, which increases employees motivation and loyalty to the company, ensure a fun learning environment, enhance engagement, and help employees learn skills more efficiently.

<br>

### User Stories
- As a user, I want to gain rewards on my hard work.
- As a user, I want to check my progress at my company.
- As a user, I want to see the company's leaderboard.

### Admin Stories
- As an admin , I want to increase my employees' motivation and progress at work.
- As an admin , I want to ensure a fun learning environment.
- As an admin , I want to enhance my employees' engagement.
- As an admin , I want to help employees' learn skills more efficiently.


<br><br>

<img src="./readme-assets/title3.svg"/>
<a id="wireframes"></a>

> This design was planned before on paper, then moved to Figma app for the fine details.
Note that I didn't use any styling library or theme, all from scratch and using pure css modules.


| Profile |
|---------|
| ![Profile](/readme-assets/Profile.png) |

| Landing  | Home |
| ---------|------|
| ![Landing](/readme-assets/Landing.png) | ![Home](/readme-assets/Home.png) |
|  Questions | Rewards  |
| ![Questions](/readme-assets/Questions.png) | ![Rewards](/readme-assets/Rewards.png) | 



<br><br>

<img src="./readme-assets/title4.svg"/>
<a id="tech-stack"></a>

Here's a brief high-level overview of the tech stack the MindShift app uses:

- This project uses the [React library](https://reactjs.org/). React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
- As backend, [Laravel framework](https://laravel.com/) is used, which is a free and open-source PHP web framework, intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony.
- For persistent storage (database), the app uses [MySQL](https://www.mysql.com) which is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius's daughter, and "SQL", the abbreviation for Structured Query Language.



<br><br>
<img src="./readme-assets/title5.svg"/>
<a id="implementation"></a>

> Using the above mentioned tech stacks and the wireframes built with figma, the implementation of the app is shown as below. These are screenshots from the real app



<br><br>
>User Page:

| Home |
|------|
| ![Home](/readme-assets/Home_screen.png) |

| Landing  | Chatbot |
|----------|---------|
| ![Landing](/readme-assets/Landing_screen.png) | ![Chatbot](/readme-assets/Chatbot.png) |
|Questions | Profile |
| ![Questions](/readme-assets/Questions_screen.png) |![Profile](/readme-assets/Profile_screen.png) |
| Rewards | Order |
| ![Rewards](/readme-assets/Rewards_screen.png) | ![Order](/readme-assets/Order.png) |

<br>

- Implemented live scoring system
![LiveScoring](/readme-assets/live-scoring.gif)

<br><br>
>Admin Page:

| Dashboard  |
|------------|
| ![Dashboard](/readme-assets/Dashboard.png) |

| Add Game | Add Badge  | 
|----------|------------| 
|![Add Game](/readme-assets/AddGame.png) | ![Add Badge](/readme-assets/AddBadge.png) |
| Add Points | Add Rewards|
| ![Points](/readme-assets/AddPoints.png) | ![Rewards](/readme-assets/AddReward.png) |
| Add Questions | Employees | 
| ![AddQuestions](/readme-assets/Add_questions.gif) |   ![Employees](/readme-assets/Employees.png) |

<br>

- Removing employee
![LiveScoring](/readme-assets/removing-employee.gif)

<br><br>
<img src="./readme-assets/title6.svg"/>
<a id="how-to-run"></a>


> To get a local copy up and running follow these simple example steps.

### Prerequisites


* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation


1. Clone the repo.
   ```sh
   git clone https://github.com/vladimir-mawla/MindShift.git
   ```
2. Add your DataBase name in the .env file locataed at 'mindshift-backend/.env'.

   DB_DATABASE= 'yourdb'

3. Install NPM packages in 'mindshift-frontend' folder.
   ```sh
   npm install
   ```
4. Start the Server in 'mindshift-backend' folder.
   ```sh
   php artisan serve
   ```
5. Start the Application at 'mindshift-frontend' folder.
   ```sh
   npm start
   ```
