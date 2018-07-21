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

//Pobieram przycisk usuwający wypełnione zadania

var removeComplete = document.getElementById('removeFinishedTasksButton');

//Pobieram input określający priorytet zadania

var priorityInput = document.getElementById('priorityInput');


// Pobieram licznik zadań

var counter = document.getElementById('counter');
console.log(counter);

// Dodaje funkcję dodawania elementu do listy

addTask.addEventListener('click', function () {
    // pobieram wartość inputa do li
    var text = taskInput.value;
    var child = Array.from(parentUl.children);

    if (text.length > 5 && text.length < 100) {

        // Tworzę nowy element li do listy
        var li = document.createElement('li');

        //Dodaje priorytet do elementu li
        var priority = priorityInput.value
        priorityInput.value = "";
        li.setAttribute("data-priority", priority);

        // Tworzę dwa przyciski do elementu li
        // 1 Usuwający
        var buttonDel = document.createElement('button');
        buttonDel.innerText = "Delete";
        // Dodaje funkcję do buttona usuwającego
        buttonDel.addEventListener('click', function () {
            parentUl.removeChild(this.parentElement);
            counter.innerText--;
        });

        // 2 Zatwierdzający zadanie
        var buttonComp = document.createElement('button');
        buttonComp.innerText = "Complete";
        //Dodaje funkcję do buttona complete
        buttonComp.addEventListener('click', function () {
            var parentClass = Array.from(this.parentElement.classList);
            console.log(parentClass);
            if (parentClass.indexOf('complete') === -1) {
                this.parentElement.classList.add('complete');
                counter.innerText--;
            } else {
                this.parentElement.classList.remove('complete');
                counter.innerText++;
            }
        });
        //Dodaję tekst i buttony do li
        li.innerText = text;
        li.appendChild(buttonComp);
        li.appendChild(buttonDel);

        // Dodaje stworzony element do listy wedłóg priorytetu
        //1 sprawdzam czy są już jakieś elementy do porównania
        if (child.length > 0) {
            var number = 0;
            // pętla i numer wskazuje mi pozycje nowego elementu
            for (var i = 0; i < child.length; i++) {
                if (Number(li.dataset.priority) > Number(child[i].dataset.priority)) {
                    number++;
                }
            }
            // dodaje element na miejsce wzgledem jego ważności
            if (number > 0) {
                parentUl.insertBefore(li, child[child.length - number])
            // w wypadku gdyby miał najniższy priprytet
            } else {
                parentUl.appendChild(li);
            }
        // sytuacja dla 1 elementu listy     
        } else {
        parentUl.appendChild(li)
        }

        counter.innerText++;
        taskInput.value = "";
    } else {
        taskInput.value = "";
        alert("Błąd");
    }
});

// Dodaje funkcje usuwającą wykonane zadania
removeComplete.addEventListener('click', function () {
    //sprawdzam czy lista ma elementy
   var child = Array.from(parentUl.children);
        if (child.length !== 0) {
            // Jeśli lista ma elemeny sprawdzam czy są już jakieś wykonane, jeśli są usuwam.
            child.forEach(function (element) {
                var classArr = Array.from(element.classList)
                if (classArr.indexOf('complete') !== -1 ) {
                    parentUl.removeChild(element);
                }
            })
        }
});




