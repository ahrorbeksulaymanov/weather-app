import "./styles.css"

const Loader = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height:"60vh"}}>
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default Loader;
