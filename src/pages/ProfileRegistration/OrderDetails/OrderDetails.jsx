import React from "react";
import { Wrapper } from "../../../shared/Wrapper";
import { Breadcrumb } from "../../../shared/Breadcrumb";

const OrderDetails = () => {
  const collectionBreadCrumb = [
    {
      url: "/",
      title: "Your Account",
    },
    {
      url: "/",
      title: "Profile",
    },
  ];
  return (
    <>
      <Wrapper>
        <Breadcrumb items={collectionBreadCrumb} classes={"mt-4 mb-2"} />
      </Wrapper>
      <div className="bg-[#f7fafc] border-b-2 border-t-2">
        <Wrapper>
          <div className="flex items-center p-5 justify-between border-b-2 ">
            <div className="flex items-center">
              <h1 className="font-work-sans text-4xl  font-medium leading-[42.23px] text-left underline-offset-[from-font] decoration-transparent">
                Order T241019302571
              </h1>
              <p className="flex ml-[40px] items-center justify-center w-[109px] h-[28px] rounded-full text-[14px] bg-[#e2e8f0]">
                In Progress
              </p>
            </div>
            <button className="border  border-[#186737] text-[16px] text-[#186737] py-[6px] px-[10px] rounded">
              Download Invoices
            </button>
          </div>
        </Wrapper>
        <Wrapper>
          <div className="flex p-5 justify-between mt-2">
            <div className="flex items-center  justify-center">
              <div className="flex-col mr-[20px]">
                <p className="font-work-sans text-[#64748B] text-[14px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  Created date
                </p>
                <p className="font-work-sans mt-[8px] text-base font-normal leading-[16px] text-left underline-offset-[from-font] decoration-transparent">
                  19 Oct 2024, 04:48 PM
                </p>
              </div>
              <div className="flex-col mr-[20px]">
                <p className="font-work-sans text-[#64748B] text-[14px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  Payment method
                </p>
                <p className="font-work-sans mt-[8px] text-base font-normal leading-[16px] text-left underline-offset-[from-font] decoration-transparent">
                  Cash on Delivery
                </p>
              </div>
              <div className="flex-col mr-[20px]">
                <p className="font-work-sans text-[#64748B] text-[14px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  Payment Status
                </p>
                <p className="font-work-sans mt-[8px] text-[16px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  Payment Pending
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col">
                <p className="font-work-sans text-[#64748B] text-end text-[14px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  total
                </p>
                <p className="font-work-sans mt-[8px] text-[16px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  AED 5500.37
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <div className="border-2 my-[50px] rounded-[15px]">
          <div className="flex items-center justify-between p-5 ">
            <div>
              <p className="text-[22px]">T241019302571S1</p>
              <p className="text-[16px] text-[#64748B]">Shipment 1 of 6</p>
            </div>
            <div className="flex flex-col justify-between items-center">
              <div class="flex items-center justify-center w-[50vw] mb-2">
                <div class="h-[5px] flex-1 bg-[#186737]"></div>
                <div class="flex items-center justify-center w-7 h-7 z-10 rounded-full bg-[#186737] text-white">
                  1
                </div>
                <div class="h-[5px] flex-1 bg-[#186737]"></div>
                <div class="flex items-center justify-center w-7 h-7 z-10 rounded-full bg-[#186737] text-white">
                  2
                </div>
                <div class="h-[5px] flex-1 bg-[#186737]"></div>
                <div class="flex items-center justify-center w-7 h-7 z-10 rounded-full bg-[#186737] text-white">
                  3
                </div>
                <div class="h-[5px] flex-1 bg-[#E2E8F0]"></div>
                <div class="flex items-center justify-center w-7 h-7 z-10 rounded-full bg-[#E2E8F0] text-white">
                  4
                </div>
                <div class="h-[5px] flex-1 bg-[#E2E8F0]"></div>
                <div class="flex items-center justify-center w-7 h-7 z-10 rounded-full bg-[#E2E8F0] text-white">
                  5
                </div>
                <div class="h-[5px] flex-1 bg-[#E2E8F0]"></div>
              </div>
              <div className="flex">
                <div className="ml-[15px] mr-[30px]">
                  <p className="text-[12px] font-light text-[#64748B] text-center">
                    Order Placed
                  </p>
                  <p className="text-[14px] font-semibold text-[#64748B] text-center">
                    12-12-2034, Oct
                  </p>
                </div>
                <div className="ml-[15px] mr-[30px]">
                  <p className="text-[12px] font-light text-[#64748B] text-center">
                    Order Placed
                  </p>
                  <p className="text-[14px] font-semibold text-[#64748B] text-center">
                    12-12-2034, Oct
                  </p>
                </div>
                <div className="ml-[15px] mr-[30px]">
                  <p className="text-[12px] font-light text-[#64748B] text-center">
                    Order Placed
                  </p>
                  <p className="text-[14px] font-semibold text-[#64748B] text-center">
                    12-12-2034, Oct
                  </p>
                </div>
                <div className="ml-[15px] mr-[30px]">
                  <p className="text-[12px] font-light text-[#64748B] text-center">
                    Order Placed
                  </p>
                  <p className="text-[14px] font-semibold text-[#64748B] text-center">
                    12-12-2034, Oct
                  </p>
                </div>
                <div className="ml-[15px] mr-[30px]">
                  <p className="text-[12px] font-light text-[#64748B] text-center">
                    Order Placed
                  </p>
                  <p className="text-[14px] font-semibold text-[#64748B] text-center">
                    12-12-2034, Oct
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button className="flex items-center justify-center text-white rounded h-[42px w-[180px] bg-[#186737] p-[7px]">
                Track Shipment
              </button>
            </div>
          </div>
          <div className="flex p-5 justify-between border-t-2">
            <div className="flex items-center justify-center">
              <div className="flex-col mr-[20px]">
                <p className="font-work-sans text-[#64748B] text-[14px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  Estimated delivery
                </p>
                <p className="font-work-sans mt-[8px] text-base font-normal leading-[16px] text-left underline-offset-[from-font] decoration-transparent">
                  Sun, 20 Oct
                </p>
              </div>
              <div className="flex-col mr-[20px]">
                <p className="font-work-sans text-[#64748B] text-[14px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  Shipment method
                </p>
                <p className="font-work-sans mt-[8px] text-base font-normal leading-[16px] text-left underline-offset-[from-font] decoration-transparent">
                  Horeca logistics
                </p>
              </div>
              <div className="flex-col mr-[20px]">
                <p className="font-work-sans text-[#64748B] text-[14px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  Shipment cost
                </p>
                <p className="font-work-sans mt-[8px] text-[16px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  Free
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col">
                <p className="font-work-sans text-[#64748B] text-end text-[14px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  subtotal
                </p>
                <p className="font-work-sans mt-[8px] text-[16px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  AED 5500.37
                </p>
              </div>
            </div>
          </div>
          <div className="p-[10px] bg-[#E2E8F033] border-2 m-5 rounded-lg">
            <div className="">
              <table className="">
                <thead>
                  <tr className="">
                    <th className="px-4 py-2 text-base text-left font-medium leading-custom text-left underline decoration-transparent">
                      Product
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium leading-custom text-left underline decoration-transparent">
                      Delivery Type
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium leading-custom text-left underline decoration-transparent">
                      Quantity
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium leading-custom text-left underline decoration-transparent">
                      Unit Price
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium leading-custom text-left underline decoration-transparent">
                      Item Status
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium leading-custom text-left underline decoration-transparent">
                      Product SKU
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium leading-custom text-left underline decoration-transparent">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 4, 5, 6, 7, 8, 9]?.map((item) => {
                    return (
                      <tr key={1} className="">
                        <td className="px-4 py-2 text-base font-normal w-[40%] leading-custom text-left underline decoration-transparent">
                          <div className="flex items-end">
                            <img
                              className="border rounded-md w-[70px] h-[70px] mr-[20px]"
                              src=""
                            />
                            Hoshizaki KM-2600SRJZ3 48" Crescent Cuber Icemaker
                            Without Storage Bin, Remote-cooled
                          </div>
                        </td>
                        <td className="px-4 py-2 text-base text-left font-normal leading-custom text-left underline decoration-transparent">
                          Express
                        </td>
                        <td className="px-4 py-2 text-base text-left font-normal leading-custom text-left underline decoration-transparent">
                          15
                        </td>
                        <td className="px-4 py-2 text-base text-left font-normal leading-custom text-left underline decoration-transparent">
                          AED 40.43
                        </td>
                        <td className="px-4 py-2 text-base text-left font-normal leading-custom text-left underline decoration-transparent">
                          Out for Delivery
                        </td>
                        <td className="px-4 py-2 text-base text-left font-normal leading-custom text-left underline decoration-transparent">
                          TR689394772
                        </td>
                        <td className="px-4 py-2 text-base text-left font-normal leading-custom text-left underline decoration-transparent">
                          AED 606.45
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="border-2 my-[50px] rounded-[15px]">
          <div className="flex items-center justify-between p-5 ">
            <div>
              <p className="text-[22px]">T241019302571S1</p>
              <p className="text-[16px] text-[#64748B]">Shipment 1 of 6</p>
            </div>
            <div className="flex flex-col justify-between items-center">
              <div class="flex items-center justify-center w-[50vw] mb-2">
                <div class="h-[5px] flex-1 bg-[#186737]"></div>
                <div class="flex items-center justify-center w-7 h-7 z-10 rounded-full bg-[#186737] text-white">
                  1
                </div>
                <div class="h-[5px] flex-1 bg-[#186737]"></div>
                <div class="flex items-center justify-center w-7 h-7 z-10 rounded-full bg-[#186737] text-white">
                  2
                </div>
                <div class="h-[5px] flex-1 bg-[#186737]"></div>
                <div class="flex items-center justify-center w-7 h-7 z-10 rounded-full bg-[#186737] text-white">
                  3
                </div>
                <div class="h-[5px] flex-1 bg-[#E2E8F0]"></div>
                <div class="flex items-center justify-center w-7 h-7 z-10 rounded-full bg-[#E2E8F0] text-white">
                  4
                </div>
                <div class="h-[5px] flex-1 bg-[#E2E8F0]"></div>
                <div class="flex items-center justify-center w-7 h-7 z-10 rounded-full bg-[#E2E8F0] text-white">
                  5
                </div>
                <div class="h-[5px] flex-1 bg-[#E2E8F0]"></div>
              </div>
              <div className="flex">
                <div className="ml-[15px] mr-[30px]">
                  <p className="text-[12px] font-light text-[#64748B] text-center">
                    Order Placed
                  </p>
                  <p className="text-[14px] font-semibold text-[#64748B] text-center">
                    12-12-2034, Oct
                  </p>
                </div>
                <div className="ml-[15px] mr-[30px]">
                  <p className="text-[12px] font-light text-[#64748B] text-center">
                    Order Placed
                  </p>
                  <p className="text-[14px] font-semibold text-[#64748B] text-center">
                    12-12-2034, Oct
                  </p>
                </div>
                <div className="ml-[15px] mr-[30px]">
                  <p className="text-[12px] font-light text-[#64748B] text-center">
                    Order Placed
                  </p>
                  <p className="text-[14px] font-semibold text-[#64748B] text-center">
                    12-12-2034, Oct
                  </p>
                </div>
                <div className="ml-[15px] mr-[30px]">
                  <p className="text-[12px] font-light text-[#64748B] text-center">
                    Order Placed
                  </p>
                  <p className="text-[14px] font-semibold text-[#64748B] text-center">
                    12-12-2034, Oct
                  </p>
                </div>
                <div className="ml-[15px] mr-[30px]">
                  <p className="text-[12px] font-light text-[#64748B] text-center">
                    Order Placed
                  </p>
                  <p className="text-[14px] font-semibold text-[#64748B] text-center">
                    12-12-2034, Oct
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button className="flex items-center justify-center text-white rounded h-[42px w-[180px] bg-[#186737] p-[7px]">
                Track Shipment
              </button>
            </div>
          </div>
          <div className="flex p-5 justify-between border-t-2">
            <div className="flex items-center justify-center">
              <div className="flex-col mr-[20px]">
                <p className="font-work-sans text-[#64748B] text-[14px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  Estimated delivery
                </p>
                <p className="font-work-sans mt-[8px] text-base font-normal leading-[16px] text-left underline-offset-[from-font] decoration-transparent">
                  Sun, 20 Oct
                </p>
              </div>
              <div className="flex-col mr-[20px]">
                <p className="font-work-sans text-[#64748B] text-[14px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  Shipment method
                </p>
                <p className="font-work-sans mt-[8px] text-base font-normal leading-[16px] text-left underline-offset-[from-font] decoration-transparent">
                  Horeca logistics
                </p>
              </div>
              <div className="flex-col mr-[20px]">
                <p className="font-work-sans text-[#64748B] text-[14px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  Shipment cost
                </p>
                <p className="font-work-sans mt-[8px] text-[16px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  Free
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col">
                <p className="font-work-sans text-[#64748B] text-end text-[14px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  subtotal
                </p>
                <p className="font-work-sans mt-[8px] text-[16px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  AED 5500.37
                </p>
              </div>
            </div>
          </div>
          <div className="p-[10px] bg-[#E2E8F033] border-2 m-5 rounded-lg">
            <div className="">
              <table className="">
                <thead>
                  <tr className="">
                    <th className="px-4 py-2 text-base text-left font-medium leading-custom text-left underline decoration-transparent">
                      Product
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium leading-custom text-left underline decoration-transparent">
                      Delivery Type
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium leading-custom text-left underline decoration-transparent">
                      Quantity
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium leading-custom text-left underline decoration-transparent">
                      Unit Price
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium leading-custom text-left underline decoration-transparent">
                      Item Status
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium leading-custom text-left underline decoration-transparent">
                      Product SKU
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium leading-custom text-left underline decoration-transparent">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 4, 5, 6, 7, 8, 9]?.map((item) => {
                    return (
                      <tr key={1} className="">
                        <td className="px-4 py-2 text-base font-normal w-[40%] leading-custom text-left underline decoration-transparent">
                          <div className="flex items-end">
                            <img
                              className="border rounded-md w-[70px] h-[70px] mr-[20px]"
                              src=""
                            />
                            Hoshizaki KM-2600SRJZ3 48" Crescent Cuber Icemaker
                            Without Storage Bin, Remote-cooled
                          </div>
                        </td>
                        <td className="px-4 py-2 text-base text-left font-normal leading-custom text-left underline decoration-transparent">
                          Express
                        </td>
                        <td className="px-4 py-2 text-base text-left font-normal leading-custom text-left underline decoration-transparent">
                          15
                        </td>
                        <td className="px-4 py-2 text-base text-left font-normal leading-custom text-left underline decoration-transparent">
                          AED 40.43
                        </td>
                        <td className="px-4 py-2 text-base text-left font-normal leading-custom text-left underline decoration-transparent">
                          Out for Delivery
                        </td>
                        <td className="px-4 py-2 text-base text-left font-normal leading-custom text-left underline decoration-transparent">
                          TR689394772
                        </td>
                        <td className="px-4 py-2 text-base text-left font-normal leading-custom text-left underline decoration-transparent">
                          AED 606.45
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default OrderDetails;
