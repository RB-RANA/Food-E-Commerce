import style from '../Product/Product.module.css'

const Product = () => {
  return (
   <>
   <div className=' w-60 flex flex-col items-center gap-2 border rounded-md py-1 my-4'>
<img className='w-40 object-cover h-40 overflow-hidden' src='./Photos/photo1.jpg' alt='Error' loading='lazy'/>
<h2 className='font-bold'>Havana special</h2>
<h5 className={`${style.size}`}>Small</h5>
<div className='flex items-center justify-around gap-20'>
<span className='font-bold'> $100</span>
<span className={`${style.btn}`}>ADD</span>
</div>
   </div>
   </>
  )
}

export default Product