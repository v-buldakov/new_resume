import ResumeHeaderComponent from "./ResumeHeaderComponent";
import ResumeBodyComponent from "./ResumeBodyComponent";
import '../index.css'

export default function ResumeMainComponent({data}){
    return (<div className="container">
        <ResumeHeaderComponent user={data}/>
        <ResumeBodyComponent user={data}/>
    </div>);
}