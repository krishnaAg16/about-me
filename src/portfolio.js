import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cort from './Cort';
function Portfolio() {

    const { slug } = useParams();
    const [obj, setobj] = useState(null)
    const [error, seterror] = useState(null)
    useEffect(() => {
        const fetchPage = async () => {
            try {
                const res = await axios.get(`https:/about-me-backend-k29v.onrender.com/api/data/${slug}`);
                setobj(res.data);
            } catch (err) {
                seterror(err)
            }
        };
        fetchPage();
    }, [slug]);
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
