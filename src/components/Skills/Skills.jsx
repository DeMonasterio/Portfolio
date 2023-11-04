import "./Skills.css"
import SkillsCard from "./SkillsCard.jsx"

{/* <div className="products--container">
          {sortedProducts.map((p) => (
            <ProductCard p={p} key={p.id} searchedText={searchedText} RangeValue={RangeValue} />
          ))}
        </div> */}




export default function Skills() {

  const skillSet = ["React", "JavaScript", "SQL", "Express", "Java", "CSS", "HTML"];

  return (
    // <div className="skills__container">
    <>
      <div className="projects__section" >
        <h2 className="skills__title">Skills</h2>
        <span className="projects__label"></span>
      </div>
      <div className="skillset" >
        {skillSet.map((skill) => (<SkillsCard skill={skill} />))}
      </div>
    </>
    // </div>
  )

}