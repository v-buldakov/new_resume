function ResumeSideBarSkillsItem({type, list}){
    const items = [];
    list.forEach(element => {
        items.push(<p>{element}</p>)
    });

    return (<div>
        <h3>{type}</h3>
        <div>{items}</div>
    </div>)
}

export default ResumeSideBarSkillsItem;