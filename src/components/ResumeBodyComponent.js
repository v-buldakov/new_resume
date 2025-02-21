import ResumeExperienceComponent from "./ResumeExperienceComponent";
import ResumeSideBar from "./ResumeSideBar";

export default function ResumeBodyComponent({user}) {
    return (<div>
        <ResumeExperienceComponent experience={user.experience}></ResumeExperienceComponent>
        <ResumeSideBar></ResumeSideBar>
    </div>);
}