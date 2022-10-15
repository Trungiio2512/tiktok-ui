import { useEffect, useState } from 'react';
import VideoRecomend from '~/components/VideoRecomend';
import { getListVideo } from '~/services/videoService';
import styles from './ContentVideoRecomend.module.scss';

function ContentVideoRecomend() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const listVideo = async () => {
            setLoading(true);

            const res = await getListVideo();
            console.log(res);

            setVideos((prev) => [...prev, ...res]);
            setLoading(false);
        };
        listVideo();
    }, []);

    return loading ? (
        <div>'loading'</div>
    ) : (
        <div className={styles.wrapper}>
            {videos.map((video, index) => (
                <VideoRecomend data={video} key={index} />
            ))}
        </div>
    );
}

export default ContentVideoRecomend;
