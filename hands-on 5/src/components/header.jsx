function Header(props) {
  return (
    <header className="header">
      <h1>{props.siteName}</h1>

      <nav>
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">Profile</a>
      </nav>

      <h3>Enrolled: {props.count}</h3>
    </header>
  )
}

export default Header