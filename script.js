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
  let select = document.querySelector('select'),
      all = document.querySelector("#all"),
      done = select.children[1],
      notDone = document.querySelector("#not-done"),
      allList = document.querySelectorAll('li');
      
     
  ipt.value = "";
  newList.addEventListener("click", () => {
    newList.classList.toggle("done");
  });

  newButtun.addEventListener("click", () => {
    newList.remove();
  });

  select.addEventListener('change',()=>{
      if(select.value =='all'){
          newList.classList.add('display')
          }else if(select.value =='done'){
            if(newList.className !== 'done'){
              newList.style.display = 'none'
            }
          }else if(select.value =='not done'){
            if(newList.className === 'done'){
              newList.style.display = 'none'
            }
          }
      });
      // console.log(select.id);
      
  

  // select.addEventListener('change',()=>{
  //     if(newList.className!=='done'){
  //         newList.style.display = 'none'
  //     }
  // })
  // console.log( select);
})
       
      
    