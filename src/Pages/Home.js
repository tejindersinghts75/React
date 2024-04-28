import React from 'react'
import Header from '../Components/Header'
import Cards from '../Components/ChildComp1/Cards'
import ChildComp2 from '../Components/ChildComp2/ChildComp2';
import Section4 from '../Sections/Section4';
import Section5 from '../Sections/Section5.js';
import Section3 from '../Sections/Section3';
import Section6 from '../Sections/Section6';
import Section7 from '../Sections/Section7';


function Home() {

  const content = [
    { smallhead: "WE ARE PRIVATE PSYCHIATRY & THEREPY CLINIC" },
    { mainhead: "A Strong Image of Yourself is Our Success" }
  ]
  const cardcontent = [
    {
     
      firsthead: "For Adults",
      textline: "You can call our highly experienced clinical team if your child, teenager or family is going through difficulties.",
      bulletpoint: ["ANXIETY", "DEPRESSION", "BIPOLAR DISORDER", "ADHD", "A  Z OF ISSUES"]
    },
    {
      
      firsthead: "For Adults",
      textline: "You can call our highly experienced clinical team if your child, teenager or family is going through difficulties.",
      bulletpoint: ["ANXIETY", "DEPRESSION", "BIPOLAR DISORDER", "ADHD", "A  Z OF ISSUES"]
    },
    {
     
      firsthead: "For Business",
      textline: "You can call our highly experienced clinical team if your child, teenager or family is going through difficulties.",
      bulletpoint: ["MEDICO LEGAL REPORTS", "OCCUPATIONAL HEALTH", "LOCUMS AND STAFFING", "NEUROPSYCHOLOGICAL ASSESSMENTS", "MENTAL CAPACITY ASSESSMETNS"]
    }
  ];

  const videocontent = {
    firsthead: "For Business",
    headline: "We Are The Best Support for You",
    textline: "You can call our highly experienced clinical team if your child, teenager or family is going through difficulties."
  }

  return (
    <div>
      <Header contenthead={content} />
       <div className='second_section'> {cardcontent.map((el) => <Cards {...el} /> )} </div>
       <Section3/>
       <Section4/>
       <Section5/>
       <Section6/>
       <Section7/>
      
    </div>
  )
}

export default Home