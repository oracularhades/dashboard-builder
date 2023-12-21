import LoadingSpinner from "./css/loading.css";

export default function Loading(props) {
    return (
        <div className="loading_div">
            <LoadingSpinner speed="600ms" style={{ width: 15, alignSelf: "center", justifySelf: "center" }}/>
        </div>
    )
}