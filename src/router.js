import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import ChangePassword from "./pages/changePassword/changePassword";
import Approve from "./pages/approve/approve";
import PayProtocol from "./pages/payProtocol/payProtocol";
import RegisterProtocol from "./pages/registerProtocol/registerProtocol";
import PostJobs from "./pages/postJobs/postJobs";
import HelpCenter from "./pages/helpCenter/helpCenter";
import HowRegister from "./pages/howRegister/howRegister";
import CompanyIndex from "./pages/companyIndex/companyIndex";
import SearchResume from "./pages/searchResume/searchResume";
import ResumeDetail from "./pages/resumeDetail/resumeDetail";
export default class IRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/admin" component={Admin} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/changePassword" component={ChangePassword} />
                        <Route path="/approve" component={Approve} />
                        <Route path="/payProtocol" component={PayProtocol} />
                        <Route path="/helpCenter" render={() =>
                            <HelpCenter>
                                <Switch>
                                    <Route path="/helpCenter/howRegister" component={HowRegister}/>
                                </Switch>

                            </HelpCenter>
                        }/>
                        <Route path="/registerProtocol" component={RegisterProtocol} />
                        <Route path="/jobs/postJobs" component={PostJobs} />
                        <Route path="/company/index"  component={CompanyIndex} />
                        <Route path="/company/searchResume"  component={SearchResume} />
                        <Route path="/company/resumeDetail"  component={ResumeDetail} />
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}