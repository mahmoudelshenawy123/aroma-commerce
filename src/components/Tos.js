import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axiosConfig from 'features/axiosConfig.js'

function Tos() {
  const notify = async () => {
    const response = await toast.promise(
        axiosConfig.get('/categories'),
        {
        //   pending: 'Promise is pending',
          pending: {
            render(){
                return(
                    'Promise is pending'
                )
            }
          },
          success: 'Promise resolved 👌',
          error: 'Promise rejected 🤯'
        }
    );
    console.log(response)
};


  return (
    <>
        <button onClick={notify}>Notify</button>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        {/* <ToastContainer /> */}
    </>

  );
}
export default Tos