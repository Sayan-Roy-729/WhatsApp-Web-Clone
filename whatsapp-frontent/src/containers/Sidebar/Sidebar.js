import { IconButton, Avatar } from '@material-ui/core';
import { ChatRounded, DonutLargeRounded, MoreVertRounded, SearchOutlined } from '@material-ui/icons';

import './Sidebar.css';
import SidebarChat from '../../components/SidebarChat/SidebarChat';

const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* Header Section */}
            <div className="sidebar__header">
                <Avatar src='https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeRounded />
                    </IconButton>

                    <IconButton>
                        <ChatRounded />
                    </IconButton>

                    <IconButton>
                        <MoreVertRounded />
                    </IconButton>
                </div>
            </div>

            {/* Search Section */}
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div>

            {/* Chat Section */}
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    );
};

export default Sidebar;
