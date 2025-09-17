import Logo from './Logo'

export default function Header() {
  // TODO: ADD LOGOUT
  const handleLogout = () => {}
  return (
    <>
      <header className="flex justify-between items-center px-8 py-4 border-b border-gray-200">
        <Logo />
        <button
          onClick={handleLogout}
          className="border border-gray-300 px-4 py-2 rounded-lg text-gray-700/80 cursor-pointer hover:text-gray-700/90 hover:border-gray-500 transition-all"
        >
          Logout
        </button>
      </header>
    </>
  )
}
