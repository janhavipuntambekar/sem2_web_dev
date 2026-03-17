import React from "react";

const Lists = () => {
  const arr = ["strawberry", "cherry", "blueberry", "watermelon", "kiwi"];

  return (
    <>
      <ul>
        {arr.map((item, index) => {
          //logic of code
          const handleClick = () => {
            alert(item+" was clicked");
          };

          return (
            <li key={`${item}-${index}`}>
              <span>{item}</span>
              <button onClick={handleClick}>Click</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Lists;
