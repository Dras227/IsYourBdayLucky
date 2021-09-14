//inp-bdate,inp-luckynumber,check

const inpBdate = document.querySelector(".inp-bdate")
const luckyNo = document.querySelector(".inp-luckynumber")
const btnCheck = document.getElementById("check")


btnCheck.addEventListener("click",function areYouLucky() {
    var t = inpBdate.value;
    alert(t[9]);
    //2021-09-10


    if(isNaN(luckyNo)) alert("please enter lucky no")

    
})
