 import { Link } from "react-router-dom"

export default  function Menu() {
  return (
    <div>
      <h1>O melhor Menu do mundo</h1>
      <nav>
        <Link to="/fernanda">Fernanda</Link>
        <Link to="/teste">Teste</Link>
        <Link to="/home">Home</Link>
      </nav>
    </div>
  )
}
 