import Carrossel from "@/components/Carrossel";
import Form from "@/components/Form";
import Introduce from "@/components/Introduce";
import NavBar from "@/components/NavBar";
import Search from "@/components/Search";
import VideoSection from "@/components/VideoSection";
import { Fragment } from "react";

export default function HomeScreen(){
    return(
        <Fragment>
        <NavBar/>
        <Introduce/>
        <VideoSection/>
        <Carrossel/>
        <Form/>
        <Search/>
        </Fragment>
    )
}