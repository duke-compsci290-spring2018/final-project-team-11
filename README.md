### your name and Net ID
Martin Muenster - mm617 and Gouttham Chandrasekar gc124
### the date you started the assignment, the date you completed the assignment, and an estimate of the number of hours you worked on it
4/26/2018. 100 Hours total 
### list of the students with whom you discussed the assignment. Since assignments are to be your own work, you should keep track of anyone with whom you have had a significant conversation about a program. You are welcome to talk with the course staff about the assignment, and to other students about broad ideas and concepts.
We discussed the project with each other and a TA tried to help us get a pop up window working for firebase authentication. However, since we used React.js framework, even with the TA's help, we weren't able to find a clean way to login using the google firebase user interface. 

### any books, papers, or online resources that you consulted in developing your web site
We used Materials-ui documentation, documenatation posted by facebook that showed us how to set up routing and authentication in React.js as well as code that dealt with react router dom, links, and the image carosoul that we displayed on the first page. We also heaviliy referred to stack over flow to help us understand callback functions, promises, mounting and other React.js specific issues. We also used https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/ to help us learn how to structure our files and folders into an organized way.

### any assets (code, images, or sounds) used within your web site
The stock images that we used in the carousel and the sport-chooser page were from google stock images. The links for the images are as follows. (https://stillmed.olympic.org/media/Images/OlympicOrg/News/2017/05/03/tennis-thumbnail.jpg?interpolation=lanczos-none&resize=*:*
https://wallpapercave.com/wp/wp1852937.jpg
http://sportia-eg.com/images/sinal.jpg) 

### any bugs or concerns still remaining within your web site
The only major bug that we can't seem to figure out is the firebase authentication. When we initialize the firebase authentication UI, it requires the user to click the "sign in" button multiple times before allowing the user to log in. This procress is laborious and takes away slightly from the usability of the application. Other than that, our functionality works just as we would hope. 

### any extra credit features included in your web site
No warnings :-)

### what makes your application useful
Our application is a platform that connects people within a particular community together through a shared love and skill for a particular sport. As a racket sport player (tennis, squash, badminton) I personally find it extremely difficult to schedule a "fun and competitive" game with people that I know because there are a few people play the game at my skill level and the hustle of college life makes it difficult to find a time with those people. Often times, people like me resort to running or lifting weights simply to avoid the hassle of planning a time and find a friend to play with instead of playing these competitive rackets sports on a regular basis. This platform takes care of the dirty logistics involved with playing racket sports allows the user to easily enroll for existing games, create games and try a new sport and play with individuals who have the same skill level as them and enjoy competitive games . Each player on the platform has a skill level for every sport that updates based on their experience playing against other people on their platform. Martin and I have built the framework for this applicaton as well as a very basic backend that updates skill levels of app users after they play games against other people on the platform. We truly believe in the potential of this product in the industry and are planning on continuing to develop this barebones proof of concept application. 

### special instructions needed to set up, run, access, or use your application (like user passwords you have set up, command line utilities, or external programs that need to be run)
Special instructions to use the application.
* You can access the website by going to the following URL. ____________________
* If you want to download our code from git and run it locally, there are a few dependencies that exists. I will explicitely outline the steps to download the git repository as well the dependencies. 
	* git clone 
	* go to the folder that contains the packages.json/src/etc. 
	* npm install 
	* npm install react-router-dom
	* npm install material-ui
	* npm install slick-carousel
	* npm install --save firebase
	* npm install firebaseui

Instructions to run the website: There are three types of users. When you first visit the website, you are a guest, and you can view all of the games and the home page, but you cannot edit, add, or delete any data. After sign-in, you become a consumer, which has the right to join, create, and leave games, as well as take pre- and post-game surveys. Any user created with the name "ADMIN" is an administrator, who cannot join or create games, but can manage existing games through deleting them. 
We decided that for demonstration purposes, the user would be able to create games that occur before the current date, so that we would be able to show the functionality of the post-survey without having to directly edit firebase data to change the date manually.
Furthermore, it is not apparent to the user, but each user has a rating for each sport, determined first by the pre-game survey, and changed as the user plays games. This rating is used to filter available games that a user can sign up for. For example, a user rated 6 in tennis will be able to see a game created by a user with rating 8, but will not be able to see/join a game with user rating 10.
Pressing a button may not redirect you, make sure to press the link within the button.

### references for your data that establishes its authenticity
We check that data is valid before storing it. For example, we use simple html tags to prohibit the submission of negative numbers or non-integers for choosing number of players. Furthermore, we check that data loaded from firebase is not null so that nothing crashes.

### discuss both the pros and the cons of different framework possibilities you considered and why you made the decision you did (including choosing not to use any framework)

We were debating between using the vue framework and react framework. Since this project is definitely something we are interested in developing in the future, we decided to weigh in the positives and negatives for both of the frameworks when creating an industry standard application. 
* React.js pros 
	* potential to learn the industry leading platform through experience (would be useful for applying to web development jobs)
	* understanding another framework in depth
	* React Native is a derivative of React.js that uses different components. However, if we wanted to use the code for our website to support a mobile application (which we plan on doing), React Native allows for that. (main reason why we chose react)
	* More resources and components available to use because React is the industry leading platform. 
	* We create a basic react application for our explore project so that we wouldn't struggle too much with the final. This experience was helpful. 
	* Objects are super intuitive as a coder and React.js uses components in a very similar way. (uses jsx or javascript for everything. render html using javascript)
* React.js cons
	* we don't know how to use the react equivalent of vuetify so understanding call back functions, promises, asynchronicity was an absolute pain. We didn't realize how complex actually understanding the timing of functions is. 
	* There are react specific code such as constructors, componentDidMount, ComponentWillUnmount and others that was initially difficult to get a grasp of
	* it is hard to write correct react code. and understanding dataflow. 

* Vue pros
	* vuefire makes it easy to deal with asynchronisity and promises. 
	* lightweight (more straighforward) -- easier to pick up. 
	* have a seperation between template and javascript code which makes it much easier to read and handle the MVC for each vue component. 
	* allows us to use normal html, css, javascript and supports many many languages.!! this is super intuitive 
	* MUCH easier data bindings as well as conditional rendering and for loops within HTML (so we wouldn't have had to write js inside of HTML part)
	* After using react and trying to learn about it during the course of the project we realized that VUE's documentation is so much better!! 
	* more comfortable with vue because of our experience with Trell-oh, vuefire, firebase, authentication (because of Duval's documentation) and vuetify.

* Vue cons
	* less modular.  
	* fewer external libraries.