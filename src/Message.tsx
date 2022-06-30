import React from "react";
import  { useEffect, useRef } from "react";
type SubItemProps={
  messages: any;
}
 const Messages=({ messages }:SubItemProps)=> {
  const el = useRef<any>(null);
  useEffect(() => {
    el.current.scrollIntoView({ block: "end", behavior: "smooth" });
  });
  return (
    <div className="messages">
      {messages}
      <div id={"el"} ref={el} />
    </div>
  );
}
export default Messages;