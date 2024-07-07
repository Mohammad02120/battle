let logo = "";
async function Logo() {
  let data = await fetch("https://raw.githubusercontent.com/Mohammad02120/dbJson/main/db.json/logo");
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
