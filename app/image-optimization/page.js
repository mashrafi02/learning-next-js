import Image from "next/image";
import kingFisher from "@/public/images/king-fisher.jpg"

const ImageOptimization = () => {
  return (
    <div className="w-[400px]">
        <Image src={kingFisher} alt="King Fisher bird image" placeholder="blur"/>
    </div>
  )
}

export default ImageOptimization