import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todo() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    const startEdit = (todo) => {
      setEditId(todo.id);
      setEditText(todo.text);
    }

    const saveEdit = (id) => {
      if (editText.trim() !== '') {
        dispatch(updateTodo({id, text: editText}))
      }

      setEditId(null);
      setEditText('');
    }

    return (
       <>
      <div className="text-white text-xl">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="bg-gray-700 text-white px-2 py-1 rounded mr-2"
                />
                <button
                  onClick={() => saveEdit(todo.id)}
                  className="text-white bg-green-500 py-1 px-3 rounded"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <div className="text-white">{todo.text}</div>
                <div className="space-x-2">
                  <button
                    onClick={() => startEdit(todo)}
                    className="text-white bg-yellow-500 py-1 px-3 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 py-1 px-3 rounded"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
    )
}

export default Todo
