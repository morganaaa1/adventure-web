import {ParallaxBanner} from 'react-scroll-parallax'
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";


export const BannerTop = () => {
    const background: BannerLayer = {
        image: 'https://lh3.googleusercontent.com/uFONfwCuMSyD7UiXEsEPdpGSBw1_SuR4Ytm3kOdEmPUqcnZX43QXNArJdUnN2fzbgJA28v3LxLoPEAb60unONulLtONLBjJc7uO-iC3l8xd67MO7CLviSU1LsEYkFlWvkTLiFUTk-YUZGzTL7wBSFwNg0f6Dtlm813ax38Nl2KJcQEV-FSyDg_59S-gc1iH-bynEkxt5oHmJxgdqZdWd673YYuN6-0q7tSKc5p8jKKsPGPtrOMb76EbPqVIVyIBXF9PfhySXN6fXObmLZG42-SH1zd26HpHuxg2aKDyAGlBL7ZNPZOaXqxdBbhOAUQOs2TJ2ZjBpFgsshl3tWpupxrPU3DYBKhRK4LwCPKizSvYYNugREx_uJ8K2R3wiM7gLpGA59xg_6FiWIw2VD8jfI2V90L0zLZl92JAjHlbgJfahyvwox3zj2FO1ru5LtoaxfTB2SU9jif_LpuCX_mAV66aUMR4S6Z3LtEahrFG4o6UQnekH9W-E0Xf2YU4Gp6SBnz25A9siIKNB4wbeMGNCPntNtuznfUjZCcApQLfX_8wZxU9qi7KPBNGgRZSKjWv1JE5EtX9apuoaTQ__AkSbJ4rbWDg0M1WxgfvjCIakCpZlYS1OrcNHiN7u2WWXUWq06refyL1HpBlRuBrWACOR2Q1ciYIXnMtV9BROumx5Rs5eyffAVpFtak1OhpCmlIIKDxePpX4SSNyejFEXIFuqLq3mRzjzr9L-5Cvt3eGomL8v08X4L4VcJBXqr0fMAKMhwTFlB4w1w-idVyMsuJWK56qv9wovjIuqH1WPE0AHTYImUbiCrCLw1Tp97sy6Gt-0qlVStJo84V3YendijTnQANkL_rYvmk111RUKSXAF=w1268-h950-no?authuser=0',
        translateY: [0, 50],
        opacity: [1, 0.3],
        scale: [1.05, 1, "easeOutCubic"],
        expanded: false,
        shouldAlwaysCompleteAnimation: true
    };

    const headline: BannerLayer = {
        translateY: [0, 30],
        scale: [1, 1.05, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <div className="inset center">
                <h1 className="headline white">Adventure.</h1>
            </div>
        )
    };

    const foreground: BannerLayer = {
        image: 'https://lh3.googleusercontent.com/aOAabmewVGdEkcFfLJLc_5ESW3EEtVDdPJYXOoQXPGg9qKuN2W8a86Bxwz8eD-COc-jNvCQ3LN2NMXwlcQ5f2QrJ1uecwg4_qNgssuoyiLBFh-wpfu8bbVL23weLq-m7h5_21I_v7ewMvO32yg8eW6Ewz2zmjv9pZwhey2zsbwsAKtuvZZF6vdcxuARUOk8Z0gZxz5KOCxbuisDBH1_wdcQigp3pPsd0503Ay3enIXMvwNvjjcIBfLS1ef0BUqDPAIHXLCtmgmKMWe-0cU_YFdv1A7K0wcYP8MkzrvMgo1xr61egKaf7prRKTEUfZXKVK82WBpO9BlPclFmVArM0oOIDcBNNi323N65J9zulaShCCQS3wREiyiwEwuUbgqQdJ-gwAQA9aV27g8xKoi0KHoaWOcfSZfrxRQ7JHWUM7nKwqDi4ChXOCQkYFit6-heVtc5dgev9YsTHW5qwbzKX6SPY0QB1XScKj-rfHqCfb-ebmolrnfLfbhdgEO0eZNEx-y-jjo4y8WlsL0tOLH2x5vERLrSveZfbsPBGkmjCt_e3Bh3LG-BQFLypmWpw9gtCMzrkQDS4X8tkCPm4uuvN89UZOHToeulCOkin5moHKJ3tdHAhjUUEpE7uoDpbeh-n8V8OV2Kb7FAsZLOQYeWrWdY6j1jgZoyX89hfG4qaiursXAg8ChzYS5RpyWFXgEGGa3Vc1_IcNWRHWROAc0OOPU3aNPzmbZs5z6doQQKjXrtd-_Lc7xFnoL7xHNCxYX5QlZ-p1ov7K0XRqYE0jwM_ZQ9rlxHOehdCj-SE166Fk_sy0hNpy9Fh0UbLO3TXFyp4onKayYQcQHDY3rH_qUelLBgmZkuOV6rFNUISucip=w1268-h950-no?authuser=0',
        translateY: [0, 15],
        expanded: false,
        scale: [1, 1.1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
    };

    const gradientOverlay: BannerLayer = {
        opacity: [0, 15],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: <div className="gradient inset" />
    };

    return (
        <ParallaxBanner
            layers={[background, headline, foreground, gradientOverlay]}
            className="full"
            />
    );

};
