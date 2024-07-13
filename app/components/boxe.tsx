import next from 'next';
import Example from './listTocken';





const Boxe = () =>{


    


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
                        
                        
                        className="bg-zinc-300/[0.8] py-4 pl-7 pr-4 w-full rounded-lg text-black py-4"
                    />

                </label>
                

            </div>

            <div>
            <Example/>
                <input
                        type="text"
                        placeholder="Amount"
                        
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