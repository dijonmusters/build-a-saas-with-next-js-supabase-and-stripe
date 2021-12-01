import { useEffect } from "react";
import { supabase } from "../utils/supabase";
import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      supabase.auth.signOut();
      router.push("/");
    };
    logout();
  }, []);

  return <p>Logging out</p>;
};

export default Logout;
