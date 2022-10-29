function sidbar(){
  document.querySelector(".maxplus").classList.add("fa-gear");
{/* <i class="fa-solid fa-gear"></i> */}
  document.querySelector(".fa-gear").addEventListener("click", () => {
    document.querySelector(".fillter").style.left = "0px";
    document.querySelector(".maxplus").classList.remove("fa-gear");
    document.querySelector(".minminus").classList.add("fa-minus");
    document.querySelector(".fa-minus").addEventListener("click", () => {
      document.querySelector(".fillter").style.left = "-200px";
      document.querySelector(".minminus").classList.remove("fa-minus");
      document.querySelector(".maxplus").classList.add("fa-gear");
    });
  });
}
sidbar();


function textsee() {
  let card = document.querySelectorAll(".cards .card");
  let p = document.querySelectorAll(".cards .card p");
  let more = [...document.querySelectorAll(".cards .card p .more")];
  let amore = document.querySelectorAll(".cards .card p #more");
  let aless = document.querySelectorAll(".cards .card p #less");

  [...card].forEach((e, index) => {

    [...aless][index].style.display = "none";
    [...more][index].style.display = "none";

    [...amore][index].addEventListener("click", (e1) => {
      console.log(more[index]);
      e1.target.style.display = "none";
      more[index].style.display ='inline';
      [...aless][index].style.display = "inline";
      [...amore][index].style.display = "none";

      [...aless][index].addEventListener("click", () => {

        [...more][index].style.display = "none";
        [...aless][index].style.display = "none";
        [...amore][index].style.display = "inline";

      });

    });

  });

}
textsee();


function rangnumberonfillter(){

  let valuerange = document.querySelector("#cc");
  // datasetvalue = value;
  valuerange.dataset.value = valuerange.value;
  valuerange.oninput = function() {
    // output.innerHTML = this.value;
    valuerange.dataset.value = valuerange.value;
  }
}
rangnumberonfillter();


function Qufillterspan(){
  let Qfillter = document.querySelectorAll(".Qufillter");
  let span = document.querySelectorAll(".Qufillter span");

  span.forEach((e)=>{
    e.addEventListener("click",removeactive);
  });

  function removeactive(){
    span.forEach((S)=>{
      S.classList.remove('active');
      this.classList.add('active');
    });
  }

}
Qufillterspan();



function query(min,max){
  if(max.matches){
    search.style.display = 'none';
  }
  if(min.matches){
    search.style.display = 'block';
  }
}
function navbartaggel(){
  let taggel_menu = document.querySelector(".taggel-menu");
  let overlay = document.querySelector(".overlay");
  let search = document.querySelector(".search");
  overlay.style.display = 'none';


  let min = window.matchMedia("(min-width: 870px)");
  let max = window.matchMedia("(max-width: 869px)");
  query(min,max);
  min.addListener(query);
  max.addListener(query);


  taggel_menu.addEventListener("click",(e)=>{

    overlay.style.display = 'block';
    search.style.display = 'block';
    overlay.addEventListener("click",()=>{
      overlay.style.display = 'none';
      search.style.display = 'none';
    });
  });
  console.log(window.innerWidth);
}
navbartaggel();
