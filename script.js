const projects = [

```
{
    title: "Recruitment Fair",
    type: "Recruitment",
    description:
        "An annual event that opens the doors of the organization to members who share the same interests and advocacies.",
    date:
        "September 21–25, 2026 (Online)<br>September 28–October 2, 2026",
    eventDate: "2026-09-21"
},

{
    title: "General Assembly 1",
    type: "Gen Assembly",
    description:
        "A gathering that welcomes members, presents the organization's plans and initiatives, and promotes engagement within the community.",
    date: "October 2026",
    eventDate: "2026-10-01"
},

{
    title: "Byte by Byte 3.0: Unlocking Digital Proficiency Literacy",
    type: "Community Development",
    description:
        "A project that promotes digital inclusion by equipping participants with practical competencies for education, work, and everyday life.",
    date:
        "Phase 1: September 2026<br>Phase 2: November 16–21, 2026",
    eventDate: "2026-09-01"
},

{
    title: "₱era-₱araan 4.0: A Seminar on Financial Literacy",
    type: "Seminar",
    description:
        "A seminar featuring industry professionals that explores the applications of mathematics and data science in investing, finance, and financial decision-making.",
    date: "December 4, 2026",
    eventDate: "2026-12-04"
},

{
    title: "LIMITLESS 10.0: The UST Mathematical Society Leadership Training Seminar",
    type: "Teambuilding",
    description:
        "LIMITLESS, now on its 10th year, is the UST Mathematical Society's annual leadership training seminar. This year's Limitless will be held in collaboration with APSoc and DSASoc.",
    date: "January 2027",
    eventDate: "2027-01-01"
},

{
    title: "Face The Math Challenge 2027",
    type: "Competition",
    description:
        "An intercollegiate quiz bee contest which aims to promote critical thinking and mathematical problem-solving.",
    date: "February 2027",
    eventDate: "2027-02-01"
},

{
    title: "Mathematical Workshop",
    type: "Workshop",
    description:
        "A skills-based workshop designed to equip students with practical mathematical and analytical tools relevant to academics, internships, and future careers.",
    date: "March 2027",
    eventDate: "2027-03-01"
},

{
    title: "Gift to Grow 2.0",
    type: "Community Development",
    description:
        "A year-round service-learning initiative headed by DSASoc that features an extended donation drive followed by a hands-on workshop where participants organize and prepare donated items for distribution to a partner community.",
    date: "April 2027",
    eventDate: "2027-04-01"
},

{
    title: "General Assembly 2",
    type: "Gen Assembly",
    description:
        "A gathering that aims to disseminate proposed amendments to the organization's Articles of Association, including the change in the organization's logo.",
    date: "April 2027",
    eventDate: "2027-04-01"
},

{
    title: "Year-End Event",
    type: "Year-End",
    description:
        "An event that provides a meaningful space for members through reflecting, celebrating, and reconnecting with current and graduating members of the organization.",
    date: "May 2027",
    eventDate: "2027-05-01"
}
```

];

const initiatives = [

```
{
    title: "Freshie Week Activities",
    type: "Orientation",
    description:
        "Activities designed to welcome new students and introduce them to the MathSoc community.",
    date: "August 2026"
},

{
    title: "Actuarial Survival Kit",
    type: "Website",
    description:
        "A student-centered website designed to provide useful information, tips, and guidance for Actuarial Science students.",
    date: "August 2026"
},

{
    title: "Digital Library",
    type: "Academic Resource",
    description:
        "A centralized academic resource initiative designed to make useful learning materials easier to access.",
    date: "August 2026"
},

{
    title: "Voice Network: Five-Layered Grievance System",
    type: "Grievances",
    description:
        "A structured system designed to provide students with accessible channels for raising concerns and feedback.",
    date: "August 2026"
},

{
    title: "ASK MathSoc",
    type: "Tutoring Service",
    description:
        "A tutoring service designed to connect students with academic assistance and peer support.",
    date: "September 2026"
},

{
    title: "MathSoc CoCreate",
    type: "Project Management",
    description:
        "An initiative focused on collaborative project development and student participation.",
    date: "September 2026"
},

{
    title: "Alumni Relations Database",
    type: "Database",
    description:
        "A database initiative designed to organize alumni information and strengthen connections with MathSoc graduates.",
    date: "October 2026"
},

{
    title: "Project ReCollect",
    type: "Donation Drive",
    description:
        "A donation initiative focused on collecting useful academic and student resources for redistribution.",
    date: "October 2026"
},

{
    title: "Project R&R: Reflection & Recreation",
    type: "TWA Hangout",
    description:
        "A social initiative providing opportunities for reflection, recreation, and community-building among members.",
    date: "October 2026 & March 2027"
},

{
    title: "ActuRated & Project Sanctuary",
    type: "Social Media",
    description:
        "Social media initiatives designed to provide relevant and engaging content for the MathSoc community.",
    date: "October–December 2026"
},

{
    title: "Postings of DLs and St. Albert",
    type: "Social Media",
    description:
        "Social media postings highlighting academic recognitions and student achievements.",
    date: "January 2027 & June 2027"
},

{
    title: "MathSoc Merchandise",
    type: "Merchandise",
    description:
        "Official MathSoc merchandise created for students and members of the organization.",
    date: "November 2026–February 2027"
},

{
    title: "Alumni Sports Event",
    type: "Socialization",
    description:
        "A community-building event that brings together current members and alumni through sports and recreation.",
    date: "January 2027"
},

{
    title: "The Constant Digital Campaign",
    type: "Social Media",
    description:
        "A continuing digital campaign featuring MathSoc-related content throughout the academic year.",
    date: "Throughout AY 2026–2027"
}
```

];

