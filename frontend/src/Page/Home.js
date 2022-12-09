import { Button, Product } from "../Components"


const Home = () => {
  return (
   <>
   <div className="flex mx-auto items-center justify-around mb-24">
    <div className="">
      <em>Are You Hungry?</em>
      <h3 className="font-bold text-3xl my-3">Don't wait !</h3>
      <Button/>
    </div>
    <div className="w-96">
      <img className="object-cover w-full" src="./Photos/homePhoto.jpg" alt="Error" loading="lazy"/>
    </div>
   </div>
   <h2 className="font-bold flex ml-24">Product</h2>
   <div className="w-11/12 product flex mx-auto items-center justify-around flex-wrap">

<Product/><Product/><Product/><Product/><Product/>

   </div>
   
   </>
  )
}

export default Home
