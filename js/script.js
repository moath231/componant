console.log();
if(window.location.pathname === "/shoppage.html"){
  sidbar();
  rangnumberonfillter();
  navbartaggel();
}
if(window.location.pathname === "/multistepform.html"){
  MULTISTEP();
}
if(window.location.pathname === "/progressstep.html"){
  progressstep();
}




//
//

function sidbar(){
  document.querySelector(".maxplus").classList.add("fa-gear");

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




function navbartaggel(){
  let taggel_menu = document.querySelector(".taggel-menu");
  let overlay = document.querySelector(".overlay");
  let search = document.querySelector(".search");
  overlay.style.display = 'none';


  taggel_menu.addEventListener("click",(e)=>{

    overlay.style.display = 'block';
    search.style.display = 'block';
    overlay.addEventListener("click",()=>{
      overlay.style.display = 'none';
      search.style.display = 'none';
    });
  });
}



function MULTISTEP(){
  let firstNext = document.querySelector(".multistepform .firstNext");
  let prev_1 = document.querySelector(".multistepform .prev-1");
  let next_1 = document.querySelector(".multistepform .next-1");
  let prev_2 = document.querySelector(".multistepform .prev-2");
  let next_2 = document.querySelector(".multistepform .next-2");
  let prev_3 = document.querySelector(".multistepform .prev-3");
  let submit = document.querySelector(".multistepform .submit");

  let form = document.querySelector(".multistepform form");

  let progress_bar = document.querySelectorAll(".progress-bar .step")
  firstNext.addEventListener("click" , (event) => {
    form.style.marginLeft = '-100%';
    progress_bar[0].childNodes[1].classList.add("active");
    progress_bar[0].childNodes[3].classList.add("active");
    progress_bar[0].childNodes[5].classList.add("active");
  });

  prev_1.addEventListener("click" , (event) => {
    form.style.marginLeft = '0%';
    progress_bar[0].childNodes[1].classList.remove("active");
    progress_bar[0].childNodes[3].classList.remove("active");
    progress_bar[0].childNodes[5].classList.remove("active");

  });

  next_1.addEventListener("click" , (event) => {
    form.style.marginLeft = '-200%';
    progress_bar[1].childNodes[1].classList.add("active");
    progress_bar[1].childNodes[3].classList.add("active");
    progress_bar[1].childNodes[5].classList.add("active");
  });

  prev_2.addEventListener("click" , (event) => {
    form.style.marginLeft = '-100%';
    progress_bar[1].childNodes[1].classList.remove("active");
    progress_bar[1].childNodes[3].classList.remove("active");
    progress_bar[1].childNodes[5].classList.remove("active");
  });

  next_2.addEventListener("click" , (event) => {
    form.style.marginLeft = '-300%';
    progress_bar[2].childNodes[1].classList.add("active");
    progress_bar[2].childNodes[3].classList.add("active");
    progress_bar[2].childNodes[5].classList.add("active");
  });

  prev_3.addEventListener("click" , (event) => {
    form.style.marginLeft = '-200%';
    progress_bar[2].childNodes[1].classList.remove("active");
    progress_bar[2].childNodes[3].classList.remove("active");
    progress_bar[2].childNodes[5].classList.remove("active");
  });

  submit.addEventListener("click" , (event) => {
    progress_bar[3].childNodes[1].classList.add("active");
    progress_bar[3].childNodes[3].classList.add("active");
    progress_bar[3].childNodes[5].classList.add("active");
    alert("you are success sginUp ");

    prev_3.style.display = 'none';
    // user-select: none;
  });

}



function progressstep(){
  var prev =document.getElementById("prev");
  var next =document.getElementById("next");
  var progress =document.querySelector(".progress-container .progress");
  var circle =document.querySelectorAll(".progress-container .circle");

  var curent = 1;

  next.addEventListener("click",() => {
    curent++;
    if(curent>circle.length){
      curent=circle.length
    }
    update();
  });

  prev.addEventListener("click",() => {
    curent--;
    if(curent<1){
      curent=1
    }
    update();
  });

  function update(){
    circle.forEach((circ,ex)=>{
      if(ex < curent){
        circ.classList.add("active")
      }else{
        circ.classList.remove("active");
      }
    });

    const actives = document.querySelectorAll(".active");

    // console.log(((actives.length-1) / (circle.length-1))*100);

    progress.style.width = (((actives.length-1) / (circle.length-1))*100)+"%";

    if(curent===1){
      prev.disabled =true;
    }else if(curent === circle.length){
      next.disabled =true;
    }else{
      prev.disabled = false;
      next.disabled = false;
    }

  }
}




