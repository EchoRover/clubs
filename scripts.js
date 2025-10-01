const linksData = {
  general: {
    
  },

  courses: {
  
    "Technical Clubs": {
      "Coding Club": "https://teams.microsoft.com/l/team/19%3AUhZiySpquxjqhkPYCDtt1q356HO155MtCsx2Phzud4c1%40thread.tacv2/conversations?groupId=03b27118-9026-42a8-b76b-1197494bb51b&tenantId=e45d3d7e-6bc9-44e7-bf38-81207f0fbd4b",
      "Fintech Club": "https://teams.microsoft.com/l/channel/19%3Ago36lQDxBNB0DqHLqZywgEDApKrkq6arHcR7PEe50yU1%40thread.tacv2/General?groupId=eba8177a-9610-4c30-bd5d-680e5dbef3fc&tenantId=e45d3d7e-6bc9-44e7-bf38-81207f0fbd4b",
      "Sustainablity Club": "https://teams.microsoft.com/l/channel/19%3AgFg6uF4gliPMU4tuodHdnJtvZlnP0WI4ebR98GHT8pA1%40thread.tacv2/General?groupId=dbb90749-c50d-4362-b6d3-d770cf8dcc0c&tenantId=e45d3d7e-6bc9-44e7-bf38-81207f0fbd4b",
 
    },
    "Cultural Clubs": {
      "Music Club": "https://media.licdn.com/dms/image/v2/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1581099611064?e=1761177600&v=beta&t=7hMw9_W0flONIBUwsc_H29TRe6QykU2h6zaf1rOHEzQ",
      "Fine Arts Club": "https://teams.microsoft.com/l/channel/19%3ArYWGLsBzJzJDmVW1jrdg9JPSXBoX7L-bCIW7Za4Rk2c1%40thread.tacv2/General?groupId=5583ec23-ec49-44e2-99d7-7d0f563beac5&tenantId=e45d3d7e-6bc9-44e7-bf38-81207f0fbd4b",
      "Digital Arts and Design": "https://media.licdn.com/dms/image/v2/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1581099611064?e=1761177600&v=beta&t=7hMw9_W0flONIBUwsc_H29TRe6QykU2h6zaf1rOHEzQ",
      "Quizzing Club": "https://teams.microsoft.com/l/team/19%3AfruLHScyilWnLIc9zDBPaon8GniSobjPpLlpuaCXebo1%40thread.tacv2/conversations?groupId=62b9ee12-6367-4674-9c32-ff9c50a21929&tenantId=e45d3d7e-6bc9-44e7-bf38-81207f0fbd4b",

      


  },
  "Sports Club": { 
    "Football Club": "https://teams.microsoft.com/l/channel/19%3A5XI9bSMdSJjFrUSMl0jE6H3OC9OuH-UUQgmZ2NSjNzw1%40thread.tacv2/General?groupId=673697ab-9f1e-4d60-a888-0869e7db8cbc&tenantId=e45d3d7e-6bc9-44e7-bf38-81207f0fbd4b",
    "Cricket Club": "https://teams.microsoft.com/l/team/19%3AkXDIfEWlEOOhzhFOq0eGuB6ljD1hGPN5bBjHI-tYP_U1%40thread.tacv2/conversations?groupId=5d6cd059-388b-4613-b7e7-5b2d48845a05&tenantId=e45d3d7e-6bc9-44e7-bf38-81207f0fbd4b",
      "Badminton Club": "https://media.licdn.com/dms/image/v2/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1581099611064?e=1761177600&v=beta&t=7hMw9_W0flONIBUwsc_H29TRe6QykU2h6zaf1rOHEzQ",


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


