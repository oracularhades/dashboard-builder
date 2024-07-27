import Base from "../base";
import Sidebar2 from "./sidebars/sidebar2";
import './../global.css';
import "./css/home.css"
import ProfilePic from "../user/profile_pic";
import UserCard1 from "../user/user_cards/user_card1";
import SidebarButton1 from "./sidebars/sidebar-buttons/sidebarbutton1";

export default function Home1(props) {
    return (
        <Base className="home1">
            <Sidebar2>
                <ProfilePic hover={<UserCard1 user={{ name: "Example user", email: "user@example.com" }}>
                    <button>Logout</button>
                </UserCard1>}/>
                <SidebarButton1 alias="Example1" href="/example1" icon="/icons/home.svg"/>
                <SidebarButton1 alias="Example2" href="/example2" icon="/icons/search.svg"/>
            </Sidebar2>
            <div className="home1_children">
                <div className={props.className} style={props.style}>
                    {props.children}
                </div>
            </div>
        </Base>
    )
}