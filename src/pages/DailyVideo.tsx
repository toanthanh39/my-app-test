import { Layout, Space } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import axios from "axios";
import { useGlobalContext } from "../contexts/GlobalContext";
import SlideDaily from "./../components/dailyChildren/SlideDaily";
import VideoDaily from "./../components/dailyChildren/VideoDaily";
const DailyVideo = () => {
  const { id } = useParams();
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [favorite, setFavorite] = useLocalStorage<object[]>("like", []);
  const [dataSingle, setDataSingle] = React.useState<any>({});
  const { setFavoriteVideo } = useGlobalContext();
  React.useEffect(() => {
    axios
      .get(`http://localhost:3002/store/${id}`)
      .then((res: any) => {
        setDataSingle(res.data);

        const isExited = favorite.some((item: any) => item.id == id);
        if (!isExited) {
          const arr = [...favorite];
          arr.unshift(res.data);
          setFavorite(arr);
          setFavoriteVideo(arr);
        } else if (isExited) {
          let exitE = favorite.findIndex((item: any) => item.id == id);
          const arrUpdate = [...favorite];
          arrUpdate.splice(exitE, 1);
          arrUpdate.unshift(res.data);
          setFavorite(arrUpdate);
          setFavoriteVideo(arrUpdate);
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
    if (dataSingle) {
      videoRef.current?.requestFullscreen();
      videoRef.current?.play();
    }
  }, [dataSingle]);

  return (
    <Layout style={{ height: "calc( 90vh - 10px )", position: "relative" }}>
      {dataSingle && dataSingle.type === "video" ? (
        <div className="w-full h-full rounded-lg">
          {dataSingle?.video !== "" && (
            <VideoDaily
              dataSingle={dataSingle}
              videoRef={videoRef}
            ></VideoDaily>
          )}
        </div>
      ) : (
        dataSingle?.type === "slide" && (
          <SlideDaily dataSingle={dataSingle}></SlideDaily>
        )
      )}
    </Layout>
  );
};

export default DailyVideo;