function createCard(item) {

```
return `

    <article class="project-card">

        <span class="project-type">
            ${item.type}
        </span>

        <h3>
            ${item.title}
        </h3>

        <p>
            ${item.description}
        </p>

        <span class="project-meta">
            ${item.date}
        </span>

    </article>

`;
```

}

function displayProjects() {

```
const projectList =
    document.getElementById("projectList");

if (!projectList) return;

projectList.innerHTML =
    projects.map(createCard).join("");
```

}

function displayInitiatives() {

```
const initiativeList =
    document.getElementById("initiativeList");

if (!initiativeList) return;

initiativeList.innerHTML =
    initiatives.map(createCard).join("");
```

}

function getDateOnly(date) {

```
const result = new Date(date);

result.setHours(0, 0, 0, 0);

return result;
```

}

function showFeaturedEvent() {

```
const title =
    document.getElementById("featuredTitle");

const description =
    document.getElementById("featuredDescription");

const date =
    document.getElementById("featuredDate");

const type =
    document.getElementById("featuredType");

const countdown =
    document.getElementById("featuredCountdown");


if (
    !title ||
    !description ||
    !date ||
    !type ||
    !countdown
) {
    return;
}


const today = new Date();

today.setHours(0, 0, 0, 0);


const oneWeek =
    7 * 24 * 60 * 60 * 1000;


const upcomingEvents = projects

    .map(project => ({

        ...project,

        eventDateObject:
            getDateOnly(project.eventDate)

    }))

    .filter(project => {

        const difference =
            project.eventDateObject.getTime()
            -
            today.getTime();

        return (
            difference >= 0 &&
            difference <= oneWeek
        );

    })

    .sort((a, b) => {

        return (
            a.eventDateObject.getTime()
            -
            b.eventDateObject.getTime()
        );

    });


if (upcomingEvents.length === 0) {

    countdown.textContent =
        "STAY TUNED";

    type.textContent =
        "UPCOMING EVENTS";

    title.textContent =
        "Nothing happening this week.";

    description.textContent =
        "Stay connected with MathSoc for announcements and upcoming activities.";

    date.textContent =
        "AY 2026–2027";

    return;

}


const event =
    upcomingEvents[0];


const daysUntil =
    Math.ceil(
        (
            event.eventDateObject.getTime()
            -
            today.getTime()
        )
        /
        (24 * 60 * 60 * 1000)
    );


if (daysUntil === 0) {

    countdown.textContent =
        "TODAY";

}

else if (daysUntil === 1) {

    countdown.textContent =
        "TOMORROW";

}

else {

    countdown.textContent =
        `${daysUntil} DAYS TO GO`;

}


type.textContent =
    event.type.toUpperCase();


title.textContent =
    event.title;


description.textContent =
    event.description;


date.innerHTML =
    event.date;
```

}

function setupNavigation() {

```
const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


if (!menuButton || !navLinks) {
    return;
}


menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


navLinks
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });
```

}

document.addEventListener(
"DOMContentLoaded",
() => {

```
    displayProjects();

    displayInitiatives();

    showFeaturedEvent();

    setupNavigation();

}
```

);
