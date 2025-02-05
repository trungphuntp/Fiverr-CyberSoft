import FormRating from "@/app/components/FormRating/page";
import RateBars from "@/app/components/RateBars/page";
import Rating from "@/app/components/Rating/page";
import ReviewsCard from "@/app/components/ReviewsCard/page";
import SelectComponent from "@/app/components/Select/page";
import { SelectWorksPage } from "@/app/constants/general";
import { formatDate } from "@/app/utils/format";

const ScReviews = ({ quantityReviews, reviews, star }) => {
    console.log("reviews", reviews);

    const getQuantityByStar = (star) => {
        if (!reviews) return null;
        return (
            reviews?.filter((review) => {
                return review?.saoBinhLuan === star;
            })?.length || 0
        );
    };

    console.log(reviews);

    return (
        <section className="scReviews py-[50px]">
            <div className="scReviews__rateInfo">
                <div className="scReviews__rateInfo-top">
                    <div className="reviews">
                        <h2 className="title_2 ">{`${quantityReviews} Reviews`}</h2>
                        <Rating saoCongViec={star} value={star} disabled={true} />
                    </div>
                    <div className="sorts">
                        <p className="text font-[m700] text-[var(--text-color-body-2)]">Sort by:</p>
                        <SelectComponent
                            type={"noneBorder"}
                            dropDownList={SelectWorksPage.noneBorder}
                        >
                            Most Recent
                        </SelectComponent>
                    </div>
                </div>
                <div className="scReviews__rateInfo-bottom">
                    <RateBars>
                        <RateBars.item
                            starText={5}
                            widthBar={95}
                            quantityReviews={quantityReviews - 1 || 0}
                        />
                        <RateBars.item
                            starText={4}
                            quantityReviews={getQuantityByStar(5) + getQuantityByStar(4)}
                            widthBar={
                                ((getQuantityByStar(5) + getQuantityByStar(4)) / reviews?.length) *
                                    100 -
                                40
                            }
                        />
                        <RateBars.item
                            starText={3}
                            quantityReviews={getQuantityByStar(3)}
                            widthBar={(getQuantityByStar(3) / reviews?.length) * 100 - 40}
                        />
                        <RateBars.item
                            starText={2}
                            quantityReviews={getQuantityByStar(2)}
                            widthBar={(getQuantityByStar(2) / reviews?.length) * 100 - 40}
                        />
                        <RateBars.item
                            starText={1}
                            quantityReviews={getQuantityByStar(1)}
                            widthBar={(getQuantityByStar(1) / reviews?.length) * 100 - 40}
                        />
                    </RateBars>
                    <div className="rateTexts">
                        <h5 className="rateTexts__title">Rating Breakdown</h5>
                        <div className="rateTexts__item">
                            Seller communication level <Rating value={1} saoCongViec={star} />
                        </div>
                        <div className="rateTexts__item">
                            Recommend to a friend <Rating value={1} saoCongViec={star} />
                        </div>
                        <div className="rateTexts__item">
                            Service as described <Rating value={1} saoCongViec={star} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="scReviews__filters">
                <h2 className="title_2">Filters</h2>
                <div className="scReviews__filters-select flex items-center">
                    <p className="text font-[m700] text-[var(--text-color-body-2)]">industry:</p>
                    <SelectComponent type={"noneBorder"} dropDownList={SelectWorksPage.noneBorder}>
                        All industries
                    </SelectComponent>
                </div>
                <div className="scReviews__filters-reviews pt-[30px]">
                    {/* <ReviewsCard
                        avt={""}
                        name={"123"}
                        starValue={0}
                        desc={
                            "lorefaljksdhjflk; ajsdklfj klasjdlk;fjkl;a sdjfkl;jdskjfkldsjlkfjakl ;sjf;lkjasdlk;fjlaks djlfjaldks;jflkjasdkl; fjlkasjdlk fjakls ;djfkldjsl kfjklds jflsjdlkf js ldkjflk; ajskl;fjakls;djfklajsdkljflk"
                        }
                        date={"1/1/2000"}
                    /> */}
                    {reviews?.length > 0 &&
                        reviews?.map((review, index) => {
                            const { tenNguoiBinhLuan, saoBinhLuan, noiDung, ngayBinhLuan, avatar } =
                                review;

                            return (
                                <ReviewsCard
                                    key={review?.id || index}
                                    avt={avatar}
                                    name={tenNguoiBinhLuan || ""}
                                    starValue={saoBinhLuan || 0}
                                    desc={noiDung || ""}
                                    date={formatDate(ngayBinhLuan) || ""}
                                />
                            );
                        })}
                </div>
            </div>
            <div className="scReviews__form pt-[35px]">
                <FormRating />
            </div>
        </section>
    );
};

export default ScReviews;
