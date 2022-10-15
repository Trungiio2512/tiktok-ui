import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faCommentDots,
    faHeart,
    faMusic,
    faPause,
    faPlay,
    faShare,
    faVolumeMute,
    faVolumeUp,
} from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './VideoRecomend.module.scss';
import { useEffect, useRef, useState } from 'react';
const cx = classNames.bind(styles);

function VideoRecomend({ data }) {
    const videoRef = useRef();
    const volumeRef = useRef();
    const [isPlaying, setPlaying] = useState(false);
    const [isMuted, setMuted] = useState(true);
    console.log(data);
    const handleVideo = () => {
        if (isPlaying) {
            videoRef.current.pause();
            setPlaying(!isPlaying);
        } else {
            videoRef.current.play();
            setPlaying(!isPlaying);
        }
    };

    const hanldeMutedVideo = () => {
        if (isMuted) {
            setMuted(!isMuted);
            videoRef.current.volume = 1;
        } else {
            setMuted(!isMuted);
            videoRef.current.volume = 0;
        }
    };

    useEffect(() => {
        if (isMuted) {
            // setMuted(!isMuted);
            videoRef.current.volume = 0;
        }
    }, []);

    const handleChangeVolume = (e) => {
        console.log(e.target.value);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('container__avatar')}>
                    <Link to={`/@${data.user.nickname}`}>
                        <Image className={cx('avatar')} src={data.user.avatar} />
                    </Link>
                </div>
                <div className={cx('container__content')}>
                    <div className={cx('container__info')}>
                        <div className={cx('author')}>
                            <Link to={`/@${data.user.nickname}`} className={cx('author-link')}>
                                <h3 className={cx('nickname')}>
                                    {data.user.nickname}
                                    <FontAwesomeIcon icon={faCheckCircle} className={cx('icon-check')} />
                                </h3>
                                <h4 className={cx('fullname')}>{`${data.user.first_name} ${data.user.last_name}`}</h4>
                            </Link>
                        </div>
                        <Button small outline className={cx('btn-follow')}>
                            Follow
                        </Button>
                        <div className={cx('video-desc')}>
                            <span className={cx('desc')}>{data.description}</span>
                            <Link to className={cx('tag-link')}>
                                <strong className={cx('tag-name')}>{`#nguyentang`}</strong>
                            </Link>
                        </div>
                        <div className={cx('video-music')}>
                            <h4>
                                <Link to className={cx('music-link')}>
                                    <FontAwesomeIcon icon={faMusic} />
                                    <span className={cx('music-name')}>{data.music}</span>
                                </Link>
                            </h4>
                        </div>
                    </div>
                    <div className={cx('container__video')}>
                        <div className={cx('video-wrapper')}>
                            {/* <div className={cx('video-poster')}>
                                <Image src={video.thumb_url} />
                            </div> */}
                            <div className={cx('video-control')}>
                                <video loop ref={videoRef}>
                                    <source src={data.file_url} type="video/mp4" />
                                </video>
                            </div>
                            <div className={cx('video-player')}>
                                {isPlaying ? (
                                    <span className={cx('video-player__btn')} onClick={handleVideo}>
                                        <FontAwesomeIcon icon={faPause} />
                                    </span>
                                ) : (
                                    <span className={cx('video-player__btn')} onClick={handleVideo}>
                                        <FontAwesomeIcon icon={faPlay} />
                                    </span>
                                )}

                                <div className={cx('video-speaker')}>
                                    {isMuted ? (
                                        <span className={cx('video-speaker__btn')} onClick={hanldeMutedVideo}>
                                            <FontAwesomeIcon icon={faVolumeMute} />
                                        </span>
                                    ) : (
                                        <span className={cx('video-speaker__btn')} onClick={hanldeMutedVideo}>
                                            <FontAwesomeIcon icon={faVolumeUp} />
                                        </span>
                                    )}
                                    <div className={cx('video-speaker__control')}>
                                        <input
                                            ref={volumeRef}
                                            min="0"
                                            max="100"
                                            type="range"
                                            onChange={handleChangeVolume}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('video-actions')}>
                            <button className={cx('btn-action')}>
                                <span>
                                    <FontAwesomeIcon className={cx('btn-action__icon')} icon={faHeart} />
                                </span>
                                <p>{data.likes_count}</p>
                            </button>
                            <button className={cx('btn-action')}>
                                <span>
                                    <FontAwesomeIcon className={cx('btn-action__icon')} icon={faCommentDots} />
                                </span>
                                <p>{data.comments_count}</p>
                            </button>
                            <button className={cx('btn-action')}>
                                <span>
                                    <FontAwesomeIcon className={cx('btn-action__icon')} icon={faShare} />
                                </span>
                                <p>{data.shares_count}</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoRecomend;
