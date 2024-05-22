import React, { useState } from 'react';

const ReUseContent = () => {
    const [fastV, setFastV] = useState(false)
    const [secondV, setSecondV] = useState(false)
    const [thirdV, setThirdV] = useState(false)
    const [fourV, setfourV] = useState(false)
    const [fiveV, setfiveV] = useState(false)
    const [sixV, setSixV] = useState(false)
    const [sevenV, setSevenV] = useState(false)
    return (
        <div className={`h-full flex w-full border-2`}>
            {
                !fastV ?
                    <div className={`h-full w-full bg-sky-200 flex justify-center items-center`}>
                        <button className='p-2 h-10 w-16 border' onClick={() => setFastV(true)}>V</button>
                        <button className='p-2 h-10 w-16 border' >H</button>
                    </div>
                    :
                    <div className='h-full w-full flex border relative'>
                        <button className='absolute top-0 right-0 rounded-full border bg-red-600/30 h-10 w-10 z-10' onClick={() => setFastV(false)}>-</button>
                        <div className='w-1/2 border h-full'>
                            {
                                !secondV ?
                                    <div className={`h-full w-full bg-green-200 flex justify-center items-center`}>
                                        <button className='p-2 h-10 w-16 border' onClick={() => setSecondV(true)}>V</button>
                                    </div>
                                    :
                                    <div className='h-full w-full flex border relative'>
                                        <button className='absolute z-10 top-0 right-0 rounded-full border bg-red-600/30 h-10 w-10' onClick={() => setSecondV(false)}>-</button>
                                        <div className='w-1/2 h-full flex border relative '>
                                            {
                                                !fourV ?
                                                    <div className={`h-full w-full bg-green-200 flex justify-center items-center`}>
                                                        <button className='p-2 h-10 w-16 border' onClick={() => setfourV(true)}>V</button>
                                                    </div>
                                                    :
                                                    <div className='flex w-full justify-center items-center relative'>
                                                        <button className='absolute z-10 top-0 right-0 rounded-full border bg-red-600/30 h-10 w-10' onClick={() => setfourV(false)}>-</button>
                                                        <div className='h-full flex border w-1/2 bg-amber-300 justify-center items-center'>
                                                        <button className='p-2 h-10 w-16 border'>V</button>
                                                        </div>
                                                        <div className='h-full flex border w-1/2 justify-center items-center'>
                                                        <button className='p-2 h-10 w-16 border'>V</button>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                        <div className='w-1/2 h-full flex border relative bg-purple-200'>
                                            {
                                                !fiveV ?
                                                    <div className={`h-full w-full bg-gray-200 flex justify-center items-center`}>
                                                        <button className='p-2 h-10 w-16 border' onClick={() => setfiveV(true)}>V</button>
                                                    </div>
                                                    :
                                                    <div className='flex w-full justify-center items-center relative'>
                                                        <button className='absolute z-10 top-0 right-0 rounded-full border bg-red-600/30 h-10 w-10' onClick={() => setfiveV(false)}>-</button>
                                                        <div className='h-full flex border w-1/2 bg-orange-300 justify-center items-center'>
                                                        <button className='p-2 h-10 w-16 border'>V</button>
                                                        </div>
                                                        <div className='h-full flex border w-1/2 justify-center items-center'>
                                                        <button className='p-2 h-10 w-16 border'>V</button>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                            }
                        </div>

                        <div className='w-1/2 border h-full'>
                            {
                                !thirdV ?
                                    <div className={`h-full w-full bg-yellow-200 flex justify-center items-center`}>
                                        <button className='p-2 h-10 w-16 border' onClick={() => setThirdV(true)}>V</button>
                                    </div>
                                    :
                                    <div className='h-full w-full flex border relative'>
                                        <button className='absolute z-10 top-0 right-0 rounded-full border bg-red-600/30 h-10 w-10' onClick={() => setThirdV(false)}>-</button>
                                        <div className='w-1/2 h-full flex border relative bg-rose-200'>
                                            {
                                                !sixV ?
                                                    <div className={`h-full w-full flex justify-center items-center`}>
                                                        <button className='p-2 h-10 w-16 border' onClick={() => setSixV(true)}>V</button>
                                                    </div>
                                                    :
                                                    <div className='flex w-full justify-center items-center relative'>
                                                        <button className='absolute z-10 top-0 right-0 rounded-full border bg-red-600/30 h-10 w-10' onClick={() => setSixV(false)}>-</button>
                                                        <div className='h-full flex border w-1/2 bg-red-300 justify-center items-center'>
                                                        <button className='p-2 h-10 w-16 border'>V</button>
                                                        </div>
                                                        <div className='h-full flex border w-1/2 justify-center items-center'>
                                                            <button className='p-2 h-10 w-16 border'>V</button>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                        <div className='w-1/2 h-full flex border relative'>
                                            {
                                                !sevenV ?
                                                    <div className={`h-full w-full bg-green-200 flex justify-center items-center`}>
                                                        <button className='p-2 h-10 w-16 border' onClick={() => setSevenV(true)}>V</button>
                                                    </div>
                                                    :
                                                    <div className='flex w-full justify-center items-center relative'>
                                                        <button className='absolute z-10 top-0 right-0 rounded-full border bg-red-600/30 h-10 w-10' onClick={() => setSevenV(false)}>-</button>
                                                        <div className='h-full flex border w-1/2 bg-amber-300 justify-center items-center'>
                                                            <button className='p-2 h-10 w-16 border'>V</button>
                                                        </div>
                                                        <div className='h-full flex border w-1/2 justify-center items-center'>
                                                            <button className='p-2 h-10 w-16 border'>V</button>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
            }
        </div>


        // <div className={`h-full flex w-full border-2`}>
        //     <div className={`h-full flex bg-red-200 justify-center gap-2 items-center ${fastV ? 'w-1/2' : 'w-full'} border-2`}>
        //         <button className='py-2 px-5 border rounded' onClick={() => setFastV(!fastV)}>V</button>
        //         <button className='py-2 px-5 border rounded'>H</button>
        //     </div>
        //     {
        //         fastV ?
        //             <div className={`flex bg-orange-200 h-full gap-2 justify-center items-center border-2 w-full ${fastV ? 'w-1/2' : ''}`}>
        //                 <button className='py-2 px-5 border rounded'>V</button>
        //                 <button className='py-2 px-5 border rounded'>H</button>
        //             </div> : ''
        //     }
        // </div>

    );
};

export default ReUseContent;