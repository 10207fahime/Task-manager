import { useState } from "react";
export function Header() {
  const [title, setTitle] = useState();
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
