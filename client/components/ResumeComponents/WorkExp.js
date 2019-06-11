import React, {Component, Fragment} from 'react';
import Calendar from 'react-calendar'
import CommonClass from '../CommonClass'
import CONFIG from '../../../config'
import {connect} from 'react-redux'

import * as actions from '../actions'

class WorkExp extends CommonClass(Component){
      state = {
         addExpBox : [],
         addNewCompany : [],
         date: new Date(),
         loading : 0, success :0
      }
      componentDidMount(){
         this.addMoreCompanies();
         this.addMoreWorkExp();
      }
      addMoreWorkExp = (e)=>{
         let parent = null, addedId = null;
         if(e){
            parent = e.currentTarget.dataset.parent;
            addedId = this.state[parent];
         }else{
            parent = this.state.addNewCompany[this.state.addNewCompany.length-1];
            addedId = [];
         }
         addedId.push(this.randomString())
         this.setState({
            [parent]: addedId
         });
         document.getElementById('list_exps').scrollTop = parseInt(document.getElementById('list_exps').scrollHeight);
         return false;
      }
      addMoreCompanies = async ()=>{
         const addedId = this.state.addNewCompany;
         addedId.push(this.randomString())
         await this.setState({
             addNewCompany: addedId
         });
         this.addMoreWorkExp();
         return false;   
      }


        //      {
        //   designation: 'Administrative Assistant',
        //   company: 'company A',
        //   city: 'San Francisco', state: 'CA',
        //   start: '02/2017', end: 'Current',
        //   details: [
        //       'Screened all visitors and directed them to the correct employee or office.',
        // 'Facilitated organized record retrieval and access.',
        // 'Organized all new hire, security and temporary paperwork.'
        //   ],
        //  },


