import './button.css'
const Button = (props) => {
  return (
    <button className="btnComponent" onClick={props.onClick}>{props.text}</button>
  )
}

export default Button