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
        <Wrapper className="grid grid-cols-12">
          <div className="col-span-12 p-5 border-b-2 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <h1 className="font-work-sans text-3xl sm:text-4xl font-medium leading-[42.23px] text-left mb-2 sm:mb-0">
                  Order T241019302571
                </h1>
                <p className="flex ml-0 sm:ml-[40px] items-center justify-center w-auto sm:w-[109px] h-[28px] rounded-full text-[14px] bg-[#e2e8f0]">
                  In Progress
                </p>
              </div>
              <button className="border border-[#186737] text-[14px] sm:text-[16px] text-[#186737] py-[6px] px-[10px] rounded mt-2 sm:mt-0">
                Download Invoices
              </button>
            </div>
          </div>
        </Wrapper>

        <Wrapper>
          <div className="flex flex-wrap p-5 justify-between mt-2">
            <div className="flex flex-wrap items-center justify-between w-full sm:w-auto">
              <div className="flex-col mr-[20px] mb-4 sm:mb-0">
                <p className="font-work-sans text-[#64748B] text-[14px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  Created date
                </p>
                <p className="font-work-sans mt-[8px] text-base font-normal leading-[16px] text-left underline-offset-[from-font] decoration-transparent">
                  19 Oct 2024, 04:48 PM
                </p>
              </div>
              <div className="flex-col mr-[20px] mb-4 sm:mb-0">
                <p className="font-work-sans text-[#64748B] text-[14px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  Payment method
                </p>
                <p className="font-work-sans mt-[8px] text-base font-normal leading-[16px] text-left underline-offset-[from-font] decoration-transparent">
                  Cash on Delivery
                </p>
              </div>
              <div className="flex-col mr-[20px] mb-4 sm:mb-0">
                <p className="font-work-sans text-[#64748B] text-[14px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  Payment Status
                </p>
                <p className="font-work-sans mt-[8px] text-[16px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  Payment Pending
                </p>
              </div>

              
            </div>


            <div className="flex items-center justify-center w-full sm:w-auto">
              <div className="flex-col">
                <p className="font-work-sans text-[#64748B] text-end text-[14px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  Total
                </p>
                <p className="font-work-sans mt-[8px] text-[16px] font-normal leading-tight text-left underline-offset-[from-font] decoration-transparent">
                  AED 5500.37
                </p>
              </div>
            </div>
          </div>

        </Wrapper>
      </div>
      <Wrapper className="grid grid-cols-12">

        <div className="border-2 my-[50px] rounded-[15px]">


          <div className="grid grid-cols-12 gap-4 p-5 border-b-2">

            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-2 xl:col-span-2 flex flex-col items-center lg:items-start">
              <p className="text-[22px]">T241019302571S1</p>
              <p className="text-[16px] text-[#64748B]">Shipment 1 of 6</p>
            </div>

            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-8 flex flex-col items-center lg:items-start">

              <div className="flex items-center justify-center w-full mb-4">
                <div className="flex items-center w-full justify-between">

                  <div className="flex items-center justify-center w-7 h-7 z-10 rounded-full bg-[#186737] text-white">1</div>
                  <div className="h-[5px] flex-1 bg-[#186737]"></div>

                  <div className="flex items-center justify-center w-7 h-7 z-10 rounded-full bg-[#186737] text-white">2</div>
                  <div className="h-[5px] flex-1 bg-[#186737]"></div>


                  <div className="flex items-center justify-center w-7 h-7 z-10 rounded-full bg-[#186737] text-white">3</div>
                  <div className="h-[5px] flex-1 bg-[#E2E8F0]"></div>


                  <div className="flex items-center justify-center w-7 h-7 z-10 rounded-full bg-[#E2E8F0] text-white">4</div>
                  <div className="h-[5px] flex-1 bg-[#E2E8F0]"></div>


                  <div className="flex items-center justify-center w-7 h-7 z-10 rounded-full bg-[#E2E8F0] text-white">5</div>
                </div>
              </div>


              <div className="flex justify-between w-full lg:w-[100%] mb-4 px-2">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <p className="text-[12px] font-light text-[#64748B]">Order Placed</p>
                    <p className="text-[14px] font-semibold text-[#64748B]">12-12-2034, Oct</p>
                  </div>
                ))}
              </div>
            </div>




            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-2 xl:col-span-2  justify-center lg:justify-end items-center">
              <button className="w-full lg:w-[180px] text-white rounded h-[42px] bg-[#186737] p-[7px] m-[10px]">
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
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-base text-left font-medium text-[#64748B]">
                      Product
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium text-[#64748B]">
                      Delivery Type
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium text-[#64748B]">
                      Quantity
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium text-[#64748B]">
                      Unit Price
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium text-[#64748B]">
                      Item Status
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium text-[#64748B]">
                      Product SKU
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium text-[#64748B]">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 4, 5, 6, 7, 8, 9].map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-2 text-base text-left font-normal leading-tight">
                        <div className="flex items-center">
                          <img
                            className="border rounded-md w-[70px] h-[70px] mr-[20px]"
                            src="https://via.placeholder.com/70"
                            alt="Product"
                          />
                          Hoshizaki KM-2600SRJZ3 48" Crescent Cuber Icemaker Without Storage Bin, Remote-cooled
                        </div>
                      </td>
                      <td className="px-4 py-2 text-base text-left font-normal leading-tight">
                        Express
                      </td>
                      <td className="px-4 py-2 text-base text-left font-normal leading-tight">
                        15
                      </td>
                      <td className="px-4 py-2 text-base text-left font-normal leading-tight">
                        AED 40.43
                      </td>
                      <td className="px-4 py-2 text-base text-left font-normal leading-tight">
                        Out for Delivery
                      </td>
                      <td className="px-4 py-2 text-base text-left font-normal leading-tight">
                        TR689394772
                      </td>
                      <td className="px-4 py-2 text-base text-left font-normal leading-tight">
                        AED 606.45
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </Wrapper>
      <Wrapper className="grid grid-cols-12">

        <div className="border-2 my-[50px] rounded-[15px]">


          <div className="grid grid-cols-12 gap-4 p-5 border-b-2">

            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-2 xl:col-span-2 flex flex-col items-center lg:items-start">
              <p className="text-[22px]">T241019302571S1</p>
              <p className="text-[16px] text-[#64748B]">Shipment 1 of 6</p>
            </div>

            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-8 flex flex-col items-center lg:items-start">

              <div className="flex items-center justify-center w-full mb-4">
                <div className="flex items-center w-full justify-between">

                  <div className="flex items-center justify-center w-7 h-7 z-10 rounded-full bg-[#186737] text-white">1</div>
                  <div className="h-[5px] flex-1 bg-[#186737]"></div>

                  <div className="flex items-center justify-center w-7 h-7 z-10 rounded-full bg-[#186737] text-white">2</div>
                  <div className="h-[5px] flex-1 bg-[#186737]"></div>


                  <div className="flex items-center justify-center w-7 h-7 z-10 rounded-full bg-[#186737] text-white">3</div>
                  <div className="h-[5px] flex-1 bg-[#E2E8F0]"></div>


                  <div className="flex items-center justify-center w-7 h-7 z-10 rounded-full bg-[#E2E8F0] text-white">4</div>
                  <div className="h-[5px] flex-1 bg-[#E2E8F0]"></div>


                  <div className="flex items-center justify-center w-7 h-7 z-10 rounded-full bg-[#E2E8F0] text-white">5</div>
                </div>
              </div>


              <div className="flex justify-between w-full lg:w-[100%] mb-4 px-2">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <p className="text-[12px] font-light text-[#64748B]">Order Placed</p>
                    <p className="text-[14px] font-semibold text-[#64748B]">12-12-2034, Oct</p>
                  </div>
                ))}
              </div>
            </div>




            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-2 xl:col-span-2 flex justify-center lg:justify-end items-center">
              <button className="w-full lg:w-[180px] text-white rounded h-[42px] bg-[#186737] p-[7px]">
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
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-base text-left font-medium text-[#64748B]">
                      Product
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium text-[#64748B]">
                      Delivery Type
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium text-[#64748B]">
                      Quantity
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium text-[#64748B]">
                      Unit Price
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium text-[#64748B]">
                      Item Status
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium text-[#64748B]">
                      Product SKU
                    </th>
                    <th className="px-4 py-2 text-base text-left font-medium text-[#64748B]">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 4, 5, 6, 7, 8, 9].map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-2 text-base text-left font-normal leading-tight">
                        <div className="flex items-center">
                          <img
                            className="border rounded-md w-[70px] h-[70px] mr-[20px]"
                            src="https://via.placeholder.com/70"
                            alt="Product"
                          />
                          Hoshizaki KM-2600SRJZ3 48" Crescent Cuber Icemaker Without Storage Bin, Remote-cooled
                        </div>
                      </td>
                      <td className="px-4 py-2 text-base text-left font-normal leading-tight">
                        Express
                      </td>
                      <td className="px-4 py-2 text-base text-left font-normal leading-tight">
                        15
                      </td>
                      <td className="px-4 py-2 text-base text-left font-normal leading-tight">
                        AED 40.43
                      </td>
                      <td className="px-4 py-2 text-base text-left font-normal leading-tight">
                        Out for Delivery
                      </td>
                      <td className="px-4 py-2 text-base text-left font-normal leading-tight">
                        TR689394772
                      </td>
                      <td className="px-4 py-2 text-base text-left font-normal leading-tight">
                        AED 606.45
                      </td>
                    </tr>
                  ))}
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
