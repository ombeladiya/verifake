function navbar() {
    return (
        <nav className="w-full h-24 sticky text-white flex justify-between px-10 py-4 z-10 top-0 left-0">
            <div><img src="/logo.png" alt="verifake" className="h-24" /></div>
            <div>
                <ul className="sm:flex space-x-7 text-md font-light hidden">
                    <li>Image</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Log In</li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar
