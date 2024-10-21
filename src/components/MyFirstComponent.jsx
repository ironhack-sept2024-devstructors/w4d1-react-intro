

function MyFirstComponent(){

    const title = "This is my first React component";

    const user = {
        userName: "alice",
        age: 30
    }

    const renderSubtitle = () => {
        return "This is the subtitle"
    }


    const divStyle = {
        color: "#fff",
        border: "1px solid #fff",
        margin: "2em auto",
        padding: "2em",
    }

    return (
        <>
            <p id="main-title" className="box" >{title}</p>
            <p>{renderSubtitle()}</p>

            <p>{20 + 10}</p>
            <p>{"hello " + "world"}</p>

            {/* This is a comment */}

            <div style={divStyle}>
                <p>Name: {user.userName.toUpperCase()}</p>
                <p>Age: {user.age}</p>
            </div>
        </>
    )
}

export default MyFirstComponent;