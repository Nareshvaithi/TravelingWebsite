export const BannerImg = ({img}) => {
    const bgImg = {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height:"400px",
        width: "100%",
    }
  return (
    <div data-aos="zoom-in" style={bgImg} className="h-[400px] w-full"></div>
  )
}

