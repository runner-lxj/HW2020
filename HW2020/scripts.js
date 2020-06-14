function renderEditor{
    let inputEl = document.querySelector("#default-todo-panel .todo-editor > input");
    //inputEl.onchange = (e) => {
    //    console.log("text, ", e.target.value);
    //    //console.log("input change: ", e);
    // };
    let addEl = document.querySelector("#default-todo-panel .todo-editor > button");
    addEl.onclick = (e) => {
        console.log("add click");
    };
    
    }
    
    
    
    renderEdito();