
function User(props){
    return (
        <>
            <p>Name: {props.userName}</p>
            <p>Favourite drink: {props.favDrink}</p>
            <p>Age: {props.age}</p>
        </>
    )
}

export default User;