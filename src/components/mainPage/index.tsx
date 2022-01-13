import axios from "axios"
import { useEffect, useState } from "react";
import { API_KEY, API_PATH } from "../../constants";
import Styles from "./styled";
import useDebounce from "../../debounce";
import { Result } from "antd";
import AllDays from "./allDays";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewWeather from "../view-weather";
import Loader from "../../loader";

const MainPage = () => {

    const [data, setData] = useState<any>([])
    const [cityName, setcityName] = useState<string>("")
    const [inputVal, setinputVal] = useState<string>("Tashkent")
    const [timeHour, settimeHour] = useState<any>()
    const [counter, setcounter] = useState<boolean>(false)
    const [isLoading, setisLoading] = useState<boolean>(true)
    const [isData, setisData] = useState<boolean>(false)

    const debouncedSearchTerm: string = useDebounce<string>(inputVal, 600);

    useEffect(() => {
        (
            async () => {
                try {
                    setData([]);
                    setcityName("")
                    setisLoading(true)
                    setisData(false)

                    await axios({
                        url: `${API_PATH}?q=${inputVal}&units=metric&APPID=${API_KEY}`,
                        method: "GET",
                    }).then((res) => {
                        const hour = Math.floor(new Date().getHours() / 3) * 3
                        const res_data = res?.data?.list.filter((item:any) => item.dt_txt.slice(11, 13) == hour)
                        setData(res_data);
                        console.log("res_data", res_data);
                        
                        setcityName(res?.data?.city?.name)
                        setisLoading(false)
                        setisData(false)
                    })
                } catch (error: any) {
                    console.log("error ===> ", error);
                    setisLoading(false)
                    setisData(true)
                }
            }
        )()
    }, [debouncedSearchTerm])

    useEffect(() => {
        settimeHour(new Date().getHours() + ":" + ((new Date().getMinutes()<10) ? "0"+new Date().getMinutes() :new Date().getMinutes()))
        setTimeout(() => {
            setcounter(!counter)
        }, 60000)
    }, [counter])

    return (
        <Styles>
            <div className="big_div pb-5">
                <div className="container">
                    <input className="search-input" value={inputVal} onChange={(e) => setinputVal(e.target.value)} type="text" placeholder="Search the weather in..." />
                    <span className="h3 text-light ms-5">{cityName}</span>
                    <span className="h6 text-light ms-2">{timeHour}</span>
                    {
                        data.length !== 0 && <BrowserRouter>
                            <Routes>
                                <Route path='/*' element={<AllDays data={data} timeHour={timeHour} />} />
                                <Route path='/view-weather/:id' element={<ViewWeather cityName={cityName} />} />
                            </Routes>
                        </BrowserRouter>
                    }
                    {
                        isLoading && <Loader />
                    }
                    {
                        isData &&
                        <Result
                            status="404"
                            title="Search the weather"
                            subTitle="No information found"
                        />
                    }
                </div>
            </div>
        </Styles>
    )
}
export default MainPage