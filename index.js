//free hosting ftw!
const data = {
    "projects": [
        {
            "date": "March 2024",
            "name": "GitHub Graph Mining - WPI ",
            "description": "Led development of a data collection & distillation tool in communication with machine learning engineers under a larger research project hosted by the computer science department of my university. The ML team requested a tool that interfaced with GitHub's API for data collection to explore the correlation between repository data and a \"Maintainability Index\". This tool was developed with a set list of requirements from the ML engineers and was continually modified as the project continued.",
            "links": [
                ["WPI Publication", "https://digital.wpi.edu/concern/student_works/rn301541t?locale=en"]
            ],
            "skills": [
                "Data Collection", "Data Distillation", "System Design", "Inter-Team communications", "Rest-APIs", "Git", "Python", "Sphinx Documentation",
                "Long-Term-Support", "UX", "Save-States", "Configuration Files", "Verbose Logging", "Argv Handling" 
            ],
            "image": "img/projects/MQP.jpg",
        },
        {
            "date": "March 2023",
            "name": "Business Consulting - Oahu, HI",
            "description": "Within an interdisciplinary team, we performed a business consultation for a local agricultural startup called the Pacific American Foundation supported by NOAA Sea Grant: Hawaii. We researched local consumers, storefronts, and farmers markets. This culminated in a report of our findings and recomendations for the PAF's plan to bring a seaweed food product to their local market. This report was then published to the Digital WPI Library and NOAA Sea Grant of the University of Hawaii.",
            "links": [
                ["Sea Grant & NOAA Publication", "https://seagrant.soest.hawaii.edu/sustainable-aquaculture/aiding-the-reintroduction-of-limu-products-in-kaneohe/"],
                ["WPI Publication", "https://digital.wpi.edu/concern/student_works/8w32r920s?locale=en"]
            ],
            "skills": [
                "Business Development", "Negotiation", "Professional Writing", "Delegation", "Conflict Resolution", "Community Outreach", "Client Development",
                "Business Planning", "Sales Development"
            ],
            "image": "img/projects/PAF_NOAA_SEAGRANT.jpg",
        },
        {
            "date": "February 2025",
            "name": "Perlin Noise Terrain Generator - Personal",
            "description": "A noise map generator that was made in respect of Minecraft originally using JS and then using C# for multithreaded functionality. This was made mainly to add Perlin Noise and other mathematical distributions/functions programatically to my tool belt. It will be used as apart of the game I am building personally under the code name \"Antiquity\"",
            "links": [
            ],
            "skills": [
                "C#", "JS", "Object Oriented Paradigm", "Memory Optimization", "Algorithmic Optimization", "Multithreading", "Mathematical Programming", "UX"
            ],
            "image": "img/projects/perlin.jpg",
        },
        {
            "date": "December 2024",
            "name": "Powershell Scripter - Idleon - Personal",
            "description": "A client made that allows for different script automation for the game Idleon. I have sunk way too many hours into it and I have gained back many hours of my day being able to \"keep up\" with the game by automating away some of the more annoying components of it",
            "links": [
            ],
            "skills": [
                "Powershell", "Win32 API", "Modular Programming", "Scripting", "Black-Box Programming"
            ],
            "image": "img/projects/idleon.png",
        },
        {
            "date": "December 2022",
            "name": "Crowdfunding Website - WPI",
            "description": "This project was for the class CS3733 Software Engineering at WPI. This project was developed by myself and 3 other students collaborating from the initial designing using use cases, UML diagrams, and EBC diagrams to organize the project. This project was hosted by AWS which handled our backend in JS while front end was a ReactJS application. This project allowed for user creation as well as user generated content to be created stored in our database. This class was redesigned to include AWS to train students in a more modern fullstack to provide an application in the modern industry.",
            "links": [
            ],
            "skills": [
                "AWS", "Cloud Computing", "System Design", "Cost Minimizing", "Rest APIs", "AWS IAM", "AWS RDS", "Lambda", "S3 Bucket", "API Gateway"
            ],
            "image": "",
        },
        {
            "date": "August 2022",
            "name": "Stock Asset Visualizer - Personal",
            "description": "Designed entirely with Python. My asset visualizer allows the user to input assets with their ticker, share count, and cost basis to provide a total value based on the asset's up to date value. Individual assets can be further investigated with 1-year graphs visible alongside SMA20 and SMA50 indicators. Lots of other asset metrics are displayed below the graph such as Dividend, PE, PS, and many others.\n\nEnjoy the screencap of me presenting it haha.",
            "links": [
            ],
            "skills": [
                "Python", "UX", "Web-Scraping", "Data Organization", "Data Visualization", "Save-Data"
            ],
            "image": "img/projects/portfolio.png",
        },
        {
            "date": "October 2022",
            "name": "Hospital Database - WPI",
            "description": "Worked within a team of three to simulate the creation of a hospital's database. Starting with the creation of an ERD as well as the schema & table creation. Views, Triggers, and Procedures were created for the database. Finally, we developed a JDBC program to interact with the database programatically using the WPI CS Department's OracleSQL Server.",
            "links": [
            ],
            "skills": [
                "System Design", "Databases", "ODBC", "ERD", "Schema", "Views", "Triggers", "Procedures", "SQL Server"
            ],
            "image": "img/projects/hospital.png",
        },
        {
            "date": "January 2022",
            "name": "Bash Recreation - WPI",
            "description": "Developed an in-line replica of the Unix-based shell Bash in C. Implemented built-in functionality of cd, home, pwd, jobs, kill, history, exit, and echo. Furthermore, linked libraries to implement other Bash commands as well as logical operators such as &&, ||, <<,>>, and &.",
            "links": [
            ],
            "skills": [
                "C", "Bash", "Library Linking", "Multithreading", "Input Validation", "Decision Trees"
            ],
            "image": "",
        },
    ],
    "blog": [
        {
            "date": "3/27/2025",
            "updated": "3/27/2025",
            "name": "Choosing a Tech Stack",
            "type": "Design",
            "description": "Hello Hello! Today, we're discussing the thought process behind the tech stack I landed on after about a month of refactoring and design decisions. Firstly, I'm avoiding using a game engine due to a multitude of factors, most important of which are the control I want over the game as well as avoiding the bloat that comes with game engines. I'll be able to pinpoint flaws/bugs immediately using as minimal outsourced libraries as possible. I initially wanted to do as most 'idle games' go and go with a full JS stack. This was quickly shut down once I started exploring the scale of the game and decided that it would be beneficial for it to be multithreaded. I then moved to a C# only stack using Avalonia as a front-end, but I ran into many blocking issues using a GUI that wasn't dom-centered. To get the best of both worlds, I created lambda functions that act essentially as an API Gateway from AWS, where the application is launched as a .NET application that uses WebView2 to launch the JS application. The applications can communicate to take advantage of the processing capabilities of C# as well as the easy GUI capabilities of JS. It also allows more programmatic error isolation. Client errors are explored through the Chrome debugger, while processing errors are debugged through a C# debugger. The theory I'm implementing puts all static data in the C# backend, while all dynamic data (think user interaction) is handled by a JS client, and they communicate through the function handler I've created as a primitive API. I'm excited to see where this takes me, it feels like the correct tech stack as I have full control over every aspect and have enough experience with both that something magical can happen.",
            "links": [],
            "image": "img/blog/3_27_2025_Tech_Stack.jpg
        },
        {
            "date": "3/16/2025",
            "updated": "3/16/2025",
            "name": "Thoughts, Goals, Concessions",
            "type": "Announcement",
            "description": "Hello to anyone ever reading this! Welcome to the first blog post. I'm going to keep it short and simple. I've felt myself getting more and more preoccupied and having unorganized thoughts between binders & phone calls. This page is going to be 99% personal project development with things I develop or find interesting along the way.\n\n I have no idea how much of this will actually be updated; most of my personal projects end up on paper before anything digital. Currently, a lot of my effort is going into working on a game/game engine in C# that I genuinely can't wait to write about. It's been the first creative thing I've made in a very long time, as well as the first attempt at making something quite large since becoming a much more competent programmer after my capstone. I'm looking towards this with optimism and hope! For now, things are stored in a JSON file because I'm not actually hosting this myself! haha! Someday I may have a database that updates accordingly, who knows!\n\n The future is unknown and that is exciting!",
            "links": [],
            "image": "img/blog/3_16_2025_First_Post.jpg",
        }
    ],
    "life": [
        {
            "date": "Coming Soon :-)",
            "name": "",
            "description": "",
            "links": [],
            "image": ""
        }
    ]
}

