import styled from 'styled-components'
import ImageBg from "../../images/bg-2.jpg"

const Styles = styled.div`
    .big_div{
        background-image: url(${ImageBg});
        min-height: 110vh;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .search-input{
        width: 40%;
        border: none;
        outline: none;
        border-radius: 8px;
        font-size: 18px;
        padding: 10px 10px;
        margin-top: 40px;
        background-color: rgba(255, 255, 255, 0.4);
        color:#ffffff;
    }
    .search-input::placeholder{
        color: #adadad;
    }

    .weather-card{
        width: 100%;
        height: 300px;
        background-color: #0976be85;
        border-radius: 15px;
        padding: 15px 10px;
        margin-top: 25px;
        transition:0.3s;
        .weather-icons{
            font-size: 75px;
            margin-top: 30px;
        }
        .weather-img{
            width: 70px;
            height: 70px;
            box-shadow: 0 0 15px #221b49;
            border-radius: 50%;
            background-color: #0028aa85;
        }
        &:hover{
            background-color: #0c609785;
            cursor: pointer;
            padding: 18px 12px;
        }

    }
    .ant-result-subtitle, .ant-result-title{
        color: #fff !important;
    }
`
export default Styles;
