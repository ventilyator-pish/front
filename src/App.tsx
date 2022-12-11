import Layout from "@components/layouts/Layout";
import './App.scss'
import {Outlet, Route, Routes} from "react-router-dom";
import {
    AUTH,
    COMPANY,
    FEEDBACK,
    MY_PROFILE,
    PROFILE,
    PROJECT,
    PROJECTS,
    STUDENT,
    STUDENTS
} from "@src/routes/routes";
import Students from "@pages/students/Students";
import Projects from "@pages/projects/Projects";
import Profile from "@pages/profile/Profile";
import Auth from "@pages/auth/Auth";
import Project from "@pages/project/Project";
import MyProfile from "@pages/myProfile/MyProfile";
import Company from "@pages/company/Company";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={
                    <Layout>
                        <Outlet/>
                    </Layout>
                }>
                    <Route path={STUDENTS} element={<Students/>}/>
                    <Route path={`${STUDENT}:id`} element={<Profile/>}/>
                    <Route path={FEEDBACK} element={<Profile/>}/>
                    <Route path={PROJECTS} element={<Projects/>}/>
                    <Route path={`${PROJECT}:id`} element={<Project/>}/>
                    <Route path={MY_PROFILE} element={<MyProfile/>}/>
                    <Route path={`${COMPANY}:id`} element={<Company/>}/>
                    <Route path={AUTH} element={<Auth/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
