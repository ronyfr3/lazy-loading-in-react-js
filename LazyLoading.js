import React,{useState,lazy,Suspense} from 'react'
import LoadingIndicator from './LoadingIndicator'


const Dog = lazy(() =>import('./Dog'))

function LazyLoading() {
    const [click,setClick]= useState(false)
    const imageShow =()=>{
        setClick(true)
    }
    const hideImage =()=>{
        setClick(false)
    }
    return (
       <div>
            <div>
        {
            !click ? (<button className="lazy_div" onClick={imageShow}>Show Image</button>)
            : (
                <div className='image'>
                        <Suspense fallback={<LoadingIndicator/>}> 
                           <Dog/>
                        </Suspense>
                           <button onClick={hideImage}>Hide Image</button>
                   </div>
            )

        }
        </div>
       </div>
    )
}

export default LazyLoading
