"use client";

import { useState } from "react";

function Counter({
  users,
}: {
  users: { id: number; name: string; email: string }[];
}) {
  const [count, setCount] = useState(0);
  console.log("Users:", users);
  return (
    <div>
      <p>Users are {users.length}</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
}

export default Counter;
