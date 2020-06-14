
let tasks = []; //{title:"dddddd",done:flase}




function renderEditor() {
    let inputEl = document.querySelector("#default-todo-panel .todo-editor > input");
    //inputEl.onchange = (e) => {
    //    console.log("text, ", e.target.value);
    //    //console.log("input change: ", e);
    // };
    let addEl = document.querySelector("#default-todo-panel .todo-editor > button");
    addEl.onclick = (e) => {
        console.log("add click");
        let newTask = {
            title: inputEl.value,
            done: false,
        };
        tasks.push(newTask);
        

        console.log("tasks: ",tasks);

        renderTaskItems();
    };
    
    }
    
    function renderTaskItems(){
        let itemsEl = document.querySelector("#default-todo-panel .todo-items");

        for (let i = 0; i < tasks.length; i++ ){
            let task = tasks[i];
            let itemEl = document.createElement("div");
            


            let doneEl = document.createElement("input");
            doneEl.type = "checkbox";
            itemEl.append(doneEl);

            let titleEl = document.createElement("label");
            titleEl.innerText = task.title;
            itemEl.append(titleEl);
            let cancelEl = document.createElement("button");
            cancelEl.innerText = "X";
            itemEl.append(cancelEl);

            itemsEl.append(itemEl);
        }
    }
    
    
    renderEditor();