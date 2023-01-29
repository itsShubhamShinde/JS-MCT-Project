console.log("hello js");
var input1 = document.getElementById("input")
var result = document.getElementById("answerDiv")


// console.log(data);

async function finder() {
    const input = input1.value
    result.innerHTML = ""

    const res = await fetch(`https://app.zenserp.com/api/v2/search?apikey=63fe7110-9f9b-11ed-bcf1-911b159b78d7&q=${input}&tbm=isch`)

   
    console.log(res);
    const data = await res.json()
    console.log(data);
    const array = data.image_results;
    console.log(array);
    array.map((ele)=>{
        var boxDiv = document.createElement("div")
        boxDiv.innerHTML = `<img src="${ele.sourceUrl}" alt="">`
        boxDiv.setAttribute("class","boxDiv")
        // boxDiv.style.height = "40%";
        // boxDiv.style.width = "45%"
        // boxDiv.style.margin = "20px";
        // boxDiv.style.border = "2px solid red";
        result.appendChild(boxDiv);
    })
   
}