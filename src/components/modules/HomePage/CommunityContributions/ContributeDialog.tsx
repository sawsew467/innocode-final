"use client";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Camera from "./Camera";
import { Info } from "lucide-react";

interface IProps {
  visible: boolean;
  openModal: () => void;
  closeModal: () => void;
}

function ContributeDialog({ visible, openModal, closeModal }: IProps) {
  const [isStart, setIsStart] = useState(false);

  return (
    <Modal
      isOpen={visible}
      onRequestClose={() => {
        closeModal();
        setIsStart(false);
      }}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: 16,
          zIndex: 1000,
          maxWidth: "960px",
          maxHeight: "80%",
          width: "100%",
          borderRadius: 12,
          overflow: "hidden",
        },
        overlay: {
          backgroundColor: "rgba(37, 36, 36, 0.5)",
          zIndex: 1000,
        },
      }}
      contentLabel="Example Modal"
    >
      <div className="w-full scrollbar-hide flex animate-fade flex-col justify-between gap-0">
        <div className="w-full flex flex-row justify-between">
          <h1 className="text-[24px] font-bold text-primary">SAVE GREEN</h1>
          <p className="flex flex-row gap-2 relative">
            <span>Hướng dẫn</span>
            <span className="text-primary cursor-pointer"> <Info/></span>
            
          </p>
        </div>
        <p className="text-center mt-4">
          Thực hiện hành động "trái tim" để thể hiện tình yêu của bạn đối với mẹ
          thiên nhiên !{" "}
        </p>
      </div>
      <div className="w-full animate-fade">
        {/* Start */}
        {!isStart && (
          <div
            className="mt-4 flex w-full items-center justify-center p-4"
            onClick={() => {
              setIsStart(true);
            }}
          >
            <div className="mt-6 flex w-full translate-y-[-20%] cursor-pointer justify-center">
              <div className="relative z-20 flex h-[85px] w-[85px] cursor-pointer items-center justify-center rounded-full bg-primary text-center transition-all hover:bg-[#305531]">
                <p className="font-bold text-white">Bắt đầu</p>
              </div>
              <div className="absolute top-[12px] h-[60px] w-[60px] animate-ping rounded-full border-2 border-primary"></div>
            </div>
          </div>
        )}

        <div className="mt-4 w-full">
          <Camera
            openCamera={isStart}
            setIsOpenCamera={setIsStart}
            closeModal={closeModal}
          />
        </div>
      </div>
    </Modal>
  );
}

export default ContributeDialog;
