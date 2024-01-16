import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./assets/Pages/HomePage";
import RegisterPage from "./assets/Pages/RegisterPage";
import ContinueRegisterPage from "./assets/Pages/ContinueRegisterPage";
import VerificationPage from "./assets/Pages/RegisVerificationPage";
import LoginPage from "./assets/Pages/LoginPage";
import ForgotPage from "./assets/Pages/ForgotPage";
import ForgetVerificationPage from "./assets/Pages/ForgetVerificationPage";
import NewPasswordPage from "./assets/Pages/NewPasswordPage";
import Dashboard from "./assets/Pages/Dashboard";
import ProfileSetting from "./assets/Pages/ProfileSetting";
import ChangePassword from "./assets/Pages/ChangePassword";
import LearningPage from "./assets/Pages/LearningPage";
import MaterialPage from "./assets/Pages/MaterialPage";
import FeedbackPage from "./assets/Pages/FeedbackPage";
import QuizPage from "./assets/Pages/QuizPage";
import CertificatePage from "./assets/Pages/CertificatePage";
import DetailCertPage from "./assets/Pages/DetailCertPage";
import SchedulePage from "./assets/Pages/SchedulePage";
import LibraryPage from "./assets/Pages/LibraryPage";
import DetailLib from "./assets/Pages/DetailLib";
import NotificationPage from "./assets/Pages/NotificationPage";
import AuthWrapper from "./assets/Auth/AuthWrapper";
import ProtectedDashboard from "./assets/Pages/ProtectedDashboard";
import MainNotifCard from "./assets/Components/Card/MainNotifCard";
import HistoryPage from "./assets/Pages/HistoryPage";
import NewNotificationPage from "./assets/Pages/NewNotificationPage";
import TrainingPage from "./assets/Pages/TrainingPage";
import TrainingHistoryPage from "./assets/Pages/TrainingHistoryPage";
import ZoomTrainingPage from "./assets/Pages/ZoomTrainingPage";
import StartLearningPage from "./assets/Pages/StartLearningPage";
import StartQuizPage from "./assets/Pages/StartQuizPage";
import QuizFinishPage from "./assets/Pages/QuizFinishPage";
import ZoomTraining from "./assets/Pages/ZoomTraining";
import ZoomWebinarPage from "./assets/Pages/ZoomWebinarPage";
import BookmarkPage from "./assets/Pages/BookmarkPage";
import SelectedLibraryPage from "./assets/Pages/SelectedLibraryPage";
import ChatroomPage from "./assets/Pages/ChatroomPage";


function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="mainNotif" element={<MainNotifCard />} />
        <Route path="/" element={<HomePage />} isMenu:true isPrivate:false />
        <Route
          path="register"
          element={<RegisterPage />}
          isMenu:true
          isPrivate:false
        />
        <Route
          path="continue"
          element={<ContinueRegisterPage />}
          isMenu:true
          isPrivate:false
        />
        <Route
          path="regisVerification"
          element={<VerificationPage />}
          isMenu:true
          isPrivate:false
        />
        <Route
          path="forgetVerification"
          element={<ForgetVerificationPage />}
          isMenu:true
          isPrivate:false
        />
        <Route
          path="newPasswordPage"
          element={<NewPasswordPage />}
          isMenu:true
          isPrivate:false
        />
        <Route
          path="login"
          element={<LoginPage />}
          isMenu:true
          isPrivate:false
        />
        <Route
          path="forget"
          element={<ForgotPage />}
          isMenu:true
          isPrivate:false
        />
        <Route
          path="pDashboard"
          element={<ProtectedDashboard />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="dashboard"
          element={<Dashboard />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="setting"
          element={<ProfileSetting />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="change"
          element={<ChangePassword />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="learning"
          element={<LearningPage />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="/:name/:id"
          element={<MaterialPage />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="feedback"
          element={<FeedbackPage />}
          isMenu:true
          isPrivate:true
        />
        <Route path="quiz" 
        element={<QuizPage />} 
        isMenu:true 
        isPrivate:true />
        <Route
          path="certificate"
          element={<CertificatePage />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="detail/:id"
          element={<DetailCertPage />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="schedule"
          element={<SchedulePage />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="library"
          element={<LibraryPage />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="detailLib"
          element={<DetailLib />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="notification"
          element={<NotificationPage />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="history"
          element={<HistoryPage />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="notif"
          element={<NewNotificationPage />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="training"
          element={<TrainingPage />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="training-history"
          element={<TrainingHistoryPage />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="zoom-training"
          element={<ZoomTrainingPage />}
          isMenu:true
          isPrivate:true
        />
         <Route
          path="zoom-webinar"
          element={<ZoomWebinarPage />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="chapter-start"
          element={<StartLearningPage />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="quiz-start"
          element={<StartQuizPage />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="finish-quiz"
          element={<QuizFinishPage />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="zoom-training-page"
          element={<ZoomTraining />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="bookmark"
          element={<BookmarkPage />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="selected-library"
          element={<SelectedLibraryPage />}
          isMenu:true
          isPrivate:true
        />
        <Route
          path="chat"
          element={<ChatroomPage />}
          isMenu:true
          isPrivate:true
        />
      </Routes>
    </div>
  );
}

export default function AuthApp() {
  return (
    <AuthWrapper>
      <App />
    </AuthWrapper>
  );
}
