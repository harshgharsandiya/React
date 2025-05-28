import { useEffect, useRef, useState } from 'react';
import './App.css'

function App() {

  const [task, setTask] = useState("");
  const[taskList, setTaskList] = useState(() => {
    return JSON.parse(localStorage.getItem("taskList")) || []
  });

  const [editIndex, setEditIndex] = useState(null)
  const [editText, setEditText] = useState("")

  const editIndexRef = useRef(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem("taskList");
    if(savedTasks) {
      setTaskList(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList))
  }, [taskList]);

  useEffect(() => {
    if (editIndexRef.current) {
      editIndexRef.current.focus();
    }
  }, [editIndex])

  const handleAddTask = () => {
    if(task.trim() === "") return;
    setTaskList([...taskList, {text: task, completed: false}]);
    setTask("");
  }

  const toggleComplete = (index) => {
    const newTaskList = [...taskList];
    newTaskList[index].completed = !newTaskList[index].completed;
    setTaskList(newTaskList);
  }

  const deleteTask = (index) => {
    const newTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(newTaskList);
  }

  return (
    <>
      <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
        <div className='bg-white p-3 rounded-xl shadow-md w-full max-w-md'>
          <h1 className='text-2xl font-bold text-center text-blue-600'>
            📝 DailyTask
          </h1>

            <div className='mt-4 flex gap-2'>
              <input 
                type="text"
                placeholder='Enter Your Task'
                className="flex-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key == 'Enter') handleAddTask();
                }}
              />

              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                onClick={handleAddTask}
              >
                Add
              </button>
            </div>

            <ul className='mt-4 space-y-2'>
              {
                taskList.map((t, index) => (
                  <li 
                    key={index} 
                    className={`flex justify-center items-center p-2 rounded-lg ${
                      t.completed ? "bg-green-100 line-through text-gray-500" : "bg-gray-100"
                    }`}>
                    {
                      editIndex === index ? (
                          <input 
                            ref={editIndexRef}
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className='border px-2 py-1 rounded mr-2'
                            onKeyDown={(e) => {
                              if(e.key === "Enter") {
                                const updatedTasks = [...taskList];
                                if(editText !== "")
                                  updatedTasks[index].text = editText;
                                setTaskList(updatedTasks);
                                setEditText("");
                                setEditIndex(null);
                              }
                            }}
                          />
                      ) : (
                        <span>{t.text}</span>
                      )
                    }

                    <div className='space-x-2'>
                      {
                        editIndex === index ? (
                          <button
                            onClick={() => {
                              const updatedTasks = [...taskList];
                              if(editText !== "")
                                  updatedTasks[index].text = editText;
                              setTaskList(updatedTasks);
                              setEditIndex(null);
                              setEditText("");
                            }}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            💾
                          </button>
                        ) : 
                        (
                          <button
                            onClick={() => {
                              setEditIndex(index);
                              setEditText(t.text);
                            }}
                             className="text-yellow-600 hover:text-yellow-800"
                            >
                            ✏️
                          </button>
                        )
                      }

                      <button
                        onClick={() => toggleComplete(index)}
                        className="text-green-600 hover:text-green-800"
                      >
                        ✔️
                      </button>

                      <button
                        onClick={() => deleteTask(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        🗑️
                      </button>
                    </div>
                  </li>
                ))
              }
            </ul>
        </div>
      </div>
    </>
  )
}

export default App
