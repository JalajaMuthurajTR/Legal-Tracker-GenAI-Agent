"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Wrapper from "../wrapper/Wrapper";
import { Loader } from "lucide-react";

export default function AuthHandler({ children }) {
  const router = useRouter();
  const allowedDomain = "@thomsonreuters.com";
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");

    if (storedEmail && storedEmail.endsWith(allowedDomain)) {
      setIsAuthenticated(true);
    } else {
      router.push("/login");
    }
  }, [router]);

  if (isAuthenticated === null) {
    return (
      <Wrapper>
        {/* <Loader size={24} /> */}
        Loading...
      </Wrapper>
    );
  }

  return children;
}
