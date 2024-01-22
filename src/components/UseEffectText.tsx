import React, { useEffect, useState } from "react";

type Props = {};

export default function UseEffectText({}: Props) {
  const [data, setData] = useState("");

  useEffect(() => {
    const bar = async () => {
      const foo = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const response = await foo.json();
      const result = JSON.stringify(response);
      return result;
    };

    bar().then((v) => setData(v));
  }, []);
  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
