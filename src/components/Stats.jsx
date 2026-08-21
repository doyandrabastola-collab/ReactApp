import React from 'react'

const Stats = () => {

    const statsData =
    [
        {

        rating : "12k+",
        name : "student"

    },
    {
        rating : "4.9/5",
        name : "rating"

    },

    {
        rating : "24/7",
        name : "support"
    }
]

  return (
    <>
    <div className="stats">
             
{
    
statsData.map((sd,index)=>{
return (
 <div key={index} >
<strong>{sd.rating}</strong>
 <span>{sd.name}</span>
</div>
)

})
}

                
             
            </div>
    
    </>
  )
}

export default Stats