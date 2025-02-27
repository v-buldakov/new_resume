import ResumeSideBarLanguageItem from "./ResumeSideBarLanguageItem";

function ResumeSideBarLanguage({ languages }) {
  const data = [];
  languages.forEach((element, index) => {
    data.push(
      <ResumeSideBarLanguageItem language={element} key={index}></ResumeSideBarLanguageItem>
    );
  });
  return (
    <div>
      <h2>Languages</h2>
      <div>{data}</div>
    </div>
  );
}

export default ResumeSideBarLanguage;
