import { MouseEvent } from "react";

function Message() {
  let items = ["yeruham", "tel aviv", "dimona", "beer sheva", "london"];

  const handleClick = (e: MouseEvent)=> console.log(e)


  return (
    <>
      <h1>title</h1>
      {items.length === 0 && <p>no items</p>}
      <ul>
        {items.map((item,index) => (
          <li key={item} onClick={handleClick}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Message;
