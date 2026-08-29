const projects = [

    {
        title: "Recruitment 101",
        type: "Recruitment Fair",
        description:
            "An annual event that opens the doors of the organization to members who share the same interests and advocacies.",
        date:
            "September 21–25, 2026 (Online) • September 28–October 2, 2026"
    },

    {
        title: "General Assembly 1",
        type: "General Assembly",
        description:
            "A gathering that welcomes members, presents the organization's plans and initiatives, and promotes engagement within the community.",
        date: "October 2026"
    },

    {
        title:
            "Byte by Byte 3.0: Unlocking Digital Proficiency Literacy",
        type: "Community Development",
        description:
            "A project that promotes digital inclusion by equipping participants with practical competencies for education, work, and everyday life.",
        date:
            "Phase 1: September 2026 • Phase 2: November 16–21, 2026"
    },

    {
        title:
            "₱era-₱araan 4.0: A Seminar on Financial Literacy",
        type: "Seminar",
        description:
            "A seminar featuring industry professionals that explores the applications of mathematics and data science in investing, finance, and financial decision-making.",
        date: "December 4, 2026"
    },

    {
        title:
            "LIMITLESS 10.0: The UST Mathematical Society Leadership Training Seminar",
        type: "Teambuilding",
        description:
            "LIMITLESS, now on its 10th year, is the UST Mathematical Society's annual leadership training seminar. This year's LIMITLESS will be held in collaboration with APSoc and DSASoc.",
        date: "January 2027"
    },

    {
        title: "Face The Math Challenge 2027",
        type: "Competition",
        description:
            "An intercollegiate quiz bee contest which aims to promote critical thinking and mathematical problem-solving.",
        date: "February 2027"
    },

    {
        title: "Mathematical Workshop",
        type: "Workshop",
        description:
            "A skills-based workshop designed to equip students with practical mathematical and analytical tools relevant to academics, internships, and future careers.",
        date: "March 2027"
    },

    {
        title: "Gift to Grow 2.0",
        type: "Community Development",
        description:
            "A year-round service-learning initiative headed by DSASoc that features an extended donation drive followed by a hands-on workshop where participants organize and prepare donated items for distribution to a partner community.",
        date: "April 2027"
    },

    {
        title: "General Assembly 2",
        type: "General Assembly",
        description:
            "General Assembly 2 aims to disseminate proposed amendments to the organization's Articles of Association, including the change in the organization's logo.",
        date: "April 2027"
    },

    {
        title: "Year-End Event",
        type: "Year-End",
        description:
            "An event that provides a meaningful space for its members through reflecting, celebrating, and reconnecting with current and graduating members of the organization.",
        date: "May 2027"
    }

];


const initiatives = [

    {
        title: "Freshie Week Activities",
        type: "Orientation",
        description:
            "Activities designed to welcome and orient incoming students to the MathSoc community.",
        date: "August 2026"
    },

    {
        title: "Actuarial Survival Kit",
        type: "Website",
        description:
            "A student-centered resource designed to help students navigate the Actuarial Science program and their university experience.",
        date: "August 2026"
    },

    {
        title: "Digital Library",
        type: "Academic Resource",
        description:
            "An academic resource initiative designed to make useful learning materials more accessible to students.",
        date: "August 2026"
    },

    {
        title:
            "Voice Network: Five-Layered Grievance System",
        type: "Grievances",
        description:
            "A structured system intended to provide students with channels for communicating concerns and grievances.",
        date: "August 2026"
    },

    {
        title: "ASK MathSoc",
        type: "Tutoring Service",
        description:
            "A tutoring service developed to provide students with additional academic support.",
        date: "September 2026"
    },

    {
        title: "MathSoc CoCreate",
        type: "Project Management",
        description:
            "A collaborative initiative focused on developing ideas and projects within the organization.",
        date: "September 2026"
    },

    {
        title: "Alumni Relations Database",
        type: "Database",
        description:
            "A database initiative designed to strengthen MathSoc's connection with its alumni.",
        date: "October 2026"
    },

    {
        title:
            "Project R&R: Reflection & Recreation",
        type: "TWA Hangout",
        description:
            "A community-building activity focused on reflection, recreation, and strengthening relationships among members.",
        date: "October 2026 & March 2027"
    },

    {
        title:
            "ActuRated & Project Sanctuary",
        type: "Social Media",
        description:
            "A social media initiative designed to provide relevant and engaging content for the MathSoc community.",
        date: "October–December 2026"
    },


    {
        title: "MathSoc Merchandise",
        type: "Merchandise",
        description:
            "Official merchandise designed to strengthen MathSoc identity and community spirit.",
        date: "November 2026–February 2027"
    },


    {
        title:
            "The Constant Digital Campaign",
        type: "Social Media",
        description:
            "A continuous digital campaign throughout the academic year.",
        date: "Throughout AY 2026–2027"
    }

];


