import React, { FC } from "react";
import TodosContext from "./TodosContext";

const StoreContext: FC = ({ children }) => {
  return <TodosContext>{children}</TodosContext>;
};

export default StoreContext;
