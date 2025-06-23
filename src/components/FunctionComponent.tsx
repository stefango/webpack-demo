import { useState } from 'react';

export function FunctionComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setTimeout(() => {
      console.log(count); // 旧值：闭包捕获
    }, 0);
  };

  return (
    <div>
      FC: {count} <button onClick={handleClick}>click</button>
    </div>
  );
}
