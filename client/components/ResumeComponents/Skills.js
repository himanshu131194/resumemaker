import React, {Component, Fragment} from 'react';
import CommonClass from '../CommonClass'
import CONFIG from '../../../config'
import {connect} from 'react-redux'
import * as actions from '../actions'

class Skills extends CommonClass(Component){
      state = {
         addSkillsBox : []
      }
      addMoreSkills = (e)=>{
         e.preventDefault();
         const addedId = this.state.addSkillsBox;
         addedId.push(this.randomString())
         this.setState({
             addSkillsBox: addedId
         });
      }
      render(){
      	 return(
           <Fragment>
               <div className="resume_section resume_skills">
                      <div className="section_heading uppercase">
                          skills
                      </div>
                      <div className="resume-content">
                          <table className="skills-list-table">
                              <tbody>
                                 <tr className="vertical-top">
                                  <td>
                                    <ul>
                                       <li>Time management</li>
                                       <li>Time Letter preparation</li>
                                       <li>Correspondence handling</li>
                                       <li>Multi-line phone proficiency</li>        
                                    </ul>
                                  </td>
                                  <td>
                                       <ul>
                                         <li>Documents filing</li>
                                       <li>Multi-line phone proficiency</li>
                                       <li>Filing and data archiving</li>
                                       </ul>
                                  </td>
                                 </tr>
                              </tbody>
                          </table>
                      </div>
                      <div className="edit-section">
                          <a href="#" className="color-edit" data-model="#skills_model" onClick={this.openModel}><i className="icon wb-edit"></i></a>
                      </div>
               </div>
   		         <div className="model-backdrop display-none" id="skills_model">
                      <div className="model-box">
                           <header className="flex">
                               <h3 className="uppercase">add skills</h3>
                            <a href="#" data-model="#skills_model" id="close_skillsmodel" onClick={this.closeModel}>
                                <svg className="svg-icons-20 pointer" viewBox="0 0 612 612">
                                              <use href="/icons/sprites.svg#croos_icon" />
                                </svg>
                            </a>
                           </header>
                           <main>
                              <div className="margin-top-5">
                                  <div className="font-16 margin-botm-5 color-90949c">Update your skills</div>
                                  <form method="post"  className="model-form" onSubmit={this.submitSignup}>
                                  <div className="addskills-container">
                                  {this.state.addSkillsBox.length>0 && 
                                   this.state.addSkillsBox.map((result)=>{
                                        return (
                                            <div className="flex space-bw align-center margin-botm-15" key={result}>
                                                 <input type="text" className="model-input font-16 capitalize" name={result} id={result} placeholder="List your skill" />
                                                 <span className="margin-lft-10"><a href="#" className="" onClick={(e)=>this.removeGeneratedTag(e, this.state.addSkillsBox, result, 'addSkillsBox')}><i className="icon wb-trash font-18"></i></a></span>
                                            </div>
                                        )
                                   })
                                  }
                                  </div>
                                  <div className="margin-top-15">
                                      <button className="uppercase btn btn-default font-16" onClick={(e)=>this.addMoreSkills(e)}><i className="icon wb-plus padding-ryt-10"></i> add more skills</button>
                                  </div>
                                  <div className="margin-top-15 txt-center">
                                       <button className="uppercase btn btn-default font-16">save</button>
                                  </div>
                                  </form>
                              </div>
                           </main>
                           <footer></footer>
                      </div>
                 </div>
           </Fragment>
      	 )
      }
}

export default connect(state=>state, actions)(Skills);