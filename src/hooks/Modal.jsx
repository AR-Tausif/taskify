const Modal = ({isVisible, children}) =>{
    if(!isVisible) return null; 
    return (
        <div className="fixed top-0 right-0 bottom-0  bg-black bg-opacity-25 p-10 transition-all ease-out">
      
        {
            children
        }
     </div>
    )
}

export default Modal;