import ExperienceListItem from "./ExperienceListItem";

export default function ResumeBodyComponent({user}) {
    const experience = [];
    user.experience.forEach(el => experience.push(<ExperienceListItem data={el} />));
    return (<div>{experience}</div>);
}