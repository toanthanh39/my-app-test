import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
interface TData {
  firstname?: string;
  lastname?: string;
  address?: string;
  district?: string;
  ward?: string;
  city?: string;
}
const schema = yup.object({
  firstname: yup.string().required("Tên không được bỏ trống"),
  lastname: yup.string().required("Họ không được bỏ trống"),
  phone: yup
    .string()
    .matches(
      /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
      "Vui lòng nhập số điện thoại"
    )
    .required("Vui lòng nhập số điện thoại"),
  address: yup.string().required("Vui lòng địa chỉ"),
  ward: yup.string().required("Vui lòng chọn địa chỉ phường/xã"),
  district: yup.string().required("Vui lòng chọn địa chỉ quận/huyện"),
  city: yup.string().required("Vui lòng chọn địa chỉ tỉnh/thành phố"),
});
const CheckoutGuest = () => {
  const { handleSubmit, errors, register }: any = useForm<TData>({
    resolver: yupResolver(schema),
  });
  console.log(
    "🚀 ~ file: CheckoutGuest.tsx:32 ~ CheckoutGuest ~ errors",
    errors
  );
  const onSubmit = (data: object) => {
    console.log("🚀 ~ file: CheckoutGuest.tsx:11 ~ onSubmit ~ data", data);
  };
  return (
    <div className="w-full h-auto p-[16px] overflow-x-hidden">
      <div className="w-full h-auto mt-[8px]">
        <h3 className="text-center mb-[24px]">Thanh toán</h3>
        <div className="w-full ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full  flex flex-col gap-[16px]"
          >
            <h1 className=" text-[20px]">Thông tin giao hàng</h1>
            <div className="">
              {/* <div className="inline-block bg-[#004B8F] text-white rounded-[4px] text-center mb-[8px] pl-[10px] py-[2px] px-[10px] ">
              <p className="text-[10px]">Văn phòng</p>
            </div>
            <div className="flex  items-center justify-start gap-1 mb-[8px]"> 
              <p>Nam Nguyen</p>
              <p>-</p>
              <p>0123456789</p>
            </div>
            <p>420/6 Lê Văn Sỹ P.14, Q3, TP. Hồ Chí Minh</p> */}
              <div className="mt-[16px] relative">
                <label className="text-[12px] text-[#898889] block" htmlFor="">
                  Tên
                </label>
                <input
                  type="text"
                  placeholder="firstname"
                  className="border border-x-0 border-t-0 w-full pt-[4px] pb-[4px] focus:outline-none"
                  name="firstname"
                  {...register("firstname")}
                />
                {errors?.firstname && (
                  <p className="text-red-500 absolute right-0 top-[50%]">*</p>
                )}
              </div>
              <div className="mt-[16px]">
                <label className="text-[12px] text-[#898889] block" htmlFor="">
                  Họ
                </label>
                <input
                  type="text"
                  placeholder="nam"
                  className="border border-x-0 border-t-0 w-full pt-[4px] pb-[4px] focus:outline-none"
                  name="lastname"
                  {...register("lastname")}
                />
              </div>
              <div className="mt-[16px]">
                <label className="text-[12px] text-[#898889] block" htmlFor="">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  placeholder="0987654321"
                  className="border border-x-0 border-t-0 w-full pt-[4px] pb-[4px] focus:outline-none"
                  name="phone"
                  {...register("phone")}
                />
              </div>
              <div className="mt-[16px]">
                <label className="text-[12px] text-[#898889] block" htmlFor="">
                  Địa chỉ
                </label>
                <input
                  type="100 Le Van Sy"
                  placeholder="nam"
                  className="border border-x-0 border-t-0 w-full pt-[4px] pb-[4px] focus:outline-none"
                  name="address"
                  {...register("address")}
                />
              </div>
              <div className="mt-[16px] flex justify-between gap-[8px]">
                <div className="w-[50%]">
                  <label
                    className="text-[12px] text-[#898889] block"
                    htmlFor=""
                  >
                    Phường/Xã
                  </label>
                  <select
                    className="border border-x-0 border-t-0 pt-[4px] pb-[4px] focus:outline-none w-full"
                    name="ward"
                    {...register("ward")}
                  >
                    <option value="">Chọn phường xã</option>
                    <option value="Phường 14">Phường 14</option>
                    <option value="Phường 13">Phường 13</option>
                  </select>
                </div>
                <div className="w-[50%]">
                  <label
                    className="text-[12px] text-[#898889] block"
                    htmlFor=""
                  >
                    Quận/Huyện
                  </label>
                  <select
                    className="border border-x-0 border-t-0 pt-[4px] pb-[4px] focus:outline-none w-full"
                    name="district"
                    {...register("district")}
                  >
                    <option value="">Chọn quận huyện</option>
                    <option value="Quận Bình Thạnh">Phường 14</option>
                    <option value="Quận Tân Bình">Quận Tân Bình</option>
                  </select>
                </div>
              </div>

              <div className="mt-[16px] flex justify-between gap-[8px]">
                <div className="w-full">
                  <label
                    className="text-[12px] text-[#898889] block"
                    htmlFor=""
                  >
                    Tỉnh/Thành phố
                  </label>
                  <select
                    className="border border-x-0 border-t-0 pt-[4px] pb-[4px] focus:outline-none w-full"
                    name="city"
                    {...register("city")}
                  >
                    <option value="">Chọn Tỉnh/Thành phó</option>
                    <option value="hcm">Hồ Chí Minh</option>
                    <option value="hn">Hà Nội</option>
                  </select>
                </div>
              </div>
              <div className="overflow-hidden relative w-full mt-[28px]">
                <div className="flex overflow-x-scroll">
                  <div className="flex-1    w-[35%] relative">
                    <input
                      type="radio"
                      className=" text-red bg-red checked:bg-red mr-[11px]"
                      name="another"
                      value="home"
                      {...register("another")}
                    />
                    <label htmlFor="">nhà</label>
                  </div>
                  <div className="flex-1    w-[20%] relative">
                    <input
                      type="radio"
                      className=" text-red bg-red checked:bg-red  mr-[11px]"
                      name="another"
                      value="company"
                      {...register("another")}
                    />
                    <label htmlFor="">Công ty</label>
                  </div>
                  <div className="flex-1    w-[25%] relative">
                    <input
                      type="radio"
                      className="text-red form-radio  mr-[11px]"
                      name="another"
                      value="another"
                      {...register("another")}
                    />
                    <label htmlFor="">khác</label>
                  </div>
                </div>
              </div>

              {/* <div className="mt-[16px] flex justify-between gap-[8px]">
                <div className="w-[50%]">
                  <button
                    type="submit"
                    className="bg-[#d72229] mt-[24px] h-[34px] rounded-[4px] w-[100%] flex justify-center text-white leading-[34px]"
                  >
                    Lưu địa chỉ
                  </button>
                </div>
                <div className="w-[50%]">
                  <button className="bg-white border-solid border-[1px]  mt-[24px] h-[34px] rounded-[4px] w-[100%] flex justify-center leading-[34px]">
                    Hủy
                  </button>
                </div>
              </div> */}
            </div>
            <div className="">
              <label
                className="block mb-[8px] text-[#3A393A] font-[700]"
                htmlFor="note"
              >
                Ghi chú
              </label>
              <input
                id="note"
                className="h-[50px] w-full pl-[16px] border-1 border-[#D8D7D8] "
                type="text"
                placeholder="Nhập ghi chú (nếu có)"
              />
            </div>
            <div className="mt-[24px]">
              <h3 className="mb-[16px] font-[500] text-[20px] text-[#3A393A] leading-[24px]">
                Phương thức vận chuyển
              </h3>
              <div className="h-[72px] w-full border-solid border-[1px] border-[#D8D7D8] bg-[#F7F7F7] flex items-center gap-[8px] px-[22px] py-[18px] ">
                <div className="">
                  <img src="/asset/images/Box_light.png " alt="" />
                </div>
                <div className="">
                  <p className="font-[700] text-[14px]">
                    Giao hàng miễn phí toàn quốc
                  </p>
                  <p className="text-[12px] leading-[15px] text-[#3A393A]">
                    Giao nhanh 2H TP.HCM
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-[24px]">
              <h3 className="mb-[16px] font-[500] text-[20px] text-[#3A393A] leading-[24px]">
                Phương thức thanh toán
              </h3>
              <label className="h-[49px] w-full border-solid border-[1px] border-[#D8D7D8] bg-[#F7F7F7] flex items-center gap-[8px] px-[22px] py-[18px] mb-[8px]  cursor-pointer select-none  ">
                <input
                  type="radio"
                  name="pay"
                  id="pays"
                  className="cursor-pointer "
                  value="code"
                  {...register("pay")}
                />
                <div className="">
                  <p className="text-[12px] leading-[15px] text-[#3A393A]">
                    <strong className="font-[700] leading-[17px]">COD </strong>
                    (Thanh toán khi nhận hàng)
                  </p>
                </div>
              </label>
              <label className="h-[49px] w-full border-solid border-[1px] border-[#D8D7D8] bg-[#F7F7F7] flex items-center gap-[8px] px-[22px] py-[18px] mb-[8px] cursor-pointer select-none ">
                <input
                  type="radio"
                  name="pay"
                  id="pays"
                  className="cursor-pointer "
                  value="transfer"
                  {...register("pay")}
                />

                <div className="">
                  <p className="text-[12px] leading-[15px] text-[#3A393A]">
                    <strong className="font-[700] leading-[17px]">
                      CHUYỂN KHOẢN
                    </strong>
                    (Thanh toán bằng chuyển khoản)
                  </p>
                </div>
              </label>
              <label className="h-[49px] w-full border-solid border-[1px] border-[#D8D7D8] bg-[#F7F7F7] flex items-center gap-[8px] px-[22px] py-[18px] mb-[8px] cursor-pointer select-none  ">
                <input
                  type="radio"
                  name="pay"
                  id="pays"
                  className="cursor-pointer "
                  value="bank"
                  {...register("pay")}
                />

                <div className="">
                  <p className="text-[12px] leading-[15px] text-[#3A393A]">
                    <strong className="font-[700] leading-[17px]">
                      NGÂN HÀNG
                    </strong>
                    (Thanh toán qua ngân hàng)
                  </p>
                </div>
              </label>
            </div>
            <div className="mt-[24px]">
              <h3 className="mb-[16px] font-[500] text-[20px] text-[#3A393A] leading-[24px]">
                Thông tin xuất hoá đơn
              </h3>
              <div className=" border-solid border-[1px] border-[#D8D7D8] bg-[#F7F7F7] p-[16px]">
                <div className="flex gap-[10px] items-start ">
                  <img src="/asset/images/success.png" alt="" />
                  <p>
                    <strong className="font-[700]">Xuất hoá đơn</strong> (Quý
                    khách cần xuất hoá đơn mua hàng, vui lòng nhập thông tin tại
                    đây)
                  </p>
                </div>
                <div className="">
                  <div className="group relative h-[40px] mt-[16px]">
                    <input
                      type="email"
                      className=" relative h-full w-full p-1 border-x-0 border-t-0 bg-transparent hover:outline-none "
                      id="email"
                      {...register("email_kh")}
                    />
                    <label
                      htmlFor="email"
                      className="group-focus:text-red-600  absolute top-[40%] left-0 z-[5] group-hover:top-[-10px] group-hover:left-0 transition-all"
                    >
                      Email nhận hoá đơn
                    </label>
                  </div>
                  <div className="group relative h-[40px] mt-[16px]">
                    <input
                      type="text"
                      className=" relative h-full w-full p-1 border-x-0 border-t-0 bg-transparent hover:outline-none "
                      id="name"
                      {...register("name_kh")}
                    />
                    <label
                      htmlFor="name"
                      className="group-hover:text-red-600  absolute top-[40%] left-0 z-[5] group-hover:top-[-10px] group-hover:left-0 transition-all"
                    >
                      Tên người nhận hoá đơn
                    </label>
                  </div>
                  <div className="group relative h-[40px] mt-[16px]">
                    <input
                      type="text"
                      className=" relative h-full w-full p-1 border-x-0 border-t-0 bg-transparent hover:outline-none "
                      id="company"
                      {...register("company_kh")}
                    />
                    <label
                      htmlFor="company"
                      className="group-hover:text-red-600  absolute top-[40%] left-0 z-[5] group-hover:top-[-10px] group-hover:left-0 transition-all"
                    >
                      Tên công ty
                    </label>
                  </div>
                  <div className="group relative h-[40px] mt-[16px]">
                    <input
                      type="number"
                      className=" relative h-full w-full p-1 border-x-0 border-t-0 bg-transparent hover:outline-none "
                      id="tax"
                      {...register("tax_kh")}
                    />
                    <label
                      htmlFor="tax"
                      className="group-hover:text-red-600  absolute top-[40%] left-0 z-[5] group-hover:top-[-10px] group-hover:left-0 transition-all"
                    >
                      Mã số thuế
                    </label>
                  </div>
                  <div className="group relative h-[40px] mt-[16px]">
                    <input
                      type="text"
                      className=" relative h-full w-full p-1 border-x-0 border-t-0 bg-transparent hover:outline-none "
                      id="address"
                      {...register("address_kh")}
                    />
                    <label
                      htmlFor="address"
                      className="group-hover:text-red-600  absolute top-[40%] left-0 z-[5] group-hover:top-[-10px] group-hover:left-0 transition-all"
                    >
                      Địa chỉ công ty
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="group mt-[24px] border-solid border-[1px] border-[#D8D7D8] py-[8px] px-[16px] ">
              <p className="font-[700]">Đơn hàng</p>
              <div className="flex border-solid border-[1px] border-x-0 border-t-0 border-[#D8D7D8] h-[103px] gap-[8px]">
                <div className="w-[87px] h-[87px]    ">
                  <img src="/asset/images/product.png" alt="" />
                </div>
                <div className="p-[4px] text-[12px]">
                  <h2 className="font-[700] h-[15px]  leading-[15px]">
                    DOLCE & GABBANA
                  </h2>

                  <p className="text-[1em] leading-[15px]">
                    Dolce & Gabbana Dolce Lily Intense Eau de Toilette
                  </p>
                  <p className="text-[1em] leading-[15px]">Capacity: 100ml</p>
                  <p className="text-[1em] leading-[15px] inline-block">
                    Quantity: 1
                  </p>
                  <p className="text-[#D72229] inline-block float-right">
                    1,290,000đ
                  </p>
                </div>
              </div>
              <div className="flex border-solid border-[1px] border-x-0 border-t-0 border-[#D8D7D8] h-[103px] gap-[8px]">
                <div className="w-[87px] h-[87px]    ">
                  <img src="/asset/images/product.png" alt="" />
                </div>
                <div className="p-[4px] text-[12px]">
                  <h2 className="font-[700] h-[15px]  leading-[15px]">
                    DOLCE & GABBANA
                  </h2>

                  <p className="text-[1em] leading-[15px]">
                    Dolce & Gabbana Dolce Lily Intense Eau de Toilette
                  </p>
                  <p className="text-[1em] leading-[15px]">Capacity: 100ml</p>
                  <p className="text-[1em] leading-[15px] inline-block">
                    Quantity: 1
                  </p>
                  <p className="text-[#D72229] inline-block float-right">
                    1,290,000đ
                  </p>
                </div>
              </div>
              <div className="flex border-solid border-[1px] border-x-0 border-t-0 border-[#D8D7D8] h-[103px] gap-[8px]">
                <div className="w-[87px] h-[87px]    ">
                  <img src="/asset/images/product.png" alt="" />
                </div>
                <div className="p-[4px] text-[12px]">
                  <h2 className="font-[700] h-[15px]  leading-[15px]">
                    DOLCE & GABBANA
                  </h2>

                  <p className="text-[1em] leading-[15px]">
                    Dolce & Gabbana Dolce Lily Intense Eau de Toilette
                  </p>
                  <p className="text-[1em] leading-[15px]">Capacity: 100ml</p>
                  <p className="text-[1em] leading-[15px] inline-block">
                    Quantity: 1
                  </p>
                  <p className="text-[#D72229] inline-block float-right">
                    1,290,000đ
                  </p>
                </div>
              </div>
              <div className=" flex border-solid border-x-0 border-t-0 border-[#D8D7D8] h-[103px] gap-[8px] last:border-y-0">
                <div className="w-[87px] h-[87px]    ">
                  <img src="/asset/images/product.png" alt="" />
                </div>
                <div className="p-[4px] text-[12px]">
                  <h2 className="font-[700] h-[15px]  leading-[15px]">
                    DOLCE & GABBANA
                  </h2>

                  <p className="text-[1em] leading-[15px]">
                    Dolce & Gabbana Dolce Lily Intense Eau de Toilette
                  </p>
                  <p className="text-[1em] leading-[15px]">Capacity: 100ml</p>
                  <p className="text-[1em] leading-[15px] inline-block">
                    Quantity: 1
                  </p>
                  <p className="text-[#D72229] inline-block float-right">
                    1,290,000đ
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <h4>Mã giảm giá</h4>
              <div className="flex gap-[8px] mt-[8px] h-[31px]">
                <input
                  type="text"
                  className="rounded-[4px] border-solid border-[1px] border-[#898889] h-full flex-1"
                  {...register("sale")}
                />
                <button className="w-[65px] h-full bg-[#898889] text-white border-none hover:bg-blue-500">
                  Áp dụng
                </button>
              </div>
            </div>
            <div className="border-solid border-[1px] border-x-0 border-t-0 border-[#D8D7D8]">
              <div className="mb-[16px]">
                <p className="inline">Tạm tính</p>
                <p className="inline-block float-right ">3,200,000đ</p>
              </div>
              <div className="mb-[16px]">
                <p className="inline">Phí vận chuyển</p>
                <p className="inline float-right">Free</p>
              </div>
            </div>
            <div className="">
              <p className="inline">Tổng cộng</p>
              <p className="inline float-right text-[#D72229] font-[700]">
                3,200,000đ
              </p>
              <button
                type="submit"
                className=" block w-full border-none text-white rounded-[4px] h-[34px] bg-[#D72229] my-[40px]"
              >
                Thanh toán
              </button>
              <div className="text-[14px] font-[400]">
                <p className="mb-[16px]">
                  Prices do not include import duties, which must be paid upon
                  delivery.
                </p>
                <p>
                  By completing the order process, I declare that I have read
                  and understand the General Terms & Conditions, the Return
                  Policy and the Privacy Policy as stated on NAMPERFUME.NET.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutGuest;
