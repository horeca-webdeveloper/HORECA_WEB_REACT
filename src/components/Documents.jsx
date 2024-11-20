import React, { memo } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { Page,Document } from 'react-pdf/dist/esm/entry.webpack';
import pdf from '../../src/dummy.pdf';
const Documents = ({ docs }) => {
    let documents = [];
    try {
        if (docs) {
            documents = JSON.parse(docs);
        }
    } catch (error) {
        console.error("Error parsing JSON:", error);
    }

    // Convert object to array if documents is an object
    const documentArray = Array.isArray(documents) ? documents : Object.values(documents);

    return (
        <div className="bg-white rounded-md p-5 border-2 border-[#E2E8F0] mt-3">
            {/* Badge Section */}
            <span className="text-black-200 document-text">Resources And Downloads</span>
            <div class="grid grid-cols-3 gap-2">
                {/* Ensure documentArray is an array before using .map */}
                {documentArray.length > 0 ? (
                    documentArray.map((item, index) => {
                        return (
                            <div class="p-1 flex justify-center items-center">
                             <Link to={`https://testhssite.com/storage/${item.path}`} target='_blank'>  

<iframe src={`https://testhssite.com/storage/${item.path}`} scrolling="no" style={{height:'100px',width:'100px',overflow: "hidden"}}/>
                                    {/* <Document file={`https://testhssite.com/storage/${item.path}`} style={{ height: '40px', width: '40px' }}>
                                        <Page pageNumber={1} scale={0.10}/>
                                    </Document> */}
                                    <span className='mt-3 text-xs text-[#186737] font-semibold '>{item.title}</span>
                                    </Link> 
                            </div>

                        );
                    })
                ) : (

                    <Skeleton count={3} />
                )}
            </div>
        </div>
    );
};

export default memo(Documents);
