import { Layout } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import axios from "axios";
import { useGlobalContext } from "../contexts/GlobalContext";
type Data = {
  name: string;
  id: number | string;
  address: string;
};
const DailyVideo = () => {
  const { id } = useParams();
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [favorite, setFavorite] = useLocalStorage<object[]>("like", []);
  const [url, setUrl] = React.useState("");
  const { favoriteVideo, setFavoriteVideo } = useGlobalContext();
  React.useEffect(() => {
    axios
      .get(`http://localhost:3002/store/${id}`)
      .then((res: any) => {
        const isExited = favorite.some((item: any) => item.id == id);

        setUrl(res.data.video);
        if (!isExited) {
          const arr = [...favorite];
          arr.unshift(res.data);
          setFavorite(arr);
          setFavoriteVideo(favorite);
        } else if (isExited) {
          let exitE = favorite.findIndex((item: any) => item.id == id);
          const arrUpdate = [...favorite];
          arrUpdate.splice(exitE, 1);
          arrUpdate.unshift(res.data);
          setFavorite(arrUpdate);
          setFavoriteVideo(favorite);
        }
      })
      .catch((error: any) => {
        console.log("🚀 ~ file: DailyVideo.tsx:22 ~ axios.get ~ error", error);
      });

    return () => {
      return;
    };
  }, []);
  React.useEffect(() => {
    videoRef.current?.requestFullscreen();
    videoRef.current?.play();
  }, [url]);

  return (
    <Layout style={{ height: "calc( 90vh - 10px )" }}>
      <div className="w-full h-full rounded-lg">
        {url !== "" && (
          <video
            ref={videoRef}
            className="object-cover rounded-xl  "
            controls
            width="100%"
            height="100%"
            loop={true}
            autoPlay
          >
            <source src={url} type="video/mp4" />
          </video>
        )}
      </div>
    </Layout>
  );
};

export default DailyVideo;
