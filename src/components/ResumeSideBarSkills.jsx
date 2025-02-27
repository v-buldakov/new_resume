import ResumeSideBarSkillsItem from "./ResumeSideBarSkillsItem";

function ResumeSideBarSkills({skills}){
    const data = [];
    skills.forEach((element, index) =>{
        data.push(<ResumeSideBarSkillsItem type={element.type} list={element.list} key={index}></ResumeSideBarSkillsItem>)
    });

    return (<div>
        <h2>Skills</h2>
        <div>
            {data}
        </div>
    </div>);
}

export default ResumeSideBarSkills;