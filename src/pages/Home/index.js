import { useEffect } from 'react';
import { getListVideo } from '~/services/videoService';

function Home() {
    // useEffect(() => {
    //     const listVideo = async () => {
    //         const res = await getListVideo();
    //         console.log(res);
    //     };
    //     listVideo();
    // }, []);
    return <div>Home Page</div>;
}

export default Home;
