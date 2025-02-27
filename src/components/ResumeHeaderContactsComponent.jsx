import ResumeHeaderContact from "./ResumeHeaderContact";

export default function ResumeHeaderContactsComponent({contacts}){
    const data = [];
    contacts.forEach((element, index) => {
        data.push(<ResumeHeaderContact contact={element} key={index} />);
    });
    return(<section style={{"display":"flex", "align-items": "center",
        "justify-content": "space-around"}}>{data}</section>);
};