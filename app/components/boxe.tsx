"use client";

import next from 'next';
import Example from './listTocken';
import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { useBalance } from 'wagmi'
import { arbitrumSepolia } from 'wagmi/chains'


//writeContract
//SimulateContract





const Boxe = () =>{

    const [value, setValue] = useState(0);
    const [exValue, setExValue] = useState(0)
    
     
     const { address } = useAccount()
     const { data: balance } = useBalance({
        address: address,
        chainId: arbitrumSepolia.id,
    });
    
    
    


    return(
        <div className='h-auto w-96 bg-white rounded-lg'>
            <p className="font-serif text-2xl text-blue-600/100 px-40 py-10">
                SWAP
            </p>
            <div className='h-40'>
                <Example/>
                <label>
                <input
                        type="text"
                        placeholder="Amount"
                        value={value}
                        onChange={e => {setValue(Number(e.target.value));
                                        setExValue(Number(e.target.value)*3);}}
                        
                        
                        
                        className="bg-zinc-300/[0.8] py-4 pl-7 pr-4 w-full rounded-lg text-black py-4"
                    />

                </label>
                <p className='text-black'>
                    Balance : {balance ? balance.formatted : 'Loading...'}
                </p>
                
            </div>

            <div>
            <Example/>
                <input
                        type="text"
                        placeholder="Amount"
                        value = {exValue}
                        onChange={e => {setExValue(Number(e.target.value));
                                        setValue(Number(e.target.value)/3);}}

                        
                        className="bg-zinc-300/[0.8] py-4 pl-7 pr-4 w-full rounded-lg text-black py-4"
                    />
            </div>
            <div className= ''>
                <button className='w-16 pl-24 pb-12 pt-10 '>
                    <p className='font-serif text-2xl text-blue-600/100 py-8 w-48 h-10 border-solid border-2 border-indigo-600 rounded-lg'>
                        CLICK TO SWAP
                    </p>
                </button> 
            </div>

        </div>
    )
}

export default Boxe;