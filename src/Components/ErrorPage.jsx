// import { useNavigate, useRouteError } from "react-router-dom";


// const ErrorPage = () => {
//     const navigate = useNavigate();
//     const handleGoBack = () =>{
//         navigate(-1);
//     }
//     const error = useRouteError();
//     console.error(error);
//     return (
//         <div id="error-page">
//           <div className="mx-auto">
//           <h1>Oops!</h1>
//           <p>Sorry, an unexpected error has occurred.</p>
//           <p>
//             <i>{error.statusText || error.message}</i>
//           </p>
//           <button onClick={handleGoBack}>Go Back</button>
//           </div>
//         </div>
//       );
//     }

// export default ErrorPage;


import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1);
     }
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center text-[20px]">
        <img className="ml-[600px] mt-[100px]" src="https://i.ibb.co/HTcLJdh/404.jpg"></img>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button className="btn" onClick={handleGoBack}>Go Back</button>
    </div>
  );
}