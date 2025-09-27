import { Link } from 'gatsby'
import logo from "../assets/images/logo.svg"
import headerStyles from './header.module.scss'

const Header = props => {
  return (

      <header className={headerStyles.header}>
        <nav className={headerStyles.navbar}>
          <Link to={"/"}>
            <img className={headerStyles.logo} src={logo} alt="Logo" />
          </Link>
        </nav>
        {props.jambotron && (
          <div className={headerStyles.jambotron}>
            <div className={headerStyles.jambotron__heading}>
              <h1 className="text-extra-large text-white">Find Your Dream Job<br></br>Join Our Professional Community</h1>
            </div>
          </div>
        )}
      </header>
  )
}

export default Header;