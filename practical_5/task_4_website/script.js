const cd = document.getElementById('cd');
        const nl = document.getElementById('nl');
        const bl = document.getElementById('bl');
        const mn = document.getElementById('mn');
        const ge = document.getElementById('ge');
        const td = document.getElementById('td');

        const title = document.getElementsByClassName("title");
        const img = document.getElementsByClassName("thumb");
        const paragraph = document.getElementsByClassName("paragraph");

        let flag = false;

        document.addEventListener("DOMContentLoaded", function(event) { 
            flag = true;
          });

        const react = () => {
            title[0].innerText = "React.js";
            img[0].src = "./images/react.png";
            paragraph[0].innerText = "React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality"; 
        }

        const angular = () => {
            title[0].innerText = "Angular.js";
            img[0].src = "./images/angular.png";
            paragraph[0].innerText = "AngularJS is a JavaScript-based open-source front-end web framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in web applications and progressive web applications.";                    
        }

        const django = () => {
            title[0].innerText = "Django";
            img[0].src = "./images/django.jpg";
            paragraph[0].innerText = `
            Django's primary goal is to ease the creation of complex, database-driven websites. The framework emphasizes reusability and "pluggability" of components, less code, low coupling, rapid development, and the principle of don't repeat yourself.[11] Python is used throughout, even for settings, files, and data models. Django also provides an optional administrative create, read, update and delete interface that is generated dynamically through introspection and configured via admin models.
            `;
        }

        const nodejs = () => {
            title[0].innerText = "Node.js";
            img[0].src = "./images/node.png";
            paragraph[0].innerText = `
            Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.
            `;
        }

        const sqlite = () => {
            title[0].innerText = "SQLite";
            img[0].src = "./images/sqlite.jpg";
            paragraph[0].innerText = `
            SQLite is ACID-compliant and implements most of the SQL standard[citation needed], generally following PostgreSQL syntax. However, SQLite uses a dynamically and weakly typed SQL syntax that does not guarantee the domain integrity.[7] This means that one can, for example, insert a string into a column defined as an integer. SQLite will attempt to convert data between formats where appropriate, the string "123" into an integer in this case, but does not guarantee such conversions and will store the data as-is if such a conversion is not possible.
            `;
        }

        const webTect = () => {
            title[0].innerText = "Web Development";
            img[0].src = "./images/webtech.png";
            paragraph[0].innerText = `
            Web development is the work involved in developing a Web site for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.
            `;
        }