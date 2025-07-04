"use client";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ProgressiveBlur } from "./ui/progressive-blur";

interface AdSpace {
  tokenId: number;
  owner: string;
  websiteURL: string;
  spaceType: string;
  spaceId: string;
  category: string;
  height: number;
  width: number;
  tags: string[];
  hourlyRentalRate: string;
  status: string;
  name?: string;
  description?: string;
  image?: string;
}

const AdCard: React.FC<{ space: AdSpace | undefined }> = ({ space }) => {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);

  if (!space) {
    return null;
  }

  const handleViewDetails = () => {
    router.push(`/adSpace/details/${space.tokenId}`);
  };

  return (
    <div
      className="group relative w-[300px] h-[430px] rounded-3xl overflow-hidden shadow-lg 
      mb-4 transition-all duration-300 border-2 border-zinc-700 cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {space.image ? (
        <img
          src={space.image}
          alt={`Ad Space ${space.tokenId}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-700" />
      )}

      <ProgressiveBlur
        className="pointer-events-none absolute bottom-0 left-0 h-[75%] w-full"
        blurIntensity={2}
        animate={isHover ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="relative h-full flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">
          {space.name
            ? space.name.includes("AdSpace #")
              ? space.name.split(" - ")[1] || space.name // Fallback to original if no " - " exists
              : space.name
            : `Ad Space #${space.tokenId}`}
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {space.tags.length > 0 ? (
            space.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded-full bg-gray-800/80 text-gray-300 text-xs font-medium"
              >
                {tag.length > 12 ? `${tag.substring(0, 10)}...` : tag}
              </span>
            ))
          ) : (
            <span className="px-2 py-1 rounded-full bg-gray-800/80 text-gray-400 text-xs">
              No tags
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-700/50">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-white">
              ${space.hourlyRentalRate} /hour
              <span className="text-gray-400 text-xs font-normal ml-1"></span>
            </span>
          </div>

          <Button
            onClick={handleViewDetails}
            className="bg-white/20 hover:bg-white hover:text-black text-white rounded-xl px-6 font-semibold transition-all hover:cursor-pointer"
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
