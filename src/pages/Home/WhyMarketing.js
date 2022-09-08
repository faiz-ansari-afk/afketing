
export default function WhyMarketing() {
    return (
        <div className="mt-20 text-left lg:mt-36">
            <h1 className="text-center text-8xl font-semibold text-primary sm:text-5xl lg:text-8xl">
                Why <b className="text-secondary ">Marketing</b> ?
            </h1>
            <div className="h-[500px] pt-5 lg:mt-28">
                <lottie-player 
                src="https://assets10.lottiefiles.com/packages/lf20_ecsh092g.json" 
                background="transparent" 
                speed="1"  
                loop  
                autoplay></lottie-player>
            </div>
            <p className="text-gray-600 text-md mt-10">
                Do you know what your customers want? Do you think your customers trust
                your products? When was the last time you saw a customer tweeting about
                your product or service? Was it a complaint or compliment?
            </p>
            <h1 className="text-primary text-4xl font-semibold mt-10 sm:text-3xl">
                The answers to all these questions lie in marketing.
            </h1>
            <p className="text-gray-600 text-md mt-10">
                How you market your business determines if the enterprise will be
                successful or not. Marketing is a tool used to create and maintain
                demand, relevance, reputation, competition and more. Without it, your
                business is likely to close down due to lack of sales.
            </p>
        </div>
    )
}
