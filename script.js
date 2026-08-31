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