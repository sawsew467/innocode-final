"use client";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Camera from "./Camera";
import { Info } from "lucide-react";
import ClickSvg from "@public/svgr/Click";

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
      <div className="flex w-full animate-fade flex-col justify-between gap-0 scrollbar-hide">
        <div className="flex w-full flex-row justify-between">
          <h1 className="w-full text-center text-[32px] font-bold text-primary">
            SAVE GREEN
          </h1>
        </div>
        {!isStart && (
          <p className="mt-4 text-center">
            Thực hiện động tác thay hình "trái tim 💚" để thể hiện tình yêu của
            bạn đối với mẹ thiên nhiên !{" "}
          </p>
        )}
        {isStart && (
          <p className="mt-4 text-center bg-background rounded-md p-2 font-semibold">
            Giữ nguyên tư thế hình "Trái tim 💚" để giúp cây xanh sắc và bạn sẽ
            nhận được thông điệp từ chúng tôi!
          </p>
        )}
      </div>
      <div className="w-full animate-fade">
        {/* Start */}
        {!isStart && (
          <div className="mt-4 flex w-full items-center justify-center p-4">
            <div className="mt-6 flex w-full translate-y-[-20%] cursor-pointer justify-center">
              <div
                className="relative z-20 flex h-[85px] w-[85px] cursor-pointer items-center justify-center rounded-full bg-primary text-center transition-all hover:bg-[#305531]"
                onClick={() => {
                  setIsStart(true);
                }}
              >
                <p className="font-bold text-white">Bắt đầu</p>
              </div>
              <div className="absolute top-[12px] h-[60px] w-[60px] animate-ping rounded-full border-2 border-primary"></div>
            </div>
          </div>
        )}

        {!isStart && (
          <div className="flex w-full items-center justify-center">
            <div className="relative flex h-fit w-fit flex-col gap-4 rounded-lg border-4 border-background p-[20px]">
              <div className="flex w-full animate-fade-down items-center justify-center gap-2">
                <Info className="text-primary" />
                <p>Hướng dẫn</p>
              </div>
              <div className="flex flex-row gap-4">
                <div className="flex animate-fade-up flex-col items-center justify-center gap-2 rounded-lg p-2 transition-all hover:bg-background">
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-primary font-bold text-white">
                    <p>1</p>
                  </div>
                  <div>
                    <p className="max-w-[220px]">Nhấn vào bút "Bắt đầu"</p>
                  </div>
                </div>
                <div className="flex animate-fade-up flex-col items-center justify-center gap-2 rounded-lg p-2 transition-all hover:bg-background">
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-primary font-bold text-white">
                    <p>2</p>
                  </div>
                  <div>
                    <p className="max-w-[220px]">Tạo cử chỉ tay "Thả tim 🫶"</p>
                  </div>
                </div>
                <div className="flex animate-fade-up flex-col items-center justify-center gap-2 rounded-lg p-2 transition-all hover:bg-background">
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-primary font-bold text-white">
                    <p>3</p>
                  </div>
                  <div>
                    <p className="max-w-[220px]">
                      Giữ tư thế "🫶" trong 4 giây
                    </p>
                  </div>
                </div>
                <div className="flex animate-fade-up flex-col items-center justify-center gap-2 rounded-lg p-2 transition-all hover:bg-background">
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-primary font-bold text-white">
                    <p>4</p>
                  </div>
                  <div>
                    <p className="max-w-[220px]">Cây xanh sắc 🌳</p>
                  </div>
                </div>
              </div>
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
