import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { apiClient } from "../../../../utils/apiWrapper";
import { InfinitySpin } from 'react-loader-spinner';
const Popup = ({ setShowPopup, popupHeading }) => {
  const [loader, setLoader] = useState(false);
  const [getData,setData]=useState([]);
  const handleForm = async (data) => {

    const datas = {
      
    };

    try {
      setLoader(true);
      const response = await apiClient.post(`/create-payment`, datas);
      setData(response.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoader(false);
    }
  }

  const schema = yup
    .object({
      name: yup.string().required(),
      phone: yup.number().positive().integer().required(),
      email: yup.string().required(),
      country: yup.string().required(),
      state: yup.string().required(),
      city: yup.string().required(),
      address: yup.string().required(),
    })
    .required();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
  
    handleForm(data);
  }

  useEffect(()=>{
      if(getData.status=="success" && getData.redirect_url){
        window.location.href = getData.redirect_url;
      }
  },[getData]);
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
        <div className="modal-bg absolute inset-0 bg-gray-800 opacity-50"></div>
        <div className="modal relative bg-white w-[650px] flex flex-col rounded-lg shadow-lg">
          <div className="flex items-center justify-between bg-[#DEF9EC] rounded-t-lg p-2">
            <p className="font-sans p-[5px] text-lg text-[#000000] font-medium leading-[21.11px] text-left decoration-skip-ink-none underline-offset-4">
              {popupHeading}
            </p>
            <button onClick={() => setShowPopup(false)}>X</button>
          </div>
        
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-[5px]">
           
              <div className="mt-[10px]">
                <p className="font-sans ml-[10px] p-[5px] text-lg text-[#000000] font-medium leading-[21.11px] text-left decoration-skip-ink-none underline-offset-4">
                  Country :
                </p>
                <input
                  className="border-2 rounded ml-[2%] p-[5px] w-[96%]"
                  placeholder="Enter your country."
                  {...register("country")}
                />
                <span>{errors.country?.message}</span>
              </div>

              <div className="mt-[10px]">
                <p className="font-sans ml-[10px] p-[5px] text-lg text-[#000000] font-medium leading-[21.11px] text-left decoration-skip-ink-none underline-offset-4">
                  City :
                </p>
                <input
                  type="text"
                  className="border-2 rounded ml-[2%] p-[5px] w-[96%]"
                  placeholder="Enter your city"
                  {...register("city")}
                />
                <span>{errors.city?.message}</span>
              </div>
              <div className="mt-[10px]">
                <p className="font-sans ml-[10px] p-[5px] text-lg text-[#000000] font-medium leading-[21.11px] text-left decoration-skip-ink-none underline-offset-4">
                  State :
                </p>
                <input
                  type="text"
                  className="border-2 rounded ml-[2%] p-[5px] w-[96%]"
                  placeholder="Enter your state"
                  {...register("state")}
                />
                <span>{errors.state?.message}</span>
              </div>
              {/* <div className="mt-[10px]">
              <p className="font-sans ml-[10px] p-[5px] text-lg text-[#000000] font-medium leading-[21.11px] text-left decoration-skip-ink-none underline-offset-4">
                ZIP Code :
              </p>
              <input
                type="text"
                className="border-2 rounded ml-[2%] p-[5px] w-[96%]"
                placeholder="Address"
              />
            </div> */}

              <div className="mt-[10px]">
                <p className="font-sans ml-[10px] p-[5px] text-lg text-[#000000] font-medium leading-[21.11px] text-left decoration-skip-ink-none underline-offset-4">
                  Address :
                </p>
                <input
                  type="text"
                  className="border-2 rounded ml-[2%] p-[5px] w-[96%]"
                  placeholder="Enter your address"
                  {...register("address")}
                />
                <span>{errors.address?.message}</span>
              </div>
              <div className="flex items-center justify-end p-[15px]">
                <button
                  onClick={() => setShowPopup(false)}
                  className="flex m-[10px] items-center justify-center rounded-md font-sans w-[180px] h-[40px] border border-[#666666] text-[16px] text-[#666666] font-medium leading-[16px] text-left underline-offset-auto decoration-slice"
                >
                  Cancel
                </button>
                <button type="submit" className="flex mb-[5px] bg-[#DEF9EC] items-center justify-center rounded-md font-sans w-[180px] h-[40px] text-[#186737] text-[16px] font-medium leading-[16px] text-left underline-offset-auto decoration-slice">
                  Submit
                </button>
               {loader?<InfinitySpin
                                            visible={true}
                                            height="120"
                                            width="120"
                                            color="#186737"
                                            ariaLabel="infinity-spin-loading"
                                        />:''} 
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
