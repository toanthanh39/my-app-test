import React from "react";
import "./header.scss";
import {
  SearchOutlined,
  ShopOutlined,
  UserOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  HeatMapOutlined,
} from "@ant-design/icons";
import { Input } from "antd";

const HeaderMain = () => {
  React.useEffect(() => {
    var listSlick = document.querySelectorAll(".text-slick");
    let i = 0;

    function IntervalSlick() {
      listSlick[0].classList.add("show");
      setInterval(() => {
        listSlick.forEach((item) => {
          item.classList.remove("show");
        });
        listSlick[i].classList.add("show");
        i++;
        if (i === listSlick.length) {
          i = 0;
        }
      }, 2000);
    }
    IntervalSlick();
  }, []);
  return (
    <React.Fragment>
      <div className="desktop_announcement-bar">
        <p>
          Thương hiệu nước hoa được feedback nhiều nhất Việt Nam.
          <a href="#">Xem Chi tiết</a>
        </p>
      </div>
      <div className="desktop_header-top">
        <div id="slicks" className="desktop_header-top--left">
          <p className="text-slick">Freeship cho mọi đơn hàng</p>
          <p className="text-slick">Thương hiệu nước hoa uy tín từ 2013</p>
          <p className="text-slick">Tặng ngay voucher 100.000đ khi mua sắm</p>
        </div>
        <div className="desktop_header-top--right">
          <p>Theo dõi đơn hàng</p>
          {/* <ion-icon name="notifications-outline"></ion-icon> */}
        </div>
      </div>
      <div className="desktop_header-mid">
        <div className="container">
          <div className="container_item">
            <a id="logo" href="#">
              namperfume
            </a>
          </div>
          <div className="container_item search">
            <form action="">
              <button type="submit">
                <SearchOutlined />
              </button>
              {/* <input type="text" placeholder="Tìm kiếm" /> */}
              <Input placeholder="Tìm kiếm" bordered={false} />
            </form>
          </div>
          <div className="container_item menus">
            <div className="menus_item">
              <ShopOutlined />
              <p>5 Cửa hàng toàn quốc</p>
              <div className="dropdown_menu">
                <div className="dropdown_menu--content">
                  <div className="content_header">
                    <h3>Các cửa hàng của namperfume</h3>
                  </div>
                  <div className="content_address">
                    <div className="content_address--item">
                      <div className="content_address--item__location">
                        <HeatMapOutlined />
                      </div>
                      <div className="content_address--item__address">
                        <h4>Namperfume quận 3</h4>
                        <p>420/6 Lê Văn Sỹ, Phường 14, Quận 3, TP.HCM</p>
                      </div>
                    </div>
                    <div className="content_address--item">
                      <div className="content_address--item__location">
                        <HeatMapOutlined />
                      </div>
                      <div className="content_address--item__address">
                        <h4>Namperfume quận 3</h4>
                        <p>420/6 Lê Văn Sỹ, Phường 14, Quận 3, TP.HCM</p>
                      </div>
                    </div>
                    <div className="content_address--item">
                      <div className="content_address--item__location">
                        <HeatMapOutlined />
                      </div>
                      <div className="content_address--item__address">
                        <h4>Namperfume quận 3</h4>
                        <p>420/6 Lê Văn Sỹ, Phường 14, Quận 3, TP.HCM</p>
                      </div>
                    </div>
                    <div className="content_address--item">
                      <div className="content_address--item__location">
                        <HeatMapOutlined />
                      </div>
                      <div className="content_address--item__address">
                        <h4>Namperfume quận 3</h4>
                        <p>420/6 Lê Văn Sỹ, Phường 14, Quận 3, TP.HCM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="menus_item">
              <p>Nmagazine</p>
              <div className="dropdown_menu">
                <div className="dropdown_menu--content">
                  <div className="content_header">
                    <h3>Các cửa hàng của namperfume</h3>
                  </div>
                  <div className="content_address">
                    <div className="content_address--item">
                      <div className="content_address--item__location">
                        {/* <ion-icon name="location-outline"></ion-icon> */}
                      </div>
                      <div className="content_address--item__address">
                        <h4>Namperfume quận 3</h4>
                        <p>420/6 Lê Văn Sỹ, Phường 14, Quận 3, TP.HCM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="menus_item account">
              <div className="account_login">
                <UserOutlined />
                <p>Đăng nhập</p>
              </div>
              <div className="account_heart">
                <HeartOutlined />
              </div>
              <div className="account_cart">
                <ShoppingCartOutlined />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="desktop_megamenu">
        <ul className="list_menu">
          <li className="list_menu--item">
            <a href="#">Nước hoa nam</a>
            <div className="dropdown_primary">
              <div className="dropdown_primary--content">
                <div className="content_img">
                  <img src="/asset/images//banner-nam-new.jpg" alt="" />
                </div>
                <div className="content_body">
                  <div className="content_body--list">
                    <h3>Phân loại</h3>
                    <a href="#">Mới nhất</a>
                    <a href="#">Yêu thích nhất</a>
                    <a href="#">Nước hoa Niche</a>
                    <a href="#">Giftset</a>
                    <a href="#">Nước hoa unisex</a>
                    <a href="#">Nước hoa Mini</a>
                  </div>
                  <div className="content_body--list_haft">
                    <h3>thương hiệu</h3>
                    <a href="#">Gucci</a>
                    <a href="#">NARCISO RODRIGUESZ</a>
                    <a href="#">BUBBERY</a>
                    <a href="#">VERSACE</a>
                    <a href="#">JO MALON</a>
                    <a href="#">Gucci</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list_menu--item">
            <a href="#">Nước hoa nữ </a>
            <div className="dropdown_primary">
              <div className="dropdown_primary--content">
                <div className="content_img">
                  <img src="/asset/images/banner-nam-new.jpg" alt="" />
                </div>
                <div className="content_body">
                  <div className="content_body--list">
                    <h3>Phân loại</h3>
                    <a href="">Mới nhất</a>
                    <a href="">Yêu thích nhất</a>
                    <a href="">Nước hoa Niche</a>
                    <a href="">Giftset</a>
                    <a href="">Nước hoa unisex</a>
                    <a href="">Nước hoa Mini</a>
                  </div>
                  <div className="content_body--list_haft">
                    <h3>thương hiệu</h3>
                    <a href="">Gucci</a>
                    <a href="">NARCISO RODRIGUESZ</a>
                    <a href="">BUBBERY</a>
                    <a href="">VERSACE</a>
                    <a href="">JO MALON</a>
                    <a href="">Gucci</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list_menu--item">
            <a href="">Nước hoa mini</a>
            <div className="dropdown_primary">
              <div className="dropdown_primary--content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  deleniti, illum id, laboriosam nam maiores obcaecati quibusdam
                  magni voluptatem pariatur commodi cupiditate quisquam aliquam
                  enim, impedit aut alias? Modi, quae?
                </p>
              </div>
            </div>
          </li>
          <li className="list_menu--item">
            <a href="">Giftset</a>
            <div className="dropdown_primary">
              <div className="dropdown_primary--content"></div>
            </div>
          </li>
          <li className="list_menu--item">
            <a href="">Nước hoa niche</a>
            <div className="dropdown_primary">
              <div className="dropdown_primary--content"></div>
            </div>
          </li>
          <li className="list_menu--item">
            <a href="">Thương hiệu</a>
            <div className="dropdown_primary">
              <div className="dropdown_primary--content"></div>
            </div>
          </li>
          <li className="list_menu--item">
            <a href="">Bodycare & Homecare</a>
            <div className="dropdown_primary">
              <div className="dropdown_primary--content"></div>
            </div>
          </li>
          <li className="list_menu--item">
            <a href="">Son môi</a>
            <div className="dropdown_primary">
              <div className="dropdown_primary--content"></div>
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default HeaderMain;
