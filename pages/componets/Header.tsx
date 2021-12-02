import Link from "next/link";
import Image from "next/image";

import logo from "../../public/img/logo.png";
import styles from "../../styles/sass/style.module.scss";

const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<Link href="/">
					<a className={styles.header_logo}>
						<Image src={logo} alt="LOGO" />
					</a>
				</Link>
			</header>
		</>
	);
};

export default Header;
