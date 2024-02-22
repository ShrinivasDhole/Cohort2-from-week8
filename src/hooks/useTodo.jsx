import axios from "axios";
import { useEffect, useState } from "react";

export function useTodo(n) {
  const [todos, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodo(res.data.todos);
        setLoading(false);
      });
    }, n * 1000);

    return () => {
      clearInterval(value);
    };
  }, [n]);

  return { todos, loading };
}
