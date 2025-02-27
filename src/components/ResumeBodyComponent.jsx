import ResumeExperienceComponent from "./ResumeExperienceComponent";
import ResumeSideBar from "./ResumeSideBar";

export default function ResumeBodyComponent({user}) {
    return (<div className="flex">
        <ResumeExperienceComponent experience={user.experience}></ResumeExperienceComponent>
        <ResumeSideBar user={user}></ResumeSideBar>
    </div>);
}