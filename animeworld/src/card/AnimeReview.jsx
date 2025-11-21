export default function AnimeReview({review})
{
    return (
        <section className="my-5">
            <div className="flex gap-1">
                <img className="w-[100px] h-[50px] object-cover object-center" src={review.user.images.jpg.image_url} alt={review.user.username} />
                <h3 className="text-primary font-inter">{review.user.username}</h3>
            </div>
            <p className="text-text py-1 text-xl font-bold">Posted at {review.date.split("T")[0]}</p>
            <p className="whitespace-pre-line text-text font-roboto opacity-70">
                {review.review}
            </p>
        </section>
    )
}