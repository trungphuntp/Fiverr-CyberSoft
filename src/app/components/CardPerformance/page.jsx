import { DownOutlined, UpOutlined } from "@ant-design/icons";

const CardPerformance = ({
  icon,
  title = "",
  numberData = "",
  trend = "increase",
  trendPercent = "",
}) => {
  return (
    <div className="cardPerformance p-[20px] flex justify-center items-center gap-[20px]">
      {!!icon && icon()}
      <div className="cardPerformance__content">
        <p className="cardPerformance__content-title text-[#495057] font-[m500]">
          {title}
        </p>
        <p className="cardPerformance__content-data  text-black font-[m700] text-[40px] uppercase">
          {numberData}
        </p>
        <div className="cardPerformance__content-grow">
          {trend === "increase" && (
            <>
              <span className="text-[#6610f2]">Increased by </span>{" "}
              <span className="increaseNumber text-[#2FA4E7]">
                <UpOutlined /> {trendPercent}
              </span>
            </>
          )}
          {trend === "decrease" && (
            <>
              <span className="text-[#6610f2]">Decreased by </span>{" "}
              <span className="increaseNumber text-[#DD5600]">
                <DownOutlined /> {trendPercent}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardPerformance;
