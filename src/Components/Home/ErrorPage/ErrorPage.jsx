import errorImg from '../../assets/404.png'

import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
        <div>
            <img src={errorImg} width={700}/>
        </div>
        <div>
            <h2 className='uppercase text-6xl'>Page not found</h2>
        </div>
        <button className='btn btn-primary mt-10 text-white' onClick={() => navigate('/')}>Get Back</button>
    </div>
  );
};

export default ErrorPage;
