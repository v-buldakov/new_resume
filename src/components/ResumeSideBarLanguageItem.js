function ResumeSideBarLanguageItem({language}){
    return (<div>
        <p>{language.type}</p>
        <p>{language.value}</p>
    </div>)
}

export default ResumeSideBarLanguageItem;