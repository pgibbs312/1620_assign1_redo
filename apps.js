
const darkButton = document.querySelector(".dark_mode");
const new_note_button = document.querySelector(".new_note");
const note_div = document.querySelector(".note");
const cancle_button = document.querySelector(".cancle");
const save_button = document.querySelector(".save");
const text_box = document.querySelector("main-text");
const note_list = document.querySelector(".note_list");

let dm = false;
let note_array = [{title:"note one", body:"text filler"},
                  {title:"note two", body:"text filler"}];

function title_check(new_title) {
    for (let i of note_array) {
        if (i.title == new_title) {
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
    const note_unordered = document.querySelector(".note_list");
    note_unordered.appendChild(new_list)
}

function show_note(note_title) {
    console.log("Note ran");
    for (i of note_array) {
        if(i.title == note_title) {
            textarea.value = `${i.title}\n`;
            textarea.value += i.body;
        } else {

        }
    }
}

cancle_button.addEventListener("click", () => {
    note_div.classList.add("hide_note");
    removeError()
})

new_note_button.addEventListener("click", () => {
    if(note_div.classList.contains("hide_note")) {
        note_div.classList.remove("hide_note");
    } else {
        textarea.value = '';
    }
    removeError()
})

note_list.addEventListener("click", e => {
    const title = (e.target.innerHTML).toLowerCase();
    show_note(title);
    if (note_div.classList.contains("hide_note")) {
        note_div.classList.remove("hide_note");
    }
})

save_button.addEventListener("click", () => {
    if(text_box.value !== '') {
        let lines = text_box.value.split("\n");
        if (title_check(lines[0].toLowerCase()) == true) {
            addError()
            return null;
        }
        removeError()

        let note = {}
        create_note_button(lines[0]);
        i.title = lines[0].toLowerCase();
        i.body = '';
        for (let inex = 1; index < lines.length; index++) {
            i.body += `${lines[index]}\n`;
        }
        note_array.push(i);
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