import HeaderPhotoComponent from "./HeaderPhotoComponent";
import ResumeHeaderContactsComponent from "./ResumeHeaderContactsComponent";

export default function ResumeHeaderComponent({user}) {
    return (<header style={{"display" : "flex", "flex-direction": "row", "align-items": "center"}}>
        <div style={{"width": "80%"}}>
        <h1>{user.name}</h1>
        <h4>{user.position}</h4>
        <ResumeHeaderContactsComponent contacts={user.contacts} />
        </div>
        <div style={{"width": "20%"}}>
            <HeaderPhotoComponent />
        </div>
    </header>);
}