function ResumeSideBarSkillsItem({type, list}){
    const items = [];
    list.forEach((element, index) => {
        items.push(<span className="badge text-bg-secondary" key={index}>{element}</span>)
    });

    return (<div>
        <h3>{type}</h3>
        <div>{items}</div>
    </div>)
}

export default ResumeSideBarSkillsItem;