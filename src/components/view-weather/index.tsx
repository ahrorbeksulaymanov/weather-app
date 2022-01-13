import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "./styled";
import WeatherChart from "./weather-chart";

const ViewWeather = (props: any) => {
    const match = useParams()
    const [data, setdata] = useState([])

    useEffect(() => {
        (
            async () => {
                try {
                    await axios({
                        url: `https://weatherapi-com.p.rapidapi.com/forecast.json`,
                        method: "GET",
                        params: { q: props?.cityName, days: "1", dt: match?.id },
                        headers: {
                            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
                            'x-rapidapi-key': 'f44daeecbbmshb10c50b217e78b8p1f81eejsna27552186ddc'
                        }
                    }).then((res) => {
                        setdata(res?.data?.forecast?.forecastday[0]?.hour)
                    })
                } catch (error: any) {
                    console.log("error ===> ", error.length);
                }
            }
        )()
    }, [])

    return (
        <Styles>
            <div className="pt-4">
                <div className="chart_wrapper">
                    <WeatherChart data={data} />
                </div>
                <div className="row">
                    {
                        data?.map((item: any, index: number) => (
                            <div key={index} className="col-lg-1 col-sm-2 col-3">
                                <div className="card-by-hour">
                                    <img className="image-hour" src={"https:"+item?.condition?.icon} alt="" />
                                    <p className="text-light text-center mb-0">{Math.round(item?.temp_c)} °C</p>
                                    <p className="text-light text-center mb-0">{item?.time.slice(11, 16)}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Styles>
    )
}
export default ViewWeather;