import Card from "./Card";

export default function CardGrid(){
    return(
        <>
        <div className="flex justify-center items-center space-x-40">
            <div className=""><Card/></div>
            <div className=""><Card/></div>
            <div className=""><Card/></div>
        </div>
        </>
    )
}