      onSubmitForm = (e)=>{
             e.preventDefault();
             const {elements} = e.target;
             console.log(elements)
             const userExperience = [],
                   companies_ids = this.state.addNewCompany;
             for(let x of companies_ids){
                 let workexpObject = {};
                 let currentWorkDetails = [];
                 workexpObject['designation'] = elements[`designation_${x}`].value; 
                 workexpObject['company'] = elements[`company_${x}`].value; 
                 workexpObject['city'] = elements[`city_${x}`].value; 
                 workexpObject['state'] = elements[`state_${x}`].value; 
                 workexpObject['start'] = elements[`start_${x}`].value; 
                 workexpObject['end'] = elements[`end_${x}`].value; 
                 for(let y of this.state[x]){
                     currentWorkDetails.push(elements[y].value);
                 } 
                 workexpObject['details'] = currentWorkDetails;
                 userExperience.push(workexpObject);
             }
             console.log(userExperience);
             // const user_skills = this.state.addSkillsBox;
             // const user_skills_values = user_skills.map((res)=>{
             //     return e.target.elements[res].value;
             // });
             // // if(!this.validateInputs(e.target.elements, {user_name, user_email, user_phone})){
             // //    return;
             // // }
             // console.log(user_skills_values);
             this.setState({loading: 1})
             this.props.updateResume({user_exp: userExperience}, 3, ()=>{
                  this.setState({success:1})
                  setTimeout(()=>{
                    this.closeAllModel();
                    this.setState({loading: 0, success: 0})
                  }, 1500)
             });
      }
      onChange = async (date) => {
        console.log(new Date(date));
        await this.setState({ date });
        console.log((this.state.date).getTime())
      }
      render(){
      	 return(
           <Fragment>
                <div className="resume_section resume_work">
                      <div className="section_heading uppercase">
                          work history
                      </div>
                      <div className="resume-content">
                        <div className="work-info-box">
                            <div>
                               <ul className="inline-items">
                                 <li>
                                  <span className="txt-bold">Administrative Assistant</span>
                                 </li>
                                 <li className="seperator-dot">
                                  <span className="uppercase txt-itlc">Company A</span>
                                 </li>
                               </ul>
                            </div>
                            <div>
                               <ul className="inline-items">
                                 <li>
                                  <span>San Francisco</span>
                                  <span>, </span>
                                  <span>CA</span>
                                 </li>
                                 <li className="seperator-dot">
                                  <span>02/2017</span>
                                  <span> to </span>
                                  <span>Current</span>
                                 </li>
                               </ul>
                            </div>
                            <div className="margin-lft-35">
                               <ul>
                                 <li>Screened all visitors and directed them to the correct employee or office.</li>
                                 <li>Facilitated organized record retrieval and access.</li>
                                 <li>Organized all new hire, security and temporary paperwork.</li>
                               </ul>
                            </div>
                           </div>
                           <div className="work-info-box">
                            <div>
                               <ul className="inline-items">
                                 <li>
                                  <span className="txt-bold">Customer Service Representative</span>
                                 </li>
                                 <li className="seperator-dot">
                                  <span className="uppercase txt-itlc">Company B</span>
                                 </li>
                               </ul>
                            </div>
                            <div>
                               <ul className="inline-items">
                                 <li>
                                  <span>Berkeley</span>
                                  <span>, </span>
                                  <span>CA</span>
                                 </li>
                                 <li className="seperator-dot">
                                  <span>02/2016</span>
                                  <span> to </span>
                                  <span>02/2017</span>
                                 </li>
                               </ul>
                            </div>
                            <div className="margin-lft-35">
                               <ul>
                                    <li>Asked open-ended questions to assess customer needs.</li>
                                    <li>Scored in top 10% of employees in successful resolution of issues.</li>
                                    <li>Built long-term customer relationships and advised customers on purchases and promotions.</li>
                               </ul>
                            </div>
                           </div>
                           <div className="work-info-box">
                            <div>
                               <ul className="inline-items">
                                 <li>
                                  <span className="txt-bold">Cashier</span>
                                 </li>
                                 <li className="seperator-dot">
                                  <span className="uppercase txt-itlc">Company C</span>
                                 </li>
                               </ul>
                            </div>
                            <div>
                               <ul className="inline-items">
                                 <li>
                                  <span>San Francisco</span>
                                  <span>, </span>
                                  <span>CA</span>
                                 </li>
                                 <li className="seperator-dot">
                                  <span>02/2014</span>
                                  <span> to </span>
                                  <span>02/2016</span>
                                 </li>
                               </ul>
                            </div>
                            <div className="margin-lft-35">
                               <ul>
                                  <li>Ran the register effectively and handled cash and credit purchases.</li>
                                  <li>Attended to customer needs, questions and complaints.</li>
                                  <li>Regularly checked the drawer to ensure that there were adequate cash and coin for transactions</li>
                               </ul>
                            </div>
                           </div>
                      </div>
                      <div className="edit-section">
                          <a href="#" className="color-edit" data-model="#work_model" onClick={this.openModel}><i className="icon wb-edit"></i></a>
                      </div>
               </div>
   		         <div className="model-backdrop display-none" id="work_model">
                      <div className="model-box model-width-700">
                          {this.state.loading==1 &&                            
                              <div className="loading-cover">
                                {this.state.success==1
                                  ? <svg className="svg-success-80" viewBox="0 0 426.667 426.667">
                                                <use href="/icons/sprites.svg#success_completed" />
                                    </svg>
                                  : <img className="svg-icons-loading" src="/icons/loading.svg"/>
                                }
                              </div>
                           }
                           <header className="flex">
                               <h3 className="uppercase">professional information</h3>
                               <a href="#" data-model="#work_model" className="close-model" id="close_workmodel" onClick={this.closeModel}>
                                 <svg className="svg-icons-20 pointer" viewBox="0 0 612 612">
                                              <use href="/icons/sprites.svg#croos_icon" />
                                 </svg>
                               </a>
                           </header>
                           <main>
                              <div className="margin-top-5">
                                  <div className="font-16 margin-botm-5 color-90949c">Update your work exprerience</div>
                                  <form method="post" onSubmit={this.onSubmitForm}>
                                   <div className="list-exps scroll-view" id="list_exps">
                                       {this.state.addNewCompany.length>0 &&
                                        this.state.addNewCompany.map((company_result)=>{
                                             return (
                                                 <div className="company-list-box border-botm-light" key={company_result}>
                                                      <div className="flex space-bw margin-top-15">
                                                             <input type="text" className="model-input font-16 capitalize margin-ryt-25" name={`designation_${company_result}`} placeholder="Your designation" />
                                                             <input type="text" className="model-input font-16 capitalize" name={`company_${company_result}`} placeholder="Your company" />
                                                        </div>
                                                        <div className="flex space-bw margin-top-15">
                                                             <input type="text" className="model-input font-16 capitalize margin-ryt-25" name={`city_${company_result}`}  placeholder="City" />
                                                             <input type="text" className="model-input font-16 capitalize" name={`state_${company_result}`} placeholder="State" />
                                                        </div>
                                                        <div className="flex space-bw margin-top-15">
                                                          <div className="relative width-100pr margin-ryt-25">
                                                              <input type="text" className=" model-input font-16 capitalize" name={`start_${company_result}`} placeholder="Start date" />
                                                              <Calendar
                                                                onChange={this.onChange}
                                                                value={this.state.date}
                                                              />
                                                          </div>
                                                          <div className="relative width-100pr">
                                                             <input type="text" className="model-input font-16 capitalize" name={`end_${company_result}`} placeholder="End date" />                                                       
                                                          </div>
                                                          </div>
                                                        <div className="addskills-container">
                                                          {this.state[company_result] && this.state[company_result].length>0 && 
                                                           this.state[company_result].map((result)=>{
                                                                return (
                                                                    <div className="flex space-bw align-center margin-top-15" key={result}>
                                                                         <input type="text" className="model-input font-16 capitalize" name={result} id={result} placeholder="Work details" />
                                                                         <span className="margin-lft-10"><a className="" onClick={(e)=>this.removeGeneratedTag(e, this.state[company_result], result, company_result)}><i className="icon wb-trash color-trash font-18"></i></a></span>
                                                                    </div>
                                                                )
                                                           })
                                                          }
                                                        </div>
                                                        <div className="margin-top-15">
                                                            <button type="button" className="uppercase btn btn-default font-16" data-parent={company_result} onClick={this.addMoreWorkExp}><i className="icon wb-plus padding-ryt-10"></i> add more about your role</button>
                                                        </div>
                                                  </div>
                                             )
                                        })}
                                    </div>
                                  <div className="margin-top-15 txt-right">
                                       <button type="button" className="uppercase btn btn-default font-16" onClick={this.addMoreCompanies}><i className="icon wb-plus padding-ryt-10"></i>add more companies</button>
                                  </div>
                                  <div className="margin-top-15 txt-center">
                                       <button type="submit" className="uppercase btn btn-default font-16">save</button>
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

export default connect(state=>state, actions)(WorkExp);
