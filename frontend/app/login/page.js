"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Wrapper from "@/components/core/wrapper/Wrapper";
import Heading from "@/components/core/ui/heading/Heading";

export default function Login() {
    const [email, setEmail] = useState("");
    const router = useRouter();
    const allowedDomain = "@thomsonreuters.com";

    const isValidEmail = (email) => {
        return email.endsWith(allowedDomain);
    };

    useEffect(() => {
        const storedEmail = localStorage.getItem("userEmail");
        if (storedEmail && isValidEmail(storedEmail)) {
            router.push("/");
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValidEmail(email)) {
            alert("Unauthorized access: Email domain not allowed.");
            return;
        }

        // Store email in browser storage
        localStorage.setItem("userEmail", email);

        // Redirect to the root page
        router.push("/");
    };

    return (
        <Wrapper>
            <div className={styles.loginContainer}>
                <Heading text={"Login"} bgImage={"https://i.gifer.com/XPFZ.gif"} />
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.label} htmlFor="email">Email ID:</label>
                    <input 
                        className={styles.input}
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                    <button className={styles.button} type="submit">Login</button>
                </form>
                <p className={styles.note}>Please enter your registered email ID to continue.</p>
            </div>
        </Wrapper>
    );
}