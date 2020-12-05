
const darkButton = document.querySelector(".dark_mode");
const new_note_button = document.querySelector(".new_note");
const note_div = document.querySelector(".note");
const cancle_button = document.querySelector(".cancle");
const save_button = document.querySelector(".save");
const text_box = document.querySelector("main-text");
const noteList = document.querySelector(".noteList");

let dm = false;
let note_array = [{title:"Note1", body:"text filler"},
                  {title:"Note2", body:"text filler"}];
                  
function errorAdd() {
    const error = document.querySelector(".note_error");
    error.classList.remove("note_exists");
}

function removeError() {
    const error = document.querySelector(".note_error")
    error.classList.add("note_exists")
}

function title_check(new_title) {
    for (let note of note_array) {
        if (note.title == new_title) {
            return true;
        }
    }
}

function create_note_button(title) {
    const new_list = document.createElement("li");
    const new_button = document.createElement("button");
    new_button.classList.add("button");
    if (dm) {
        new_button.classList.add("dark-button");
    }
    new_button.innerHTML = title;
    new_list.appendChild(new_button);
    const note_unordered = document.querySelector(".noteList");
    note_unordered.appendChild(new_list)
}

function show_note(note_title) {
    console.log("Note ran");
    for (note of note_array) {
        if(note.title == note_title) {
            text_box.value = `${note.title}\n`;
            text_box.value += note.body;
        } else {

        }
    }
}

cancle_button.addEventListener("click", () => {
    note_div.classList.add("hide_notes");
    removeError()
})

new_note_button.addEventListener("click", () => {
    if (note_div.classList.contains("hide_notes")) {
        note_div.classList.remove("hide_notes");
    } else {
        text_box.value = '';
    }
    removeError()
})

noteList.addEventListener("click", e => {
    const title = (e.target.innerHTML).toLowerCase();
    show_note(title);
    if (note_div.classList.contains("hide_notes")) {
        note_div.classList.remove("hide_notes");
    }
})

save_button.addEventListener("click", () => {
    if(text_box.value !== '') {
        let lines = text_box.value.split("\n");
        if (title_check(lines[0].toLowerCase()) === true) {
            errorAdd()
            return null;
        }
        removeError()

        let note = {}
        create_note_button(lines[0]);
        note.title = lines[0].toLowerCase();
        note.body = '';
        for (let index = 1; index < lines.length; index++) {
            note.body += `${lines[index]}\n`;
        }
        note_array.push(note);
    console.log(note_array);
    }
})

darkButton.addEventListener("click", () => {
    const body = document.querySelector(".container");
    const header = document.querySelector(".header");
    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector(".main");
    const txt = document.querySelector("text_box");
    const footer = document.querySelector(".footer");
    const buttons = document.querySelector(".button");

    body.classList.toggle("dark-body");
    header.classList.toggle("dark_header");
    footer.classList.toggle("dark_footer");
    sidebar.classList.toggle("dark_side");
    main.classList.toggle("dark_main");
    txt.classList.toggle("dark_text");

    for(button of buttons) {
        button.classList.toggle("dark-button")
    }

    if (darkButton.innerHTML == "Dark Mode") {
        darkButton.innerHTML = "Light Mode";
    } else {
        darkButton.innerHTML = "Dark Mode";
    }

    if (dm) {
        dm = false;
    } else if (dm === false) {
        dm = true;
    }
    console.log(" dark button clicked");

})