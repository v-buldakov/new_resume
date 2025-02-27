function ExperienceListItem({data, index}){
    const ulData = [];
    data.fullInformation.fullInformation.forEach((element, index) => {
        ulData.push(<li key={index}>{element}</li>);
    });
    const addClass = index !== 0 ? "experienceListItem" : "";
    return (<div className={addClass}>
        <h2>{data.position}</h2>
        <p>{data.company}</p>
        <p>{data.startDate}</p>
        <p>{data.endDate}</p>
        <p>{data.place}</p>
        <p>{data.fullInformation.overview}</p>
        <ul>{ulData}</ul>
    </div>);
}

export default ExperienceListItem;