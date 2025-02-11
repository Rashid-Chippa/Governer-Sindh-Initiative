"use client"

import { Component, ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image1 from "../../../public/slideShow1.jpg";
import Image2 from "../../../public/slideShow2.jpg";
import Image3 from "../../../public/slideShow3.jpg";
import Image4 from "../../../public/slideShow4.jpg";
import Image5 from "../../../public/slideShow5.jpg";
import Image6 from "../../../public/slideShow6.jpg";
import Image7 from "../../../public/slideShow7.jpg";
import Image8 from "../../../public/slideShow8.jpg";
import Image from "next/image";


export default class ImagesCaurosel extends Component{
render(): ReactNode {
    const data =[
        {
            img: Image1,
        title:'students learnng Web3 basics '
        },
        {
            img: Image2,
        title:'first meeting with president '
        },
        {
            img: Image3,
        title:'students learnng Web3 basics '
        },
        {
            img: Image4,
        title:'students learnng Web3 basics '
        },
        {
            img: Image5,
        title:'president launchng piaic website '
        },
        {
            img: Image6,
        title:'president launchng piaic website '
        },
        {
            img: Image7,
        title:'president launchng piaic website '
        },
        {
            img: Image8,
        title:'president launchng piaic website '
        },
    ]
const settings ={
    dotsClass: 'slick-dots line-indicator',
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    responsive:[
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
    ],
    customPaging: () => {
        <div className="mt-2 text-xs opacity-0"></div>
    },
        };
        return( 
            <div className="mt-10 w-full ">
                <Slider {...settings} className="w-full">
                    {data.map((val, index) => {
                        return(
                        <div className="px-3 xl-lg:px-1 group mb-2 md:mb-5 relative overflow-hidden cursor-pointer outline-none" key={index}>
                            <div className="relative bg-slate-500 rounded-lg overflow-hidden">
                        <Image src = {val.img} className="w-full h-[300px] md:h-[600] object-cover" alt = {val.title} />
                            </div> 
                        </div>
                        )})}
                   
                </Slider>
            </div>
        )
      };
}
