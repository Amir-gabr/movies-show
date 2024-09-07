//
//







"use client"



import React from 'react'
import Link from "next/link";
import { useEffect ,useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";



export default function ToTop() {

    const [btn2Top, setBtn2Top] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 350) {
            setBtn2Top(true);
        } else {
            setBtn2Top(false);
        }
        });
    }, []);
  return (
    <>
        <div style={{ opacity: btn2Top ? 1 : 0,transition:"0.5s" }}>
            <Link href="#" className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
                <FaArrowCircleUp className="text-white text-4xl  md:text-4xl  lg:text-5xl"/>
            </Link>
        </div>
    </>
  )
}

































