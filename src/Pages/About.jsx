import React from 'react'
import Black from '../../src/assets/Black.jpg'
import oreg from '../../src/assets/oreg.jpg'
import aboutPic1 from '../../src/assets/aboutPic1.png'
import bobby from '../../src/assets/bobby.png'
import Dynne from '../../src/assets/Dynne.png'
import henry from '../../src/assets/henry.jpg'
import joyce from '../../src/assets/joyce.jpg'
import shyaam from '../../src/assets/shyaam.png'
import jessica from '../../src/assets/jesicca.jpg'
import linda from '../../src/assets/linda.jpg'
import sarria from '../../src/assets/sarria.jpg'
import brahm from '../../src/assets/brahm.jpg'
import last from '../../src/assets/last.jpg'
import camila from '../../src/assets/camila.jpg'
import dorr from '../../src/assets/dorr.jpg'
import mc from '../../src/assets/mc.jpg'
export const About = () => {
  return (

    <>
   <div className="container-fluid about-section ">
    <div className="container ">
      <h1 className=' text-9xl font-bold text-center py-20 text-white'>About Us</h1>
    </div>
   </div>
   
   <div className="container-fluid pt-12 bg-[#f1f5f9] ">
    <div className="container">
      <p className='text-center text-teal-500 my-3'> OUR HISTORY</p>
      <h2 className='text-3xl text-center font-extrabold mb-3'>The Story of Food First</h2>
     <p className='text-center py-5 text-xl text-[#667687] '>Founded in 1975 by Joseph Collins and Frances Moore Lappé—author of the revolutionary bestseller Diet for a Small <br /> Planet—Food First has been working to end the injustices that cause hunger since 1975. Since its first book, Food <br /> First: Beyond the Myth of Scarcity, Food First has published over 60 books and hundreds of articles, and research <br /> reports. An archive of our work fighting for food justice and food sovereignty can be found here.</p>
    </div>
   </div>
  {/* second section  */}

  <div className="container-fluid py-16">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img className=' ml-5 img-fluid rounded-3xl shadow-md' src={aboutPic1} alt="Image" />
        </div>
        <div className="col-md-6">
           <p className='text-[#408bda] font-bold py-2'><small >OUR TEAM</small></p>
          <h3 className='text-4xl font-extrabold py-2.5'>LMichael Green</h3>
          <h1 className='font-bold py-3 text-lg'>Executive Director</h1>
          <p className='text-[#667687] font-medium leading-7 '>The Institute for Food and Development Policy, better known as <br /> “Food First” is pleased to welcome <span className='text-black'>LMichael Green</span> as Executive <br />Director.</p>
         <div className='py-5'>
         <button className="btn btn-outline">VIEW BIO</button>
         </div>
        </div>
      </div>
    </div>
  </div>

  {/* 3rdsection */}

  <div className="container-fluid bg-[#dcfafc] ">
    <div className="container">
      <div className="row px-4 py-2">
        <div className="col-md-4 py-3">
       <div className='pl-8'>
       <p className='text-[#408bda] font-bold py-3 '><small >OUR TEAM</small></p>
        <h3 className='text-4xl font-extrabold'>Board of Directors</h3>
        <p className='text-[#667687] font-medium pt-4' ><small >Click photo to view full bio.</small></p>
       </div>
        </div>
        <div className="col-md-4 py-3">
          <div className='bobby-bg w-full h-80 rounded-3xl  shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250'>
           <div className='text-white translate-y-52 translate-x-11'>
           <h1 className='text-2xl font-bold'>Bobby L.Wilson</h1>
           <p className='text-sm font-bold'>BOARD PRESIDENT | FOUNDER OF METRO <br /> ATLANTA URBAN FARM IN ATLANTA,GA </p>
           </div>
          </div>
        </div>
        <div className="col-md-4 py-3">
          <div className='Dynne-bg w-full h-80 rounded-3xl shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250'>
            <div className='text-white translate-y-44 translate-x-11'>
              <h1  className='text-2xl font-bold'>Dyanne Ladine</h1>
              <p className='text-sm font-bold'> BOARD SECRETQRY | J.D., M.B.A., L.AC. <br /> FOUNDER OF HERBAN HEALTH,FORMER <br /> UNIVERSITY PROFESSOR IN ETHICE,LAW <br /> COMMUNITY HEALTH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

   {/* 4thScetion  */}
   <div className="container-fluid pt-12 bg-[#dcfafc] ">
    <div className="container">
      <div className="row px-4 py-2">
        <div className="col-md-4 py-3">
          <div className='henry-bg  w-full h-80 rounded-3xl shadow-md  shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250'>
            <div className='text-white translate-y-44 translate-x-11'>
              <h1  className='text-2xl font-bold'>Henry W.Taylor</h1>
              <p>BOARD TREASURER | SENION DIRECTOR OF DEVELOPMANT AT AGNES SECOTT VOLLEGE</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-3">
          <div className='joyce-bg  w-full h-80 rounded-3xl shadow-md  shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250'>
            <div className='text-white translate-y-44 translate-x-11'>
            <h1  className='text-2xl font-bold'>Joyce E.King,PhD</h1>
            <p>BOARD MEMBER | PROFESSOR OF EDUCATION, GEORGIA STATE UNIVERSITY</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-3">
          <div className="shyaam-bg  w-full h-80 rounded-3xl shadow-md  shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250">
           <div className='text-white translate-y-44 translate-x-11'>
           <h1  className='text-2xl font-bold'> Shyaam Shabaka</h1>
           <p>BOARD PRESIDENT | FOUNDER OF ECOVILLAGE FARM LEARNING CENTER IN RICHMOND,CA</p>
           </div>
          </div>
        </div>
      </div>
      {/* 4thSection */}
      <div className="row px-4 py-2 bg-[#dcfafc] ">
        <div className="col-md-4 py-3">
          <div className='jessica-bg  w-full h-80 rounded-3xl shadow-md  shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250'>
            <div className='text-white translate-y-52 translate-x-11'>
              <h1  className='text-2xl font-bold'>Dr.Jessica Gordon <br /> Nembhard</h1>
              <p>BOARD MEMBER</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-3">
          <div className='linda-bg  w-full h-80 rounded-3xl shadow-md  shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250'>
            <div className='text-white translate-y-52 translate-x-11'>
            <h1  className='text-2xl font-bold'>Dr.Linda Crowley</h1>
            <p>BOARD MEMBER</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-3">
          <div className="sarria-bg  w-full h-80 rounded-3xl shadow-md  shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250">
           <div className='text-white translate-y-52 translate-x-11'>
           <h1  className='text-2xl font-bold'>James Sarria</h1>
           <p>BOARD MEMBER</p>
           </div>
          </div>
        </div>
      </div>
      {/* 5thSection */}
      <div className="row px-4 py-2 bg-[#dcfafc] ">
        <div className="col-md-4 py-3">
          <div className='brahm-bg  w-full h-80 rounded-3xl shadow-md  shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250'>
            <div className='text-white translate-y-52 translate-x-11'>
              <h1  className='text-2xl font-bold'>Brahm Ahmadi</h1>
              <p>BOARD MEMBER</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-3">
          <div className='last-bg  w-full h-80 rounded-3xl shadow-md  shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250'>
            <div className='text-white translate-y-52 translate-x-11'>
            <h1  className='text-2xl font-bold'>Fernando Fernqndez Leiva</h1>
            <p>BOARD MEMBER</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-3"></div>
      </div>
    </div>
   </div>
   
   {/* 6thSection */}
   <div className="container-fluid pt-20 bg-[#dcfafc] ">
    <div className="container">
      <div className="row px-4 py-2">
        <div className="col-md-4 py-3">
       <div className='pl-2'>
       <p className='text-[#408bda] font-bold py-3 '><small >OUR TEAM</small></p>
        <h3 className='text-4xl font-extrabold'>Staff</h3>
        <p className='text-[#667687] font-medium pt-4' ><small >Click photo to view full bio.</small></p>
       </div>
        </div>
        <div className="col-md-4 py-3">
          <div className='dorr-bg w-full h-80 rounded-3xl  shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250'>
           <div className='text-white translate-y-56 translate-x-11'>
           <h1 className='text-2xl font-bold'>Brittney Dorr</h1>
           <p className='text-sm font-bold'>COMMUNITY ENGAGEMENT OFFICER</p>
           </div>
          </div>
        </div>
        <div className="col-md-4 py-3">
          <div className='camila-bg w-full h-80 rounded-3xl shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250'>
            <div className='text-white translate-y-48 translate-x-11'>
              <h1  className='text-2xl font-bold'>Camila Alejandra Bernal <br /> Fontal</h1>
              <p className='text-sm font-bold'>PROGRAM OFFICER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* 7thSection  */}
  <div className="container-fluid pt-20 bg-[#dcfafc] ">
    <div className="container">
      <div className="row px-4 py-2">
        <div className="col-md-4 py-3">
       <div className='pl-2'>
       <p className='text-[#408bda] font-bold py-3 '><small >OUR TEAM</small></p>
        <h3 className='text-4xl font-extrabold'>Consultant</h3>
        <p className='text-[#667687] font-medium pt-4' ><small >Click photo to view full bio.</small></p>
       </div>
        </div>
        <div className="col-md-4 py-3">
          <div className='mc-bg w-full h-80 rounded-3xl  shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250'>
           <div className='text-white translate-y-56 translate-x-11'>
           <h1 className='text-2xl font-bold'>Q.McCauley</h1>
           <p className='text-sm font-bold'>CONSULTANT | INFORMATION TECHNOLOGY </p>
           </div>
          </div>
        </div>
        <div className="col-md-4 py-3"></div>
      </div>
    </div>
  </div>

  {/* 8thSection */}
  <div className="container-fluid pt-12 bg-[#f1f5f9] ">
    <div className="container">
      <p className='text-center text-teal-500 my-3'>FOOD FIRST FINANCIALS</p>
      <h2 className='text-3xl text-center font-extrabold mb-3'>Annual Reports</h2>
     <p className='text-center py-5 text-xl text-[#667687] '>Institute For Food & Development Policy (Food First) is a 501(c)3 nonprofit organization committed to financial <br /> transparency.</p>
    </div>
   </div>
   {/* 9thSection */}
   <div className="container-fluid h-60 bg-[#fff] ">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h1 className='text-2xl font-extrabold translate-y-20 translate-x-8'>Audit Report</h1>
        </div>
        <div className="col-md-4">
          <p className='translate-y-20 text-bold'>Food First Final Audit Report FY 2021</p>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
   </div>

   </>
  
 )
}
