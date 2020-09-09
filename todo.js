const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos'; //LS는 local storage를 말함

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDos(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.lenth + 1;
    delBtn.innerText="X";
    span.innerText=text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDos(currentValue);
    toDoInput.value=""; //새로고침되는거랑 비슷하게 작용. 사용자가 쓴 값을 다시 지워주는것
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {

    }
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();