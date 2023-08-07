let userInput = document.getElementById("date");
let result = document.getElementById("result");

function aa(y,m){
    return new Date(y,m,0).getDate();
}

function calculateAge(){
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth()+1;
    let y1 = birthDate.getFullYear();

    let today = new Date();
    
    let d2 = today.getDate();
    let m2 = today.getMonth()+1;
    let y2 = today.getFullYear();

    let d3,m3;
    let y3=y2-y1;

    if(m2>=m1) m3 = m2-m1;
    else{
        y3--;
        m3=12+m2-m1;
    }

    if(d2>=d1) d3=d2-d1;
    else{
        m3--;
        d3=aa(y1,m1)+d2-d1;
    }
    if(m1<0){
        m3 = 11;
        y3--;
    }
    
    result.innerHTML = `You are age is :- <br> <span>${d3}</span> days <br> <span>${m3}</span> months <br> <span>${y3}</span> years`;
}