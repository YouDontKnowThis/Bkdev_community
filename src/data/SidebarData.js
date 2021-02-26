import MessageIcon from "@material-ui/icons/Message";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleIcon from "@material-ui/icons/People";
import AppsIcon from "@material-ui/icons/Apps";

const generatedId = () => {
  let id = "";
  id = Math.random().toString(32).substr(2, 7);
  return id;
};

export const sidebarItems = [
  {
    icon: <MessageIcon />,
    label: "Thread",
    id: generatedId(),
  },
  {
    icon: <InboxIcon />,
    label: "All DMs",
    id: generatedId(),
  },
  {
    icon: <DraftsIcon />,
    label: "Mentions & Reactions",
    id: generatedId(),
  },
  {
    icon: <BookmarkBorderIcon />,
    label: "Save Items",
    id: generatedId(),
  },
  {
    icon: <PeopleIcon />,
    label: "Peoples & Groups",
    id: generatedId(),
  },
  {
    icon: <AppsIcon />,
    label: "More",
    id: generatedId(),
  },
];
