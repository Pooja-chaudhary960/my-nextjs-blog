import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const router = useRouter();
  const { token } = useSelector(state => state.auth);

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  return token;
};
