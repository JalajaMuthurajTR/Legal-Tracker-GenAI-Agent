import Link from "next/link";
import styles from "./Navbar.module.css";
import { Home, FolderOpenDot } from "lucide-react";

const Navbar = ({ links }) => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <span>PROJECT-TR</span>
            </div>

            <hr />

            <Link href="/" className={styles.navItem}>
                <Home size={24} />
                <span>Dashboard</span>
            </Link>

            {/* <Link href="/projects" className={styles.navItem}>
                <FolderOpenDot size={24} />
                <span>Projects</span>
            </Link> */}

            <div className={styles.navLinks}>
                {links.map((link) => (
                    <Link key={link.path} href={link.path} className={styles.navItem}>
                        {link.icon}
                        <span>{link.label}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
