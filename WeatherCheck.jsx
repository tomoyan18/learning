import axios from "axios";
import { useState,useEffect } from "react";

const WeatherCheck = () => {
    const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=Tokyo,JP&appid=8e98ec2961aae06cf22690c34a43f820&lang=ja&units=metric";

    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    const {weather, main} = post;

    return (
        <div className="mb-16">
            <h2 className="text-xl mb-6">東京の気象情報</h2>
            <p className="mb-4">空模様 : {weather[0].description}</p>
            <p>気温 : {main.temp}</p>
        </div>
    );

}

export default WeatherCheck;