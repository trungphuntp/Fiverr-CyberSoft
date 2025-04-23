"use client";
import {
  getReviewsByIdWork,
  postReviewsByIdWork,
} from "@/app/actions/ReviewsAction";
import FormRating from "@/app/components/FormRating/page";
import PaginationComponent from "@/app/components/PaginationComponent/page";
import RateBars from "@/app/components/RateBars/page";
import Rating from "@/app/components/Rating/page";
import ReviewsCard from "@/app/components/ReviewsCard/page";
import SelectComponent from "@/app/components/Select/page";
import { SelectWorksPage } from "@/app/constants/general";
import PATH from "@/app/constants/path";
import { STORAGE } from "@/app/constants/storage";
import { handleSetMessage } from "@/app/store/reducers/messageReducer";
import { formatDate } from "@/app/utils/format";
import { splitArrayIntoChuckSize } from "@/app/utils/general";
import { methodToken } from "@/app/utils/Token";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LITMIT_ITEM = 9;

const ScReviews = ({ quantityReviews, star, idWork }) => {
  const [reviews, setReviews] = useState([]);
  const [reviewsTotal, setReviewsTotal] = useState();
  const { profile } = useSelector((state) => state.profile);
  const [paginationIndex, setpaginationIndex] = useState(1);

  const dispatch = useDispatch();
  const { id } = profile || {};
  const router = useRouter();

  // get API reviews
  const {
    data: reviewsData,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getReviewsByIdWork(idWork),
    enabled: !!idWork, // Chỉ chạy query khi idWork có giá trị
  });
  useEffect(() => {
    if (reviewsData) {
      const reviewsConvert = splitArrayIntoChuckSize(reviewsData, 9);
      setReviewsTotal(reviewsData?.length);
      setReviews(reviewsConvert);
    }
  }, [reviewsData]);

  const getQuantityByStar = (star) => {
    if (!reviews) return null;
    return (
      reviews?.filter((review) => {
        return review?.saoBinhLuan === star;
      })?.length || 0
    );
  };

  // handle send reviews
  const handleSendReviews = async (content, valueStar) => {
    if (
      !methodToken.get(STORAGE.token) &&
      !methodToken.get(STORAGE.idUser) &&
      !profile
    ) {
      router.push(PATH.LOGIN);
      dispatch(handleSetMessage(["Comment failed!", "error"]));
    }
    if (!content) {
      dispatch(handleSetMessage(["Comment failed!", "error"]));
      return;
    }

    const now = new Date();
    const payload = {
      maCongViec: idWork || "",
      maNguoiBinhLuan: id || "",
      ngayBinhLuan: formatDate(now || ""),
      noiDung: content || "",
      saoBinhLuan: valueStar || 0,
    };
    const res = await postReviewsByIdWork?.(payload);

    if (res?.id) {
      dispatch(handleSetMessage(["Comment successful!", "success"]));
      refetch();
    } else {
      dispatch(handleSetMessage(["Comment failed!", "error"]));
    }
  };

  // HANDLE PAGINATION
  const onChangePagination = (pageIndex, pageSize) => {
    setpaginationIndex(pageIndex);
  };

  return (
    <section className="scReviews py-[50px]">
      <div className="scReviews__rateInfo">
        <div className="scReviews__rateInfo-top">
          <div className="reviews">
            <h2 className="title_2 ">{`${quantityReviews} Reviews`}</h2>
            <Rating saoCongViec={star} value={star} disabled={true} />
          </div>
          <div className="sorts">
            <p className="text font-[m700] text-[var(--text-color-body-2)]">
              Sort by:
            </p>
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
                ((getQuantityByStar(5) + getQuantityByStar(4)) /
                  reviews?.length) *
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
          <p className="text font-[m700] text-[var(--text-color-body-2)]">
            industry:
          </p>
          <SelectComponent
            type={"noneBorder"}
            dropDownList={SelectWorksPage.noneBorder}
          >
            All industries
          </SelectComponent>
        </div>
        <div className="scReviews__filters-reviews pt-[30px]">
          {reviews?.length > 0 &&
            reviews?.[paginationIndex - 1]?.map((review, index) => {
              const {
                tenNguoiBinhLuan,
                saoBinhLuan,
                noiDung,
                ngayBinhLuan,
                avatar,
              } = review;

              return (
                <ReviewsCard
                  key={review?.id || index}
                  avt={avatar}
                  name={tenNguoiBinhLuan || ""}
                  starValue={saoBinhLuan || 0}
                  desc={noiDung || ""}
                  date={formatDate(ngayBinhLuan || "")}
                />
              );
            })}
        </div>
        {reviews?.length > 0 && (
          <div className="flex justify-center mt-[40px]">
            <PaginationComponent
              total={reviewsTotal}
              pageSize={LITMIT_ITEM}
              handleChangePagination={onChangePagination}
              defaultCurrent={paginationIndex}
            />
          </div>
        )}
      </div>
      <div className="scReviews__form pt-[35px]">
        <FormRating handleSendReviews={handleSendReviews} />
      </div>
    </section>
  );
};

export default ScReviews;
