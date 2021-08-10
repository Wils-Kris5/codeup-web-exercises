const btn = document.getElementById("h1-2-p");
btn.addEventListener("click", () => {
    let h1Arr = Array.from(document.querySelectorAll("h1"));
    for(let i = 0; i < h1Arr.length; i++) {
        h1Arr[i].outerHTML = '<p>${h1Arr[i].innerText}</p>'
    }
});
