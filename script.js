function login(){
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if(pass === "ithub"){
    enter("student");
  }
  else if(pass === "ithubtheacher"){
    enter("teacher");
  }
  else{
    error.textContent = "❌ Невірний пароль";
  }
}

function enter(role){
  document.getElementById("login").style.display = "none";
  document.getElementById("site").style.display = "block";

  if(role === "teacher"){
    document.getElementById("roleBadge").innerHTML =
      '<span class="badge">Викладач</span>';
    document.getElementById("admin").style.display = "block";
  }
}

function hint(){
  alert("Є пароль для учнів і окремий для викладача 😉");
}

function openLesson(type){
  const title = document.getElementById("lessonTitle");
  const text = document.getElementById("lessonText");
  const lesson = document.getElementById("lesson");

  const lessons = {
    start: {
      t:"🟢 Start",
      d:"Основи IT, файли, HTML, CSS, як працюють сайти."
    },
    frontend: {
      t:"🌐 Frontend",
      d:"Інтерфейс, верстка, JavaScript та практика."
    },
    backend: {
      t:"🧠 Backend",
      d:"Сервери, API, логіка та дані."
    },
    tools: {
      t:"⚙️ Інструменти",
      d:"Git, GitHub, командний рядок."
    }
  };

  title.innerText = lessons[type].t;
  text.innerText = lessons[type].d;
  lesson.style.display = "block";
  lesson.scrollIntoView({behavior:"smooth"});
}

function closeLesson(){
  document.getElementById("lesson").style.display = "none";
}
