const linksData = {
  general: {
    
  },

  courses: {
  
    "Technical Clubs": {
      "Coding Club": "https://www.cse.iitd.ac.in/%7Erjaiswal/Teaching/2025/ACOL106/slides.html",
      "Fintech Club": "https://www.cse.iitd.ac.in/%7Erjaiswal/Teaching/2025/ACOL106/homework.html",
      "Sustainablity Club": " https://www.cse.iitd.ac.in/%7Erjaiswal/Teaching/2025/ACOL106/quiz.html",
 
    },
    "Cultural Clubs": {
      "Music Club": "https://www.gradescope.com/courses/1086727",
      "Fine Arts Club": "https://piazza.com/class/megt7ecep5i4wy",
      "Digital Arts and Design": "https://www.cse.iitd.ac.in/%7Erjaiswal/Teaching/2025/ACOL106/",
      "Quizzing Club": "https://www.cse.iitd.ac.in/%7Erjaiswal/Teaching/2025/ACOL106/",

      


  },
  "Sports Club": { 
    "Football Club": "https://www.cse.iitd.ac.in/%7Erjaiswal/Teaching/2025/ACOL106/slides.html",
   }

}
}



function renderLinks1(thing, data) {
  const container = document.querySelector(thing);

  for (const [course, resources] of Object.entries(data)) {
    const box = document.createElement("div");
    box.className = "box";

    const title = document.createElement("h1");
    title.textContent = course;
    box.appendChild(title);

    for (const [name, url] of Object.entries(resources)) {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.textContent = name;
      box.appendChild(link);
    }

    container.appendChild(box);
  }
}
// For general links in .box2
function renderGeneralLinks(selector, data) {
  const container = document.querySelector(selector);
  if (!container) return;

  for (const [name, url] of Object.entries(data)) {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.textContent = name;
    container.appendChild(link);
  }
}

function renderUpdates(selector, updates) {
  const container = document.querySelector(selector);
  if (!container) return;

  const now = new Date();

  updates.forEach(update => {
    const expiryDateTime = new Date(update.expiry);
    if (now <= expiryDateTime) {
      const p = document.createElement("p");
      p.textContent = update.text;
      container.appendChild(p);
    }
  });
}
const toggleBtn = document.getElementById("theme-toggle");

// Initialize theme from system preference
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
}

toggleBtn.addEventListener("click", () => {
  const theme = document.documentElement.getAttribute("data-theme");
  const newTheme = theme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);


});

// Set initial icon



window.addEventListener("DOMContentLoaded", () => {

  renderLinks1(".links", linksData.courses);  // course links

});


