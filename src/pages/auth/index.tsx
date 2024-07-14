import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { useAuthState } from "react-firebase-hooks/auth";
import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/firebase";
import AuthModal from "@/components/Modals/AuthModal";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

const AuthPage: React.FC = () => {
  const authModal = useRecoilValue(authModalState);
  const [user, loading] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
    if (!loading && !user) setPageLoading(false);
  }, [user, router, loading]);

  if (pageLoading) return <div className="loader">Loading...</div>;

  return (
    <div className="bg-gradient-to-b from-dark-layer-1 to-dark-layer-2 h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar /> {/* Rendering the Navbar component */}
        <div className="flex items-center justify-center h-[calc(100vh-5rem)]">
          <div className="faang">
            <div className="faangtext">
              <span>GET YOUR DREAM JOB AND BOOST YOUR CAREER</span>
            </div>
            <div className="faangpic">
              <Image src="/pic.png" alt="faang" width={450} height={500} />
            </div>
          </div>
          {authModal.isOpen && <AuthModal />} {/* Conditionally rendering the AuthModal component */}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
