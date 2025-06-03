import UserCard from "./UserCard";
import UserCardClass from "./UserCardClass";

export default function About() {  

    return(
        <div className="about">
        <h1>About page</h1>
        <UserCard name={"Ahmad Shaikh"}/>
        <UserCardClass name={"Ahmad"}/>
        </div>
    )
}