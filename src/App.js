import { useState } from 'react';
import Accordion from './component/Accordion';
import Tabs from './component/Tabs';
import TabPanel from './component/TabPanel';

function App({allowMultiple = true}) {
  const [openIndexes,setOpenIndexes] = useState([])

  const accordionData = [
  {
    title: 'What is an accordion?',
    content:
      'An accordion is a user interface component that lets users expand and collapse sections of related content. It helps keep pages clean and organized by displaying information only when needed.'
  },
  {
    title: 'How does an accordion work?',
    content:
      'Users can click on a section title to reveal its content. Clicking the title again collapses the section, allowing users to easily navigate between different topics.'
  },
  {
    title: 'Why should I use an accordion?',
    content:
      'Accordions are useful for organizing large amounts of information into compact sections. They are commonly used for FAQs, help documentation, product details, and settings.'
  },
  {
    title: 'Can I customize an accordion?',
    content:
      'Yes, accordions can be customized with different colors, icons, spacing, animations, fonts, and layouts to match the design of your website or application.'
  },
  {
    title: 'Are accordions mobile-friendly?',
    content:
      'Yes, accordions are well suited for mobile devices because they reduce the amount of content displayed on the screen and allow users to expand only the sections they need.'
  }
]

  const handleAccordian = (index) => {
    if(allowMultiple){
      setOpenIndexes((prev) => 
        prev.includes(index) ? prev.filter((item) => item !== index) : [...prev,index]
      )
    } else {
    setOpenIndexes((prev) => 
    prev.includes(index) ? [] : [index])
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col items-center justify-center mt-10">
        <header>
          <h1 className="text-6xl font-bold select-none">Accordion</h1>
        </header>
        {
          accordionData.map((item,index) => (
            <Accordion 
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndexes.includes(index)}
            handleAccordian={() => handleAccordian(index)}
            allowMultiple={true}
            />
          ))
        }
         <Tabs>
          <TabPanel title="Accordion">
            <h2 className="text-2xl font-bold">
              Accordion
            </h2>

            <p className="mt-3">
              This tab contains information about the accordion.
            </p>
          </TabPanel>

          <TabPanel title="Features">
            <h2 className="text-2xl font-bold">
              Features
            </h2>

            <p className="mt-3">
              The accordion supports single and multiple open items.
            </p>
          </TabPanel>

          <TabPanel title="About">
            <h2 className="text-2xl font-bold">
              About
            </h2>

            <p className="mt-3">
              These components are reusable React components.
            </p>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
