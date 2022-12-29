import { Card, Col, Input, Layout, Row, Space, theme } from "antd";
import React, { useMemo } from "react";
import { useQuery } from "react-query";
// import PaginationCustom from "../components/pagination/PaginationCustom";
import { getStore } from "./../api";
import SpinProgress from "./../components/spin/SpinProgress";
import ResultCustom from "./../components/result/ResultCustom";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "antd";
import SwiperCustom from "./../components/swiper/SwiperCustom";
import { SwiperSlide } from "swiper/react";
import {
  CloseCircleOutlined,
  CloseOutlined,
  SearchOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { useGlobalContext } from "../contexts/GlobalContext";
import useLocalStorage from "use-local-storage";
import { Data } from "../types/Types";
import PopupCustom from "../components/popup/PopupCustom";
import { useToggleShow } from "../hooks/useToggleShow";
import { useToggleType } from "./../types/Types";
const { Text, Title } = Typography;

const Stores = () => {
  const [stores, setStores] = React.useState<Data[]>([]);
  const [value, setValue] = React.useState<string>("");
  const navigate = useNavigate();
  const { isOpen, setHide, setShow, toggleShow }: useToggleType =
    useToggleShow(true);
  console.log("🚀 ~ file: Store.tsx:31 ~ Stores ~ isOpen", isOpen);
  const { data, isFetching, isLoading, error, isError } = useQuery(
    "getStore",
    getStore
  );
  const { favoriteVideo, handleRemoveFavorite, dark, count, setCount } =
    useGlobalContext();

  const [favorite] = useLocalStorage<any>("like", []);

  const handleOK = () => {
    navigate(`/blogs/nBoards/${favorite[0]?.id}`);
  };
  const handleChangeSearch: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let valueSearch = event.target.value.toLowerCase();
    setValue(valueSearch);
  };

  const newArray = useMemo(() => {
    return stores.filter((item: any) => {
      const indexN = item.name
        .replaceAll(" ", "")
        .toLowerCase()
        .indexOf(value.replace(/^\s+|\s+$/gm, "").replaceAll(" ", ""));
      const indexA = item.address
        .replaceAll(" ", "")
        .toLowerCase()
        .indexOf(value.replace(/^\s+|\s+$/gm, "").replaceAll(" ", ""));

      return indexN !== -1 || indexA !== -1 ? item : null;
    });
  }, [stores, value]);

  React.useEffect(() => {
    if (data) {
      setStores([...data]);
    }
  }, [data]);
  // const arr = [11, 23, 32, 89, 90, 22];
  // const key = arr.reduce((data: any, pound: any): any => {
  //   data[pound] = (data[pound] || 0) + 1;
  //   return data;
  // }, {});
  React.useEffect(() => {
    setTimeout(() => {
      setCount(1);
    }, 2000);
    return () => {
      setCount(0);
    };
  }, []);
  if (isLoading) {
    return <SpinProgress></SpinProgress>;
  } else if (isError) {
    return (
      <ResultCustom
        title="NO DATA !"
        status="500"
        label="reload"
      ></ResultCustom>
    );
  }
  return (
    <Layout style={{ position: "relative" }}>
      {count < 1 && (
        <PopupCustom
          handleCancel={setHide}
          isModalOpen={isOpen}
          handleOk={handleOK}
          title=""
        >
          <Space style={{ display: "block" }}>
            <SmileOutlined style={{ fontSize: "20pt", color: "#B8DA28" }} />
            <Text style={{ fontSize: "20px", color: "#B8DA28" }}>
              Xin chào !
            </Text>
          </Space>
          <Space style={{ marginBottom: "16px" }}>
            <Text>Bạn có muốn phát lại Video hôm qua không?</Text>
          </Space>
        </PopupCustom>
      )}

      <Row
        gutter={14}
        style={{
          margin: "16px 0",
          position: "relative",
          width: "100%",
          maxWidth: "606px",
          alignItems: "center",
          height: "29px",
        }}
      >
        <Col>
          <SearchOutlined style={{ display: "block", fontSize: "24px" }} />
        </Col>
        <Col
          style={{
            flex: "1",
            borderBottom: "1px solid #D9D9D9",
            height: "100%",
          }}
        >
          <input
            className="h-full      "
            style={{
              border: "none",
              width: "100%",
              flex: "1",
              padding: "8px",
              background: "transparent",
            }}
            placeholder="Search store ... "
            onChange={handleChangeSearch}
          />
        </Col>
      </Row>
      <Title style={{ marginTop: "14px" }}>List Favorite</Title>
      <Row
        id="store"
        style={{
          width: "auto",
          height: "200px",
        }}
      >
        {favoriteVideo.length > 0 ? (
          <SwiperCustom
            perView={10}
            isNavigation={false}
            isPavigation={false}
            space={16}
            isScrollBar={false}
            isAutoPlay={false}
            responsive={{
              xs: 1,
              md: 5,
              lg: 6,
              xl: 8,
            }}
          >
            {favoriteVideo.map((item: any) => (
              <SwiperSlide key={item.id}>
                <div className="relative ">
                  <div
                    style={{ transform: "translate(30%,-30%)" }}
                    className="absolute t-0 right-0 z-10  w-[24px] h-[24px] rounded-full bg-white flex justify-center items-center hover:bg-red-400"
                  >
                    <CloseOutlined
                      className="hover:text-[white] text-red-500"
                      onClick={() => {
                        handleRemoveFavorite(item.id);
                      }}
                      style={{
                        color: dark === "dark" ? "blue" : "blue",
                        width: "14px",
                        height: "14px",
                      }}
                    />
                  </div>
                  <Link to={item.id.toString()}>
                    <Card
                      className=" hover:scale-125 transition-all  "
                      hoverable
                      bordered={true}
                      title={<p>{item.name}</p>}
                      style={{
                        width: "100%",
                        position: "relative",
                        // boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.4)",
                        border: `1px solid ${
                          dark === "dark" ? "white" : "black"
                        }`,
                        borderRadius: "8px",
                      }}
                      loading={isLoading}
                    >
                      <Text>{item.address}</Text>
                    </Card>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </SwiperCustom>
        ) : (
          <Text style={{ fontSize: "2rem" }} type="success">
            Choose your favorite
          </Text>
        )}
      </Row>
      <Title>List Store</Title>
      <Row
        gutter={[
          { xs: 8, sm: 10, md: 14, lg: 16 },
          { xs: 8, sm: 16, md: 24, lg: 32 },
        ]}
      >
        {newArray.length > 0 ? (
          newArray.map((item: any) => (
            <Col key={item.id} xs={24} sm={12} md={8} lg={8} xl={4}>
              <Link key={item.id} to={item.id.toString()}>
                <Card
                  bordered={false}
                  hoverable
                  title={item.name}
                  style={{
                    width: "auto",
                    border: `1px solid ${dark === "dark" ? "white" : "black"}`,
                  }}
                  loading={isLoading}
                >
                  <Text>{item.address}</Text>
                </Card>
              </Link>
            </Col>
          ))
        ) : (
          <Title type="warning">Store not found !</Title>
        )}
      </Row>
      {/* <PaginationCustom></PaginationCustom> */}
    </Layout>
  );
};

export default Stores;
