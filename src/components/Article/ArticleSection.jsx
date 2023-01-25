import Article from "./Article";

const CosmicCliffs =
  "https://cdn.esawebb.org/archives/images/screen/weic2205a.jpg";

const postImage = (
  <img
    src={CosmicCliffs}
    alt="“Cosmic Cliffs” in the Carina Nebula"
    className="w-screen h-auto object-fill"
  />
);

const ArticleSection = () => {
  return (
    <article className="bg-[#C5A38D] m-8 p-8 rounded-3xl">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold md:text-7xl">Astronomical</h1>
      </div>

      <h2 className="text-xl md:text-5xl">Editorial</h2>
      <div className="article-section">
        <Article
          element={postImage}
          title={"Title 1"}
          lineClamp={18}
          lineHeight={1.2}
          lineAlignment={"text-end"}
          circleAlignment={"justify-start"}
        />

        <div className="grid gap-y-10 md:gap-y-6">
          <Article title={"Title 2"} lineClamp={9} lineHeight={1.6} />
          <Article title={"Title 3"} lineClamp={9} lineHeight={1.6} />
        </div>
      </div>
      <div className="article-section-btns-layout">
        <button className="border-[#383336] border-[3px] article-section-btns ">
          Meet Our Bloggers
        </button>
        <button className="bg-gradient-to-l from-[#494347] to-[#161415] article-section-btns text-[#E4BEA4]">
          Be a Blogger
        </button>
      </div>
    </article>
  );
};

export default ArticleSection;
