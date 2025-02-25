import ResumeSideBarLanguage from "./ResumeSideBarLanguage";
import ResumeSideBarSkills from "./ResumeSideBarSkills";
import ResumeSideBarSummary from "./ResumeSideBarSummary";

function ResumeSideBar({user}){

    return(<div>
        <ResumeSideBarSummary summary={user.summary}></ResumeSideBarSummary>
        <ResumeSideBarSkills skills={user.skills}></ResumeSideBarSkills>
        <ResumeSideBarLanguage languages={user.languages}></ResumeSideBarLanguage>
    </div>)
}

export default ResumeSideBar;