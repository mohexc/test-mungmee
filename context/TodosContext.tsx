import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

export interface TodoItem {
  id: string;
  task: string;
  description: string;
  complete: boolean;
}

export interface TodoInterface {
  todos: TodoItem[] | undefined;
  getAll: (task?: string) => Promise<any>;
  getById: (id: string) => Promise<any>;
  createTodo: (task: string, description: string) => Promise<any>;
  updateTodo: (id: string, task: string, description: string) => Promise<any>;
  todoComplete: (id: string, complete: boolean) => Promise<any>;
  deleteTodo: (id: string) => Promise<any>;
}

const Context = React.createContext<TodoInterface>({
  todos: undefined,
  getAll: async (task?: string) => {},
  getById: async (id: string) => {},
  createTodo: async (task: string, description: string) => {},
  updateTodo: async (id: string, task: string, description: string) => {},
  todoComplete: async (id: string, complete: boolean) => {},
  deleteTodo: async (id: string) => {},
});

const TodosContext = ({ children }) => {
  const [todos, setTodos] = useState<TodoItem[] | undefined>();

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async (task?: string) => {
    try {
      if (task) {
        const { data } = await axios.get(`http://localhost:3001/todos/?q=${task}`);
        setTodos(data);
      } else {
        const { data } = await axios.get(`http://localhost:3001/todos`);
        setTodos(data);
      }
    } catch (error) {
      const result = error.response.data;
      return {
        error: true,
        message: result,
      };
    }
  };

  const getById = async (id: string) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/todos/${id}`);
      return data;
    } catch (error) {
      const result = error.response.data;
      return {
        error: true,
        message: result,
      };
    }
  };

  const createTodo = async (task: string, description: string) => {
    try {
      const { data } = await axios.post(`http://localhost:3001/todos`, { task, description });
      getAll();
      return data;
    } catch (error) {
      const result = error.response.data;
      return {
        error: true,
        message: result,
      };
    }
  };

  const updateTodo = async (id: string, task: string, description: string) => {
    try {
      const { data } = await axios.patch(`http://localhost:3001/todos/${id}`, { task, description });
      getAll();
      return data;
    } catch (error) {
      const result = error.response.data;
      return {
        error: true,
        message: result,
      };
    }
  };

  const todoComplete = async (id: string, complete: boolean) => {
    try {
      const { data } = await axios.patch(`http://localhost:3001/todos/${id}`, { complete });
      getAll();
      return data;
    } catch (error) {
      const result = error.response.data;
      return {
        error: true,
        message: result,
      };
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      const { data } = await axios.delete(`http://localhost:3001/todos/${id}`);
      getAll();
      return data;
    } catch (error) {
      const result = error.response.data;
      return {
        error: true,
        message: result,
      };
    }
  };

  return (
    <Context.Provider
      value={{
        todos,
        getAll,
        getById,
        createTodo,
        todoComplete,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useTodosContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("Cannot use useTodoContext outside todo provider");
  }

  return context;
};

export default TodosContext;
