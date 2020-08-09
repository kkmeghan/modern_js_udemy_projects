const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
  LoadEventListeners();

function LoadEventListeners() {

  // DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks);
  form.addEventListener('submit', addTask);
  // remove by adding event to the ui and delegate to remove li
  taskList.addEventListener('click',removeTask);
  clearBtn.addEventListener('click',clearTasks);
  filter.addEventListener('keyup',filterTasks);
}

// Get Tasks from LS
function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  });
}
function addTask(e) {

   
  if(taskInput.value === '') {
    alert('Add a task');
  }

  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));
  const link = document.createElement('a');
  link.className='delete-item secondary-content';
  link.innerHTML='<i class="fa fa-remove"></i>';
  li.appendChild(link);
    // Append li to ul
  taskList.appendChild(li);

  // Store in LS
  storeTaskInLocalStorage(taskInput.value);
  taskInput.value = ''
  e.preventDefault();
}

function storeTaskInLocalStorage(task){

  let tasks;

  if(localStorage.getItem('tasks')===null){
    tasks=[];
  }
  else
  {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks',JSON.stringify(tasks));

}

function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure ?')){
      e.target.parentElement.parentElement.remove();

      // Remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks(e){
 
  // https://jsperf.com/innerhtml-vs-removechild/47

  //taskList.innerHTML = '';
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Clear from LS
  clearTasksFromLocalStorage();

}
// Clear Tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

function filterTasks(e){

  // returns nodes list
  const tasks=document.querySelectorAll('.collection-item');  

   const text = String(e.target.value).toLowerCase();

  
   tasks.forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1)
    {
      task.style.display= 'block';
    }else
    {
      task.style.display= 'none';
    }

  });
  
}