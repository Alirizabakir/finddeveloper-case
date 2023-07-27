import {notFound} from "next/navigation";
import HomeContainer from "@/containers/home";

export default function Home({searchParams}) {

    if (searchParams.error === 'true') {
        notFound()
    }

    return <HomeContainer/>;
}
