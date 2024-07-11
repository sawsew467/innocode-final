import React, { useEffect, useState } from "react";

const useModal = () => {
  const [isOpen, setOpen] = useState(false);
  const setModal = (open: boolean) => {
    setOpen(open);
  };
  return { isOpen, setModal };
};

export default useModal;
