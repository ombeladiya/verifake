"use client"
import React, { useState, useEffect } from 'react';

const ScrollLine = () => {
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        setScrollHeight(scrollPercent);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 h-full w-[1.5px] ml-[0.5px] bg-gray-400">
            <div
                style={{ height: `${scrollHeight}%`, background: 'linear-gradient(to bottom, #FF5733, #FFC300)', }}
                className=" w-full"
            ></div>
        </div>
    );
};

export default ScrollLine;
