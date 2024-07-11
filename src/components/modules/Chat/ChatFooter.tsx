"use client";

import { Mic, SendHorizonal } from "lucide-react";
import React from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

function ChatFooter() {
  return (
    <div className="bg-green-100/20 px-4 py-4">
      <div className="flex h-fit items-end gap-4 rounded-lg bg-white px-4 py-4 drop-shadow-2xl">
        <div className="flex h-9 w-9 min-w-9 items-center justify-center rounded-full bg-primary">
          <Mic className="text-white" size={16} />
        </div>
        <ReactTextareaAutosize className="mb-1 flex-1 outline-none" />
        <button className="mb-1">
          <SendHorizonal className="text-primary" />
        </button>
      </div>
    </div>
  );
}

export default ChatFooter;
