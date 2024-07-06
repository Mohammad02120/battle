let logo = "";
async function Logo() {
  let data = await fetch("https://github.com/Mohammad02120/Mohammad02120.github.io/blob/main/db.json/logo");
  let res = await data.json();
  logo = res.map((elem) => {
  return `
  
  <img src="${elem.logo}" class="img"/>
  </div>
  `

  });
  document.querySelector("#games").innerHTML += logo.join("");
}
export default Logo;
