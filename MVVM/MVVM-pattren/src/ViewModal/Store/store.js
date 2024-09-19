import { create } from "zustand";
import postViewModal from "../PostViewModal/postViewModal";

const useStore = create((set,get)=>({
    ...postViewModal(set,get)
    
}))

export default useStore;