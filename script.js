let button = document.querySelector('button');


button.addEventListener('click', ()=>{
 let ipt = document.querySelector("#ipt"),
    ol = document.querySelector("#ol"),
    iptValue = ipt.value,
    newList = document.createElement("li");
  newList.textContent = iptValue;
  newButtun = document.createElement("button");
  newButtun.textContent = "remove";
  newButtun.classList.add("new");
  ol.appendChild(newList);
  newList.append(newButtun);
  
})
       
      
    