import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.masthead}>
            <div className="wrap">
                <div className="d-flex justify-content-space-between">
                    <div className="logo">LOGO</div>
                    <nav>
                        <ul>
                            <li><a href="">Home</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;