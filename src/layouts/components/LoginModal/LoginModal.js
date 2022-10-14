import { useState } from 'react';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './LoginModal.module.scss';
import { loginUser } from '~/services/authService';
import { useDispatch } from 'react-redux';
const cx = classNames.bind(styles);

function LoginModal() {
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const dispatch = useDispatch();

    const hanldeSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setErrorEmail('Email is required');
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setErrorEmail('Email is not email address');
        }
        if (!password) {
            setErrorPassword('Password is required');
        }
        if (email && password) {
            await loginUser(dispatch, { email, password });
            // console.log(res);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('heading')}>Đăng nhập vào Tiktok</h1>
            <form onSubmit={hanldeSubmit} className={cx('form')}>
                <div className={cx('form-group')}>
                    <label className={cx('form-label')}>Email</label>
                    <input
                        type="email"
                        className={cx('form-input')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errorEmail && <span className={cx('error-message')}>{errorEmail}</span>}
                </div>
                <div className={cx('form-group')}>
                    <label className={cx('form-label')}>Password</label>
                    <input
                        className={cx('form-input')}
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errorPassword && <span className={cx('error-message')}>{errorPassword}</span>}
                </div>
                <Button primary full className={cx('btn-login')} type="submit">
                    Đăng nhập
                </Button>
            </form>
        </div>
    );
}

export default LoginModal;
