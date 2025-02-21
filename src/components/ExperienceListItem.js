function ExperienceListItem({data}){
    const ulData = [];
    data.fullInformation.fullInformation.forEach(element => {
        ulData.push(<li>{element}</li>);
    });
    return (<div>
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