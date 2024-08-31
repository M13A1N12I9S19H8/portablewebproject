 // Smooth Scrolling
 function scrollToSection(sectionId) {
  document.querySelector(`#${sectionId}`).scrollIntoView({
    behavior: 'smooth'
  });
}

// Scroll to Top Button
window.onscroll = function() {
  const scrollTopBtn = document.getElementById('scroll-to-top-btn');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach((note) => {
const noteElement = createNoteElement(note.id, note.content);
notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => addNote());

function getNotes() {
return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

function saveNotes(notes) {
localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteElement(id, content) {
const element = document.createElement("textarea");

element.classList.add("note");
element.value = content;
element.placeholder = "Empty Note";

element.addEventListener("change", () => {
updateNote(id, element.value);
});

element.addEventListener("dblclick", () => {
const doDelete = confirm(
  "Are you sure you wish to delete this note?"
);

if (doDelete) {
  deleteNote(id, element);
}
});

return element;
}

function addNote() {
const notes = getNotes();
const noteObject = {
id: Math.floor(Math.random() * 100000),
content: ""
};

const noteElement = createNoteElement(noteObject.id, noteObject.content);
notesContainer.insertBefore(noteElement, addNoteButton);

notes.push(noteObject);
saveNotes(notes);
}

function updateNote(id, newContent) {
const notes = getNotes();
const targetNote = notes.filter((note) => note.id == id)[0];

targetNote.content = newContent;
saveNotes(notes);
}

function deleteNote(id, element) {
const notes = getNotes().filter((note) => note.id != id);

saveNotes(notes);
notesContainer.removeChild(element);
}
