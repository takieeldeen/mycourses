import { FC } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

interface RatingsProps {
  rating: number;
}
const Ratings: FC<RatingsProps> = ({ rating }) => {
  const ratingRounded = Math.round(rating);
  const remainingRating = 5 - ratingRounded;
  return (
    <div className="flex gap-1 text-orange-600">
      {Array.from({ length: ratingRounded }).map((_el, i) => (
        <FaStar key={i} />
      ))}
      {Array.from({ length: remainingRating }).map((_el, i) => (
        <FaRegStar key={i} />
      ))}
    </div>
  );
};

export default Ratings;
