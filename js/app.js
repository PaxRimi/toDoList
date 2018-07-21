/*
    Wzór elementu listy:
        <li>

            <h1>Task 1</h1>
            <button>Delete</button>
            <button>Complete</button>
        </li>
*/


// Pobieram ul

var parentUl = document.getElementById('taskList');

// Pobieram przycisk dodający element

var addTask = document.getElementById('addTaskButton');

// Pobieram input z którego będą pobierane informacje do listy

var taskInput = document.getElementById('taskInput');


// Dodaje funkcję dodawania elementu do listy

addTask.addEventListener('click', function () {
    // pobieram wartość inputa do li
    var text = taskInput.value;

    // Tworzę nowy element li do listy
    var li = document.createElement('li');


    // Tworzę dwa przyciski do elementu li
    // 1 Usuwający
    var buttonDel = document.createElement('button');
    buttonDel.innerText = "Delete";
    // Dodaje funkcję do buttona usuwającego
    buttonDel.addEventListener('click', function () {
        parentUl.removeChild(this.parentElement;);
    });
    // 2 Zatwierdzający zadanie
    var buttonComp = document.createElement('button');
    buttonComp.innerText = "Complete";
    //Dodaje funkcję do buttona complete
    buttonComp.addEventListener('click', function () {
        this.parentElement.classList.add('complete')
    });
    //Dodaję tekst i buttony do li
    li.innerText = text;
    li.appendChild(buttonComp);
    li.appendChild(buttonDel);

});


