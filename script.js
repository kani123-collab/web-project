function addSubject() {

    let subject = document.getElementById("subject").value;

    if (subject == "") {
        alert("Enter a subject");
        return;
    }

    let li = document.createElement("li");

    li.textContent = subject;

    document.getElementById("subjectList")
        .appendChild(li);

    document.getElementById("subject").value = "";
}
let subjects = []; function addSubject() { const input = document.getElementById("subjectInput"); const subjectName = input.value.trim(); if (subjectName === "") { alert("Please enter subject name"); return; } subjects.push(subjectName); input.value = ""; console.log("Subject added:", subjectName); }