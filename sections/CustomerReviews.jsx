import {reviews} from "@/constants";
import ReviewCard from "@/components/ReviewCard";

const CustomerReviews = () => {
    return (
        <section className="max-container ">
            <h3 className="font-palanquin text-center text-4xl font-bold">
                What Our <span className="text-coral-red">Customers </span>Say?
            </h3>
            <p className="m-auto max-w-lg mt-4 text-center info-text">
                Hear genuine stories from our satisfied customers about their
                exceptional experiences with us.
            </p>
            <div className="flex flex-1 justify-evenly mt-24 items-center max-lg:flex-col gap-14">
                {reviews.map((review) => (
                    <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback}/>
                ))}
            </div>
        </section>
    );
};

export default CustomerReviews;