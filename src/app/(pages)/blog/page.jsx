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

const blogItems = [
  {
    id: 1,
    title: "Business News",
    heading: "Top Priorities for Marketing Executives",
    text: "Fiverr has released its second annual report detailing the urgent needs and top priorities of marketing executives in the U.S.",
    src: blog_img1,
  },
  {
    id: 2,
    title: "Product News",
    heading:
      "How Fiverr’s Financial Services Work For Freelancers And Entrepreneurs",
    text: "Today, Fiverr launches its new Financial Services Vertical, adding nearly two dozen specialty services that provide businesses access to world-class financial expertise.",
    src: blog_img2,
  },
  {
    id: 3,
    title: "Business News",
    heading:
      "How Fiverr’s Adaptability Powered Its Transformation into a Global Marketplace",
    text: "Creative Director, Ami Alush, discusses branding's role in Fiverr's transformation from a freelance platform into a global marketplace.",
    src: blog_img3,
  },
  {
    id: 4,
    title: "Business News",
    heading:
      "Semi-Annual Small Business Needs Index: Strength and Optimism Is Still Present",
    text: "Businesses are building back and finding new ways to reach their customers.",
    src: blog_img4,
  },
  {
    id: 5,
    title: "Product News",
    heading: "Introducing Fiverr's Fashion Store",
    text: "Now you can use Fiverr's new Fashion Design services to grow your business from idea to implementation.",
    src: blog_img5,
  },
  {
    id: 6,
    title: "Freelancer Tips",
    heading: "It Starts Here",
    text: 'Our new brand campaign, "It Starts Here", was inspired by our mission to change how the world works and the need for digital transformation.',
    src: blog_img6,
  },
  {
    id: 7,
    title: "Web Programming",
    heading: "5 Ways to Enhance Your Business Website in 2023",
    text: "Businesses are building back and finding new ways to reach their customers.",
    src: blog_img7,
  },
  {
    id: 8,
    title: "Business Tips",
    heading: "3 Ways Using Fiverr Freelancers Can Help You Scale Your Business",
    text: "Now you can use Fiverr’s new Fashion Design services to grow your business from idea to implementation.",
    src: blog_img8,
  },
  {
    id: 9,
    title: "Programming & Tips",
    heading: "How No-Code Solutions Let You Build Apps Without Coding Skills",
    text: "Our new brand campaign, “It Starts Here”, was inspired by our mission to change how the world works and the need for digital transformation.",
    src: blog_img9,
  },
  {
    id: 10,
    title: "Success Stories",
    heading:
      "Danielle Lemieux of BREAD IN CAPTIVITY: Sourdough-Baking YouTube Series",
    text: "Businesses are building back and finding new ways to reach their customers.",
    src: blog_img7,
  },
  {
    id: 11,
    title: "Success Stories",
    heading: "Olivia Claparols of ROOTED: Direct-to-Consumer Houseplants",
    text: "Now you can use Fiverr’s new Fashion Design services to grow your business from idea to implementation.",
    src: blog_img8,
  },
  {
    id: 12,
    title: "Success Stories",
    heading: "Zach & David of ABC Beer Company: Neighborhood Bar & Beer Store",
    text: "How No-Code Solutions Let You Build Apps Without Coding Skills",
    src: blog_img9,
  },
];

const BlogPage = () => {
  return (
    <main className="BlogMain container py-20 pt-[calc(var(--height-header)_+_40px)] max-xl:pt-[var(--height-header)]">
      <div className="blog-list">
        <div className="blog__media">
          <Image
            className="blog__image cursor-pointer"
            src={blog_img}
            alt="Blog Image"
          />
        </div>
        <div className="blog__content">
          <div className="blog__text">
            <p className="blog__paragraph">Freelancer News</p>
            <h2 className="blog__heading cursor-pointer">
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

      {/* Blog Section 1 */}
      <div className="blog-section mb-32 flex justify-center items-center">
        {blogItems.slice(0, 3).map((item) => (
          <BlogItem
            key={item.id}
            id={item.id}
            title={item.title}
            heading={item.heading}
            text={item.text}
            src={item.src}
          />
        ))}
      </div>

      {/* Blog Section 2 - News */}
      <div>
        <h2 className="text-5xl text-center font-bold container">News</h2>
        <div className="blog-section">
          {blogItems.slice(3, 6).map((item) => (
            <BlogItem
              key={item.id}
              id={item.id}
              title={item.title}
              heading={item.heading}
              text={item.text}
              src={item.src}
            />
          ))}
        </div>
      </div>

      {/* TeamWork Section */}
      <div className="mt-20 ">
        <TeamWork
          text={
            "We believe that 2020 marks the beginning of a decade in which freelancing will take another step forward."
          }
          title={"Freelancer Tips"}
          heading={"Here's to Writing a New Chapter; From Fiverr CEO"}
          src={blog_img_team}
        />
      </div>

      {/* Blog Section 3 - Business */}
      <div className="mb-32">
        <h2 className="text-5xl mt-14 text-center font-bold container">
          Business
        </h2>
        <div className="blog-section">
          {blogItems.slice(6, 9).map((item) => (
            <BlogItem
              key={item.id}
              id={item.id}
              title={item.title}
              heading={item.heading}
              text={item.text}
              src={item.src}
            />
          ))}
        </div>
      </div>

      {/* TeamWork Section 2 */}
      <div>
        <TeamWork
          text={
            "We believe that 2020 marks the beginning of a decade in which freelancing will take another step forward."
          }
          title={"Programming & Tips"}
          heading={"Here's to Writing a New Chapter; From Fiverr CEO"}
          src={blog_img_team2}
        />
      </div>

      {/* Blog Section 4 - Case Studies */}
      <div className="mb-32">
        <h2 className="text-5xl mt-14 text-center font-bold container">
          Case Studies
        </h2>
        <div className="blog-section">
          {blogItems.slice(9, 12).map((item) => (
            <BlogItem
              key={item.id}
              id={item.id}
              title={item.title}
              heading={item.heading}
              text={item.text}
              src={item.src}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
