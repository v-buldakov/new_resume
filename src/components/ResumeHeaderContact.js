export default function ResumeHeaderContact({contact}){
    switch(contact.type){
        case 'email':
            return (<div>&#128386;<span>{contact.value}</span></div>);
        case 'phone':
            return (<div>&#128382;<span>{contact.value}</span></div>);
        case 'location':
            return (<div>&#127986;<span>{contact.value}</span></div>);
        default:
            console.log(`Sorry, we are out of ${contact.type}.`);
    }
};