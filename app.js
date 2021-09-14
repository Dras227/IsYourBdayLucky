//inp-bdate,inp-luckynumber,check

const inpBdate = document.getElementById("inp-bdate")
const luckyNo = document.getElementById("inp-luckynumber")
const btnCheck = document.getElementById("check")
const outDiv = document.getElementById("output")
outDiv.style.display = "none";
btnCheck.addEventListener("click",function areYouLucky() {
    var t = inpBdate.value;
    outDiv.innerHTML = ""
    
    //2021-09-10
    let i = 0;
    var sum = 0;
    for(let i=0;i<t.length;i++)
    {
        if(t[i]==="-") continue;
        console.log(sum+=parseInt(t[i]))
    }

    var msg = ""
    if(!(inpBdate && inpBdate.value))
    {
        msg = "Enter the Your Bday Date"
    }
    else if(!(luckyNo && luckyNo.value))
    {
        msg = "Enter Your Lucky No."
    }
    else if(parseInt(sum) === parseInt(luckyNo.value))
    {
        msg = "Your Lucky"
    }
    else 
    {
        msg = "Your not that lucky....But your damn special"
    }
    showMessage(msg);
})


function showMessage(msg) {
    outDiv.style.display = "block"
    const node = document.createTextNode(msg)

    const para = document.createElement("p")
    para.appendChild(node)
    
    outDiv.appendChild(para)
}

