import ExperienceListItem from "./ExperienceListItem";

function ResumeExperienceComponent({experience}){
    const experienceArray = [];
    experience.forEach((el, index) => experienceArray.push(<ExperienceListItem data={el} index={index} />));
    return (<div>
        <div className="experienceHeader"><h1>Experience</h1></div>
        {experienceArray}
        </div>);
}

export default ResumeExperienceComponent;