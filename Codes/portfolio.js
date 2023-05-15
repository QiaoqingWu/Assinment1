// Create an array for courses
const courseList = [
  {
    image:"../images/course/cst8116.jpg", 
    level:1,
    title:"CST8116 Introduction to Computer Programming - Level 1", 
    text:"Possessing the fundamentals of logic, problem-solving and programming language structure provides a solid foundation for further study in the field."
  },
  {
    image:"../images/course/cst8101.png",
    level:1, 
    title:"CST8101 Computer Essentials - Level 1", 
    text:"Possessing the fundamentals of logic, problem-solving and programming language structure provides a solid foundation for further study in the field."
  },
  {
    image:"../images/course/cst8215.jpg", 
    level:1,
    title:"CST8215 Introduction to Database - Level 1", 
    text:"Students learn the fundamentals of relational databases design using Entity Relation Diagrams (ERDs), and use Structured Query Language (SQL) to create, modify and query a database."
  },
  {
    image:"../images/course/cst8284.png", 
    level:2,
    title:"CST8284 Object Oriented Programming (Java) - Level 2", 
    text:"Working in the field of information technology as a programmer requires a firm understanding of Object-Oriented Programming (OOP) concepts."
  },
  {
    image:"../images/course/cst8285.png", 
    level:2,
    title:"CST8285 Web Programming - Level 2", 
    text:"The World Wide Web (WWW) has become an integrated part of everyday life. Students develop basic skills of web programming, website design and implementation."
  },
  {
    image:"../images/course/cst8102.jpg", 
    level:2,
    title:"CST8102 Operating System Fundamentals (GNU/Linux) - Level 2", 
    text:"Students examine the details of operating system structures, process management, storage management, installation, configuration, and administration both in theory and through practical assignments based on the GNU/Linux operating system."
  },
  {
    image:"../images/course/cst2355.png", 
    level:2,
    title:"CST2355 Database Systems - Level 2", 
    text:"Students acquire practical experience using market-leading object-relational database management systems like Oracle and MySQL. Students obtain hands-on experience with advanced engineering modeling tools along with SQL, SQL scripts and programming with Oracle's PL/SQL blocks."
  },
  {
    image:"../images/course/2234.jpg", 
    level:3,
    title:"CST2234 Systems Analysis and Design - Level 3", 
    text:"Guided by industry standard software engineering methodologies, students gain hands-on experience with case studies used to develop systems from inception through elaboration, construction and transition phases."
  },
  {
    image:"../images/course/2335.png", 
    level:3,
    title:"CST2335 Mobile Graphical Interface Programming - Level 3", 
    text:"Students explore graphical user interface programming in a mobile Android environment. Students learn how to program applications using the latest Android development tools."
  },
  {
    image:"../images/course/8109.png", 
    level:3,
    title:"CST8109 Network Programming - Level 3", 
    text:"Students explore topics including the basic structure, design and layered communications models, with an emphasis on data communications, TCP/IP protocol suite, socket programming and multi-threading concepts."
  },
  {
    image:"../images/course/8288.png", 
    level:3,
    title:"CST8288 Object Oriented Programming with Design Patterns - Level 3", 
    text:"Students implement best practices of object-oriented program development with software design patterns. Students also apply Unified Modeling Language (UML) program specifications in the Java programming language. SQL through JDBC technology is used embedded for developing and using \"data access objects\"."
  },
  {
    image:"../images/course/8283.png", 
    level:3,
    title:"CST8283 Business Programming (Elective Course) - Level 3", 
    text:"Information systems built using the COBOL programming language support important institutions such as government services and the banking sectors. Students create COBOL programs in a business environment using structured methodology in the latest visual programming environment."
  },
  {
    image:"../images/course/8276.png", 
    level:4,
    title:"CST8276 Advanced Database Topics - Level 4", 
    text:"Teams and individuals explore advanced database topics including database administration (using Oracle), data governance, globalization, security and advances in database technology. Topic coverage includes business intelligence, data warehouses, data visualization, big data, NoSQL and graph databases."
  },
  {
    image:"../images/course/8277.png", 
    level:4,
    title:"CST8277 Enterprise Application Programming - Level 4", 
    text:"Students examine the commonly used enterprise systems development technologies such as Java/Jakarta Enterprise Edition, cloud computing, security and the corporate database repository."
  },
  {
    image:"../images/course/8333.png", 
    level:4,
    title:"CST8101 CompCST8333 Programming Language Research Project - Level 4", 
    text:"Students explore this process of self-study by applying project planning, applied research, testing, and implementation of basic and advanced concepts appropriate to the language or framework under study."
  },
  {
    image:"../images/course/8334.png", 
    level:4,
    title:"CST8334 Software Development Project - Level 4", 
    text:"Industry recognizes the value of graduates possessing real-world software development experience. Following the agile software engineering methodology, teams work with clients to analyze business needs, determine computer system requirements, model system designs, build prototypes, test code and deliver final products."
  }
]

