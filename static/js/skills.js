var searchInput = document.querySelector("#search-input")

searchInput.addEventListener("keyup", function(e) {
  console.log(e.target.value)
  var search_item = e.target.value.toLowerCase()
  var span_items = document.querySelectorAll(".skills-box .bar-data span")

  

  span_items.forEach(function(item) {
    if (item.textContent.toLowerCase().indexOf(search_item) != -1) {
          item.closest("li").style.display = "block";
    }
    else {
      item.closest("li").style.display = "none";
    } 
  })
}
)



const SKILLS =  [
  "SQL", "FLASK", "SPACY",
  "DOCKER", "PANDAS", "NUMPY",
  "PYMONGO", "TWEEPY", "TWINT",
  "SELENIUM", "REQUESTS", "OPENCV",
  "DOCKER SWARM", "SQLALCHEMY",
  "SKLEARN", "REGEX", "REDIS",
  "PILLOW", "NLTK", "MATPLOTLIB",
  "HCLOUD", "DUCKDUCKGO", "DJANGO",
  "CELERY", "CLOUDINARY"
];

const PERCENT_FILL = [];

for (let i = 0; i < SKILLS.length; i++) {
  PERCENT_FILL.push(Math.floor(Math.random() * (95 - 79 +1 )) + 79);
}

const SKILLS_PERCENT = SKILLS.map((skill, index) => [skill, PERCENT_FILL[index]]);


function displaySkills() {
  const skillsList = document.getElementById("skillsList");
  SKILLS_PERCENT.forEach(([skill, percent]) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
    <div class="col-sm-6">
        <div class="progress-bar animated">
            <div class="bar-data">
                <span class="bar-title">${skill}</span>
            </div>
            <div class="bar-line">
                <span class="bar-fill"  style="width: ${percent}%;" data-width="${percent}%" ></span>
            </div>
        </div>
    </div>
    `;
    skillsList.appendChild(listItem);
  });
}

window.addEventListener("load", displaySkills);