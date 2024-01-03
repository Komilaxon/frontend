import React, { useEffect, useRef } from "react";

import {
  CurrentUserFileMessageCard,
  CurrentUserMessageCard,
  CurrentUserPhotoMessageCard,
  UserFileMessageCard,
  UserMessageCard,
  UserPhotoMessageCard,
} from "./MessageCards";

const message_types = {
  image: "image",
  file: "file",
  text: "text",
};

const ChatBody = ({ messagesArray }) => {
  const messageDiv = useRef(null);
  useEffect(() => {
    if (messageDiv.current) {
      messageDiv.current.scrollTop = messageDiv.current.scrollHeight;
    }
  }, [messagesArray]);
  return (
    <div className="w-full h-full p-2 overflow-y-auto px-10" ref={messageDiv}>
      {messagesArray.map((message) => {
        if (message.user_id === 1) {
          if (message.message_type === message_types.text) {
            return <CurrentUserMessageCard {...message} key={message.id} />;
          } else if (message.message_type === message_types.image) {
            return (
              <CurrentUserPhotoMessageCard {...message} key={message.id} />
            );
          } else if (message.message_type === message_types.file) {
            return <CurrentUserFileMessageCard {...message} key={message.id} />;
          }
        } else {
          if (message.message_type === message_types.text) {
            return <UserMessageCard {...message} key={message.id} />;
          } else if (message.message_type === message_types.image) {
            return <UserPhotoMessageCard {...message} key={message.id} />;
          } else if (message.message_type === message_types.file) {
            return <UserFileMessageCard {...message} key={message.id} />;
          }
        }
      })}
    </div>
  );
};

export default ChatBody;
