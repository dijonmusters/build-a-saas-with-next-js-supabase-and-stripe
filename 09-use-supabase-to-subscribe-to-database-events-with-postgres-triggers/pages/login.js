import { useEffect } from "react";
import { supabase } from "../utils/supabase";

const Login = () => {
  useEffect(() => {
    supabase.auth.signIn({
      provider: "github",
    });
  }, []);

  return <p>Logging in</p>;
};

export default Login;
