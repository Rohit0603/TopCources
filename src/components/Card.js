import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';

const Card = (props) => {
  let oneData=props.data;
  let likedCources= props.likedCources;
  let setLikedCources=props.setLikedCources;

  function clickHandler(){
    if(likedCources.includes(oneData.id)){
      setLikedCources((prev)=> prev.filter((cid)=>cid!==oneData.id));
      toast.warning("Liked Removed");
    }
    else{
      if(likedCources.length===0){
        setLikedCources([oneData.id]);
      }
      else{
        setLikedCources((prev)=>[...prev,oneData.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={oneData.image.url} alt={oneData.image.alt}/>

        <div className='w-[40px] bg-white rounded-full absolute right-1 bottom-1
        grid place-items-center'>
            <button onClick={clickHandler}>
              {
              likedCources.includes(oneData.id)?
              (<FcLike fontSize="1.75rem"/>):
              (<FcLikePlaceholder fontSize="1.75rem"/>)
              }
            </button>
        </div>

      </div>

      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{oneData.title}</p>
        <p className='mt-2 text-white'>
          {
            oneData.description.length >100 ?
            (oneData.description.substr(0,100)) + "...":
            (oneData.description)
          }
        </p>
      </div>
    </div>
  )
}

export default Card
