import React from 'react'
import './SPM.style.scss'


function SPM() {

  const headingTitles = [
    {
      index: 1,
      title: "Project Initiation"
    },
    {
      index: 2,
      title: "Project Planning"
    },
    {
      index: 3,
      title: "Project Execution"
    },
    {
      index: 4,
      title: "Project Monitoring & Control"
    },
    {
      index: 5,
      title: "Project Closure"
    }
  ]
 
  return (
    <div className='spm'>
      <div className='spm-cont'>
        <div className='spm-wrapper'>
          <div class="grid-container">
            {
              headingTitles.map((heading) => (
                <div class="grid-item"><Heading index={heading.index} title={heading.title}/></div>
              ))
            }
            {/* <div class="grid-item">
              <div className='heading'>
                <div className='index'>1</div>
                <div className='title'>Project Initiation</div>
              </div>
            </div> */}
            <div class="grid-item">
              <div className='timeline' id='tm-1'>
                Project Scope
              </div>  
            </div>  
            <div class="grid-item">
              <div className='timeline' id='tm-2' />
            </div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item">
              <div className='timeline' id='tm-3'>
                Stakeholders
              </div>  
            </div>
            <div class="grid-item">
              <div className='timeline' id='tm-4'>
                Work Break Down
              </div>
            </div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item">
              <div className='timeline' id='tm-5'>
                Feasibility Study
              </div>
            </div>
            <div class="grid-item">
              <div className='timeline' id='tm-6'>
                Cost & Budget
              </div>
            </div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item">
              <div className='timeline' id='tm-7'>
                Work Implementation
              </div>
            </div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item">
              <div className='timeline' id='tm-8'>
                Quality Assurance & Resource
              </div>
            </div>
            <div class="grid-item">
              <div className='timeline' id='tm-9'>
                Management
              </div>
            </div>
            <div class="grid-item">
              <div className='timeline' id='tm-10' />
            </div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item">
              <div className='timeline' id='tm-11'>
                Issue Change Management
              </div>
            </div>
            <div class="grid-item">
              <div className='timeline' id='tm-12' />
            </div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item">
              <div className='timeline' id='tm-13'>
                Scope
              </div>
            </div>
            <div class="grid-item">
              <div className='timeline' id='tm-14'>
                Control
              </div>
            </div>
            <div class="grid-item">
              <div className='timeline' id='tm-15' />
            </div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item">
              <div className='timeline' id='tm-16'>
                Final Deliverables
              </div>
            </div>
          </div>

          <div className='overlap-cont'>
              <div className='olap' id='ol-1'/>
              <div className='olap' id='ol-2'/>
              <div className='olap' id='ol-3'/>
              <div className='olap' id='ol-4'/>
              <div className='olap' id='ol-5'/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SPM

function Heading({ index, title }) {
  return (
    <div className='heading'>
      <div className='index'>{index}</div>
      <div className='title'>{title}</div>
    </div>
  )
}
