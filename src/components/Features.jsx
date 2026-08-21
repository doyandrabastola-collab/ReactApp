import React from 'react'

const Features = () => {
const data = [

    {
        id: "01",
        title : "Track progress",
        des : "See weekly wins and stay focused on the goals that matter most."

    },
    {
            id: "02",
 title : "Learn with eases",
        des : "Access simple tools and guided resources designed for busy students."
    },
    {
            id: "03",
 title : "Study smarter",
        des : "Organize lessons, notes, and deadlines in one calm workspace."
    }


]



  return (
    <div>
        
        <section className="features">
          <div className="section-heading">
            <p className="eyebrow">Why students choose us</p>
            <h2>Everything you need to learn with clarity.</h2>
          </div>




          <div className="feature-grid">

{data.map((dta)=>{
return(

<article key={dta} className="feature-card">
              <div className="feature-icon">{dta.id}</div>
              <h3>{dta.title}</h3>
              <p>{dta.des}</p>
            </article>


)

})}

            
          </div>
        </section>
    </div>
  )
}

export default Features