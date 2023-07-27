import Banner from "@/components/banner";
import PopularSearchs from "@/components/popularSearches";
import Carousel from "@/components/carousel";
import Boxes from "@/components/boxes";
import Partners from "@/components/partners";
import JopPostingForYou from "@/components/jobpostingforyou";
import Background from "@/components/background";

export default function HomeContainer() {
    return (
        <>
            <Banner/>
            <PopularSearchs/>
            <div className={'position-relative'}>
                <Carousel/>
                <Boxes/>
                <Partners/>
                <JopPostingForYou/>
                <Background/>
            </div>
        </>
    )
}