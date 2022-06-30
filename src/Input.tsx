import React from "react";
import { useState } from "react";

type SubItemProps={
  onSend: any;
}
 const Input=({ onSend }:SubItemProps)=> {
  const [text, setText] = useState("");

  const handleInputChange = (e:any) => {
    setText(e.target.value);
  };

  const handleSend = (e:any) => {
    e.preventDefault();
    onSend(text);
    setText("");
  };

  return (
    <div className="input">
      <form onSubmit={handleSend}>
        <input
          type="text"
          onChange={handleInputChange}
          value={text}
          placeholder="Enter your message here"
        />
        <button>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 500 500"
          >
            <g>
              <g>
                <polygon points="0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75" />
              </g>
            </g>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Input;