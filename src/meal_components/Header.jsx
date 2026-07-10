

const Header = () => {
  return (
    <div>
     <header className="site-nav">
  <div className="container d-flex align-items-center justify-content-between flex-wrap gap-3">
    <a href="#" className="brand">
      ChopChop<span className="dot">Hub</span>
    </a>
    <nav className="nav-links d-none d-md-flex">
      <a href="#categories">Categories</a>
      <a href="#">Recipes</a>
      <a href="#">About</a>
    </nav>
    <input
      type="text"
      className="nav-search"
      placeholder="Search a dish…"
      aria-label="Search"
    />
  </div>
</header>

      </div>
  )
}
export default Header;