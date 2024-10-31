import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    // <div className="flex min-h-screen w-full">
    //   <div className="hidden lg:flex items-center justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-1/2 px-12">
    //     <div className="max-w-md space-y-6 text-center text-primary-foreground">
    //       <h1 className="text-4xl font-extrabold tracking-tight">
    //         Welcome to Hamro Shopping
    //       </h1>
    //     </div>
    //   </div>
    //   <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
    //     <Outlet />
    //   </div>
    // </div>



    
 <div className="bg-sky-100 flex justify-center items-center h-screen">
    
    <div className="w-1/2 h-screen relative hidden lg:block">
      <img src="https://res.cloudinary.com/dabmiqczm/image/upload/v1730366934/hamro_shopping_erfeqh.png"  alt="Placeholder Image" className="object-cover w-full h-full"/>
      
    
      <div className="absolute inset-0 flex items-center justify-center">
        
      </div>
    </div>
    
    <Outlet />
  </div> 
  

  
  );
}

export default AuthLayout;
