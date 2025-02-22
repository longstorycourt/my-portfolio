
const skills = document.getElementById(`skills`);

mySkills = ['CSS', 'HTML', 'Java', 'JavaScript', 'Bootstrap', 'TailWind', 'C', 'C++'];
// mySkills.sort();
for(let i of mySkills){
    skills.innerHTML+=`<button type="button" class="btn btn-secondary m-1">${i}</button>`;
}