import create from 'zustand';

interface IState {
    drop: boolean,
    setDropToggle: () => void;
}

const useStore = create<IState>((set) => ({
    drop: false,

    setDropToggle: () => set((state: IState) => ({
        drop: !state.drop
    }))
}))

export default useStore;