import logo from '../assets/logo-text.png'
export function Nav() {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-8 py-4">
      <img src={logo} className="logo"/>
      <ul className="flex space-x-4 text-gray-700">
        <li className="text-pink-500 font-bold">Home</li>
        <li>Techologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex space-x-4">
      <button className="btn btn-ghost rounded-full">Sign In</button>
      <button className="btn btn-secondary rounded-full">Sign Up</button>
      </div>
      </div>
    </nav>
  )
}
