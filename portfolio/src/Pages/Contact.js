import { useNavigate } from "react-router-dom"

const Contact = () => {
    const navigate = useNavigate();

  return (
    <>
    <div>Contact</div>
    <button onClick={() => navigate('/home') }>Collapse</button>
    </>
  )
}

export default Contact