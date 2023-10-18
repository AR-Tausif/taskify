import React, { useContext, useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Input, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { AcmeLogo } from "../svg/AcmeLogo";
import { SearchIcon } from "../svg/SearchIcon";
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "../svg/Icons";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";


export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {loggedOutFunc, user} = useContext(AuthContext)

  
  const handleUserSignOut =()=>{
    console.log('ksdfkd')
    loggedOutFunc()
    .then(() => {
      // Sign-out successful.
      toast('You are looged out!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }).catch((error) => {
      // An error happened.
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    });
  }

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return (
    <Navbar
    maxWidth="full"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <NavLink to="/">
          <AcmeLogo />
          <p className="font-bold text-inherit">TASKIFY</p>
          </NavLink>
        </NavbarBrand>
      </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavLink to="/">
            <NavbarBrand>
              <AcmeLogo />
              <p className="font-bold text-inherit">TASKIFY</p>
          </NavbarBrand>
          </NavLink>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Workspaces
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={icons.scale}
              textValue="scale"
            >
              Autoscaling
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.activity}
              textValue="activity"
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={icons.flash}
              textValue="flash"
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              startContent={icons.server}
              textValue="server"
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.user}
              textValue="user"
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Recent
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Starred
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Templates
          </Link>
        </NavbarItem>
        <NavbarItem className="bg-blue-100 py-1.5 px-4 rounded">
          <Link color="blue" href="#">
            Create
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger >
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src={user ? user.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMK9j4g1HplyN1Fe5tRjIYhcAg06in9O7zUYZdRSjdfA&s"}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2 hover:bg-gray-200" textValue="Option">
              <NavLink to="/profile">
              <p className="font-semibold text-blue-500 text-xl">{user?.displayName && user.displayName}</p>
              <p className="font-semibold">{user && user.email}</p>
              </NavLink>
            </DropdownItem>
            <DropdownItem key="settings" textValue="My Settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings" textValue="Team Settinigs">Team Settings</DropdownItem>
            <DropdownItem key="analytics" textValue="Analitics">Analytics</DropdownItem>
            <DropdownItem key="system" textValue="System">System</DropdownItem>
            <DropdownItem key="configurations" textValue="Configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback" textValue="Help & Feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" textValue="Log Out">
              <button onClick={loggedOutFunc}>
              Log Out
              </button>
              
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
