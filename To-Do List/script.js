const inputBox = document.getElementById("input-box"); 
const listCnt = document.getElementById("list-cnt");

const addTask = ()=> {
    if(inputBox.value === ''){
        alert("Write task");
    }

    else{
        let lai = document.createElement("li");
        lai.innerHTML = inputBox.value;
        listCnt.appendChild(lai);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        lai.appendChild(span);
    }
    
    inputBox.value ="";
    saveData();
};



listCnt.addEventListener("click" , function(a){
    if(a.target.tagName === "LI"){
        a.target.classList.toggle("check");
        saveData();
    }

    else if(a.target.tagName === "SPAN"){
        a.target.parentElement.remove();
        saveData();
    }
});



const saveData = () =>{
    localStorage.setItem("data", listCnt.innerHTML);
}

const showData = () => {
     listCnt.innerHTML = localStorage.getItem("data");
}

showData();