function showSection(sectionId) {
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function populateSection(sectionId) {
    let e = document.getElementById(sectionId);
    if(e != null) {
        e.innerHTML = "";
    }
    let modalGallery = document.createElement("div");
    formatModalGallery(modalGallery);
    for(let i = 0; i < data[sectionId].length; i++) {
        let modal = document.createElement("div");
        formatModal(modal, data[sectionId][i]);
        modalGallery.appendChild(modal);
    }
    e.appendChild(modalGallery);
    showSection(sectionId);
}

function formatModalGallery(modalGallery) {
    modalGallery.classList.add("gallery");
}

function formatModal(modal, JSON) {
    modal.classList.add("modal")
    let title = document.createElement("h1");
    title.innerText = JSON["date"] + " | " + JSON["name"]
    let image = document.createElement("img");
    if(JSON["image"] != "") {
        image.src = JSON["image"];
    }
    let description = document.createElement("p");
    description.innerText = JSON["description"];
    let links = document.createElement("div");
    links.classList.add("social-links");
    for(let i = 0; i < JSON["links"].length; i++) {
        let link = document.createElement("a");
        link.href = JSON["links"][i][1];
        link.target = "_blank";
        link.text = JSON["links"][i][0];
        links.appendChild(link);
    }
    let skills = document.createElement("div");
    if(JSON["skills"] != null) {
        skills.classList.add("skills");
        skills.textContent += "Skills: "
        for(let skill = 0; skill < JSON["skills"].length; skill++) {
            skills.textContent += JSON["skills"][skill]
            if(skill != JSON["skills"].length-1) {
                skills.textContent += ", "
            }
        }
    }
    let breakBar = document.createElement("div");
    breakBar.classList.add("pagebreak");
    modal.appendChild(title);
    modal.appendChild(image);
    modal.appendChild(description);
    modal.appendChild(links);
    modal.appendChild(skills);
    modal.appendChild(breakBar);

}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Resume Landing Page Loaded Successfully!");
});
