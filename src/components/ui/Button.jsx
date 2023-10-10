const Button = ({title, color, bg}) =>{
    return (
        <button className={`bg-${bg}-100 py-1.5 px-5 text-${color}-800 rounded`}>
          {title}
        </button>
    )
}


export default Button;