import PropTypes from 'prop-types';
import styles from './SecondLayout.module.scss';
import Header from '~/layouts/components/Header';
import SideBar from '~/layouts/components/SideBar';

function SecondLayout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Header fullwidth />
            <div className={styles.container}>
                <SideBar smallSize />
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
}

SecondLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SecondLayout;
