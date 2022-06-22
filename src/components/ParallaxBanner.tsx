import { ParallaxBanner } from "react-scroll-parallax"
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types"

export const BannerTop = () => {
  const background: BannerLayer = {
    image: "assets/images/mountain.png",
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    expanded: false,
    shouldAlwaysCompleteAnimation: true,
  }

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center">
        <h1 className="headline white">Adventure.</h1>
      </div>
    ),
  }

  const foreground: BannerLayer = {
    image: "assets/images/people.png",
    translateY: [0, 15],
    expanded: false,
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  }

  const gradientOverlay: BannerLayer = {
    opacity: [0, 15],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />,
  }

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="full"
    />
  )
}
