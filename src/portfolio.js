import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cort from './Cort';
function Portfolio() {

    const { slug } = useParams();
    const [obj, setobj] = useState(null)
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(true)
    useEffect(() => {
        const fetchPage = async () => {
            try {
                const res = await axios.get(`https://about-me-backend-k29v.onrender.com/api/data/${slug}`);
                setobj(res.data);
            } catch (err) {
                seterror(err)
            } finally {
                setloading(false)
            }
        };
        fetchPage();
    }, [loading, slug]);

    if (loading) return <div role="status" className='mx-auto mt-[25%] w-max'>
        <svg aria-hidden="true" class="inline w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
    </div>

    if (error) return <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
                <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600">404</h1>
                <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something's missing.</p>
                <p class="mb-4 text-xl font-mono text-gray-500 ">Sorry, we can't find that portfolio. But you can create the portfolio. </p>
                <a href="/" class="inline-flex text-white bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Back to Homepage</a >
            </div>
        </div>
    </section>

    return obj ? <Cort obj={obj} /> :
        <section class="bg-white ">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600">500</h1>
                    <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Internal Server Error.</p>
                    <p class="mb-4 text-lg font-light text-gray-500">Try again later. </p>
                </div>
            </div>
        </section>

}

export default Portfolio;
