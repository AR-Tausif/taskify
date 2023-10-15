import { createContext } from "react";

export const ModalContext = createContext(null)
const ModalProvider = ({children}) => {
    return ( 
        <ModalContext>
            {children}
        </ModalContext>
     );
}
 
export default ModalProvider;