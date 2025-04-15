import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import { Outlet } from "react-router-dom";
import AuthHandler from "@/handlers/user-auth-handler";


export const PublicLayout = () => {
  return (
    <div className="w-full">
      {/* {handler to store the user data} */}
      <AuthHandler />
      <Header /> Loading...
      <Outlet />
      <Footer />
    </div>
  );
};
