let recomen = "";
async function Recomen() {
  let data = await fetch("https://raw.githubusercontent.com/Mohammad02120/dbJson/main/db.json/card-2");
  let res = await data.json();
  recomen = res.map((elem) => {
    return `
   
    <div class=" col-md-1 card mt-3 p-0 mx-4 ultradark">
    <img src="${elem.pic}" class="card-img-top" style="width:100%; height:150px; " alt="1">

    <div class="card-body text-white" >
    <h4 class="card-title d-flex  align-items-center gap-3  " >
    <img  src="${elem.logo}" class="card-img rounded-0  d-md-none d-lg-inline-block" alt="1"  >
    ${elem.header}
    </h4>
    <p class="card-text " >
    ${elem.text}
    </p>
    <p class="card-text font-size " >
    ${elem.minitext}
    </p>    
    <a class="card-text text-white" >${elem.price}</a>
    </div>



    </div>
    
    
    
    
    
    
    

  `
  });
  document.querySelector("#recomended").innerHTML += recomen.join("");
}
export default Recomen;
