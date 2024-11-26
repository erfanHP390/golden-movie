import Index from "./pages/Index/Index";
import SingleFilm from "./pages/SingleFilm/SingleFilm"
import SingleSeries from "./pages/SingleSeries/SingleSeries";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import NotFound from "./pages/NotFound/NotFound";

import UserPanel from "./pages/MainUserPanel/Index";
import UserPanelIndex from "./pages/MainUserPanel/UserPanelIndex/UserPanelIndex";
import UserPanelTicketList from "./pages/MainUserPanel/UserPanelTicketList/UserPanelTicketList";
import UserPanelShowTicket from "./pages/MainUserPanel/UserPanelShowTicket/UserPanelShowTicket";
import UserPanelSubPlans from "./pages/MainUserPanel/UserPanelSubPlans/UserPanelSubPlans";
import UserPanelEditProfile from "./pages/MainUserPanel/UserPanelEditProfile/UserPanelEditProfile";
import UserPanelCollectionList from "./pages/MainUserPanel/UserPanelCollectionList/UserPanelCollectionList";
import UserPanelNewReqFilm from "./pages/MainUserPanel/UserPanelNewReqFilm/UserPanelNewReqFilm";
import UserPanelComments from "./pages/MainUserPanel/UserPanelComments/UserPanelComments";
import UserPanelCreateTicket from "./pages/MainUserPanel/UserPanelCreateTicket/UserPanelCreateTicket";
import UserPanelReqList from "./pages/MainUserPanel/UserPanelReqList/UserPanelReqList";
import UserPanelListUsers from "./pages/MainUserPanel/UserPanelListUsers/UserPanelListUsers";
import UserPanelCreateList from "./pages/MainUserPanel/UserPanelCreateList/UserPanelCreateList";
import UserPanelEditListMovie from "./pages/MainUserPanel/UserPanelEditListMovie/UserPanelEditListMovie";
import UserPanelEditListItemM from "./pages/MainUserPanel/UserPanelEditListItemM/UserPanelEditListItemM";


import AminPanel from "./pages/AdminPanel/Index"
import AminPanelIndex from "./pages/AdminPanel/AminPanelIndex/AminPanelIndex"
import AdminAddFilm from "./pages/AdminPanel/AdminAddFilm/AdminAddFilm"
import AdminTickets from "./pages/AdminPanel/AdminTickets/AdminTickets";
import AdminPanelUsers from "./pages/AdminPanel/AdminPanelUsers/AdminPanelUsers";
import AdminEditInfo from "./pages/AdminPanel/AdminEditInfo/AdminEditInfo"
import AdminPanelListFilm from "./pages/AdminPanel/AdminListFilm/AdminListFilm"
import AdminListFilm from "./pages/AdminPanel/AdminListFilm/AdminListFilm";

const routes = [
  { path: "/", element: <Index /> },
  {path: "*" , element: <NotFound />},
  { path: "/movies/:movieID", element: <SingleFilm /> },
  { path: "/series/:movieID", element: <SingleSeries /> },
  { path: "sign-up" , element: <SignUp />},
  { path: "sign-in" , element: <SignIn />},

  {
    path: "/my-account/*",
    element: <UserPanel />,
    children: [
      {path: "" , element: <UserPanelIndex /> },
      {path: "create-ticket" , element: <UserPanelCreateTicket />},
      {path: "ticket-list" , element: <UserPanelTicketList /> },
      {path: "ticket-list/show-ticket/:ticketID" , element: <UserPanelShowTicket />},
      {path: "subs-plans" , element: <UserPanelSubPlans />},
      {path: "edit-profile" , element: <UserPanelEditProfile />},
      {path: "collection-list" , element: <UserPanelCollectionList />},
      {path: "new-req-film" , element: <UserPanelNewReqFilm />},
      {path: "list-req" , element: <UserPanelReqList />},
      {path: "comments-user" , element: <UserPanelComments />},
      {path: "list-movies-user" , element: <UserPanelListUsers />},
      {path: "create-list" , element: <UserPanelCreateList />},
      {path: "list-movies-user/edit" , element: <UserPanelEditListMovie />},
      {path: "list-movies-user/edit-items" , element: <UserPanelEditListItemM />},
    ]
  },

  {
    path: "/p-admin/*",
    element: <AminPanel />,
    children: [
      {path: "" , element: <AminPanelIndex />},
      {path: "add-film" , element: <AdminAddFilm />},
      {path: "tickets" , element: <AdminTickets />},
      {path: "users" , element: <AdminPanelUsers />},
      {path: "edit-info" , element: <AdminEditInfo />},
      {path: "list-film" , element: <AdminListFilm />}
    ]
  }


];

export default routes;
