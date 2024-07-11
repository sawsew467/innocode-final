import create from "zustand";

interface IState {
  drop: boolean;
  setDropToggle: () => void;

  targetPoint: {
    x: number;
    y: number;
    z: number;
  };
}

const useStore = create<IState>((set) => ({
  drop: false,
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
}));

export default useStore;
