import Button from "@/app/components/Button/page";
import HiredJobCard from "@/app/components/HiredJobCard/page";
import PATH from "@/app/constants/path";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileContent = ({ books, handleDeleteHiredJob }) => {
    return (
        <div className="profileContent">
            <div className="profileContent__card Buyingcard">
                <Image
                    className="profileContent__card-img"
                    src="/marketplace_1.svg"
                    alt="marketplace img"
                    height={48}
                    width={48}
                />
                <div className="profileContent__card-content">
                    <strong> Buying services for works?</strong> Help us tallor your experience to
                    fit your needs.{" "}
                    <Link href={PATH.HOME} className="link">
                        Tell us more about your bussiness {` >`}
                    </Link>
                </div>
            </div>
            <div className="profileContent__card gigcard">
                <p className="gigcard__text">It seems that you don't have any active Gigs.</p>
                <Button>Create a new Gig</Button>
            </div>
            <div className="profileContent__card-listCard">
                {books?.length > 0 &&
                    books?.map((bookItem, index) => {
                        return (
                            <HiredJobCard
                                key={bookItem?.id || index}
                                deleteHiredJob={handleDeleteHiredJob}
                                {...bookItem}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default ProfileContent;
