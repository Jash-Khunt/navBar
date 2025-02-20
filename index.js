const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".arrow"),
      searchBtn = body.querySelector(".search"),
      modeSwitch = body.querySelector(".toogle"),
      mode = body.querySelector(".mode-text");

      toggle.addEventListener("click",()=>{
        sidebar.classList.toggle("close");
      })
      modeSwitch.addEventListener("click",() =>{
        body.classList.toggle("dark");
        body.querySelector(".mode-text").textContent("Light Mode");
      })

      
