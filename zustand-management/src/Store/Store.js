import { create } from "zustand";

const useTODOStore = create((set) => ({
  todos: [],
  addTODO: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  deleteTODO: (index) =>
    set((state) => {
      console.log(state, index);
      return { todos: state.todos.filter((todo, i) => i !== index) };
    }),
}));

export default useTODOStore;