/**
  Student Name: Qiaoqing Wu
  Due Date: 2023-03-12
  Section: CST8285 Lab section 313
  Description: JavaScript files for all the html files 
 */ 
window.onscroll = function() {
  scrollFunction();
}

window.onload = function() {
  onloadFunction();
}

// when scroll, the back to top button will appear
function scrollFunction() {
  let topButton = document.getElementById('topBtn');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// functions for window.onload()
function onloadFunction() {
  
  let toTop = document.getElementById('topBtn');
  toTop.addEventListener("click", topFunction);

  let searchBtn = document.getElementById('searchBtn');
  searchBtn.addEventListener("click", doSearch);

  let selectBtn = document.getElementById('drop-down-btn');
  selectBtn.addEventListener("click", showList);

  createCourseList(courseList);
}

// create a block for a course, with multiple child elements in it
function createCourseElement(courseObj) {
  const div = document.createElement('div');
  div.className = "course-gallery";
  
  const img = document.createElement('img');
  img.src = courseObj.image;
  img.alt = "course";
  img.className = "course";

  const descDiv = document.createElement('div');
  descDiv.className = "course-desc";

  const h4 = document.createElement('h4');
  h4.innerHTML = courseObj.title;

  const text = document.createElement('p');
  text.className = "text";
  text.id = "desc-text";
  text.innerHTML = courseObj.text;

  descDiv.appendChild(h4);
  descDiv.appendChild(text);

  div.appendChild(img);
  div.appendChild(descDiv);
  
  return div;
}

// create a course list
function createCourseList(courseList) {
  const container = document.getElementById('course-container');
  for(let i = 0; i < courseList.length; i++) {
    container.appendChild(createCourseElement(courseList[i]));
  }
}

// back to top function for the button
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// search specific course by entering keyword
function doSearch(){
  let courses = document.querySelectorAll('.course-gallery');
  let searchText = document.getElementById('searchbox').value;

  // let t = courses[0].textContent;
  // console.log(t);

  for(var i = 0; i < courses.length; i++) {
    if(courses[i].textContent.toLowerCase().
    includes(searchText.toLowerCase())){
      courses[i].classList.remove("is-hidden")
    } else {
      courses[i].classList.add("is-hidden");
    }
  }

  if(searchText !== "") {
    document.getElementById('l3').style.display = "none";
    document.getElementById('l4').style.display = "none";
  } else {
    document.getElementById('l3').style.display = "block";
    document.getElementById('l4').style.display = "block";
  }
}

// filter courses by level numbers
function filterSelection(f) {
  let newArray = courseList.filter(object => {
    return object.level == f;
  });

  refreshPage();
  createCourseList(newArray);

  document.getElementById('l3').style.display = "none";
  document.getElementById('l4').style.display = "none";
}

// for displaying the new courses list on the page when using filter or sort
function refreshPage() {
  let oldContainer = document.getElementById('course-container');
  oldContainer.remove();

  let newContainer = document.createElement('div');
  newContainer.id = "course-container";
  document.getElementById('l1').appendChild(newContainer);
}

// display all courses from level 1 to level 4
function displayAllAsc() {
  refreshPage();
  createCourseList(courseList);
  document.getElementById('l3').style.display = "block";
  document.getElementById('l4').style.display = "block";
}

// display all courses from level 4 to level 1
function displayAllDesc() {
  refreshPage();
  courseList.reverse();
  createCourseList(courseList);
  document.getElementById('l3').style.display = "block";
  document.getElementById('l4').style.display = "block";

  courseList.reverse();
}

// to display thee drop down list
function showList() {
  document.getElementById('drop-down-list').style.display = "block";
}

// if click anywhere else then hide the drop down list
window.onclick = function(e) {
  if(!e.target.matches('#drop-down-btn')) {
    document.getElementById('drop-down-list').style.display = "none";
  }
}



