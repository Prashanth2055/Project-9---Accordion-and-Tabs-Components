import React from 'react'

const Accordion = ({title,content,isOpen,handleAccordian}) => {
  return (
    <div onClick={handleAccordian} className='mt-10 border w-1/2 text-center p-6 border-rounded select-none'>
          <h3 className="text-2xl font-semibold">{title}</h3>
          {
            isOpen &&
            <p className="text-base">
              {content}
            </p>
          }
        </div>
  )
}

export default Accordion
