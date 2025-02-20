"use client";
import { useRouter } from "next/navigation";
import Wrapper from "@/components/core/wrapper/Wrapper";
import styles from "./page.module.css";
import Heading from "@/components/core/ui/heading/Heading";
import AuthHandler from "@/components/core/auth/AuthHandler";

export default function Settings() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    router.push("/login");
  };

  return (
    <AuthHandler>
      <Wrapper>
        <Heading text={"Settings"} bgImage={"https://i.gifer.com/XPFZ.gif"} />
        <div className={styles.settingsContainer}>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </Wrapper>
    </AuthHandler>
  );
}
