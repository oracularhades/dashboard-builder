import ProfilePic from "@/components/user/profile_pic";
import "./css/sidebar2.css";
import SidebarButton1 from "./sidebar-buttons/sidebarbutton1";
import UserCard1 from "@/components/user/user_cards/user_card1";

export default function Sidebar2(props) {
    return (
        <div className="sidebar2">
            <ProfilePic hover={<UserCard1 user={{ name: "Example user", email: "user@example.com" }}>
                <button>Logout</button>
            </UserCard1>}/>
            <SidebarButton1 alias="Example1" href="/example1" icon="/icons/paint_brush.svg"/>
            <SidebarButton1 alias="Example2" href="/example2" icon="/icons/categoriesBookmark.svg"/>
        </div>
    )
}