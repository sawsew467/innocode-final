import create from "zustand";

interface IState {
  drop: boolean;
  setDropToggle: () => void;
  
  openMessageDiaolog: boolean;
  setOpenMessageDiaolog: (openMessageDiaolog: boolean) => void;

  targetPoint: {
    x: number;
    y: number;
    z: number;
  };
}

const useStore = create<IState>((set) => ({
  drop: false,
  openMessageDiaolog: false,
  
  setDropToggle: () =>
    set((state: IState) => ({
      drop: !state.drop,
    })),
  //
  targetPoint: {
    x: -10,
    y: 0,
    z: 0,
  },
  setTargetPoint: (point: { x: number; y: number; z: number }) =>
    set(() => ({
      targetPoint: {
        ...point,
      },
    })),
    setOpenMessageDiaolog: (openMessageDiaolog: boolean) => set(() => ({
      openMessageDiaolog: openMessageDiaolog
    }))
}));

export default useStore;
