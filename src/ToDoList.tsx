import { useState } from "react";

interface ToDoListData {
  date: string;
  description: string;
}

export const ToDoList = () => {
  const [desc, setDec] = useState<string[]>([]);
  const [todos, setTodos] = useState<ToDoListData>({ date: "", description: "" });

  const handleChange = (event: any) => {
    setTodos({ ...todos, [event.target.name]: event.target.value });
  };

  const addTodo = (event: any) => {
    setTodos({ ...todos, [event.target.name]: event.target.value });
    console.log(todos);
  };

  return (
    <div>
      <label htmlFor="date"></label>

      <input
        type="text"
        id="date"
        value={todos.date}
        name="date"
        onChange={handleChange}
      />
      <label htmlFor="description"></label>
      <input
        type="text"
        id="description"
        value={todos.description}
        name="description"
        onChange={handleChange}
      />
      <button onClick={addTodo}>Add</button>
      <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {todos.map}

            <td>{todos.date}</td>
            <td>{todos.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

/*
configured from https://dev.to/joelynn/react-hooks-working-with-state-arrays-2n2g
*/
