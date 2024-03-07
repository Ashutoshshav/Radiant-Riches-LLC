import React from 'react';
import Product from './Product';
import Image1 from "../assets/IMAGE (1).png";
import Image2 from "../assets/IMAGE (2).png";
import Image3 from "../assets/IMAGE 3.png";
import CDK from './CDK';

export default function AllProduct() {
        return (
                <div>
                        <Product imageTitle="Builder 1" firstHeading="WixPro 72-Inch Responsive Website Builder-" firstPara=" Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)" secondHeading="Main highlights" secondPara=" [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides." ratingNumber={9.8} ratingTitle="Exceptional" ratingImage={Image1} />

                        <Product imageTitle='Biulder' firstHeading="SiteCraft 68-Inch Ultimate Web Design Studio-" firstPara=" Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)" secondHeading='Main highlights' secondPara='[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.' ratingNumber={9.5} ratingTitle="Excellent" ratingImage={Image2} />

                        <Product imageTitle='Builder 1' firstHeading='WixPro 72-Inch Responsive Website Builder-' firstPara="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)" secondHeading="Main highlights" secondPara="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides." ratingNumber={9.1} ratingTitle="Very Good" ratingImage={Image3} />

                        <CDK />
                </div>
        )
}
