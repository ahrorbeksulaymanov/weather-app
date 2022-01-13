import { Link } from "react-router-dom";
import dateBuilder from "../../main_functions";
import { BsClouds } from "react-icons/bs"
import { BiWind } from "react-icons/bi";
import { MdOutlineWaterDrop } from "react-icons/md"
import { useEffect, useState } from "react";

const AllDays = (props:any) => {

    const date = dateBuilder(new Date());
    const [datas, setDatas] = useState([])

    useEffect(() => {
        setDatas(props.data);
    }, [])
    return (
        <div className="row">
            {
                datas && datas?.map((item: any, index: number) => (
                    <div key={index} className="col-xl-3 col-md-4 col-sm-6">
                        <Link to={`/view-weather/${item?.dt_txt.slice(0, 10)}`}>
                            <div className="weather-card text-light">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="rounded border border-secondary p-1">{date[index]}</span>
                                    <span style={{ fontSize: '16px' }}>{props?.timeHour}</span>
                                </div>
                                <div className="text-center">
                                    <img className="weather-img" src={"http://openweathermap.org/img/w/" + item.weather[0].icon + ".png"} alt="" />
                                    <div className="mt-2">
                                        <span style={{ fontSize: "16px", color: "coral", marginRight: "10px" }} >{Math.round(item.main.temp_min)} °C</span>
                                        <span style={{ fontSize: "16px" }}> {Math.round(item.main.temp_max)} °C</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center pb-5 mt-5 ">
                                    <div>
                                        <p className="m-0"><BiWind /> {item.wind.speed} km/h</p>
                                        <p className="m-0"><MdOutlineWaterDrop /> {item.main.humidity} %</p>
                                        <p className="m-0"><BsClouds /> {item.clouds.all} %</p>
                                    </div>
                                    <div>
                                        <h1 className="text-light">{Math.round(item.main.temp)} °C</h1>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
export default AllDays;