const btn = document.getElementById("toggleBtn");
const icon = document.getElementById("icon");

/* Load saved theme */
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    icon.textContent = "☀";
}

/* Toggle theme */
btn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        icon.textContent = "☀";
    }else{
        localStorage.setItem("theme","light");
        icon.textContent = "🌙";
    }
});
