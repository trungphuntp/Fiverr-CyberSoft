import Image from "next/image";
import React from "react";

const Sctrustby = () => {
    return (
        <section className="sctructby bg-[#FAFAFA] py-[30px] flex justify-center items-center">
            <div className="container flex justify-center items-center gap-8 max-lg:gap-0 max-lg:flex-col">
                <span className="sctructby__text text-[#b5b6ba] font-[m600] text-[14px] ">
                    Trusted by:
                </span>
                <div className="sctructby__logo flex gap-8 flex-wrap justify-center items-center">
                    <Image src={"/netflix.png"} alt="Netflix" width={80} height={70} />
                    <Image src={"/pg.png"} alt="pg" width={50} height={70} />
                    <Image src={"/fb.png"} alt="facebook" width={80} height={70} />
                    <Image src={"/google.png"} alt="google" width={80} height={70} />
                    <Image src={"/paypal.png"} alt="paypal" width={80} height={70} />
                </div>
            </div>
        </section>
    );
};

export default Sctrustby;
