import 'bootstrap-icons/font/bootstrap-icons.min.css'

export default function ResumeHeaderContact({contact}){
    switch(contact.type){
        case 'email':
            return (<div><i className="bi bi-mailbox"></i><span>{contact.value}</span></div>);
        case 'phone':
            return (<div><i className="bi bi-phone"></i><span>{contact.value}</span></div>);
        case 'location':
            return (<div><i className="bi bi-geo-alt"></i><span>{contact.value}</span></div>);
        default:
            console.log(`Sorry, we are out of ${contact.type}.`);
    }
};