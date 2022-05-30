import CustomImg from "./Customimg";

export default function HeroSection() {
    const images = [
        "./img/img1.jpeg",
        "./img/img2.png",
        "./img/img3.png",
        "./img/img4.png",
        "./img/img5.jpeg",
        "./img/img6.jpeg",
        "./img/img7.jpeg",
        "./img/img8.png",
        "./img/img9.png"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">About</h1>
                <p className="info">какое-то описание которое потом тут будет наверное на инглише</p>
                <button className="btn">start</button>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImg key={index} imgSrc={src} pt={"90%"}/>
                )) }
            </div>
        </div>
    )
}