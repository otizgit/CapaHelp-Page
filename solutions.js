const secthamburger = document.querySelector(".solution-ham");
const solutionsCreate = document.querySelector(".solutions-create");

secthamburger.addEventListener('click', function(){
  solutionsCreate.classList.toggle("display-links");
})