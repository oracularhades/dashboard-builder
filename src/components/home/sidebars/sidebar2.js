import ProfilePic from "@/components/user/profile_pic";
import "./css/sidebar2.css";
import SidebarButton1 from "./sidebar-buttons/sidebarbutton1";
import UserCard1 from "@/components/user/user_cards/user_card1";

export default function Sidebar2(props) {
    return (
        <div className="sidebar2">
            {props.children}
        </div>
    )
}