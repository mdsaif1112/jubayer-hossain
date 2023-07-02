

import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../assets/animations/8306-programming-animation.json';

const Hero = () => {


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <section className='max-h-screen xl:min-h-[800px] xl:max-h-screen flex justify-between items-center bg-no-repeat bg-contain px-5'>
            <div className="my-container py-72 flex flex-col-reverse xl:flex-row justify-between items-stretch xl:items-center gap-12 xl:gap-0">
                <div className='text-center xl:text-start'>
                    <h1 className='text-5xl xl:text-9xl uppercase font-bold'><span className='text-transparent my-stroke'>Jubayer</span> <br /> Hossain</h1>
                    <p className='sub-heading'>Creative Web Developer</p>
                    <a href="/Jubayer_Hossain_MERN_Stack_Developer.pdf">
                        <button className="my-btn mt-5">my Resume</button>
                    </a>
                </div>
                <div className='hidden xl:block'>
                    <Lottie
                        options={defaultOptions}
                        height={600}
                        width={600}
                    />
                </div>
                <div className='xl:hidden block'>
                    <Lottie
                        options={defaultOptions}
                        height={250}
                        width={250}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;