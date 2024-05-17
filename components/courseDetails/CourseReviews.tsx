import Image from "next/image";
import { FC } from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    reviewer: "Ahmed Yasser",
    img: "/img/course_details/review-1.png",
    rating: 4.6,
    reviewedAt: "03/03/2024",
    review:
      "I was learning a lot from this course, highly recommend it to anyone who wants to learn Laravel from the basics to a fairly decent level. Thanks, Piotr",
  },
  {
    reviewer: "Ahmed Yasser",
    img: "/img/course_details/review-2.png",
    rating: 5,
    reviewedAt: "03/03/2024",
    review:
      "I was learning a lot from this course, highly recommend it to anyone who wants to learn Laravel from the basics to a fairly decent level. Thanks, Piotr",
  },
  {
    reviewer: "Ahmed Yasser",
    img: "/img/course_details/review-3.png",
    rating: 3.9,
    reviewedAt: "03/03/2024",
    review:
      "I was learning a lot from this course, highly recommend it to anyone who wants to learn Laravel from the basics to a fairly decent level. Thanks, Piotr",
  },
  {
    reviewer: "Ahmed Yasser",
    img: "/img/course_details/review-4.png",
    rating: 5,
    reviewedAt: "03/03/2024",
    review:
      "I was learning a lot from this course, highly recommend it to anyone who wants to learn Laravel from the basics to a fairly decent level. Thanks, Piotr",
  },
];

const CourseReviews: FC = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-neutral-800 mb-2">Reviews</h3>
      <ul className="flex flex-col gap-8 mb-8">
        {reviews.map((review, index) => (
          <li key={index} className="flex flex-col gap-3">
            <div className="flex gap-2 flex-row-reverse justify-between">
              {/* Reviewer Image */}
              <div className="h-12 w-12 rounded-full relative overflow-hidden">
                <Image
                  fill
                  className="object-cover"
                  src={review.img}
                  alt={`${review.reviewer} photo`}
                />
              </div>
              {/* Reviewer Details */}
              <div>
                <strong>{review.reviewer}</strong>
                <div className="flex items-center gap-4">
                  <span className="flex gap-1 text-orange-600">
                    {Array.from({ length: Math.floor(review.rating) }).map(
                      (_star, index) => (
                        <FaStar key={index} />
                      )
                    )}{" "}
                  </span>
                  <span className="text-sm text-neutral-800">
                    {review.reviewedAt}
                  </span>
                </div>
              </div>
            </div>
            <article className="text-sm font-semibold text-neutral-800">
              {review.review}
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseReviews;
