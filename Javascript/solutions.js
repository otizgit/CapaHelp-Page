const secthamburger = document.querySelector(".solution-ham");
const solutionsCreate = document.querySelector(".solutions-create");
const sectX = document.querySelector('.sect-x')

secthamburger.addEventListener('click', function(){
  solutionsCreate.classList.add("display-links");
})

sectX.addEventListener('click', function(){
  solutionsCreate.classList.remove("display-links");
})