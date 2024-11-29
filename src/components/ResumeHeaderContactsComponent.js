import ResumeHeaderContact from "./ResumeHeaderContact";

export default function ResumeHeaderContactsComponent({contacts}){
    const data = [];
    contacts.forEach(element => {
        data.push(<ResumeHeaderContact contact={element} />);
    });
    return(<section style={{"display":"flex", "align-items": "center",
        "justify-content": "space-around"}}>{data}</section>);
};