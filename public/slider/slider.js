let slider = "";
async function Slider() {
  let data = await fetch("https://raw.githubusercontent.com/Mohammad02120/json-server/main/db.json/slider");
  let res = await data.json();
  slider = res.map((elem) => { 
  return `
  <div class="swiper-slide w">
  <img src="${elem.pic}" clss="w-100 h-100 block" />
</div> 
  `

  });
  document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("div.swiper-slide").classList.add("active")

  })
  document.querySelector(".swiper-wrapper").innerHTML += slider.join("");

}
export default Slider;


