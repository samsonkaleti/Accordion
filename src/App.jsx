import React from 'react' 
import questions from './Data' 
import Questions from './Questions'; 
const App = () => {  

  return (
    <div className='min-h-screen min-w-full flex justify-center items-center flex-col p-10 bg-blue-200   '> 
      <h1 className='text-4xl font-bold'>Questions</h1>
      <div className="p-16 shadow-xl h-[800px] bg-white rounded-lg mt-2 ">
        {
          questions.map((each) => {
            return (<Questions key={each.id} info={each.info} title={each.title} />)
          })
        }
      </div>
    </div>
  )
}

export default App
