import { Card, Col, Input, Layout, Row, Space, theme } from "antd";
import React, { useMemo } from "react";
import { useQuery } from "react-query";
import PaginationCustom from "../components/pagination/PaginationCustom";
import { getStore } from "./../api";
import SpinProgress from "./../components/spin/SpinProgress";
import ResultCustom from "./../components/result/ResultCustom";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "antd";
import { HashRouter } from "react-router-dom";
import SwiperCustom from "./../components/swiper/SwiperCustom";
import { SwiperSlide } from "swiper/react";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useGlobalContext } from "../contexts/GlobalContext";
const { Text, Title } = Typography;
const { Search } = Input;
type Data = {
  name: string;
  id: number;
  address: string;
  video: string;
};
const Stores = () => {
  const [stores, setStores] = React.useState([]) as any[];
  const [value, setValue] = React.useState("");
  const { data, isFetching, isLoading, error, isError } = useQuery(
    "getStore",
    getStore
  );
  const { favoriteVideo, handleRemoveFavorite } = useGlobalContext();

  const onSearch = (value: string) => console.log(value);
  const handleChangeSearch: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let valueSearch = event.target.value.toLowerCase();
    setValue(valueSearch);
  };
  const arrFavorite = localStorage.getItem("like") as string;
  const listFavorite = JSON.parse(arrFavorite) as any;

  const newArray = useMemo(() => {
    return stores.filter((item: any) => {
      const index = item.name.toLowerCase().indexOf(value);
      return index !== -1 ? item : null;
    });
  }, [stores, value]);

  React.useEffect(() => {
    if (data) {
      setStores([...data]);
    }
  }, [data]);
  if (isLoading) {
    return <SpinProgress></SpinProgress>;
  } else if (isError) {
    return (
      <ResultCustom title="sdf" status="500" label="reload"></ResultCustom>
    );
  }
  return (
    <Layout style={{ position: "relative" }}>
      <Row style={{ margin: "16px 0" }}>
        <Search
          placeholder="Search store ... "
          allowClear
          enterButton="Search"
          size="large"
          onChange={handleChangeSearch}
          onSearch={onSearch}
        />
      </Row>
      <Title>List favorite</Title>

      <Row
        title="sdfsdfsdfsd"
        style={{
          margin: "16px 0",
          width: "auto",
          height: "200px",
          padding: "10px",
        }}
      >
        {favoriteVideo.length > 0 ? (
          <SwiperCustom
            perView={10}
            isNavigation={false}
            isPavigation={false}
            space={16}
            responsive={{
              xs: 1,
              md: 5,
              lg: 6,
              xl: 8,
            }}
          >
            {favoriteVideo.map((item: any) => (
              <SwiperSlide key={item.id}>
                <div className="relative">
                  <CloseCircleOutlined
                    onClick={() => handleRemoveFavorite(item)}
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      zIndex: 10,
                      transform: "translateY(0)",
                    }}
                  />
                  <Link to={item.id.toString()}>
                    <Card
                      // bordered={false}
                      hoverable
                      title={<p>{item.name}</p>}
                      style={{ width: "100%", position: "relative" }}
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
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 8, sm: 16, md: 24, lg: 32 },
        ]}
      >
        {newArray.length > 0 &&
          newArray.map((item: any) => (
            <Col key={item.id} xs={24} sm={24} md={8} lg={8} xl={6}>
              <Link key={item.id} to={item.id.toString()}>
                <Card
                  // bordered={false}
                  hoverable
                  title={item.name}
                  style={{ width: "auto" }}
                  loading={isLoading}
                >
                  <Text>{item.address}</Text>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
      <PaginationCustom></PaginationCustom>
    </Layout>
  );
};

export default Stores;
