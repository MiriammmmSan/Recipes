export default function ImproveSkills (){
    const list = [
        "что-то",
        "что-то",
        "что-то",
        "что-то",
        "что-то",
        "что-то",
    ]

    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="./img/img10.jpeg" alt=""/>
            </div>
            <div className="col typography">
                <h1 className="title">Improve Skills</h1>
                {list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                ))}
                <button className="btn">start</button>
            </div>
            
        </div>
    )
}