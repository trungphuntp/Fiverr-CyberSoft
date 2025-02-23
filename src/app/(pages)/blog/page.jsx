import Image from "next/image";
import BlogItem from "./components/BlogItem";
import blog_img from "../../../../public/blog-img.jpeg";
import blog_img1 from "../../../../public/blog-img-business.jpeg";
import blog_img2 from "../../../../public/blog-img-business2.jpeg";
import blog_img3 from "../../../../public/blog-img-product.png";
import blog_img4 from "../../../../public/blog-img-newBusiness.png";
import blog_img5 from "../../../../public/blog-img-newProduct.jpeg";
import blog_img6 from "../../../../public/blog-img-newFree.jpeg";
import blog_img_team from "../../../../public/teamWork-1.jpeg";
import blog_img_team2 from "../../../../public/teamWork-2.jpg";
import blog_img7 from "../../../../public/blog-img-BusinessTech.png";
import blog_img8 from "../../../../public/blog-img-BusinessWeb.png";
import blog_img9 from "../../../../public/blog-img-BusinessTip.png";
import TeamWork from "./components/TeamWork";
const BlogPage = () => {
  return (
    <main className="BlogMain container py-20   pt-[calc(var(--height-header)_+_40px)] max-xl:pt-[var(--height-header)]">
      <div className="blog-list ">
        <div className="blog__media">
          <Image className="blog__image" src={blog_img} alt="Blog Image" />
        </div>
        <div className="blog__content">
          <div className="blog__text">
            <p className="blog__paragraph">Freelancer News</p>
            <h2 className="blog__heading    ">
              International Freelancer Day 2024 Recap
            </h2>
            <div className="blog__meta">
              <p className="blog__paragraph blog__paragraph--author">
                By Michelle Baltrusitis
              </p>
              <span className="blog__meta-info">|</span>
              <p className="blog__paragraph blog__paragraph--date">
                October 22, 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-section mb-32">
        <BlogItem
          title={"Business News"}
          heading={"Top Priorities for Marketing Executives"}
          text={
            "Fiverr has released its second annual report detailing the urgent needs and top priorities of marketing executives in the U.S."
          }
          src={blog_img1}
        ></BlogItem>
        <BlogItem
          title={"Product News"}
          heading={
            "How Fiverr’s Financial Services Work For Freelancers And Entrepreneurs"
          }
          text={
            "Today, Fiverr launches its new Financial Services Vertical, adding nearly two dozen specialty services that provide businesses access to world-class financial expertise."
          }
          src={blog_img2}
        ></BlogItem>
        <BlogItem
          title={"Business News"}
          heading={
            " How Fiverr’s Adaptability Powered Its Transformation into a Global Marketplace  "
          }
          text={
            "Creative Director, Ami Alush, discusses branding's role in Fiverr's transformation from a freelance platform into a global marketplace"
          }
          src={blog_img3}
        ></BlogItem>
      </div>
      <div>
        {/* New */}
        <h2 className="text-5xl text-center font-bold container">News</h2>
        <div className="blog-section">
          <BlogItem
            text={
              "Businesses are building back and finding new ways to reach their customers."
            }
            heading={
              "Semi-Annual Small Business Needs Index: Strength and Optimism is Still Present"
            }
            title={"Business News"}
            src={blog_img4}
          ></BlogItem>
          <BlogItem
            text={
              "Now you can use Fiverr’s new Fashion Design services to grow your business from idea to implementation."
            }
            heading={"Introducing Fiverr's Fashion Store"}
            title={"Product News"}
            src={blog_img5}
          ></BlogItem>
          <BlogItem
            text={
              "Our new brand campaign, “It Starts Here”, was inspired by our mission to change how the world works and the need for digital transformation."
            }
            heading={"It Starts Here"}
            title={"Freelancer Tips"}
            src={blog_img6}
          ></BlogItem>
        </div>
      </div>
      {/* TeamWork */}
      <div className="mt-20">
        <TeamWork
          text={
            "We believe that 2020 marks the beginning of a decade in which freelancing will take another step forward."
          }
          title={"Freelancer Tips"}
          heading={"Here's to Writing a New Chapter; From Fiverr CEO"}
          src={blog_img_team}
        ></TeamWork>
      </div>
      {/* Business */}
      <div className="mb-32 ">
        <h2 className="text-5xl mt-14 text-center font-bold container">Business</h2>
        <div className="blog-section">
          <BlogItem
            text={
              "Businesses are building back and finding new ways to reach their customers."
            }
            heading={"5 Ways to Enhance Your Business Website in 2023"}
            title={"  Web Programming"}
            src={blog_img7}
          ></BlogItem>
          <BlogItem
            text={
              "Now you can use Fiverr’s new Fashion Design services to grow your business from idea to implementation."
            }
            heading={
              "3 Ways Using Fiverr Freelancers Can Help You Scale Your Business"
            }
            title={"Business Tips"}
            src={blog_img8}
          ></BlogItem>
          <BlogItem
            text={
              "Our new brand campaign, “It Starts Here”, was inspired by our mission to change how the world works and the need for digital transformation."
            }
            heading={
              "How No-Code Solutions Let You Build Apps Without Coding Skills"
            }
            title={"Programming & Tips"}
            src={blog_img9}
          ></BlogItem>
        </div>
      </div>

      <div className="">
        <TeamWork
          className=""
          text={
            "We believe that 2020 marks the beginning of a decade in which freelancing will take another step forward."
          }
          title={"Programming & Tips"}
          heading={"Here's to Writing a New Chapter; From Fiverr CEO"}
          src={blog_img_team2}
        ></TeamWork>
      </div>

      {/* Case studies */}
      <div className="mb-32 ">
        <h2 className="text-5xl  mt-14 text-center font-bold container">
          Case Studies
        </h2>
        <div className="blog-section">
          <BlogItem
            text={
              "Businesses are building back and finding new ways to reach their customers."
            }
            heading={
              "Danielle Lemieux of BREAD IN CAPTIVITY: Sourdough-Baking YouTube Series"
            }
            title={"Success Stories"}
            src={blog_img7}
          ></BlogItem>
          <BlogItem
            text={
              "Now you can use Fiverr’s new Fashion Design services to grow your business from idea to implementation."
            }
            heading={
              "Olivia Claparols of ROOTED: Direct-to-Consumer Houseplants"
            }
            title={"Success Stories"}
            src={blog_img8}
          ></BlogItem>
          <BlogItem
            text={
              "Zach & David of ABC Beer Company: Neighborhood Bar & Beer Store"
            }
            heading={
              "How No-Code Solutions Let You Build Apps Without Coding Skills"
            }
            title={"Success Stories"}
            src={blog_img9}
          ></BlogItem>
        </div>
      </div>
    </main>
  );
};
export default BlogPage;
