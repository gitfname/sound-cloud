
import Image from "next/image";

export default function MusicCard_1({
    id, title, subtitle, img,
    titleStyle={}, subtitleStyle={}, showTitle=true, showSubTitle=true,
    overImgText="", overImgTextStyle={}, overImgTextPos="center",
    detailsWrapperClass=""
}) {

    const _overImgTextPos = (
        overImgTextPos === "center" ?
            "items-center justify-center"
        :
        overImgTextPos === "tc" ?
            "items-start justify-center"
        :
        overImgTextPos === "tl" ?
            "items-start justify-start"
        :
        overImgTextPos === "tr" ?
            "items-start justify-end"
        :
        overImgTextPos === "bl" ?
            "items-end justify-start" 
        :
        overImgTextPos === "bc" ?
            "items-end justify-center"
        :
        overImgTextPos === "br" &&
            "items-end justify-end"
    )

    return (
        <div className="w-full self-stretch">
            <div className="relative">
                <Image
                    width={330}
                    height={330}
                    style={{
                        width:img.w,
                        height:img.h
                    }}
                    alt=""
                    src={img.src}
                    className="object-center object-cover h-full rounded-lg shadow-md shadow-black/10"
                />
                {
                    overImgText&&(
                        <div className={`absolute top-0 left-0 flex ${_overImgTextPos} z-10 w-full h-full`}>
                            <p style={...overImgTextStyle} className="text-black">{overImgText}</p>
                        </div>
                            
                    )
                }
            </div>
            <div className={"grid place-items-center mt-3"+detailsWrapperClass}>
                {showTitle&&<p style={{maxWidth: img.w}} className="text-black text-sm tracking-wide font-sans font-medium leading-none line-clamp-1">{title}</p>}
                {showSubTitle&&<p style={{maxWidth: img.w}} className={`text-black/70 text-sm tracking-wide font-sans font-normal line-clamp-2 px-0.5 text-center ${showTitle&&"mt-0.5"}`}>{subtitle}</p>}
            </div>
        </div>
    )
}