const aboutContent = document.getElementById(`about-me`);
const skills = document.getElementById(`mySkills`);
const projectContent = document.getElementById(`myProjects`);
const extraContent = document.getElementById(`myExtracur`);
aboutContent.innerHTML += `
    <h2>About Me</h2>
    <hr class="w-25 mx-auto">
    <p class="mb-4 px-3 px-md-4 px-lg-5">I'm a third-year student at the department of Computer Science at the Royal University of Phnom Penh.<br> <span class="d-none d-md-block">In spite of my lack of practical experiences in this field, I've worked on numerous school projects encompassing programming languages such as HTML, JavaScript, and Java. I have taken part in school club such as Learning Support Unit (LSU) as a mentor.</span></p>`;

myPracticalSkills = ['CSS', 'HTML', 'Java', 'JavaScript', 'Bootstrap', 'TailWind', 'C', 'C++'];
myPracticalSkills.sort();
for (let i of myPracticalSkills) {
    skills.innerHTML += `<button type="button" class="btn btn-lg btn-secondary m-1">${i}</button>`;
}

let projectItems = [{
    id: `001`,
    title: `Movie Theatre Website`,
    src: `/img/theatre.png`,
    alt: `a theatre website`,
    desc: `This was the first project I've done incorporating some basic elements I've learnt in UX/UI class.`,
    url: `https://github.com/longstorycourt/movie-theatre`
},
{
    id: `002`,
    title: `Pet Rescue Website`,
    src: `/img/pet.png`,
    alt: `a pet website`,
    desc: `This project was a teamwork project, focusing on a website in which users can offer their pets up for adoption by their information.`,
    url: `https://github.com/PhearomRatha/Pet`
},

{
    id: `003`,
    title: `A Shopping Website clone`,
    src: `/img/monoria.png`,
    alt: `a shopping website`,
    desc: `Using Bootstrap framework, I tested many classes in order to replicate an actual website, from which I've gained insights into real-world web application.`,
    url: `https://github.com/longstorycourt/monoria-clone`
},
];

for (let project of projectItems) {
    projectContent.innerHTML +=
        `<div class="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
        <div class="card border-1 border-dark">
        <img class="card-img-top" src="${project.src}" alt="${project.alt}">
        <div class="card-body d-flex flex-column justify-content-between">
            <div class="mb-3">
            <h4 class="card-title text-light fw-bold">${project.title}</h5>
            <p class="card-text  fw-light">${project.desc}</p>
            </div>
            <a href="${project.url}" class="btn btn-light fw-bold" style="width: fit-content;">See source code here.</a>
        </div>
        </div>
    </div>`;
}

let extraItems = [{
    id: `001`,
    title: `LSU Workshop`,
    src: `/img/lsuWorkshop.JPG`,
    desc: `As part of the program initiative, my fellow mentor and I hosted a workshop on the topic of Literature Studies. It was my first public speaking, and it was memorable.`,
},
{
    id: `002`,
    title: `UX/UI Program`,
    src: `/img/soc.JPG`,
    desc: `On Sundays, I challenge myself by joining a design program and get to learn a lot from both the instructor and my fellow classmates.`,
},
{
    id: `003`,
    title: `Mind Over Matter`,
    src: `/img/gymDOg.jpg`,
    desc: `To achieve the equilibrium of school and personal life, I spend time building muscles, which it is so refreshing and great for both my physical and mental well-beings.`,
},
{
    id: `004`,
    title: `Yummy`,
    src: `/img/food.JPG`,
    desc: `Food also plays an essential role in my life. Trying food from diverse cultures is my jam.`,
},
{
    id: `005`,
    title: `The countryside`,
    src: `/img/fishing.JPG`,
    desc: `Occasionally I visit my hometown in Kampong Cham, bringing both fresh air and delightful insight.`,
},

];

for (let item of extraItems) {
    extraContent.innerHTML +=
        `<div class="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
        <div class="card border-1 border-dark">
            <img class="card-img-top h-50 object-fit-cover" src="${item.src}" alt="">
            <div class="card-body pb-0 h-25">
                <h4 class="card-title text-light fw-bold">${item.title}</h5>
                <hr>
                <p class="card-text fw-light">${item.desc}</p>            
            </div>
        </div>
    </div>
</div>`;
}

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function submit(){
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    console.log("Email: ", email);
    console.log("Message: ", message);  
    window.alert(`Thank you!`);
}
document.getElementById('submit').onclick = submit;