function createCard(item) {

    const card = document.createElement("article");

    card.className = "project-card";

    card.innerHTML = `
        <div class="project-type">
            ${item.type}
        </div>

        <h3>
            ${item.title}
        </h3>

        <p>
            ${item.description}
        </p>

        <div class="project-meta">
            ${item.date}
        </div>
    `;

    return card;
}


function renderList(items, elementId) {

    const container =
        document.getElementById(elementId);

    if (!container) {
        return;
    }

    container.innerHTML = "";

    items.forEach(item => {

        container.appendChild(
            createCard(item)
        );

    });

}


function getEventDate(dateText) {

    const months = {
        January: 0,
        February: 1,
        March: 2,
        April: 3,
        May: 4,
        June: 5,
        July: 6,
        August: 7,
        September: 8,
        October: 9,
        November: 10,
        December: 11
    };

    const match = dateText.match(
        /January|February|March|April|May|June|July|August|September|October|November|December/
    );

    if (!match) {
        return null;
    }

    const yearMatch =
        dateText.match(/20\d{2}/);

    const year =
        yearMatch
            ? parseInt(yearMatch[0])
            : new Date().getFullYear();

    return new Date(
        year,
        months[match[0]],
        1
    );
}


function updateFeaturedEvent() {

    const featuredEvent =
        document.getElementById("featuredEvent");

    if (!featuredEvent) {
        return;
    }

    const today = new Date();

    today.setHours(
        0,
        0,
        0,
        0
    );

    const upcomingEvents = projects
        .map(project => {

            return {
                ...project,
                eventDate:
                    getEventDate(project.date)
            };

        })
        .filter(project => {

            if (!project.eventDate) {
                return false;
            }

            const difference =
                project.eventDate.getTime() -
                today.getTime();

            const daysUntil =
                difference /
                (1000 * 60 * 60 * 24);

            return (
                daysUntil >= 0 &&
                daysUntil <= 7
            );

        })
        .sort((a, b) => {

            return (
                a.eventDate -
                b.eventDate
            );

        });


    if (upcomingEvents.length === 0) {

        featuredEvent.style.display =
            "none";

        return;
    }


    const event =
        upcomingEvents[0];


    document.getElementById(
        "featuredTerm"
    ).textContent =
        event.type;


    document.getElementById(
        "featuredTitle"
    ).textContent =
        event.title;


    document.getElementById(
        "featuredDescription"
    ).textContent =
        event.description;


    document.getElementById(
        "featuredDate"
    ).textContent =
        event.date;

}


const menuButton =
    document.getElementById(
        "menuButton"
    );


const navLinks =
    document.getElementById(
        "navLinks"
    );


if (menuButton && navLinks) {

    menuButton.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "active"
            );

        }
    );

}


document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                if (navLinks) {

                    navLinks.classList.remove(
                        "active"
                    );

                }

            }
        );

    });


renderList(
    projects,
    "projectList"
);


renderList(
    initiatives,
    "initiativeList"
);


updateFeaturedEvent();