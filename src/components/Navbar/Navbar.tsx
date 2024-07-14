// components/Navbar/Navbar.tsx

import { authModalState } from '@/atoms/authModalAtom'; // Importing the Recoil atom for authentication modal state
import Link from 'next/link'; // Importing Link component from Next.js for client-side navigation
import React from 'react'; // Importing React
import { useSetRecoilState } from 'recoil'; // Importing hook to set Recoil state

type NavbarProps = {}; // Defining type for Navbar component props (currently empty)

const Navbar: React.FC<NavbarProps> = () => {
  // Using the Recoil hook to set the state of the auth modal
  const setAuthModalState = useSetRecoilState(authModalState);

  // Function to handle the click event for the login button
  const handleClick = () => {
    // Updating the state to open the auth modal
    setAuthModalState(prev => ({ ...prev, isOpen: true }));
  };

  return (
    <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
      {/* Logo section */}
      <div className="logo mt-0 mt-2">
        <Link href="/" className="logoLink">
          <span className="logoText logoText1">Online</span>
          <span className="logoText logoText2">Judge</span>
          <span className="logoText logoText3">;</span>
        </Link>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center mt-5">

        <button className="iteratingBorderButton ml-5 btntext">Explore</button>
        <button className="iteratingBorderButton ml-5 btntext">Product</button>
        <button className="iteratingBorderButton ml-5 btntext">Developer</button>
        <button className="iteratingBorderButton ml-5 btntext" onClick={handleClick}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
