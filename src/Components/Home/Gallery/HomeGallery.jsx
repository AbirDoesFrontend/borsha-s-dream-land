import "./HomeGallery.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const HomeGallery = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  

  return (
    <div data-aos="fade-up">
      <h2 className="text-center text-5xl font-bold m-20">
        Dream Land&apos;s Gallery
      </h2>
      <div className="flex flex-wrap justify-center gap-10 mt-20 mb-20">
        <div className="content_img text-center">
          <img src="https://images.unsplash.com/photo-1549827441-6adb9f843a35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" className="rounded" width={300} height={100}/>
          <p className="text-2xl font-semibold">Truck Cars</p>
        </div>
        <div className="content_img text-center">
          <img src="https://images.unsplash.com/photo-1678102101284-aa74fbaa2eae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"className="rounded" width={300} height={400}/>
          <p className="text-2xl font-semibold">Hot Wheels</p>
        </div>
        <div className="content_img text-center">
          <img src="https://images.unsplash.com/photo-1656609119480-0a6d732b24b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" className="rounded" width={300} height={400}/>
          <p className="text-2xl font-semibold">Model Cars</p>
        </div>
        <div className="content_img text-center">
          <img src="https://images.unsplash.com/photo-1605428549505-9504d80093c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" className="rounded" width={300} height={400}/>
          <p className="text-2xl font-semibold">Lego Cars</p>
        </div>
        <div className="content_img text-center">
          <img src="https://images.unsplash.com/photo-1529651490292-99f6f9ade9e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" className="rounded" width={300} height={400}/>
          <p className="text-2xl font-semibold">Cars for Sandox</p>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
