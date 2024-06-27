'use client'
export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className="navbar fixed bg-black bg-opacity-50 top-0 text-white rounded-full z-40">
      <div className="navbar-start">
        <a onClick={() => scrollToSection('home')} className="btn btn-ghost text-xl tracking-tighter">BORIS LADYJENSKY</a>
      </div>
      <div className="navbar-center">
      </div>
      <div className="navbar-end">
      <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black bg-opacity-50 rounded-box z-10 mt-3 w-20 right-5 shadow"
          >
            <li className="mt-5">
            <a onClick={() => scrollToSection('about')}>ABOUT</a>
          </li>
          <li className="mt-5">
            <a onClick={() => scrollToSection('projects')}>PORTFOLIO</a>
          </li>
          <li className="mt-5">
            <a onClick={() => scrollToSection('contact')}>CONTACT</a>
            </li>
          </ul>
        </div>
        {/* <a className="btn sm:hidden">Resume</a> */}
        <ul className="menu menu-horizontal px-1 hidden lg:flex py-5">
          <li>
            <a onClick={() => scrollToSection('about')} className="px-20">ABOUT</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('projects')} className="px-20">PORTFOLIO</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('contact')} className="px-20">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
